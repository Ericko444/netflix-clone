import { useEffect, useState } from 'react'
import './Nav.css'
const Nav = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://www.pngkey.com/png/detail/541-5411392_duckduckgo-logo-logo-duck-duck-go.png"
        alt="Duckduckgo Logo"
      ></img>
    </div>
  )
}

export default Nav
