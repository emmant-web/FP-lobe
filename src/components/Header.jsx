import { useState } from "react";
import LobeLogo from "../assets/images/lobe-logo.svg";
import { Menu, X } from "lucide-react"; // for icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <a href="#">
          <img src={LobeLogo} className="w-24 h-auto" alt="lobe-logo" />
        </a>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 items-center text-[#250d21] font-medium">
          <a href="#">
            <li>Overview</li>
          </a>
          <a href="#">
            <li>Examples</li>
          </a>
          <a href="#">
            <li>Tour</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
          <a href="#">
            <li>Help</li>
          </a>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-[#04ddb2] rounded-full text-white px-6 py-3 hover:bg-[#03c09d] transition">
          Download
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col items-center gap-6 py-6 text-[#250d21] font-medium">
            <a href="#">
              <li>Overview</li>
            </a>
            <a href="#">
              <li>Examples</li>
            </a>
            <a href="#">
              <li>Tour</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Help</li>
            </a>
            <button className="bg-[#04ddb2] rounded-full text-white px-6 py-3 hover:bg-[#03c09d] transition">
              Download
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
