# Use the official Deno image
FROM denoland/deno:latest

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json (to cache dependencies)
COPY package.json package-lock.json ./

# Install Node.js compatibility layer if using Node.js libraries
RUN deno install --allow-scripts npm:sharp || true

# Copy all application files into the container
COPY . .

# Build the Next.js app
RUN deno task build

# Move static files into the standalone directory
RUN cp -r public .next/standalone/public && \
   cp -r .next/static .next/standalone/.next/static && \
   mv .next/standalone/server.js .next/standalone/server.cjs

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["deno", "run", "-A", ".next/standalone/server.cjs"]