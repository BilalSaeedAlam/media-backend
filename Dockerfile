FROM node:15

ENV PORT=8000
ENV MONGO_URL=mongodb://
ENV MONGO_PASSWORD=
ENV MONGO_USER=
ENV MONGO_HOST=
ENV MONGO_PORT=
ENV MONGO_NAME=
ENV BASE_URL=
ENV FRONTEND_URL=
ENV SENDGRID_APIKEY=
ENV EMAIL_FROM=
ENV SENDGRID_URL=
ENV JWTSECRET=
ENV FACEBOOK_CLIENT_ID=wdwdfwqcny3qurby13bvrt3
ENV FACEBOOK_CLIENT_SECRET=wdwdfwqcny3qurby13bvrt3
ENV OWNER_FACEBOOK_CALLBACK=wdwdfwqcny3qurby13bvrt3
ENV GOOGLE_CLIENT_ID=dwnwdudnbcr37vb387b5v28
ENV GOOGLE_CLIENT_SECRET=dwnwdudnbcr37vb387b5v28
ENV OWNER_GOOGLE_CALLBACK=dwnwdudnbcr37vb387b5v28
ENV TWITTER_CLIENT_ID=dwidjwimcqwnrvq3nvr3
ENV TWITTER_CLIENT_SECRET=dwidjwimcqwnrvq3nvr3
ENV OWNER_TWITTER_CALLBACK=dwidjwimcqwnrvq3nvr3
ENV TOKEN_EXPIRY=30d
ENV HASH_ALGO=sha256
ENV SALT=14d96b8243ff4c41c67f7de901ad51f3
ENV BUCKETACCESSKEYID=
ENV BUCKETSECRETACCESSKEY=
ENV STRIPE_API_KEY=
ENV FRONTEND_LANDING_URL=
ENV AWS_CREATE_ORDER_LAMBDA_API_KEY=S1zMBUtUga8cv0vWJGvzU8Cro4LG4Wnr58WJOEsG
COPY . /app

WORKDIR /app

#RUN npm install

#RUN npm install nodemon --save-dev
#RUN npm install nodemon�-g
EXPOSE 8000

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT [ "/docker-entrypoint.sh" ]

#CMD ["npm","run", "start:dev"]
