"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


 async function up(knex){
    return knex.schema.createTable('users', (table)=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    
    })
} exports.up = up;

 async function down(knex){
    return knex.schema.dropTable('users');
} exports.down = down;