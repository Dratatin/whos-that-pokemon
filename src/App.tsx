import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import Panel from './pages/panel/Panel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/panel",
    element: <Panel />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App