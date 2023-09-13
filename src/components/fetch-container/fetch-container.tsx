import React from "react";

interface IProps {
  children: React.ReactNode;
  isLoading: boolean;
  error: boolean;
  noData: boolean;
}

export const FetchContainer = (props: IProps) => {
  const { children, isLoading, error, noData } = props;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (noData) {
    return <div>Data is not available</div>;
  }

  return <div>{children}</div>;
};
