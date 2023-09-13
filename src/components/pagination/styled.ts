import styled from "@emotion/styled";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

export const PaginationStyled = styled(ReactPaginate)<ReactPaginateProps>`
  display: flex;
  gap: 5px;

  li {
    list-style-type: none;
    border: 1px solid #333333;
    color: #333333;
    padding: 5px 10px;
    border-radius: 5px;

    &.selected {
      background-color: #ebebeb;
    }
  }
`;
