const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");
  // const client = env('DATABASE_CLIENT', 'postgres');

  const connections = {
    mysql: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    mysql2: {
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    postgres: {
      connection: {
        // connectionString: env('DATABASE_URL'),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        // database: env('DATABASE_NAME', 'strapi'),
        database: env("DATABASE_NAME", "bu_db_non_prod"),
        // user: env('DATABASE_USERNAME', 'strapi'),
        user: env("DATABASE_USERNAME", "bu_user"),
        // password: env('DATABASE_PASSWORD', 'strapi'),
        password: env("DATABASE_PASSWORD", "Coditas@123"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      // pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
      pool: { min: 0, max: 1, idleTimeoutMillis: 500 },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      // client: "postgres",
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", ""),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", ""),
//       user: env("DATABASE_USERNAME", ""),
//       password: env("DATABASE_PASSWORD", ""),
//       schema: "public",
//       ssl: {
//         rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
//       },
//     },
//     debug: false,
//     // The connection pool can be adjusted, but these minimal limits seem to work well.
//     pool: {
//       min: 0,
//       max: 1,
//       idleTimeoutMillis: 500,
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "postgres",
//         host: env("DATABASE_HOST", "127.0.0.1"),
//         port: env.int("DATABASE_PORT", 5432),
//         database: env("DATABASE_NAME", "strapiDB"),
//         username: env("DATABASE_USERNAME", "postgres"),
//         password: env("DATABASE_PASSWORD", "password"),
//       },
//       options: {},
//     },
//   },
// });
