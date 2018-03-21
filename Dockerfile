# this is how yu comment
FROM node:8.8
RUN echo 'we are running something cool!!'

RUN mkdir /usr/src/mobileApp
WORKDIR /usr/src/mobileApp

COPY . /usr/src/mobileApp
COPY package.json /usr/mobileApp/app/package.json
RUN npm install

EXPOSE 8010
ENTRYPOINT npm run serve:browser

