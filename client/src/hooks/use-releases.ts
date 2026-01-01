import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useReleases() {
  return useQuery({
    queryKey: [api.releases.list.path],
    queryFn: async () => {
      const res = await fetch(api.releases.list.path);
      if (!res.ok) throw new Error("Failed to fetch releases");
      return api.releases.list.responses[200].parse(await res.json());
    },
  });
}
