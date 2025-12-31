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
      <div className="login-bg">
        <div className="card-stack">

          {/* Back Layer */}
          <div className="card-back"></div>

          {/* Main Card */}
          <div className="login-card">
            <div className="card-tab">LOGIN</div>

            {error && <div className="error-box">{error}</div>}

            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />

              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'GET STARTED'}
              </button>
            </form>

            <p className="signup-text">
              Don’t have an account?
              <Link to="/signup"> Sign up</Link>
            </p>
          </div>

        </div>
      </div>

<style>{`
/* ===== Background ===== */
.login-bg {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, blue, #8b1538);
}

/* ===== Stack ===== */
.card-stack {
  position: relative;
  width: 360px;
}

/* ===== Back Card ===== */
.card-back {
  position: absolute;
  top: 14px;
  left: 14px;
  width: 100%;
  height: 100%;
  background:#ecfdf5;
  border-radius: 12px;
}

/* ===== Main Card ===== */
.login-card {
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 32px 20px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.35);
}

/* ===== Folder Tab ===== */
.card-tab {
  position: absolute;
  top: -18px;
  left: 20px;
  background: white;
  padding: 6px 18px;
  border-radius: 6px 6px 0 0;
  font-weight: 800;
  font-size: 13px;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.2);
}

/* ===== Labels & Inputs ===== */
label {
  font-size: 12px;
  font-weight: 700;
  margin-top: 14px;
  display: block;
}

input {
  width: 100%;
  padding: 11px;
  margin-top: 6px;
  border-radius: 6px;
  border: none;
  background: #f3f4f6;
  outline: none;
}

/* ===== Button ===== */

button {
  margin-top: 18px;
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none; 
  background:  #047857;
  color: white;
  font-weight: 800;
  cursor: pointer;
}

button:hover {
  background: #5f0d25;
}

button:disabled {
  opacity: 0.6;
}

/* ===== Error ===== */
.error-box {
  background: #fee2e2;
  color: #7f1d1d;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 14px;
  font-weight: 600;
}

/* ===== Footer ===== */
.signup-text {
  text-align: center;
  margin-top: 18px;
  font-size: 13px;
}

.signup-text a {
  font-weight: 800;
  color: #047857;
  text-decoration: none;
}
`}</style>
    </>
  );
}
