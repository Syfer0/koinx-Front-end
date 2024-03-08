import React from 'react';
import logo from '../assets/image.png';
import { FiAlignJustify } from 'react-icons/fi';

function Header() {
  return (
    <div className="flex items-center gap-4">
      <img src={logo} alt="Logo" className="w-81 h-60.75" />
      <FiAlignJustify className="h-[27.42px] w-[27.42px]" />
    </div>
  );
}

export default Header;
