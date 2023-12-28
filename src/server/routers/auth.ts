import { publicProcedure, router } from '../trpc';
import z from 'zod';
import prisma from '@/lib/prismadb';
import bcrypt from 'bcrypt';
import { TRPCError } from '@trpc/server';

export const authRouter = router({
  register: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;
      if (!name || !email || !password) {
        return null;
      }

      const hashedpassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashedpassword,
        },
      });

      return user;
    }),
});
