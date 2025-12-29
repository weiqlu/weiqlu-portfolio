# Personal Portfolio

A minimal, dark-themed personal portfolio designed to showcase my experience and projects. Built with performance and simplicity in mind.

[**Take a look → weiqlu.dev**](https://weiqlu.dev)

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Material UI (MUI), Framer Motion
- **Infrastructure:** AWS S3, CloudFront
- **CI/CD:** GitHub Actions

## Local Development

To run the project locally: 

```bash
cd client
npm install
npm run dev
```

## Deployment

Commits to the `main` branch trigger a GitHub Actions workflow that builds the site, uploads the static assets to S3, and invalidates CloudFront to serve the latest version.