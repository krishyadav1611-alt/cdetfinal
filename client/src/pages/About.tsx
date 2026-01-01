import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  const values = [
    "Artists own their identity",
    "Creativity comes first",
    "Culture matters more than numbers",
    "No manufactured viral hits",
    "Authenticity over algorithms",
    "Respect for the underground roots"
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase">
            About <span className="text-primary">CDET</span>
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            CDET MEDIA is an independent, artist-first record label created to support real talent without limits. We exist for artists who value authenticity over algorithms and culture over clout.
          </p>
        </motion.div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Unsplash: Dark tunnel/underground vibe */}
            <div className="relative border-l-4 border-primary pl-6">
               <img 
                src="https://images.unsplash.com/photo-1519638831568-d9897f54ed69?q=80&w=1000&auto=format&fit=crop" 
                alt="Underground Culture" 
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We believe music should feel real, not manufactured. Artists deserve freedom, respect, and a platform that amplifies their voice — not controls it.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our roots lie deep in Phonk and Funk, but our doors are open to all genres that carry real emotion, groove, and raw energy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
                    <Check size={14} />
                  </span>
                  <span className="text-white/90 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary/30 border border-white/5 p-12 text-center rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            NOT CORPORATE. JUST CULTURE.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't chase trends. We build movements. Join us.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
