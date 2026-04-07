# Deployment Guide

This guide will help you deploy your Recipe Sharing Platform to various cloud platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Account on your chosen deployment platform

## Option 1: Vercel + Railway (Recommended)

### Frontend (Vercel)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure build settings:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run client:build`
     - **Output Directory:** `client/dist`
     - **Install Command:** `npm install`

3. **Environment Variables:**
   - `VITE_API_URL` = `https://your-backend-url.railway.app` (update after backend deployment)

### Backend (Railway)

1. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign in with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

2. **Configure Build Settings:**
   - **Build Command:** `npm run server:build`
   - **Start Command:** `npm run server:start`

3. **Environment Variables:**
   - `DATABASE_URL` = `./data/recipes.db`
   - `JWT_SECRET` = `your-secret-key-here`
   - `PORT` = `3001`
   - `NODE_ENV` = `production`

4. **Update Frontend API URL:**
   - Copy your Railway backend URL
   - Update `VITE_API_URL` in Vercel environment variables

## Option 2: Netlify (Full-stack)

1. **Prepare for Netlify:**
   - Create `netlify.toml` in root directory:
   ```toml
   [build]
     command = "npm run build"
     publish = "client/dist"

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Select your repository
   - Configure build settings as above

## Option 3: Render (Full-stack)

1. **Deploy to Render:**
   - Go to [render.com](https://render.com)
   - Sign in with GitHub
   - Click "New" → "Web Service"
   - Connect your repository

2. **Configure Settings:**
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run server:start`
   - **Environment:** Node

3. **Environment Variables:**
   - Add all required environment variables
   - Set `NODE_ENV=production`

## Option 4: Docker Deployment

1. **Create Dockerfile:**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   
   # Copy package files
   COPY package*.json ./
   COPY client/package*.json ./client/
   COPY server/package*.json ./server/
   
   # Install dependencies
   RUN npm install
   RUN cd client && npm install
   RUN cd server && npm install
   
   # Copy source code
   COPY . .
   
   # Build application
   RUN npm run build
   
   # Expose ports
   EXPOSE 3000 3001
   
   # Start application
   CMD ["npm", "run", "dev"]
   ```

2. **Create docker-compose.yml:**
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
         - "3001:3001"
       volumes:
         - ./uploads:/app/uploads
         - ./server/data:/app/server/data
   ```

3. **Deploy:**
   ```bash
   docker build -t recipe-platform .
   docker run -p 3000:3000 -p 3001:3001 recipe-platform
   ```

## Environment Variables Reference

### Required Variables:
- `DATABASE_URL`: Database file path
- `JWT_SECRET`: Secret key for JWT tokens
- `PORT`: Server port (default: 3001)
- `NODE_ENV`: Environment (development/production)

### Frontend Variables:
- `VITE_API_URL`: Backend API URL

## Post-Deployment Checklist

1. ✅ Test all API endpoints
2. ✅ Verify image uploads work
3. ✅ Test user registration/login
4. ✅ Check recipe creation/editing
5. ✅ Verify saved recipes functionality
6. ✅ Test responsive design on mobile
7. ✅ Check error handling

## Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Ensure backend CORS is configured for your frontend domain
   - Check environment variables are set correctly

2. **Database Issues:**
   - Verify database file permissions
   - Check if database directory exists

3. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs for specific errors

4. **Image Upload Issues:**
   - Check file upload directory permissions
   - Verify multer configuration
   - Ensure proper file size limits

## Monitoring

Consider adding:
- Application monitoring (Sentry, LogRocket)
- Performance monitoring (New Relic, DataDog)
- Error tracking and logging
- Database backup strategies

## Security Considerations

- Use strong JWT secrets
- Enable HTTPS in production
- Implement rate limiting
- Add input validation
- Regular security updates
- Database backup and encryption
