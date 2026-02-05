 import { Link } from "react-router-dom";
 import { Instagram, Mail, Phone } from "lucide-react";
 
 const Footer = () => {
   return (
     <footer className="bg-warm-charcoal text-cream py-16">
       <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {/* Brand */}
           <div>
             <h3 className="font-heading text-2xl font-medium mb-4">
               Sinza Dress Fashion
             </h3>
             <p className="text-cream/70 leading-relaxed">
               Creating timeless elegance through custom fashion design. Every
               stitch tells a story.
             </p>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-heading text-lg font-medium mb-4">
               Quick Links
             </h4>
             <nav className="flex flex-col gap-2">
               <Link
                 to="/"
                 className="text-cream/70 hover:text-dusty-rose-light transition-colors"
               >
                 Home
               </Link>
               <Link
                 to="/gallery"
                 className="text-cream/70 hover:text-dusty-rose-light transition-colors"
               >
                 Gallery
               </Link>
               <Link
                 to="/services"
                 className="text-cream/70 hover:text-dusty-rose-light transition-colors"
               >
                 Services
               </Link>
               <Link
                 to="/contact"
                 className="text-cream/70 hover:text-dusty-rose-light transition-colors"
               >
                 Contact
               </Link>
             </nav>
           </div>
 
           {/* Contact Info */}
           <div>
             <h4 className="font-heading text-lg font-medium mb-4">
               Get in Touch
             </h4>
             <div className="flex flex-col gap-3">
               <a
                 href="mailto:hello@sinzadress.com"
                 className="flex items-center gap-2 text-cream/70 hover:text-dusty-rose-light transition-colors"
               >
                 <Mail size={18} />
                 hello@sinzadress.com
               </a>
               <a
                 href="tel:+1234567890"
                 className="flex items-center gap-2 text-cream/70 hover:text-dusty-rose-light transition-colors"
               >
                 <Phone size={18} />
                 +1 (234) 567-890
               </a>
               <a
                 href="https://instagram.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-cream/70 hover:text-dusty-rose-light transition-colors"
               >
                 <Instagram size={18} />
                 @sinzadressfashion
               </a>
             </div>
           </div>
         </div>
 
         {/* Bottom Bar */}
         <div className="mt-12 pt-8 border-t border-cream/20 text-center">
           <p className="text-cream/50 text-sm">
             © {new Date().getFullYear()} Sinza Dress Fashion. All rights
             reserved.
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;