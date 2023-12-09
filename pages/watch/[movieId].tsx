import useMovie from "@/hooks/useMovie";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

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

const WatchMovie = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { movie } = useMovie(movieId as string);
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={30}
        />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light mr-2">Watching:</span>
          {movie?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={movie?.videoUrl}
      />
    </div>
  );
};
export default WatchMovie;
