FROM alpine AS builder
RUN apk add --no-cache git
RUN git config --global core.eol lf
RUN git config --global core.autocrlf false
WORKDIR /project
COPY . Nova-Testing
ADD . Nova-Testing/example/bin
RUN cp Nova-Testing/example/bin/Executable.js executable.js

FROM node:12.13.0-alpine
COPY --from=builder /project/executable.js /executable.js
CMD ["node", "executable.js"]
