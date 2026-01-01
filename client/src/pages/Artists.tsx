import { useArtists } from "@/hooks/use-artists";
import { motion } from "framer-motion";
import { FaSpotify, FaApple, FaInstagram } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";

export default function Artists() {
  const { data: artists, isLoading, error } = useArtists();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center text-red-500">
        Failed to load artists. Please try again later.
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
            THE <span className="text-primary">ROSTER</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            CDET MEDIA represents artists who bring weight, groove, and originality to the sound.
          </p>
        </div>

        {(!artists || artists.length === 0) ? (
          <div className="text-center text-muted-foreground py-20 border border-dashed border-white/10 rounded-xl">
            No artists found. The roster is currently loading from the underground.
          </div>
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {artists.map((artist) => (
              <motion.div 
                key={artist.id}
                variants={item}
                className="group relative bg-black border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Image Aspect Ratio Wrapper */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img 
                    src={artist.imageUrl || "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60"} 
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2">{artist.genre}</p>
                      <h3 className="text-3xl font-display font-bold text-white mb-2">
                        <GlitchText>{artist.name}</GlitchText>
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {artist.description}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        {artist.spotifyUrl && (
                          <a href={artist.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1DB954] transition-colors">
                            <FaSpotify size={24} />
                          </a>
                        )}
                        {artist.appleMusicUrl && (
                          <a href={artist.appleMusicUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FB233B] transition-colors">
                            <FaApple size={24} />
                          </a>
                        )}
                        {artist.instagramUrl && (
                          <a href={artist.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E1306C] transition-colors">
                            <FaInstagram size={24} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <div className="mt-24 text-center">
          <p className="text-2xl font-display uppercase tracking-widest text-white/50">
            We don't sign numbers. We sign <span className="text-white">Vision</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
