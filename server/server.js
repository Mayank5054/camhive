const http = require('http');
const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/camhive", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});


const app = require('./app')

const PORT = 8000;

const server = http.createServer(app);

server.listen(PORT , ()=>{
    console.log(`listning on port : ${PORT}...`);
})