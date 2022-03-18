// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/db.sqlite3'
    },

    migrations: {
      directory: './migrarions'
    },
    useNullAsDefault: true
  }

};
