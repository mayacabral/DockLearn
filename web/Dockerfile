FROM node:22-alpine AS build
WORKDIR /usr/app
ARG ENVIRONMENT=production

# 1. Copy package files first for better caching
COPY package.json ./

# 2. Install dependencies with clean cache
RUN npm i

# 3. Copy all files
COPY . .

# 5. Build Angular app
# Use npm run build to execute command from package.json
RUN npm run build -- --configuration=${ENVIRONMENT}


# --- Production stage (nginx) ---
FROM nginx:stable-alpine

# 1. Copy built files from build stage
COPY --from=build /usr/app/dist /usr/share/nginx/html

# 3. Fix permissions for nginx
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]
