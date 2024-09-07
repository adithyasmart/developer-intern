const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
