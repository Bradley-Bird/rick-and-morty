import { Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import CharacterDetail from './views/CharacterDetail';

export default function App() {
  return (
    <>
      <Switch>
        {/* <Route path="/character/:id" component={CharacterDetail} /> */}
        <Route path="/character" component={Main} />
      </Switch>
    </>
  );
}
