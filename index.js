const express =require('express');
const app = express();
const port = 7000;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); 
app.listen(port,()=> {
    console.log(`Server is running on port http://localhost:${port}/`);
});
