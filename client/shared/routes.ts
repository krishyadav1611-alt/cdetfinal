import { z } from "zod";

export const apiResponse = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    success: z.boolean(),
    data: schema
  });
