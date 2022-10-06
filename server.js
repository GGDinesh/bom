const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();


// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());
  
app.use(cors({ origin: true, credentials: true}));

//initialize middleware
app.use(express.json({extended:false}));
app.get('/', (req, res) => res.send('server up and running Dinesh'));

app.get('/setEvents/:event', (req, res) => res.send('received event : '+req.params.event));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Dinesh your server is running at port ${PORT}`)
})

