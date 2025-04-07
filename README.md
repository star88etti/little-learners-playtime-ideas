# Little Learners Playtime Ideas

A web application for generating and managing educational playtime activities for young children.

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- Generate educational playtime activities using AI
- Filter activities by age range
- View detailed instructions and required materials
- Save and manage favorite activities

## Deployment

This project is configured for automatic deployment to GitHub Pages. The deployment process is automated using GitHub Actions and will run whenever changes are pushed to the main branch.

### Manual Deployment

To manually trigger a deployment:

1. Go to the "Actions" tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Viewing Your Deployed Site

Once deployed, your site will be available at:
```
https://<your-github-username>.github.io/little-learners-playtime-ideas/
```

## Development

### Local Development

For local development, the site will be available at:
```
http://localhost:8080
```

### Building for Production

To build the project locally:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Custom Domain

You can connect a custom domain to your deployed application by following your hosting provider's instructions for domain configuration.
