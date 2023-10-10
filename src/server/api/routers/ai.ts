import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const aiRouter = createTRPCRouter({
  getPromptOutput: publicProcedure
    .input(z.object({prompt: z.string()}))
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.session.prompt(input.prompt);

      return {
        text: res
      };
    }),
});
