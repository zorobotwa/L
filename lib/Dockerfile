FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Raizel-2023/Raizel-md /root/asrher
WORKDIR /root/asrher/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
