"use client"
import { AlignJustify, Search, ShoppingBag, SquareChevronUp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [show,setShow]=useState(false)
  const showMenu=()=>{
    setShow(!show)
  }
  return (
  <header>
    
    
        <nav className="navbar hidden container  mt-3 md:flex justify-around  items-center">
        <ul className="flex justify-center items-center gap-2">
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://s3-alpha-sig.figma.com/img/5e88/b521/17aa40baa6a96e43b5c4e57858edaa47?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lRR~N3NT1l~A2t7rZbZrLaw67qn4GdDff1oVOr5QluaCsS0VsGAfWuVWYrphpjHRPC~8iZ7qGNLy5FAk69SXC575xnBHZd~EGjAtHA9NbR9H8586-u39ambCyyumsy58kXYleRWOCaXu-Ne22bCzNufayDwoA9DXYhW83UAcbuDJFOX1k0sarHorrFXRnUhAPJtyD~NVpWckiGYXMz~W02bosnN8N8j7W9ciTlyogeopyElDj2leuPSEEiT8-Mt4Lwopb526x3Z-WKde3HxC8eJywmUliH~9ASnZSEhl7Mrsq6K4EmBb2Ssm-wrQshOsCR4yIzR2rla2Jaj8S8-6oQ__"
            alt=""
          />
          <span className="text-center" style={{ color: "#FFFFFF" }}>
            Plantes
          </span>
        </ul>
        <ul
          style={{ color: "#ffffff" }}
          className="flex justify-between gap-5 items-center"
        >
          <Link href={'/'}>home</Link>
          <Link href={'/'}>plants</Link>
          <Link href={'/'}>more</Link>
          <Link href={'/'}>content</Link>
        </ul>
        <ul
          style={{ color: "#ffffff" }}
          className="flex justify-evenly gap-10 items-center"
        >
          <li><Search size={20}/></li>
          <li><ShoppingBag size={20} /></li>
        
        </ul>
      </nav>

      <button onClick={showMenu} className="md:hidden"><AlignJustify  size={40} color="#ffffff"/></button>
   {
    show ?(
      <nav className="navbar gap-5  container mt-3 md:hidden flex-col items-center">
  {/* Logo Section */}
  <ul className="flex flex-col justify-center items-center w-full mb-4">
    <img
      style={{ width: "50px", height: "50px" }}
      src="https://s3-alpha-sig.figma.com/img/5e88/b521/17aa40baa6a96e43b5c4e57858edaa47?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lRR~N3NT1l~A2t7rZbZrLaw67qn4GdDff1oVOr5QluaCsS0VsGAfWuVWYrphpjHRPC~8iZ7qGNLy5FAk69SXC575xnBHZd~EGjAtHA9NbR9H8586-u39ambCyyumsy58kXYleRWOCaXu-Ne22bCzNufayDwoA9DXYhW83UAcbuDJFOX1k0sarHorrFXRnUhAPJtyD~NVpWckiGYXMz~W02bosnN8N8j7W9ciTlyogeopyElDj2leuPSEEiT8-Mt4Lwopb526x3Z-WKde3HxC8eJywmUliH~9ASnZSEhl7Mrsq6K4EmBb2Ssm-wrQshOsCR4yIzR2rla2Jaj8S8-6oQ__"
      alt=""
    />
    <span className="text-center text-white">Plantes</span>
  </ul>

  {/* Navigation Links */}
  <ul className="flex flex-col text-white gap-3 w-full text-center">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/">Plants</Link></li>
    <li><Link href="/">More</Link></li>
    <li><Link href="/">Content</Link></li>
  </ul>

  {/* Icons Section */}
  <ul className="flex justify-center  relative top-2.5 gap-6 items-center w-full mt-5 text-white">
    <li><Search size={20} /></li>
    <li><ShoppingBag size={20} /></li>
  </ul>
</nav>

    ):('')
   }
   
  </header>
  );
};

export default NavBar;
