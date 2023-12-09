import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { user } = useCurrentUser();

  return (
    <>
      <h1 className="text-2xl text-green-400">Netflix Clone</h1>
      <h2 className="text-xl text-green-400">Welcome {user?.name}</h2>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Sign Out
      </button>
    </>
  );
}
