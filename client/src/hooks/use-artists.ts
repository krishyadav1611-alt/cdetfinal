import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useArtists() {
  return useQuery({
    queryKey: [api.artists.list.path],
    queryFn: async () => {
      const res = await fetch(api.artists.list.path);
      if (!res.ok) throw new Error("Failed to fetch artists");
      return api.artists.list.responses[200].parse(await res.json());
    },
  });
}
