FROM node:11.0.0-alpine

ARG project_dir=/app/

COPY . ${project_dir}
WORKDIR ${project_dir}

RUN set -x && \
    apk upgrade --no-cache && \
    npm i -g cordova && \
    npm install

EXPOSE 8080 8081

CMD ["npm", "run", "dev"]
