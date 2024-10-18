import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Page from "./pages/page";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page />} />
                {/* <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
