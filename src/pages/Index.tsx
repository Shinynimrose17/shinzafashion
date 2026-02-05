import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBackground from "@/assets/hero-background.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Elegant fashion atelier"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-warm-charcoal mb-6 animate-slide-up">
            Elegance in Every Stitch
          </h1>
          <p className="text-lg md:text-xl text-warm-gray max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-100">
            Where custom fashion meets personal style. We craft timeless pieces
            that celebrate your unique beauty and tell your story.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-block rounded-sm animate-slide-up animate-delay-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-warm-charcoal/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-warm-charcoal/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-warm-charcoal mb-6">
              Crafting Dreams into Reality
            </h2>
            <p className="text-warm-gray leading-relaxed text-lg">
              At Sinza Dress Fashion, we believe every woman deserves to feel
              extraordinary. Our bespoke creations blend traditional
              craftsmanship with contemporary elegance, ensuring each piece is
              as unique as the person wearing it. From bridal dreams to special
              occasion wear, we bring your vision to life with meticulous
              attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-warm-charcoal mb-4">
              Featured Creations
            </h2>
            <p className="text-warm-gray max-w-xl mx-auto">
              A glimpse into our latest designs and custom creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gallery-item">
              <img src={gallery1} alt="Custom wedding dress" />
            </div>
            <div className="gallery-item">
              <img src={gallery2} alt="Dusty rose evening gown" />
            </div>
            <div className="gallery-item">
              <img src={gallery3} alt="Gold cocktail dress" />
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-outline inline-block rounded-sm">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dusty-rose-light/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-warm-charcoal mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto mb-8">
            Let's discuss your vision and bring your dream dress to life. Every
            journey begins with a conversation.
          </p>
          <Link to="/contact" className="btn-primary inline-block rounded-sm">
            Start Your Journey
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
