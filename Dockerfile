FROM node:23-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/http/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx/certs /etc/nginx/certs:ro
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
