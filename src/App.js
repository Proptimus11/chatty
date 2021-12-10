import React, { useState } from "react";
import Login from "./components/LoginPage";
import "./styles/app.scss";
import RegistrationPage from "./components/RegistrationPage";
import Connect from "./components/ConnectPage";
import BotFlow from "./components/BotFlow";

function App() {
  // const clickHandler = () => {
  //   alert("ajja nachle nachle mere yaar");
  // };
  const [login, setLogin] = useState(true);
  const [registration, setRegistration] = useState(false);
  const [connect, setConnect] = useState(false);
  const [botid, setBotId] = useState("");
  const [state, setState] = useState("login");
  const FirstPage = (props) => {
    if (props.login) {
      return (
        <Login
          login={login}
          setLogin={setLogin}
          registration={registration}
          setRegistration={setRegistration}
          botid={botid}
          setBotId={setBotId}
          state={state}
          setState={setState}
        />
      );
    } else if (props.registration) {
      return (
        <RegistrationPage
          registration={registration}
          setRegistration={setRegistration}
          connect={connect}
          setConnect={setConnect}
          botid={botid}
          setBotId={setBotId}
          state={state}
          setState={setState}
        />
      );
    }
    return <Connect botid={botid} setBotId={setBotId} />;
  };
  return (
    <div className="App">
      <FirstPage login={login} registration={registration} connect={connect} />
      {/* <BotFlow /> */}
      {/* <Connect /> */}
    </div>
  );
}

export default App;
