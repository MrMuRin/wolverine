import {Navigate, Route, Routes} from 'react-router-dom';
import Login from '@/pages/Login';
import Dashboard from './pages/Dashboard';
import {useAuth} from "./auth/AuthProvider.tsx";
import Menu from "@/pages/Menu.tsx";

const ProtectedRoute = ({children}: { children: JSX.Element }) => {
    const {token} = useAuth();

    return token ? children : <Navigate to="/login"/>;
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/menu"
                element={
                        <Menu/>
                }
            />
        </Routes>
    );
};

export default App;
