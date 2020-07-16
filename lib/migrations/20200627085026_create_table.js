
exports.up = async (knex, Promise) => {
    await knex.schema.createTable('users', function (table) {
      table.increments('id').notNullable();
      table.string('name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.datetime('createdAt').notNullable();
    })
    
    await knex.schema.createTable('todo_list', (table) => {
      table.increments('id').notNullable();
      table.string('todo').nullable();
      table.boolean('todo_status').nullable().default(false);
      table.integer('userId').notNullable();
      table.datetime('createdAt').notNullable();
    })
  };
  
  exports.down = async (knex, Promise) => {
      await knex.schema.dropTable('users');
      await knex.schema.dropTable('todo_list');
  };
  