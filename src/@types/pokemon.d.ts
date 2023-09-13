interface IPokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: IAbility;
}

interface IPokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface IPokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: IPokemonAbility[];
  sprites: IPokemonSprites;
}

interface IPokemonsListPage {
  count: number;
  next: string;
  previous: string;
  results: IBaseName[];
}
