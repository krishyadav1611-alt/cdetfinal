import { Link } from "wouter";
import { FaInstagram, FaSpotify, FaSoundcloud } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              CDET<span className="text-primary">MEDIA</span>
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Independent. Underground. Artist-First.<br/>
              Raw Sound. Real Culture.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-display text-lg">Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/artists" className="text-muted-foreground hover:text-primary transition-colors">Artists</Link>
              <Link href="/releases" className="text-muted-foreground hover:text-primary transition-colors">Releases</Link>
              <Link href="/submit" className="text-muted-foreground hover:text-primary transition-colors">Submit Demo</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-display text-lg">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <FaSpotify size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                <FaSoundcloud size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CDET MEDIA. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-mono text-xs opacity-50">DESIGNED FOR THE UNDERGROUND</p>
        </div>
      </div>
    </footer>
  );
}
