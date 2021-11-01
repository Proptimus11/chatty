import React, { useState } from "react";
import Login from "./components/LoginPage";
import "./styles/app.scss";
import RegistrationPage from "./components/RegistrationPage";
import Connect from "./components/ConnectPage";

function App() {
  // const clickHandler = () => {
  //   alert("ajja nachle nachle mere yaar");
  // };
  const [login, setLogin] = useState(true);
  const [registration, setRegistration] = useState(false);
  const [connect, setConnect] = useState(false);
  const FirstPage = (props) => {
    if (props.login) {
      return (
        <Login
          login={login}
          setLogin={setLogin}
          registration={registration}
          setRegistration={setRegistration}
        />
      );
    } else if (props.registration) {
      return (
        <RegistrationPage
          registration={registration}
          setRegistration={setRegistration}
          connect={connect}
          setConnect={setConnect}
        />
      );
    }
    return <Connect />;
  };
  return (
    <div className="App">
      <FirstPage login={login} registration={registration} connect={connect} />
      {/* <Connect /> */}
    </div>
  );
}

export default App;
