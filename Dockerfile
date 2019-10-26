FROM node:12.13.0-alpine AS builder
RUN apk add --no-cache git
RUN git config --global core.eol lf
RUN git config --global core.autocrlf false
WORKDIR /project
ADD https://api.github.com/repos/BSteffaniak/Nova-Testing/git/refs/heads/master version.json
RUN git clone https://github.com/BSteffaniak/Nova-Testing
COPY . Nova-Testing/example/bin
RUN npm install -g pkg
RUN pkg Nova-Testing/example/bin/Executable.js --target host --output executable

FROM node:12.13.0-alpine
COPY --from=builder /project/executable /executable
ENTRYPOINT ["/executable"]
