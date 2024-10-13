import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './view/pages/root';
import { ProductPage } from './view/pages/product-page';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/products/:productId',
    element: <ProductPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
