import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const linkBase = 'text-gray-600 hover:text-blue-600 transition-colors'
  const active = 'text-blue-600 font-semibold'

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
            <span className="text-lg font-bold text-gray-800">ShopEase</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Products</NavLink>
            <NavLink to="/services" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Services</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
