"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


 async function up(knex) {
    return knex.schema.createTable('classes', (table) => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        table.integer('user_id')
            .references("id")
            .inTable('users')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
} exports.up = up;


 async function down(knex) {
    return knex.schema.dropTable('classes');
} exports.down = down;