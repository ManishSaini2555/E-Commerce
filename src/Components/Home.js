import React, { useState } from "react";
import LogIn from "./LogIn.js";
import ShowItems from "./ShowItems.js";

const Home = (props) => {
  const [showLogin, setShowLogin] = useState(true);

  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  const authorisedUser = [
    {
      email: "manishsaini@veersatech.com",
      password: "Veersa@123",
    },
    {
      email: "ekta@veersatech.com",
      password: "Veersa@123",
    },
  ];

  let user = {};
  if (JSON.parse(localStorage.getItem("userCred")))
    user = JSON.parse(localStorage.getItem("userCred"));
  else user = { email: "", password: "" };
  let authUser = authorisedUser.filter((item) => item.email === user.email);
  let check = false;
  if (authUser.length && authUser[0].password === user.password) check = true;
  if (check && showLogin) setShowLogin(false);

  const LogInUser = (login) => {
    localStorage.setItem("userCred", JSON.stringify(login));
    let authUser = authorisedUser.filter((item) => item.email === login.email);
    let check = false;
    if (authUser.length && authUser[0].password === login.password)
      check = true;
    if (check) setShowLogin(false);
    else setShowLogin(true);
  };

  const homeStyle = {
    minHeight: "88vh",
  };

  if (!showLogin) props.search(true);
  else props.search(false);

  // if (
  //   authorisedUser.includes(
  //     (item) => item.email === user.email && item.password === user.password
  //   )
  // )
  //   setShowLogin(false);
  // else setShowLogin(true);

  return (
    <div className="container" style={homeStyle}>
      {showLogin ? (
        <LogIn setUser={LogInUser} />
      ) : (
        <ShowItems items={props.items} />
      )}
    </div>
  );
};

export default Home;
