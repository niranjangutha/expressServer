const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, (err, res) => {
/*
    !commented code describes the to create the new custom error to throw an error while creating the server.
*/  
//   try {
//     throw new Error("testing");
//   } catch (error) {
//     console.log(error);
//     err = error;
//   }

  if (!err) {
    console.log(`server started at the port ${PORT} `);
  } else {
    console.log(`server creation error :${err.message}`);
  }
});
