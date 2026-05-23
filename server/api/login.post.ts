import { z } from 'zod'
import * as bcrypt from "bcrypt";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  const player = await prisma.player.findUnique({
    where: {
      email: email
    }
  });

  if (player) {
    const match = await bcrypt.compare(password, player.password);
    if (match) {
      await setUserSession(event, {
        user: {
          id: player.id,
          name: player.name!,
          fullName: player.fullName!
        },
        currentGame: null
      })
      return {}
    }
  }
  throw createError({
    status: 401,
    message: 'Неправильный логин или пароль',
  })
})
