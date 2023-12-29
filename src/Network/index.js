const clientIO = require('socket.io-client')

// Servicio externo
const serverUrl = 'https://water-quality-4jt1.onrender.com'

const clientSocket = clientIO.connect(serverUrl)

export default clientSocket;