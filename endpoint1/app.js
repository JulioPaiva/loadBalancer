const app = require('express')();

app.get('/', (req, res) => res.send('Server 1').status(200))

app.listen(6002);
