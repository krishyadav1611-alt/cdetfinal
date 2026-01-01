import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertSubmission } from "@shared/schema";

export function useCreateSubmission() {
  return useMutation({
    mutationFn: async (data: InsertSubmission) => {
      const res = await fetch(api.submissions.create.path, {
        method: api.submissions.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.submissions.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit music");
      }
      
      return api.submissions.create.responses[201].parse(await res.json());
    },
  });
}
