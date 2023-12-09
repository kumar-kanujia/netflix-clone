import prismadb from "@/lib/prismadb";
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

const serverAuth = async (request: NextApiRequest) => {
  const session = await getSession({ req: request });

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("No user found");
  }

  return { currentUser };
};

export default serverAuth;
