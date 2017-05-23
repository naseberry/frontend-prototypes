FROM node:7-alpine

# Environment variables
ENV ENV_PORT 5000
ENV ENV_WORK_DIR /app

# Install system dependencies
RUN apk --no-cache add \
    build-base \
    gcc \
    g++ \
    make \
    python \
    zlib-dev

# Set the working DIR.
WORKDIR $ENV_WORK_DIR

# Install application dependencies
COPY package.json $ENV_WORK_DIR
RUN npm i

# Copy the application onto our image
COPY . $ENV_WORK_DIR

# Expose port
EXPOSE $ENV_PORT

# Start application server
CMD ["make", "serve"]
