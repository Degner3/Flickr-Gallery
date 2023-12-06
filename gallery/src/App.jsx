import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage/HomePage";
import { ViewsPage } from "./Pages/Views/ViewsPage";


function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/views" element={<ViewsPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
