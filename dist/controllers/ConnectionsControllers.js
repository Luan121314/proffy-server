"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);
 class ConnectionsControllers{
    async index(request, response){
        const totalConnections = await _connection2.default.call(void 0, 'connections').count('* as total')
        const {total}= totalConnections[0];
        return response.json({total})
    }
    async create(request, response){
        const {user_id} = request.body;

        await _connection2.default.call(void 0, 'connections').insert({
            user_id
        })

        return response.status(201).send()
    }
} exports.default = ConnectionsControllers;