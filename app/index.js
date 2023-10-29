import { find_lyrics } from "@brandond/findthelyrics";
import express from 'express';
const app = express();
const port = 3000;



app.get('/lirik/:id',async (req, myres) => {
    const lyrics = await find_lyrics(req.params.id);
    if (lyrics instanceof Error) {
        console.error(lyrics);
    } else {
        console.log(lyrics);

    }
    var jsonObj = {'lirik':lyrics};

    myres.json(jsonObj);
  
});




app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});