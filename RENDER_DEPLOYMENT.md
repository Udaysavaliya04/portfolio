# Deploying Portfolio to Render

## Prerequisites

1. A GitHub account with your portfolio code pushed
2. A Render account (free tier available at render.com)
3. A MongoDB Atlas account (free tier available) for your database

## Step 1: Set up MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user with username and password
4. Whitelist all IP addresses (0.0.0.0/0) for Render access
5. Get your connection string (should look like: mongodb+srv://username:password@cluster.mongodb.net/)

## Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit for Render deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Step 3: Deploy on Render

### Option A: Using render.yaml (Recommended - Infrastructure as Code)

1. Go to https://dashboard.render.com
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Add environment variable:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string
6. Click "Apply" to deploy

### Option B: Manual Setup

1. Go to https://dashboard.render.com
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: portfolio (or your preferred name)
   - **Runtime**: Node
   - **Build Command**: `npm run install-all && npm run build`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     - `NODE_ENV`: production
     - `MONGODB_URI`: Your MongoDB Atlas connection string
5. Click "Create Web Service"

## Step 4: Verify Deployment

- Render will build and deploy your app
- You'll get a URL like: https://portfolio-xxxx.onrender.com
- The build process takes 5-10 minutes
- Your React frontend will be served from the Express backend

## Important Notes

- **Free Tier**: Render's free tier spins down after 15 minutes of inactivity
- **First Load**: May take 30-60 seconds to wake up on free tier
- **MongoDB**: Make sure to whitelist 0.0.0.0/0 in MongoDB Atlas Network Access
- **Environment Variables**: Never commit your actual .env file with secrets

## Troubleshooting

- Check Render logs if deployment fails
- Ensure all dependencies are in package.json
- Verify MongoDB connection string is correct
- Make sure NODE_ENV is set to 'production'

## Useful Commands

```bash
# Test production build locally
npm run install-all
npm run build
NODE_ENV=production npm start
```

Your portfolio will be live at your Render URL! 🚀
