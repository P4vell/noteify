import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null;
  }

  const user = await db.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return null;
  }

  return user;
};
