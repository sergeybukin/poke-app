import { memo } from "react";
import { NavLink } from "react-router-dom";
interface IProps {
  name: string;
}

export const ListItem = memo((props: IProps) => {
  const { name } = props;

  return (
    <li>
      <NavLink to={`/pokemon/${name}`}>{name}</NavLink>
    </li>
  );
});
