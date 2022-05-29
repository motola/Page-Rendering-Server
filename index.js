const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 6161;

// app.get('/', (request,response) =>  {
//     response.send('LOOKS GOOD')
// })

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public', '404.html'));
  });
  

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`)
})