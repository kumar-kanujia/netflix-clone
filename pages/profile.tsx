import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

const ProfilePage = () => {
  return (
    <div>
      <p className="text-white text-4xl">
        This is the profile page. You must be signed in to access this page.
      </p>
    </div>
  );
};

export default ProfilePage;

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
