import { useEffect } from 'react';
import { getCountries } from 'services/countries';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './theme';

import Header from './components/Header';

import People from './pages/People';
import AddEditPeople from './pages/AddEditPeople';

export default function App() {
  useEffect(() => {
    // Temporary implementation to avoid mismatches between peoples' and options' countries.
    const countries = JSON.parse(localStorage.getItem('countries'));
    !countries && getCountries();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/people" exact>
            <People />
          </Route>
          <Route path="/people/form">
            <AddEditPeople />
          </Route>
          <Route path="*">
            <Redirect to="/people" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
