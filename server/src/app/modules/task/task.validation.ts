import { z } from 'zod';

const createTaskSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    status: z.enum(['pending', 'completed']).optional(),
  }),
});

export const taskValidation = {
  createTaskSchema,
};
