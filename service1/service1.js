
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate a delay for the service
  setTimeout(() => {
    res.json({ message: 'Response from Service1' });
  }, 2000); // 2 seconds delay
});

app.listen(port, () => {
  console.log(`Service1 is listening on http://0.0.0.0:${port}`);
});
//changes