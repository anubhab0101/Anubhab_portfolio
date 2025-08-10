# Deployment Instructions for Vercel

## Overview
Your portfolio is now configured for Vercel deployment with serverless functions. The application has been restructured to work with Vercel's platform while maintaining all existing functionality.

## What Was Changed

### 1. Serverless API Functions
- Created individual serverless functions in `/api/` directory:
  - `api/projects.js` - Handles project data
  - `api/testimonials.js` - Handles testimonial data  
  - `api/certificates.js` - Handles certificate data
  - `api/contact.js` - Handles contact form submissions

### 2. Vercel Configuration
- Added `vercel.json` with proper routing and function configuration
- Configured build process for static frontend and serverless backend

## Deployment Steps

### 1. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project" 
3. Connect your GitHub repository (or upload project files)

### 2. Configure Project Settings
- **Framework Preset**: Other (or Custom)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Environment Variables (if needed)
If you plan to add a real database later, add these in Vercel dashboard:
- `DATABASE_URL` - Your PostgreSQL connection string
- Any other API keys you might need

### 4. Deploy
- Click "Deploy" - Vercel will handle the rest!
- Your site will be available at `your-project-name.vercel.app`

## How It Works

### Frontend
- React app builds to `/dist` directory
- Static files served by Vercel's CDN
- All your existing components and styling work exactly the same

### Backend
- Each API endpoint is now a separate serverless function
- Functions auto-scale based on traffic
- No server maintenance required
- Currently uses in-memory storage (data resets on each deployment)

## Important Notes

### Data Persistence
- Current setup uses in-memory storage for demo purposes
- Data will reset with each deployment
- To add persistent data, connect a database like:
  - Vercel Postgres
  - PlanetScale
  - Supabase
  - Any PostgreSQL provider

### CORS Headers
- All API functions include proper CORS headers
- Frontend can communicate with backend without issues

### Performance
- Static assets cached globally by Vercel's CDN
- Serverless functions start on-demand
- Cold starts may add ~100-200ms delay occasionally

## Troubleshooting

### Build Errors
- Make sure all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### API Not Working
- Check function logs in Vercel dashboard
- Verify API routes match the ones defined in `vercel.json`

### 404 Errors
- Single Page Application routing handled by catch-all route in `vercel.json`

## Alternative: GitHub Pages Deployment

If you prefer static-only deployment (no backend), I can convert the app to use local data files instead of API calls. This would work on GitHub Pages but you'd lose the contact form functionality.

Let me know if you need any adjustments or encounter issues during deployment!
