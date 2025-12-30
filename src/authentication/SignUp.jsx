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
<style>{`
/* ===== Wrapper ===== */
.signup-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 20% 20%, #bbf7d0, transparent 60%),
    radial-gradient(circle at 80% 80%, #93c5fd, transparent 60%),
    linear-gradient(135deg, #f0fdf4, #eff6ff);
  padding: 20px;
  animation: bgFloat 18s ease infinite alternate;
}

@keyframes bgFloat {
  from { background-position: 0% 0%; }
  to   { background-position: 100% 100%; }
}

/* ===== Card ===== */
.signup-card {
  width: 100%;
  max-width: 430px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(18px);
  border-radius: 28px;
  padding: 40px 34px;
  box-shadow:
    0 40px 90px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255,255,255,0.6);
  animation: slideFade 0.7s cubic-bezier(.4,0,.2,1);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.signup-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 50px 120px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255,255,255,0.6);
}

/* Animation */
@keyframes slideFade {
  from {
    opacity: 0;
    transform: translateY(35px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ===== Title ===== */
.signup-title {
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 32px;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #16a34a, #22c55e, #4ade80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===== Labels ===== */
label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

/* ===== Inputs ===== */
input {
  width: 100%;
  padding: 15px 18px;
  border-radius: 16px;
  border: 1px solid #d1d5db;
  background: rgba(255,255,255,0.96);
  font-size: 15px;
  outline: none;
  transition: all 0.25s ease;
}

input:hover {
  border-color: #86efac;
}

input::placeholder {
  color: #9ca3af;
}

input:focus {
  border-color: #22c55e;
  box-shadow: 0 0 0 4px rgba(34,197,94,0.28);
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
    #16a34a,
    #22c55e,
    #4ade80
  );
  cursor: pointer;
  transition: all 0.35s ease;
}

button:hover {
  background-position: right center;
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(34,197,94,0.5);
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
.login-text {
  text-align: center;
  margin-top: 26px;
  font-size: 14px;
  color: #374151;
}

.login-text a {
  margin-left: 4px;
  font-weight: 800;
  color: #16a34a;
  text-decoration: none;
  position: relative;
}

.login-text a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #22c55e, #4ade80);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.login-text a:hover::after {
  transform: scaleX(1);
}
`}</style>


     </>
  );
}
