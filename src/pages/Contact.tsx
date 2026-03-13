 import { useState } from "react";
 import Layout from "@/components/Layout";
 import { Mail, Phone, MapPin, Send } from "lucide-react";
 import { toast } from "sonner";
 
 const Contact = () => {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     dressType: "",
     message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
   ) => {
     const { name, value } = e.target;
     setFormData((prev) => ({ ...prev, [name]: value }));
   };
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
 
     // Simulate form submission
     await new Promise((resolve) => setTimeout(resolve, 1000));
 
     toast.success("Thank you for your inquiry! We'll be in touch soon.");
     setFormData({ name: "", email: "", dressType: "", message: "" });
     setIsSubmitting(false);
   };
 
   return (
     <Layout>
       {/* Hero */}
       <section className="section-padding bg-cream">
         <div className="container mx-auto px-6 text-center">
           <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-warm-charcoal mb-6">
             Get in Touch
           </h1>
           <p className="text-warm-gray text-lg max-w-2xl mx-auto">
             We'd love to hear from you. Whether you have a question about our
             services or want to start creating your dream dress, we're here to
             help.
           </p>
         </div>
       </section>
 
       {/* Contact Section */}
       <section className="section-padding">
         <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
             {/* Contact Form */}
             <div className="order-2 lg:order-1">
               <h2 className="font-heading text-2xl md:text-3xl text-warm-charcoal mb-8">
                 Send Us a Message
               </h2>
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label
                     htmlFor="name"
                     className="block text-sm font-medium text-warm-charcoal mb-2"
                   >
                     Name
                   </label>
                   <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className="input-elegant"
                     placeholder="Your name"
                   />
                 </div>
 
                 <div>
                   <label
                     htmlFor="email"
                     className="block text-sm font-medium text-warm-charcoal mb-2"
                   >
                     Email
                   </label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="input-elegant"
                     placeholder="your@email.com"
                   />
                 </div>
 
                 <div>
                   <label
                     htmlFor="dressType"
                     className="block text-sm font-medium text-warm-charcoal mb-2"
                   >
                     Dress Type
                   </label>
                   <select
                     id="dressType"
                     name="dressType"
                     value={formData.dressType}
                     onChange={handleChange}
                     required
                     className="input-elegant"
                   >
                     <option value="">Select a dress type</option>
                     <option value="wedding">Wedding Dress</option>
                     <option value="evening">Evening Gown</option>
                     <option value="cocktail">Cocktail Dress</option>
                     <option value="bridesmaid">Bridesmaid Dress</option>
                     <option value="occasion">Special Occasion</option>
                     <option value="other">Other</option>
                   </select>
                 </div>
 
                 <div>
                   <label
                     htmlFor="message"
                     className="block text-sm font-medium text-warm-charcoal mb-2"
                   >
                     Message
                   </label>
                   <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     rows={5}
                     className="input-elegant resize-none"
                     placeholder="Tell us about your vision..."
                   />
                 </div>
 
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="btn-primary w-full rounded-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? (
                     "Sending..."
                   ) : (
                     <>
                       <Send size={18} />
                       Send Message
                     </>
                   )}
                 </button>
               </form>
             </div>
 
             {/* Contact Info */}
             <div className="order-1 lg:order-2">
               <h2 className="font-heading text-2xl md:text-3xl text-warm-charcoal mb-8">
                 Contact Information
               </h2>
               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-dusty-rose-light/30 rounded-full flex items-center justify-center flex-shrink-0">
                     <Mail className="w-5 h-5 text-dusty-rose" />
                   </div>
                   <div>
                     <h3 className="font-medium text-warm-charcoal mb-1">
                       Email
                     </h3>
                     <a
                       href="mailto:hello@shinzadress.com"
                       className="text-warm-gray hover:text-dusty-rose transition-colors"
                     >
                       hello@shinzadress.com
                     </a>
                   </div>
                 </div>
 
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-dusty-rose-light/30 rounded-full flex items-center justify-center flex-shrink-0">
                     <Phone className="w-5 h-5 text-dusty-rose" />
                   </div>
                   <div>
                     <h3 className="font-medium text-warm-charcoal mb-1">
                       Phone
                     </h3>
                     <a
                       href="tel:+1234567890"
                       className="text-warm-gray hover:text-dusty-rose transition-colors"
                     >
                       +1 (234) 567-890
                     </a>
                   </div>
                 </div>
 
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-dusty-rose-light/30 rounded-full flex items-center justify-center flex-shrink-0">
                     <MapPin className="w-5 h-5 text-dusty-rose" />
                   </div>
                   <div>
                     <h3 className="font-medium text-warm-charcoal mb-1">
                       Studio
                     </h3>
                     <p className="text-warm-gray">
                       123 Fashion Avenue
                       <br />
                       Suite 456
                       <br />
                       New York, NY 10001
                     </p>
                   </div>
                 </div>
               </div>
 
               {/* Hours */}
               <div className="mt-12 p-6 bg-cream rounded-sm">
                 <h3 className="font-heading text-lg text-warm-charcoal mb-4">
                   Studio Hours
                 </h3>
                 <div className="space-y-2 text-warm-gray">
                   <div className="flex justify-between">
                     <span>Monday - Friday</span>
                     <span>10:00 AM - 6:00 PM</span>
                   </div>
                   <div className="flex justify-between">
                     <span>Saturday</span>
                     <span>By Appointment</span>
                   </div>
                   <div className="flex justify-between">
                     <span>Sunday</span>
                     <span>Closed</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Contact;
