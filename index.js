require("dotenv").config()
const app = require('./express/express');
const bodyParser = require('body-parser');
const routerParking = require('./module/parking/router');
const routerWifi = require('./module/wifi/router');
const cors = require('cors');
const port = process.env.APP_URL || 5000;
const hostname = 'localhost'

app.use(cors());
app.use(bodyParser.json())
app.use('/api/parking', routerParking)
app.use('/api/wifi', routerWifi)

// app.listen(port, hostname, () => {
//     console.log(`Api initilize success in port ${port}`)
// })