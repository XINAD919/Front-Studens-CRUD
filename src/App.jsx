import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import StudentEdit from "./pages/StudentEdit";
import Students from "./pages/Students";
import CreateStudent from "./pages/CreateStudent";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/student-list" element={<Students />} />
          <Route path="/new-student" element={<CreateStudent />} />
          <Route path="/student/:id/edit" element={<StudentEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
