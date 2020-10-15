const express = require('express');         // module that allows me to use Express
const fs = require('fs');                   // module that allows to interact with file system
const path = require('path');
const app = express();                      // creating app constant to create multiple apps if needed (with their own requests and responses)

// This will create a single /video route & when requested, it'll send a video file back to the client.
app.get('/video', (req, res) => {
    res.sendFile('assets/sample.mp4', { root: __dirname});
});





// Server will listen on port 4000
app.listen(4000, () => {
    console.log('Listening on port 4000')
});
