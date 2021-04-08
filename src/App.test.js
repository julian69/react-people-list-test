import App from './App';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
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

describe('App', () => {
  it('renders', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
      );

    const title = screen.getByText('People');
    expect(title).toBeInTheDocument();
  });
});
