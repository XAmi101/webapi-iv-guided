const server = require('./api/server.js');
require("dotenv").config()

const port = process.env.PORT || 9990 ;

server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:${port} ***\n');
});
