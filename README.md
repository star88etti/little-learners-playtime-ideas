# Little Learners Playtime Ideas

A Montessori-inspired activity generator for young children.

## Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Add your Gemini API key to `.env`:
- Get an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Add restrictions to your API key:
  - HTTP referrer: `montessorigames.letstalkaitools.com`
  - API restrictions: Only allow Gemini API
- Add the key to your `.env` file:
```bash
VITE_GEMINI_API_KEY=your_api_key_here
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Environment Variables

For deployment, add the following secret to your GitHub repository:
- Name: `VITE_GEMINI_API_KEY`
- Value: Your restricted Gemini API key

## Features

- Generate educational playtime activities using AI
- Filter activities by age range
- View detailed instructions and required materials
- Save and manage favorite activities

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
