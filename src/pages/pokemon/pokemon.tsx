import useSWR from "swr";
import { fetcher } from "../../utils";
import { useParams } from "react-router-dom";
import { FetchContainer } from "../../components/fetch-container";
import { Ability } from "../../components/ability";
import { useMemo } from "react";
import { PokemonPageStyled } from "./styled";

interface IRouteParams {
  name: string;
}

export const PokemonPage = () => {
  const { name } = useParams<IRouteParams>();

  const { data, error, isLoading } = useSWR<IPokemon>(
    `pokemon/${name}`,
    fetcher,
  );

  const abilities = useMemo(() => {
    if (!data?.abilities) return null;

    return data.abilities.map(({ ability }) => (
      <Ability key={ability.id} ability={ability} />
    ));
  }, [data]);

  const sprites = useMemo(() => {
    if (!data?.sprites) return null;

    const sprites = Object.values(data.sprites).filter(
      (sprite) => typeof sprite === "string",
    );

    return sprites.map((sprite, i) => (
      <img alt={`sprite-${i + 1}`} key={sprite} src={sprite} />
    ));
  }, [data]);

  return (
    <FetchContainer isLoading={isLoading} error={!!error} noData={!data}>
      <PokemonPageStyled>
        <div className={"sprites"}>{sprites}</div>
        <h1 className={"pokemon-title"}>{data?.name}</h1>
        <div>Weight: {data?.weight || "-"}</div>
        <div>Height: {data?.height || "-"}</div>
        {data?.abilities ? (
          <ul>
            <h3 className={"ability-title"}>Abilities</h3>
            {abilities}
          </ul>
        ) : null}
      </PokemonPageStyled>
    </FetchContainer>
  );
};
