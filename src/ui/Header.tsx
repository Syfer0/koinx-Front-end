import React from 'react';
import logo from '../assets/image.png';

function Header() {
  return (
    <div className=" flex bg-red-700">
      <img src={logo} alt="Logo" className=" px-32" />
      <h1 className=" text-xl text-stone-950 ">test q</h1>
    </div>
  );
}

export default Header;
