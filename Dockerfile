FROM node:8.11.3-slim
MAINTAINER HMPPS Digital Studio <info@digital.justice.gov.uk>

# Create app directory
RUN mkdir -p /app
WORKDIR /app
ADD . .

RUN npm install -g npm@latest

ENV PORT=9090

EXPOSE 9090
CMD [ "npm", "start" ]