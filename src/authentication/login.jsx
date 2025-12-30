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

        {/*  <div className="demo-info">
            <hr />
            <p>Email: <span>mobeenarif13@gmail.com</span></p>
            <p>Password: <span>mobeenarif13</span></p>
          </div>*/}

        </div>
      </div>
<style>{`
/* ===== Wrapper ===== */
.login-wrapper {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 20px;
  background:
    radial-gradient(circle at 15% 15%, #c7d2fe, transparent 55%),
    radial-gradient(circle at 85% 85%, #fbcfe8, transparent 55%),
    linear-gradient(135deg, #eef2ff, #f8fafc);
  animation: bgMove 18s ease-in-out infinite alternate;
}

@keyframes bgMove {
  from { background-position: 0% 0%; }
  to { background-position: 100% 100%; }
}

/* ===== Card ===== */
.login-card {
  width: 100%;
  max-width: 430px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
  border-radius: 28px;
  padding: 40px 36px;
  box-shadow:
    0 45px 90px rgba(0,0,0,0.18),
    inset 0 1px 0 rgba(255,255,255,0.6);
  animation: fadeScale 0.7s cubic-bezier(.4,0,.2,1);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.login-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 60px 120px rgba(0,0,0,0.22),
    inset 0 1px 0 rgba(255,255,255,0.6);
}

@keyframes fadeScale {
  from {
    opacity: 0;
    transform: translateY(35px) scale(0.94);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ===== Title ===== */
.login-title {
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 32px;
  letter-spacing: -0.6px;
  background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===== Labels ===== */
label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

/* ===== Inputs ===== */
input {
  width: 100%;
  padding: 15px 18px;
  border-radius: 16px;
  border: 1px solid #d1d5db;
  font-size: 15px;
  background: rgba(255,255,255,0.96);
  outline: none;
  transition: all 0.25s ease;
}

input:hover {
  border-color: #a5b4fc;
}

input::placeholder {
  color: #9ca3af;
}

input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99,102,241,0.28);
  transform: scale(1.015);
}

/* ===== Button ===== */
button {
  width: 100%;
  padding: 15px;
  border-radius: 18px;
  border: none;
  font-size: 16px;
  font-weight: 800;
  color: white;
  background-size: 200% 200%;
  background-image: linear-gradient(
    135deg,
    #2563eb,
    #4f46e5,
    #7c3aed,
    #ec4899
  );
  cursor: pointer;
  transition: all 0.35s ease;
}

button:hover {
  background-position: right center;
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(79,70,229,0.5);
}

button:active {
  transform: scale(0.96);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ===== Error ===== */
.error-box {
  background: linear-gradient(135deg, #fee2e2, #fecaca);
  color: #7f1d1d;
  padding: 14px 16px;
  border-radius: 16px;
  margin-bottom: 22px;
  font-weight: 600;
  animation: shake 0.4s ease;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

/* ===== Footer ===== */
.signup-text {
  text-align: center;
  margin-top: 28px;
  font-size: 14px;
  color: #374151;
}

.signup-text a {
  margin-left: 4px;
  font-weight: 800;
  color: #4f46e5;
  text-decoration: none;
  position: relative;
}

.signup-text a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #6366f1, #ec4899);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.signup-text a:hover::after {
  transform: scaleX(1);
}
`}</style>


    </>
  );
}
