
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import {createBrowserRouter, RouterProvider} from "react-router-dom"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },{
      path:"/:id",
      element:<Layout/>
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}>

    </RouterProvider>
    </div>
  );
}

export default App;
