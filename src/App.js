
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Component/LoginPage';
import ChatRoom from './Component/ChatRoom';
import Navbar from './Component/Navbar';
import { PrivateRoute } from './routes/PrivateRoute';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    
    <AuthProvider className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes> 
    </AuthProvider>
  );
}

export default App;
