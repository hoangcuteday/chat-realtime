import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="chat" element={<ChatRoom />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
