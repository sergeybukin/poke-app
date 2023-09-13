import { useQuery } from "../../hooks/useQuery";
import { PaginationStyled } from "./styled";
import { PAGE_QUERY_PARAM } from "../../constants/main";

interface IProps {
  pageCount: number;
}

export const Pagination = ({ pageCount }: IProps) => {
  const { setQuery, query } = useQuery();

  const handlePageClick = (selectedItem: { selected: number }) => {
    setQuery(PAGE_QUERY_PARAM, selectedItem.selected.toString());
  };

  return (
    <PaginationStyled
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageCount={pageCount}
      forcePage={Number(query.get(PAGE_QUERY_PARAM)) || 0}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
