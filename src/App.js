import { Switch, Route } from "react-router";
import "./App.css";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="">
        <div className="">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Collection" component={Collection} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
