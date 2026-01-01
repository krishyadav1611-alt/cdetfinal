import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            GET IN <span className="text-primary">TOUCH</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
            For artist submissions, collaborations, promotions, or serious inquiries — reach out directly. We value real communication, real intent, and real culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:text-primary transition-colors">
                <Mail />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase">Email Us</h3>
              <a href="mailto:cdetmedia@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
                cdetmedia@gmail.com
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:text-primary transition-colors">
                <Phone />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase">Call Us</h3>
              <div className="flex flex-col space-y-1">
                <a href="tel:+919588051727" className="text-muted-foreground hover:text-white transition-colors">+91 9588051727</a>
                <a href="tel:+918453151897" className="text-muted-foreground hover:text-white transition-colors">+91 8453151897</a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:text-primary transition-colors">
                <Instagram />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase">Follow Us</h3>
              <a href="https://instagram.com/cdet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                @cdet
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
