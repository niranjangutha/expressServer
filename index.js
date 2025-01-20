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
      id: 1,
      firstName: "Aaliyah",
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
