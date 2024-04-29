import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import Pokedex from './pages/pokedex/Pokedex';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/pokedex",
    element: <Pokedex />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App