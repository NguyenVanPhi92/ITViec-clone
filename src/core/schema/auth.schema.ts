import z from 'zod'

export const LoginBody = z
  .object({
    email: z.string().min(1, { message: 'email is required' }).email({ message: 'invalid email' }),
    password: z.string().min(6, 'minmax password').max(100, 'minmaxPassword')
  })
  .strict()
export type LoginBodyType = z.TypeOf<typeof LoginBody>
