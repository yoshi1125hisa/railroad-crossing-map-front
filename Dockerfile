FROM node:11.15.0-alpine

ARG project_dir=/app/

COPY . ${project_dir}
WORKDIR ${project_dir}

RUN set -x && \
    apk upgrade --no-cache && \
    npm i -g cordova && \
    npm i

EXPOSE 8080

CMD ["npm", "run", "start"]
