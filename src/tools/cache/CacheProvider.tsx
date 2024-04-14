import {
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useRef,
  useState,
} from "react";

interface CacheStore {
  cacheRef: MutableRefObject<Record<string, unknown>>;
  forceRerender: () => void;
  loadingRef: MutableRefObject<Record<string, boolean>>;
}

type Cache = Record<string, unknown>;

export const CacheContext = createContext<CacheStore | null>(null);

export const CacheProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [, forceRerender] = useState({} as Record<string, unknown>);
  const loadingRef = useRef<Record<string, boolean>>({});
  const cacheRef = useRef<Cache>({});

  return (
    <CacheContext.Provider
      value={{
        cacheRef,
        forceRerender: () => forceRerender({}),
        loadingRef,
      }}
    >
      {children}
    </CacheContext.Provider>
  );
};
