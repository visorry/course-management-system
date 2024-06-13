module.exports = {
  development: {
    username: process.env.DB_USER || 'avnadmin',
    password: process.env.DB_PASSWORD || 'AVNS_enEt73cmDEgzZDU6v_y',
    database: process.env.DB_NAME || 'defaultdb',
    host: process.env.DB_HOST || 'pg-28cdd51-visvishnuvis-c2ec.j.aivencloud.com',
    port: process.env.DB_PORT || 28807,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // This line is important for self-signed certificates
      }
    }
  },
  test: {
    username: process.env.DB_USER || 'avnadmin',
    password: process.env.DB_PASSWORD || 'AVNS_enEt73cmDEgzZDU6v_y',
    database: process.env.DB_NAME || 'defaultdb',
    host: process.env.DB_HOST || 'pg-28cdd51-visvishnuvis-c2ec.j.aivencloud.com',
    port: process.env.DB_PORT || 28807,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  production: {
    username: process.env.DB_USER || 'avnadmin',
    password: process.env.DB_PASSWORD || 'AVNS_enEt73cmDEgzZDU6v_y',
    database: process.env.DB_NAME || 'defaultdb',
    host: process.env.DB_HOST || 'pg-28cdd51-visvishnuvis-c2ec.j.aivencloud.com',
    port: process.env.DB_PORT || 28807,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
