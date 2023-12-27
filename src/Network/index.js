const clientIO = require('socket.io-client')

// Servicio externo
const serverUrl = 'ws://localhost:5000'

const clientSocket = clientIO.connect(serverUrl)

export default clientSocket;