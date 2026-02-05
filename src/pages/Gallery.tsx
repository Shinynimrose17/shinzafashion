 import Layout from "@/components/Layout";
 import gallery1 from "@/assets/gallery-1.jpg";
 import gallery2 from "@/assets/gallery-2.jpg";
 import gallery3 from "@/assets/gallery-3.jpg";
 import gallery4 from "@/assets/gallery-4.jpg";
 import gallery5 from "@/assets/gallery-5.jpg";
 import gallery6 from "@/assets/gallery-6.jpg";
 
 const galleryItems = [
   { src: gallery1, title: "Ivory Lace Wedding Gown", category: "Bridal" },
   { src: gallery2, title: "Dusty Rose Evening Dress", category: "Evening Wear" },
   { src: gallery3, title: "Gold Satin Cocktail Dress", category: "Cocktail" },
   { src: gallery4, title: "Blush Tulle Bridesmaid Dress", category: "Bridesmaids" },
   { src: gallery5, title: "Sage Lace Midi Dress", category: "Special Occasion" },
   { src: gallery6, title: "Lavender Ball Gown", category: "Evening Wear" },
 ];
 
 const Gallery = () => {
   return (
     <Layout>
       {/* Hero */}
       <section className="section-padding bg-cream">
         <div className="container mx-auto px-6 text-center">
           <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-warm-charcoal mb-6">
             Our Gallery
           </h1>
           <p className="text-warm-gray text-lg max-w-2xl mx-auto">
             Explore our collection of custom dresses and bespoke creations.
             Each piece represents hours of dedication, craftsmanship, and love
             for the art of fashion.
           </p>
         </div>
       </section>
 
       {/* Gallery Grid */}
       <section className="section-padding">
         <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {galleryItems.map((item, index) => (
               <div key={index} className="gallery-item group">
                 <img src={item.src} alt={item.title} />
                 <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                   <span className="text-dusty-rose-light text-sm uppercase tracking-widest mb-1">
                     {item.category}
                   </span>
                   <h3 className="font-heading text-xl text-cream">
                     {item.title}
                   </h3>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* More Coming */}
       <section className="section-padding bg-cream">
         <div className="container mx-auto px-6 text-center">
           <h2 className="font-heading text-2xl md:text-3xl text-warm-charcoal mb-4">
             New Designs Coming Soon
           </h2>
           <p className="text-warm-gray max-w-xl mx-auto">
             We're constantly creating new pieces. Follow us on social media to
             see our latest work and behind-the-scenes glimpses of our atelier.
           </p>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Gallery;