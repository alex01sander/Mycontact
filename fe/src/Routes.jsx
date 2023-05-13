import { Switch, Route } from "react-router-dom";
import ContactsList from "./pages/Home";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";


export default function RoutesPage() {
  return (
    <Switch>
    <Route exact path="/" component={ContactsList} />
    <Route path="/new" component={NewContact} />
    <Route path='/edit/:id' component={EditContact} />
  </Switch>
  );
}
 