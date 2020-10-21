"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knex = require('knex'); var _knex2 = _interopRequireDefault(_knex);

var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);


if(process.env.NODE_ENV != 'PRODUCTION'){
    _dotenv2.default.config();
    console.log('Executando em localhost')
}


const {HOST, USER, PASSWORD, DATABASE} = process.env;

const db = _knex2.default.call(void 0, {
    client: 'mysql',
    connection: {
      host : HOST,
      user : USER,
      password : PASSWORD,
      database : DATABASE
    },
    useNullAsDefault:true
})


exports. default = db;