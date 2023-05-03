const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('client/build'));

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/build' + '/index.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
