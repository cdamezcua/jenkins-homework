FROM node:14

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir /jenkins-homework

WORKDIR /jenkins-homework

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT ["node", "app.js"]
