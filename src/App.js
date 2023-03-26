import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Layout from "./components/Layout";
import Unauthorized from "./components/Auth/Unauthorized";
import Missing from "./components/Missing";
import RequireAuth from "./components/Auth/RequireAuth";
import NluAnalyzerTextBox from "./components/NluAnalyzer/NluAnalyzerTextBox";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protect these routes */}
        <Route element={<RequireAuth allowedRoles={[2001]} />}>
          <Route path="/" element={<NluAnalyzerTextBox />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
