import {useAuth} from "../auth/AuthProvider.tsx";


const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <h1>Welcome, {user?.name}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;