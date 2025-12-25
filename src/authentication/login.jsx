import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/home');
    } catch (err) {
      setError('Failed to log in: ' + err.message);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login-wrapper">
        <div className="login-card">

          <h2 className="login-title">Login</h2>

          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account?
            <Link to="/signup"> Sign up</Link>
          </p>

          <div className="demo-info">
            <hr />
            <p>Email: <span>mobeenarif13@gmail.com</span></p>
            <p>Password: <span>mobeenarif13</span></p>
          </div>

        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e0e7ff, #f0f9ff);
          padding: 16px;
        }

        .login-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          animation: fadeUp 0.6s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-title {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 24px;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #374151;
        }

        input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          outline: none;
          transition: all 0.3s;
        }

        input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.3);
        }

        button {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          cursor: pointer;
          transition: all 0.3s;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37,99,235,0.4);
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-box {
          background: #fee2e2;
          color: #991b1b;
          padding: 12px;
          border-radius: 10px;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .signup-text {
          text-align: center;
          margin-top: 24px;
          color: #4b5563;
        }

        .signup-text a {
          color: #4f46e5;
          font-weight: 600;
          text-decoration: none;
        }

        .signup-text a:hover {
          text-decoration: underline;
        }

        .demo-info {
          margin-top: 24px;
          text-align: center;
          font-size: 14px;
          color: #374151;
        }

        .demo-info hr {
          margin-bottom: 12px;
          border: none;
          height: 4px;
          border-radius: 4px;
          background: linear-gradient(to right, #3b82f6, #a855f7, #ec4899);
        }

        .demo-info span {
          color: #7c3aed;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
