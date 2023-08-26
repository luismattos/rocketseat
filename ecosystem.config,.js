// Using PM2 with Heroku
// https://pm2.keymetrics.io/docs/integrations/heroku/

export default {
  apps: [
    {
      name: "app",
      script: "./app.js",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
