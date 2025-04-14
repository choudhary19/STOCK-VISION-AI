import React from 'react';
import axios from 'axios';
import OrderForm from './components/OrderForm/OrderForm';

function Alpaca() {
    const [apiKey, setApiKey] = React.useState(localStorage.getItem('alpacaApiKey') || "");
    const [secretKey, setSecretKey] = React.useState(localStorage.getItem('alpacaSecretKey') || "");
    const [authenticated, setAuthenticated] = React.useState(false);
    const [accountData, setAccountData] = React.useState(null);
    const [selectedStock, setSelectedStock] = React.useState("AAPL");
    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('alpacaLoggedIn') === 'true');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    // Check authentication status on component mount
    React.useEffect(() => {
        const verifyStoredCredentials = async () => {
            const storedApiKey = localStorage.getItem('alpacaApiKey');
            const storedSecretKey = localStorage.getItem('alpacaSecretKey');
            
            if (storedApiKey && storedSecretKey) {
                await verifyCredentials(storedApiKey, storedSecretKey);
            }
        };
        verifyStoredCredentials();
    }, []);

    const verifyCredentials = async (apiKey, secretKey) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(
                "http://localhost:5000/api/get-alpaca-account",
                { 
                    apikey: apiKey,
                    secretKey: secretKey
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data?.status !== 'OK' || !response.data?.alpaca_user) {
                throw new Error(response.data?.message || 'Authentication failed');
            }

            setAuthenticated(true);
            setIsLoggedIn(true);
            setAccountData(response.data.alpaca_user);

            // Store in localStorage
            localStorage.setItem('alpacaApiKey', apiKey);
            localStorage.setItem('alpacaSecretKey', secretKey);
            localStorage.setItem('alpacaLoggedIn', 'true');

        } catch (err) {
            console.error("Authentication error:", err);
            setError(err.response?.data?.message || err.message || 'Failed to authenticate with Alpaca');
            setAuthenticated(false);
            setIsLoggedIn(false);
            setAccountData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        await verifyCredentials(apiKey, secretKey);
    };

    const handleLogout = () => {
        localStorage.removeItem('alpacaApiKey');
        localStorage.removeItem('alpacaSecretKey');
        localStorage.removeItem('alpacaLoggedIn');
        setApiKey('');
        setSecretKey('');
        setAuthenticated(false);
        setIsLoggedIn(false);
        setAccountData(null);
    };

    return (
        <div>
            {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <h2>Login to Alpaca</h2>
                    <div>
                        <label>API Key:</label>
                        <input
                            type="text"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Secret Key:</label>
                        <input
                            type="password"
                            value={secretKey}
                            onChange={(e) => setSecretKey(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            ) : (
                <div>
                    <h2>Welcome, you are logged in!</h2>
                    {accountData && (
                        <div>
                            <p><strong>Account ID:</strong> {accountData.id}</p>
                            <p><strong>Status:</strong> {accountData.status}</p>
                            <p><strong>Currency:</strong> {accountData.currency}</p>
                            {/* Add more account info as needed */}
                        </div>
                    )}
                    <OrderForm selectedStock={selectedStock} setSelectedStock={setSelectedStock} />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default Alpaca;
