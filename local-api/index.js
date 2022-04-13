const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());
app.get('/api/post', (req, res) => {
  res.json('');
});

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
