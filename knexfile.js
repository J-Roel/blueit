// Update with your config settings.
require('dotenv').load();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER
    },
    migrations: {
      tableName: 'dev_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
