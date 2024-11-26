type AppConfig = {
  app: {
    port: string | number;
  };
  db: {
    host: string;
    port: string | number;
    name: string;
  };
};

const dev: AppConfig = {
  app: {
    port: process.env.DEV_APP_PORT || 3052,
  },
  db: {
    host: process.env.DEV_APP_HOST || "localhost",
    port: process.env.DEV_DB_PORT || "27017",
    name: process.env.DEV_DB_NAME || "webup",
  },
};

const pro: AppConfig = {
  app: {
    port: process.env.PRO_APP_PORT || 3000,
  },
  db: {
    host: process.env.PRO_APP_HOST || "localhost",
    port: process.env.PRO_DB_PORT || "27017",
    name: process.env.PRO_DB_NAME || "webup-pro",
  },
};

const config: { [key: string]: AppConfig } = { dev, pro };

const env: string = process.env.NODE_ENV || "dev";

export default config[env];
