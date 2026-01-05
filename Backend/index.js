const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// basic middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// mount example router
const apiRouter = require('./routes');
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
