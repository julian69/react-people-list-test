import { theme } from 'theme';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchableList from 'components/SearchableList';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const store = mockStore({
  people: [],
  activePerson: null,
  filters: {
    name: '',
    type: [],
  },
  hasFormErrors: false,
  hasPeopleLoaded: false,
  isPersonRequestSuccess: false,
  isPersonRequestLoading: false,
});

const renderComponent = (isAlertVisible) => render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <SearchableList />
    </Provider>
  </ThemeProvider>
);

describe('Button', () => {
  it('renders correctly', () => {
    renderComponent();
    const input = screen.getByLabelText('Contractor');
    expect(input).toBeInTheDocument();
  });
});
