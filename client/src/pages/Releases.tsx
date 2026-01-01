import { useReleases } from "@/hooks/use-releases";
import { motion } from "framer-motion";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { Loader2, Disc } from "lucide-react";

export default function Releases() {
  const { data: releases, isLoading, error } = useReleases();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div className="min-h-screen pt-24 text-center text-red-500">Failed to load releases.</div>;
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
            LATEST <span className="text-primary">DROPS</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every release under CDET MEDIA is crafted with intention — from sound selection to visual identity.
          </p>
        </div>

        {(!releases || releases.length === 0) ? (
          <div className="text-center text-muted-foreground py-20 border border-dashed border-white/10 rounded-xl">
            No releases found yet. The studio is hot though.
          </div>
        ) : (
          <div className="space-y-8">
            {releases.map((release, idx) => (
              <motion.div 
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Cover Art */}
                  <div className="w-full md:w-64 h-64 md:h-auto relative flex-shrink-0">
                    <img 
                      src={release.coverUrl || "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60"} 
                      alt={release.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Disc className="w-16 h-16 text-white animate-spin-slow" />
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="p-8 flex flex-col justify-center flex-grow">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                      <div>
                        <h3 className="text-3xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                          {release.title}
                        </h3>
                        <p className="text-xl text-white/60 font-light">{release.artistName}</p>
                      </div>
                      
                      <div className="flex gap-3">
                         {release.spotifyUrl && (
                          <a href={release.spotifyUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/50 rounded-full text-white hover:text-[#1DB954] hover:bg-white/10 transition-all">
                            <FaSpotify size={20} />
                          </a>
                        )}
                        {release.appleMusicUrl && (
                          <a href={release.appleMusicUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/50 rounded-full text-white hover:text-[#FB233B] hover:bg-white/10 transition-all">
                            <FaApple size={20} />
                          </a>
                        )}
                        {release.youtubeUrl && (
                          <a href={release.youtubeUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/50 rounded-full text-white hover:text-[#FF0000] hover:bg-white/10 transition-all">
                            <FaYoutube size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed border-t border-white/5 pt-6">
                      {release.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-20 text-center pb-8">
          <p className="text-sm font-mono text-primary/60 uppercase">
            // This isn't background music. This is statement sound.
          </p>
        </div>
      </div>
    </div>
  );
}
