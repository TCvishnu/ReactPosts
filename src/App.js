
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoadingPage from "./PostComps/LoadingPage";
import Posts from "./PostComps/Posts";


function App() {

  return (
    <div className=" w-screen h-screen
    flex flex-row items-start">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<LoadingPage />}/>
            <Route path="/posts" element={<Posts />}/>
          </Routes>
          
        </main>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
