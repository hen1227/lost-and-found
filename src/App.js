import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import MainView from "./MainView";
import ReportView from "./ReportView";
import FoundView from "./FoundView";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

    return (
        // <AuthProvider>
            <Router>
                <div className={"App"}>
                    <Routes>
                        <Route path="/" exact element={<MainView />} />
                        <Route path="/report" exact element={<ReportView />} />
                        <Route path="/found/:id" exact element={<FoundView />} />
                        <Route path="*" element={<MainView />} />
                    </Routes>
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </Router>
        // {/*</AuthProvider>*/}
    );
}

export default App;
