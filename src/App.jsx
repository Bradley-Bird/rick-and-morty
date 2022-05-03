import { Route, Switch } from 'react-router-dom';
import Main from './views/Main';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/character/:id" component={CharacterData} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}
