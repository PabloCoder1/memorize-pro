"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function syncUser() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) return null;

  // Tenta encontrar o usuário no nosso banco
  const existingUser = await db.user.findUnique({
    where: { externalId: userId },
  });

  // Se não existir, a gente cria ele agora
  if (!existingUser) {
    const newUser = await db.user.create({
      data: {
        externalId: userId,
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName} ${user.lastName}`,
      },
    });
    return newUser;
  }

  return existingUser;
}