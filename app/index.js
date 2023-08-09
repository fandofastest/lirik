const lyrics = require("lyric-music"); 
const express = require('express');
const app = express();
const port = 3000;



app.get('/lirik/:id',async (req, myres) => {
    const lyric = await lyrics(req.params.id);
    var jsonObj = {'lirik':lyric};

    myres.json(jsonObj);
  
});




app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});