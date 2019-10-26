FROM alpine AS builder
RUN apk add --no-cache git
RUN git config --global core.eol lf
RUN git config --global core.autocrlf false
WORKDIR /project
COPY . .
ADD . example/bin
RUN cp example/bin/Executable.js executable.js

FROM node:12.13.0-alpine
COPY --from=builder /project/executable.js /executable.js
