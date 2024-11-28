# Use the official Deno image
# FROM denoland/deno:latest
FROM denoland/deno:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the Next.js app files to the container
COPY . .

# Install Node.js compatibility layer for Deno
RUN deno install --allow-scripts
# RUN deno install -g npm:sharp

# Build the Next.js app
RUN deno task build

# Expose the application port
EXPOSE 3000

# Start the Next.js server
CMD ["deno", "task", "start"]