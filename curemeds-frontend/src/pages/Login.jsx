import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/authServices';
import 'animate.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password, role });
      localStorage.setItem('token', res.token);
      if (role === 'patient') navigate('/dashboard/patient');
      else if (role === 'doctor') navigate('/dashboard/doctor');
      else navigate('/dashboard/store');
    } catch (err) {
      alert('Login failed: ' + err.response?.data?.message || 'Server error');
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center animate__animated animate__fadeInDown">
        <h2 className="fw-bold">Welcome to CureMeds</h2>
        <p className="text-muted">Login to access your healthcare panel</p>
      </div>
      <form
        className="card p-4 col-md-6 col-lg-4 mx-auto shadow animate__animated animate__zoomIn"
        onSubmit={handleLogin}
      >
        <div className="mb-3">
          <label className="form-label">Login as</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="store">Store Owner</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100 mt-2">Login</button>

        {/* Register Link */}
        <div className="text-center mt-3">
          <span className="text-muted">Don't have an account? </span>
          <Link to="/register" className="text-decoration-none fw-bold">
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
}
