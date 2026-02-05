 import { Link } from "react-router-dom";
 import Layout from "@/components/Layout";
 import { Sparkles, Heart, MessageCircle } from "lucide-react";
 
 const services = [
   {
     icon: Sparkles,
     title: "Custom Dresses",
     description:
       "From concept to creation, we design and craft dresses tailored to your exact measurements and personal style. Whether you have a specific vision or need guidance, we'll create something truly unique for you.",
   },
   {
     icon: Heart,
     title: "Bridal & Occasion Wear",
     description:
       "Make your special day unforgettable with a custom wedding gown or elegant occasion dress. We specialize in bridal wear, bridesmaid dresses, mother of the bride outfits, and formal event attire.",
   },
   {
     icon: MessageCircle,
     title: "Fashion Consultation",
     description:
       "Not sure where to start? Our expert consultation service helps you discover your personal style, choose the perfect silhouettes, and select fabrics that complement your vision and body type.",
   },
 ];
 
 const Services = () => {
   return (
     <Layout>
       {/* Hero */}
       <section className="section-padding bg-cream">
         <div className="container mx-auto px-6 text-center">
           <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-warm-charcoal mb-6">
             Our Services
           </h1>
           <p className="text-warm-gray text-lg max-w-2xl mx-auto">
             We offer a range of bespoke fashion services designed to make you
             feel confident and beautiful. Every service is personalized to your
             unique needs.
           </p>
         </div>
       </section>
 
       {/* Services Grid */}
       <section className="section-padding">
         <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {services.map((service, index) => (
               <div
                 key={index}
                 className="card-elegant p-8 rounded-sm text-center"
               >
                 <div className="w-16 h-16 mx-auto mb-6 bg-dusty-rose-light/30 rounded-full flex items-center justify-center">
                   <service.icon className="w-8 h-8 text-dusty-rose" />
                 </div>
                 <h3 className="font-heading text-xl md:text-2xl text-warm-charcoal mb-4">
                   {service.title}
                 </h3>
                 <p className="text-warm-gray leading-relaxed mb-6">
                   {service.description}
                 </p>
                 <Link
                   to="/contact"
                   className="btn-outline inline-block rounded-sm text-sm py-2 px-6"
                 >
                   Inquire
                 </Link>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Process Section */}
       <section className="section-padding bg-cream">
         <div className="container mx-auto px-6">
           <div className="max-w-3xl mx-auto text-center mb-12">
             <h2 className="font-heading text-3xl md:text-4xl font-medium text-warm-charcoal mb-6">
               Our Process
             </h2>
             <p className="text-warm-gray">
               Creating your perfect dress is a journey we take together
             </p>
           </div>
 
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { step: "01", title: "Consultation", desc: "Share your vision and ideas" },
               { step: "02", title: "Design", desc: "We sketch and plan your piece" },
               { step: "03", title: "Creation", desc: "Careful crafting and fittings" },
               { step: "04", title: "Delivery", desc: "Your perfect dress is ready" },
             ].map((item, index) => (
               <div key={index} className="text-center">
                 <div className="font-heading text-4xl text-dusty-rose mb-4">
                   {item.step}
                 </div>
                 <h3 className="font-heading text-lg text-warm-charcoal mb-2">
                   {item.title}
                 </h3>
                 <p className="text-warm-gray text-sm">{item.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA */}
       <section className="section-padding bg-dusty-rose-light/30">
         <div className="container mx-auto px-6 text-center">
           <h2 className="font-heading text-3xl md:text-4xl font-medium text-warm-charcoal mb-6">
             Let's Create Together
           </h2>
           <p className="text-warm-gray max-w-xl mx-auto mb-8">
             Ready to start your custom fashion journey? We'd love to hear about
             your vision and help bring it to life.
           </p>
           <Link to="/contact" className="btn-primary inline-block rounded-sm">
             Contact Us Today
           </Link>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Services;