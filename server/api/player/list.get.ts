export default defineEventHandler(async (event) => {
  const players = await prisma.player.findMany({
  select: {
    id: true,
    name: true,
    fullName: true
  }
  });

  return players
})
