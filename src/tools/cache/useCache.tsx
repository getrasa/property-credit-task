import { useContext, useEffect } from "react";
import { CacheContext } from "./CacheProvider";

interface ReturnProps<T> {
  data?: T;
  isFetching: boolean;
}

// Wasn't sure if I should use Tanstack's useQuery or not so I just implemented a simple version of it
const useCache = <ReturnValue,>(
  func: () => Promise<ReturnValue>,
  hash: unknown[] | string
): ReturnProps<ReturnValue> => {
  const key = hash instanceof Array ? hash.toString() : hash;
  const { cacheRef, forceRerender, loadingRef } = useContext(CacheContext)!;
  useEffect(() => {
    const fetchData = async () => {
      if (cacheRef.current[key] === undefined && !loadingRef.current[key]) {
        loadingRef.current = { ...loadingRef.current, [key]: true };
        forceRerender();
        try {
          const result = await func();
          cacheRef.current = { ...cacheRef.current, [key]: result };
          loadingRef.current = { ...loadingRef.current, [key]: false };
          forceRerender();
        } catch (error: unknown) {
          console.error(error);
          loadingRef.current = { ...loadingRef.current, [key]: false };
          forceRerender();
        }
      }
    };
    fetchData();
  }, [loadingRef.current[key]]);

  return {
    data: cacheRef.current[key] as ReturnValue,
    isFetching: loadingRef.current[key],
  };
};

export default useCache;
