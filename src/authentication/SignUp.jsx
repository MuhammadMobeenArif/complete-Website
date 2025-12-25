import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      navigate('/home');
    } catch (err) {
      setError('Failed to create account: ' + err.message);
    }

    setLoading(false);
  }

  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-card">
          <h2 className="signup-title">Create Account</h2>

          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-5">
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
                minLength={6}
                placeholder="Create a password"
              />
            </div>

            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Creating account...' : 'Sign Up'}
            </button>
          </form>

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .signup-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #dcfce7, #ecfeff);
          padding: 16px;
        }

        .signup-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.88);
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

        .signup-title {
          text-align: center;
          font-size: 34px;
          font-weight: 800;
          margin-bottom: 24px;
          background: linear-gradient(90deg, #16a34a, #22c55e);
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
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.3);
        }

        button {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #16a34a, #22c55e);
          cursor: pointer;
          transition: all 0.3s;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(34,197,94,0.4);
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

        .login-text {
          text-align: center;
          margin-top: 24px;
          color: #4b5563;
        }

        .login-text a {
          color: #16a34a;
          font-weight: 600;
          text-decoration: none;
        }

        .login-text a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
