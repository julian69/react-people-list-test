import { theme } from 'theme';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PeopleForm from 'components/PeopleForm';
import { ThemeProvider } from 'styled-components';
import { render, screen, fireEvent } from '@testing-library/react';

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

const onChange = jest.fn();

const renderComponent = (isAlertVisible) => render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PeopleForm
        person={{}}
        onChange={onChange}
        isAlertVisible={isAlertVisible || false}
      />
    </Provider>
  </ThemeProvider>
);

describe('PeopleForm', () => {
  it('renders correctly', () => {
    renderComponent();
    const text = screen.getByText('First and last name');
    expect(text).toBeInTheDocument();
  });

  it('should show an alert', () => {
    renderComponent(true);
    const alert = screen.getByText('Ups, something in our servers went wrong!');
    expect(alert).toBeInTheDocument();
  });

  it('should trigger on change with right params', () => {
    renderComponent();
    const input = screen.getByPlaceholderText('e.g. Kim Fog');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledWith('name', 'test');
  });
});
