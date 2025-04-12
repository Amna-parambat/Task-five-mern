const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const routerAdForm = require('./routes/routerAdForm');

app.use('/user',routerAdForm);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
