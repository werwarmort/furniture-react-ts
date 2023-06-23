import React from "react";
import "./scss/App.scss";
import "./scss/style.scss";
import "./scss/index.scss";
import HomePage from "./layouts/home";

function App() {
  const hideRightSideMenu = (e: string) => {
    // e.currentTarget.classList.toggle();
  };

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
