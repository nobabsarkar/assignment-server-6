import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
    email: z.string(),
    password: z.string(),
  }),
});

export const userValidations = {
  userValidationSchema,
};
