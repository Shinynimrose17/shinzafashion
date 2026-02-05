 import { useState } from "react";
 import { Link, useLocation } from "react-router-dom";
 import { Menu, X } from "lucide-react";
 
 const navItems = [
   { label: "Home", path: "/" },
   { label: "Gallery", path: "/gallery" },
   { label: "Services", path: "/services" },
   { label: "Contact", path: "/contact" },
 ];
 
 const Header = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const location = useLocation();
 
   const isActive = (path: string) => location.pathname === path;
 
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-border/50">
       <div className="container mx-auto px-6 py-4">
         <div className="flex items-center justify-between">
           {/* Logo */}
           <Link to="/" className="flex items-center gap-2">
             <span className="font-heading text-xl md:text-2xl font-semibold text-warm-charcoal tracking-tight">
               Sinza Dress Fashion
             </span>
           </Link>
 
           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8">
             {navItems.map((item) => (
               <Link
                 key={item.path}
                 to={item.path}
                 className={`nav-link text-sm uppercase tracking-widest ${
                   isActive(item.path) ? "active text-dusty-rose" : ""
                 }`}
               >
                 {item.label}
               </Link>
             ))}
           </nav>
 
           {/* Mobile Menu Button */}
           <button
             className="md:hidden p-2 text-warm-charcoal hover:text-dusty-rose transition-colors"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             aria-label="Toggle menu"
           >
             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
         </div>
 
         {/* Mobile Navigation */}
         {mobileMenuOpen && (
           <nav className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
             <div className="flex flex-col gap-4">
               {navItems.map((item) => (
                 <Link
                   key={item.path}
                   to={item.path}
                   className={`text-sm uppercase tracking-widest py-2 transition-colors ${
                     isActive(item.path)
                       ? "text-dusty-rose font-medium"
                       : "text-warm-charcoal hover:text-dusty-rose"
                   }`}
                   onClick={() => setMobileMenuOpen(false)}
                 >
                   {item.label}
                 </Link>
               ))}
             </div>
           </nav>
         )}
       </div>
     </header>
   );
 };
 
 export default Header;