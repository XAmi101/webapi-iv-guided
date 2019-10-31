const server = require('./api/server.js');
require("dotenv").config()

const port = 9000;

server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:${port} ***\n');
});
