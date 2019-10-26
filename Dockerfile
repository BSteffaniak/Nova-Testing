FROM alpine AS builder
RUN apk add --no-cache git
RUN git config --global core.eol lf
RUN git config --global core.autocrlf false
WORKDIR /project
COPY .buildkite .buildkite
COPY example/bin/Executable.js .
RUN mv Executable.js executable.js

FROM node:12.13.0-alpine
COPY --from=builder /project .
RUN find .buildkite/build-scripts -type f -print0 | xargs -0 dos2unix
RUN find .buildkite/build-scripts -type f -exec chmod +x -- {} +

