"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


 async function up(knex) {
    return knex.schema.createTable('connections', (table) => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    })
} exports.up = up;

 async function down(knex) {
    return knex.schema.dropTable('connections');
} exports.down = down;