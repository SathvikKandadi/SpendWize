FROM node:20

WORKDIR /app

COPY . .

RUN npm install 
RUN npm install chart.js react-chartjs-2

EXPOSE 3000

CMD ["npm", "run", "dev"]