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
      <div className="signup-bg">
        <div className="card-stack">

          <div className="card-back"></div>

          <div className="signup-card">
            <div className="card-tab">SIGN UP</div>

            <h2 className="signup-title">Create Account</h2>

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
                placeholder="Create password"
                required
              />

              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                required
              />

              <button disabled={loading}>
                {loading ? 'Creating...' : 'GET STARTED'}
              </button>
            </form>

            <p className="login-text">
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>
          </div>

        </div>
      </div>

<style>{`
/* ===== Background ===== */
.signup-bg {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #064e3b, #065f46);
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
  background: #ecfdf5;
  border-radius: 12px;
}

/* ===== Main Card ===== */
.signup-card {
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 32px 28px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.35);
}

/* ===== Folder Tab ===== */
.card-tab {
  position: absolute;
  top: -18px;
  left: 20px;
  background: white;
  padding: 6px 18px;
  border-radius: 6px 6px 0 0;
  font-size: 13px;
  font-weight: 800;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.2);
}

/* ===== Title ===== */
.signup-title {
  text-align: center;
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 22px;
  color: #065f46;
}

/* ===== Inputs ===== */
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
  background: #f0fdf4;
  outline: none;
}

/* ===== Button ===== */
button {
  margin-top: 18px;
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none;
  background: #047857;
  color: white;
  font-weight: 800;
  cursor: pointer;
}

button:hover {
  background: #065f46;
}

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
.login-text {
  text-align: center;
  margin-top: 18px;
  font-size: 13px;
}

.login-text a {
  font-weight: 800;
  color: #047857;
  text-decoration: none;
}
`}</style>
    </>
  );
}
