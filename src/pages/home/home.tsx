import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useQuery } from "../../hooks/useQuery";
import { PAGE_QUERY_PARAM, PAGE_SIZE } from "../../constants/main";
import { fetcher } from "../../utils";
import { FetchContainer } from "../../components/fetch-container";
import useSWR from "swr";

export const HomePage = () => {
  const { query } = useQuery();

  const page: number = Number(query.get(PAGE_QUERY_PARAM)) || 0;

  const { data, error, isLoading } = useSWR<IPokemonsListPage>(
    `pokemon/?offset=${page * PAGE_SIZE}&limit=${PAGE_SIZE}`,
    fetcher,
  );

  return (
    <FetchContainer
      error={!!error}
      isLoading={isLoading}
      noData={!data || !data.results}
    >
      {data ? <List pokemons={data.results} /> : null}
      {data ? <Pagination pageCount={data.count / PAGE_SIZE} /> : null}
    </FetchContainer>
  );
};
