import { ListItem } from "./list-item";

interface IProps {
  pokemons: IBaseName[];
}

export const List = ({ pokemons }: IProps) => {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <ListItem key={pokemon.name} name={pokemon.name} />
      ))}
    </ul>
  );
};
