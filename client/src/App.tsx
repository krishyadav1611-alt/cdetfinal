import { Switch, Route } from "wouter";
import Home from "./pages/home";
import Artists from "./pages/artists";
import Releases from "./pages/releases";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/artists" component={Artists} />
      <Route path="/releases" component={Releases} />
    </Switch>
  );
}
