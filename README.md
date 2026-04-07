# Recipe Sharing ChatBot using Ollama

A full-stack recipe sharing application built with React, TypeScript, Node.js, Express, and SQLite.

## Features

- User authentication (register/login)
- Create, edit, and delete recipes
- Image upload for recipes
- Save/unsave recipes to favorites
- User profiles with recipe management
- Browse and search recipes
- Rate and comment on recipes
- Responsive design

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run client:dev` - Start only the frontend
- `npm run server:dev` - Start only the backend
- `npm run build` - Build the frontend for production
- `npm run client:build` - Build only the frontend
- `npm run server:build` - Build only the backend

## Database

The application uses SQLite with WAL mode for better concurrency. The database file is located at `server/data/recipes.db`.

## Project Structure

```
recipe-sharing-platform/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript types
│   │   └── contexts/      # React contexts
├── server/                # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/        # API routes
│   │   └── database/      # Database setup
└── uploads/               # Uploaded images
```

## API Endpoints

- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get recipe by ID
- `POST /api/recipes` - Create new recipe
- `PUT /api/recipes/:id` - Update recipe
- `DELETE /api/recipes/:id` - Delete recipe
- `POST /api/recipes/:id/save` - Save recipe to favorites
- `DELETE /api/recipes/:id/save` - Remove recipe from favorites
- `GET /api/recipes/user/saved` - Get user's saved recipes

## Environment Variables

Create a `.env` file in the root directory:

```
DATABASE_URL=./data/recipes.db
JWT_SECRET=your-secret-key
PORT=3001
```

## Troubleshooting

If you encounter database lock errors:
1. Stop all Node.js processes: `taskkill /F /IM node.exe`
2. Restart the development server: `npm run dev`

The application now uses WAL mode and proper connection management to prevent database locks.

## Sharing Your Project

### Option 1: GitHub Repository
1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Recipe sharing platform"
   ```

2. **Create a GitHub repository** and push your code:
   ```bash
   git remote add origin https://github.com/yourusername/recipe-sharing-platform.git
   git push -u origin main
   ```

3. **Add a .gitignore file** (if not already present):
   ```
   node_modules/
   .env
   server/data/
   uploads/
   dist/
   .DS_Store
   *.log
   ```

### Option 2: Deploy to Cloud Platforms

#### Vercel (Frontend) + Railway/Render (Backend)
1. **Deploy Frontend to Vercel:**
   - Connect your GitHub repo to Vercel
   - Set build command: `npm run client:build`
   - Set output directory: `client/dist`

2. **Deploy Backend to Railway/Render:**
   - Connect your GitHub repo
   - Set build command: `npm run server:build`
   - Set start command: `npm run server:start`
   - Add environment variables


### Option 3: Share as Zip File
1. **Create a clean version:**
   ```bash
   # Remove node_modules and build files
   rm -rf node_modules client/node_modules server/node_modules
   rm -rf client/dist server/dist
   rm -rf server/data uploads
   ```

2. **Create zip file:**
   ```bash
   # On Windows (PowerShell)
   Compress-Archive -Path . -DestinationPath recipe-sharing-platform.zip
   ```

### Option 4: Docker Deployment
Create a `Dockerfile` in the root directory:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000 3001
CMD ["npm", "run", "dev"]
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
This project is open source and available under the MIT License.
