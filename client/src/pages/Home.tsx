import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Disc, Mic2, Activity } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tighter text-white mb-6">
              <GlitchText>CDET Media</GlitchText>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl mx-auto mb-10 tracking-wide">
              Raw Sound. <span className="text-primary font-bold">Real Culture.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/artists" className="group px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 clip-path-slant flex items-center gap-2">
                Explore Sound <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/submit" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white transition-all duration-300">
                Submit Music
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  From the <span className="text-primary">Streets</span> to the Speakers
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  CDET MEDIA is an independent record label built for artists who move in the shadows and speak through sound. Rooted in Phonk and Funk, driven by underground energy, and powered by creative freedom.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 border border-white/10 hover:border-primary/50 transition-colors">
                    <Activity className="text-primary w-8 h-8 mb-4" />
                    <h3 className="text-white font-bold mb-2">Phonk Energy</h3>
                    <p className="text-sm text-muted-foreground">Dark, gritty, and raw sounds that define the underground.</p>
                  </div>
                  <div className="bg-white/5 p-6 border border-white/10 hover:border-primary/50 transition-colors">
                    <Disc className="text-primary w-8 h-8 mb-4" />
                    <h3 className="text-white font-bold mb-2">Real Funk</h3>
                    <p className="text-sm text-muted-foreground">Grooves that hit hard without chasing trends.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl absolute inset-0 animate-pulse" />
              {/* Unsplash: Dark studio mixer */}
              {/* <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop" /> */}
              <div className="relative z-10 border border-white/10 p-2 bg-black/50 backdrop-blur-sm">
                 <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop" 
                  alt="Studio Gear"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
