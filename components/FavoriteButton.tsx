import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import axios from "axios";
import { FC, useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();

  const { user, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = user?.favoriteIds || [];
    return list.includes(movieId);
  }, [user?.favoriteIds, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...user,
      favoriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [isFavorite, movieId, mutate, mutateFavorites, user]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
      onClick={toggleFavorites}
    >
      <Icon className="text-white" size={25} />
    </div>
  );
};

export default FavoriteButton;
