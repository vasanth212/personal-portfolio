import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import { Menu, X } from 'lucide-react';


const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];




function Navbar() {

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const [isScrolled, setIsScrolled] = useState(false)


useEffect(()=>{

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)}

  window.addEventListener("scroll", handleScroll)

  return () => (window.removeEventListener("scroll", handleScroll))

},[])

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3":"bg-transparent border border-transparent py-5"}  z-50`}>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href='#' className='text-xl font-bold tracking-tight hover:text-primary'>
          V@
        </a>

        {/* Desktop nav */}
        <div className='hidden md:flex items-center gap-1 '>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((links, index)=> (

              <a href={links.href} key={index} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>{links.label}</a>


            ))}

          </div>
        </div>

        {/*mobile menu button  */}
        <button className='md:hidden p-2 text-foreground cursor-pointer' onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}>
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>

      </nav>


            {/* mobile menu */}
    {isMobileMenuOpen && (
        <div className='md:hidden glass-strong animate-fade-in'>
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
            {navLinks.map((links, index)=> (

        <a href={links.href}
        key={index}
        onClick={()=>setIsMobileMenuOpen(false)}
        className='text-lg text-muted-foreground hover:text-foreground py-2'>
          
        {links.label}</a>
        

      ))}

        </div>
      </div>
    )}


    </header>
  )
}

export default Navbar