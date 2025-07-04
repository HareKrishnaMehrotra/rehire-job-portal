import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
  <img
    src="/logo.png"
    alt="ReHire Logo"
    className="h-14 w-14 rounded-full border-2 border-white shadow-lg object-cover bg-white"
  />
  <span className="text-white font-bold text-3xl tracking-wide">
    Re<span className="text-yellow-300">Hire</span>
  </span>
</Link>


        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link className="hover:text-yellow-300 transition" to="/">Home</Link>
          <Link className="hover:text-yellow-300 transition" to="/about">About</Link>
          <Link className="hover:text-yellow-300 transition" to="/contact">Contact</Link>
          <Link className="hover:text-yellow-300 transition" to="/login">Login</Link>
          <Link className="hover:text-yellow-300 transition" to="/register">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-blue-500 space-y-2 px-4 py-3">
          <Link className="block text-white hover:text-yellow-300" to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link className="block text-white hover:text-yellow-300" to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link className="block text-white hover:text-yellow-300" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link className="block text-white hover:text-yellow-300" to="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link className="block text-white hover:text-yellow-300" to="/register" onClick={() => setOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
}
