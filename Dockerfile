FROM node:8.11.3-slim
MAINTAINER HMPPS Digital Studio <info@digital.justice.gov.uk>
ARG BUILD_NUMBER
ARG GIT_REF

# Create app directory
RUN mkdir -p /app
WORKDIR /app
ADD . .

RUN npm install -g npm@latest && \
    npm ci && \
    export BUILD_NUMBER=${BUILD_NUMBER} && \
    export GIT_REF=${GIT_REF} && \
    npm run record-build-info

ENV PORT=9090

EXPOSE 9090
CMD [ "npm", "start" ]