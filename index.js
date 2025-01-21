const express = require("express");

const app = express();
const PORT = 4000;

const usersList = {
  users: [
    {
      id: 1,
      firstName: "Aaliyah",
      lastName: "Hanson",
      maidenName: "",
    },
    {
      id: 2,
      firstName: "test",
      lastName: "Martinez",
      maidenName: "Adams",
    },
    {
      id: 3,
      firstName: "Niranjan",
      lastName: "gutha",
      maidenName: "",
    },
  ],
};


app.get("/users", (req, res) => {
  res.status(200).send(usersList).json();
});


//! all will be validate the unexpected URL will reach in to the server.
//! will provide the proper response message to the client.
app.all("*", (req, res) => {
  res.status(200).send("No url found, please try with valid url");
});

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
