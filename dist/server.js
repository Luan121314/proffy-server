"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);


if(process.env.NODE_ENV != 'PRODUCTION'){
    _dotenv2.default.config();
    console.log('Executando em localhost')
}

const app = _express2.default.call(void 0, );
app.use(_cors2.default.call(void 0, ))

app.use(_express2.default.json())

app.use(_routes2.default);

app.listen( process.env.PORT || 3333, () => {

});