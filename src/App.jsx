import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import CharacterDetail from './views/CharacterDetail';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/character" component={Main} />
        {/* <Route path="/" { <Redirect to="/character" />} /> */}
      </Switch>
    </>
  );
}
