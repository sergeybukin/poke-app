import { useCallback, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

interface IResult {
  query: URLSearchParams;
  setQuery: (key: string, value: string) => void;
}

export const useQuery = (): IResult => {
  const { search } = useLocation();
  const history = useHistory();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  const setQuery = useCallback(
    (key: string, value: string) => {
      query.set(key, value);
      history.push({ search: query.toString() });
    },
    [history, query],
  );

  return { query, setQuery };
};
