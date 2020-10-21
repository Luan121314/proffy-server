"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _ClassesControllers = require('./controllers/ClassesControllers'); var _ClassesControllers2 = _interopRequireDefault(_ClassesControllers);
var _ConnectionsControllers = require('./controllers/ConnectionsControllers'); var _ConnectionsControllers2 = _interopRequireDefault(_ConnectionsControllers);

const routes = _express2.default.Router()

const classesControllers = new (0, _ClassesControllers2.default)();
const connectionsControllers = new (0, _ConnectionsControllers2.default)()


routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

exports. default = routes