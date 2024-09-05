import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Login from './Login';
import { Navigate } from 'react-router-dom';

// Mock Navigate component
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: jest.fn(() => null),
}));

const mockStore = configureStore([]);

test('should redirect to another page when authUser is available', () => {
    const initialState = {
        authUserReducer: {
            id: '1',
            name: 'John Doe',
            avatarURL: 'https://avatar.url',
        },
    };
    const store = mockStore(initialState);

    // Render the component with the mock store
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </Provider>
    );

    // Expect the Navigate component to be called with the correct path
    expect(Navigate).toHaveBeenCalledWith(
        expect.objectContaining({ to: '/' }),
        expect.anything()
    );
});
