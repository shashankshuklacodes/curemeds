import React, { useState } from 'react';
import { registerUser } from '../services/authServices';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient',
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(user);
      alert('Registered Successfully');
      navigate('/');
    } catch (err) {
      alert('Something went wrong');
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center animate__animated animate__fadeIn">
        <h2 className="fw-bold">Create an Account</h2>
        <p className="text-muted">Sign up for CureMeds</p>
      </div>
      <form
        className="card p-4 col-md-6 col-lg-4 mx-auto shadow animate__animated animate__slideInUp"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            name="role"
            className="form-select"
            value={user.role}
            onChange={handleChange}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="store">Store Owner</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="John Doe"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="example@email.com"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="••••••••"
            required
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}
