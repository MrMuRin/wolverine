import {Navigate, Route, Routes} from 'react-router-dom';
import Login from '@/pages/Login';
import Dashboard from './pages/Dashboard';
import {useAuth} from "./auth/AuthProvider.tsx";

const ProtectedRoute = ({children}: { children: JSX.Element }) => {
    const {token} = useAuth();

    return token ? children : <Navigate to="/login"/>;
};

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default App;
