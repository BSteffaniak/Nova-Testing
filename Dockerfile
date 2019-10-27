FROM alpine AS builder

RUN mkdir Nova-Testing

RUN apk add --no-cache git
RUN git config --global core.eol lf
RUN git config --global core.autocrlf false

RUN apk add openjdk8
ENV JAVA_HOME=/usr/lib/jvm/java-1.8-openjdk
ENV PATH="$JAVA_HOME/bin:${PATH}"

WORKDIR /project
COPY . ./Nova-Testing

#ADD https://api.github.com/repos/NovaFoundation/Nova/git/refs/heads/master nova-version.json
RUN git clone --depth 1 -b master https://github.com/NovaFoundation/Nova
#ADD https://api.github.com/repos/NovaFoundation/Nova-JS/git/refs/heads/master js-version.json
RUN git clone --depth 1 -b master https://github.com/NovaFoundation/Nova-JS
#ADD https://api.github.com/repos/NovaFoundation/Nest/git/refs/heads/master nest-version.json
RUN git clone --depth 1 -b master https://github.com/NovaFoundation/Nest
#ADD https://api.github.com/repos/NovaFoundation/Standard-Library/git/refs/heads/master std-lib-version.json
RUN git clone --depth 1 -b master https://github.com/NovaFoundation/Standard-Library
RUN mkdir Nova/out
RUN mkdir Nova/out/production
RUN mkdir Nova/out/production/Nova
RUN mkdir Nova-JS/out
RUN mkdir Nova-JS/out/production
RUN mkdir Nova-JS/out/production/Nova-JS
RUN javac -d Nova/out/production/Nova $(find ./Nova -name "*.java")
RUN javac -d Nova-JS/out/production/Nova-JS -cp "Nova/out/production/Nova" $(find ./Nova-JS -name "*.java")

COPY .buildkite .buildkite

RUN cd Nova/out/production/Nova && \
    jar cfe Nova.jar net/fathomsoft/nova/Nova $(find . -name "*.class") && \
    mv Nova.jar ../../../ && \
    cd ../../../../

RUN rm Nova-Testing/example/bin/Executable.js

RUN cd Nova && \
    java -jar Nova.jar && \
    cd ..

RUN mv Nova-Testing/example/bin/Executable.js executable.js

FROM node:12.13.0-alpine

COPY --from=builder /project .
RUN find .buildkite/build-scripts -type f -print0 | xargs -0 dos2unix
RUN find .buildkite/build-scripts -type f -exec chmod +x -- {} +

