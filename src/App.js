import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddAge from "./components/AddAge";
import AddAge2 from "./components/AddAge2";

function App() {
  return (
    <div className="App">
      <AddAge firstName={"Juan"} lastName={"Galue"} hairColor={"black"} />
      <AddAge2 firstName={"Joe"} lastName={"Russell"} hairColor={"brown"} />
    </div>
  );
}

export default App;
