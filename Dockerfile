# Use the official Deno image
# FROM denoland/deno:latest
FROM denoland/deno:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the Next.js app files to the container
COPY . .

# Install Node.js compatibility layer for Deno
RUN deno install --allow-scripts
# RUN deno install --allow-scripts npm:sharp

# Build the Next.js app
RUN deno task build

# Copy the statics into the standalone output directory
RUN cp -r public .next/standalone/public
RUN cp -r .next/static .next/standalone/.next/static
# Deno needs the explicit .cjs extension to interpret the file as CommonJS
RUN mv .next/standalone/server.js .next/standalone/server.cjs

# Expose the application port
EXPOSE 3000

# Start the Next.js server
CMD ["deno", "run", "-A", ".next/standalone/server.cjs"]