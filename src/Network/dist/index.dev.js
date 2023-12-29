"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var clientIO = require('socket.io-client'); // Servicio externo


var serverUrl = 'https://water-quality-4jt1.onrender.com';
var clientSocket = clientIO.connect(serverUrl);
var _default = clientSocket;
exports["default"] = _default;