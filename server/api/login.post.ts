import { z } from 'zod'
import * as bcrypt from "bcrypt";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      await setUserSession(event, {
        user: {
          id: user.id,
          name: user.name!,
          fullName: user.fullName!
        },
        currentGame: null
      })
      return {}
    }
  }
  throw createError({
    status: 401,
    message: 'Bad credentials',
  })
})
