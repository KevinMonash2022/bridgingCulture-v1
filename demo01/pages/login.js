import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'tp16') {
            sessionStorage.setItem('isLoggedIn', 'true');
            router.push('/');  
        } else {
            setError(true); 
        }
    };
    

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold text-center my-4">Login to Access</h1>
            {error && <p className="text-red-500 text-center">Invalid username or password!</p>}
            <form onSubmit={handleLogin} className="max-w-sm mx-auto">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
            </form>
        </div>
    );
}
