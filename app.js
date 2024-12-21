import express from 'express';

const port = 3000;
const app = express();

app.use(express.static('public'))

app.listen(port, () => console.log(`Running the static app on ${port}`))
