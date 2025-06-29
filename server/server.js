const app = require("./app");

// port number from env
const PORT = process.env.PORT || 5000;
//Start server
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
