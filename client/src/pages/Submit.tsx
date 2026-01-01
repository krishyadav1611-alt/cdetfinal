import { useCreateSubmission } from "@/hooks/use-submissions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubmissionSchema, type InsertSubmission } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

export default function Submit() {
  const { mutate, isPending } = useCreateSubmission();
  const { toast } = useToast();
  
  const form = useForm<InsertSubmission>({
    resolver: zodResolver(insertSubmissionSchema),
    defaultValues: {
      artistName: "",
      email: "",
      genre: "",
      streamingLinks: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertSubmission) => {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Demo Received",
          description: "We'll listen. If the vibe is right, we'll reach out.",
          variant: "default", 
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Submission Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-display font-bold text-white mb-6">
                SUBMIT <span className="text-primary">YOUR MUSIC</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                CDET MEDIA is always open to discovering new talent. If your sound is authentic, your vision is clear, and your music carries real energy — we want to hear it.
              </p>
              
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Submission Guidelines</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> No unfinished demos.</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Private Soundcloud or Drive links preferred.</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Genres: Phonk, Funk, Underground, Dark Trap.</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Be patient. We listen to everything.</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="bg-black border border-white/10 p-8 rounded-2xl shadow-2xl shadow-primary/5">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-gray-400">Artist Name</label>
                <input
                  {...form.register("artistName")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="e.g. NIGHT MANE"
                />
                {form.formState.errors.artistName && <span className="text-xs text-red-500">{form.formState.errors.artistName.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-gray-400">Email Address</label>
                <input
                  {...form.register("email")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="you@example.com"
                />
                {form.formState.errors.email && <span className="text-xs text-red-500">{form.formState.errors.email.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-gray-400">Genre</label>
                <input
                  {...form.register("genre")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Phonk / Dark Trap / etc"
                />
                {form.formState.errors.genre && <span className="text-xs text-red-500">{form.formState.errors.genre.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-gray-400">Streaming Links</label>
                <input
                  {...form.register("streamingLinks")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Spotify / SoundCloud URL"
                />
                {form.formState.errors.streamingLinks && <span className="text-xs text-red-500">{form.formState.errors.streamingLinks.message}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-gray-400">Message to Label</label>
                <textarea
                  {...form.register("message")}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your vision..."
                />
                {form.formState.errors.message && <span className="text-xs text-red-500">{form.formState.errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Submit Your Music <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              
              <p className="text-center text-xs text-muted-foreground mt-4">
                Drop your best work. Let the music speak.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
