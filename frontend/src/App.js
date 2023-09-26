
import './styles/App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Quiz } from './component/Quiz';
import { Result } from './component/Result';
import { Main } from './component/Main';
import { CheckUserExit } from './helper/helper';





const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>
  },
  {
    path:"/quiz",
    // element:<Quiz></Quiz>
    element: <CheckUserExit><Quiz/></CheckUserExit>
  },
  {
    path:"/result",
    // element:<Result></Result>
    element: <CheckUserExit><Result/></CheckUserExit>
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
