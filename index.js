const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/users", (req, res) => {
  const usersList = fs.readFileSync("./data/usersList.json", "utf-8");
  if(usersList){
    res.status(200).send(usersList).json();
  }
  else{
  res.status(200).send({message : "NO users data found"}).json();
  }
});

app.post("/useradd", (req, res) => {
  try {
    const reqbody = req.body;
    var usersList = fs.readFileSync("./data/usersList.json", "utf-8");
    usersList = JSON.parse(usersList);
    let maxuid = 0;
    let ids = usersList.users.filter((val) => val.id).length;
    maxuid = ids + 1;

    reqbody.id = maxuid;
    usersList.users.push(reqbody);
    usersList = JSON.stringify(usersList);
    fs.writeFileSync("./data/usersList.json", usersList);

    console.log("insert success");
    res.status(200).send("insert data successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.get("/user/:id", (req, res) => {
  try {
    const reqbody = req.params.id;
    var usersList = fs.readFileSync("./data/usersList.json", "utf-8");
    usersList = JSON.parse(usersList);
    let ids = usersList.users.find((val) => {
      if (val.id == reqbody) {
        return val;
      }
    });
    if (ids) {
      res.status(200).send(ids);
    } else {
      res.status(200).send("no data found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
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
