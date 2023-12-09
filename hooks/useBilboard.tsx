import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useBilboard = () => {
  const { data, error, isLoading } = useSWR("/api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    movie: data,
    error,
    isLoading,
  };
};
export default useBilboard;
