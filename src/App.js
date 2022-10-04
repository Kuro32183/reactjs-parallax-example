import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalScrollProvider } from './hooks/useGlobalScroll';
import { GlobalMouseMoveProvider } from './hooks/useGlobalMouseMove';
import Home from './pages/Home';

function Wrapper({ children }) {
  return (
    <GlobalScrollProvider>
      <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
    </GlobalScrollProvider>
  );
}

function App() {
  return (
    <Wrapper>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL || '/'}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </Wrapper>
  );
}

export default App;
