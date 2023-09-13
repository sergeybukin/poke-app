interface IVerboseEffect {
  effect: string;
  short_effect: string;
  language: ILanguage;
}

interface IAbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: IPokemon;
}

interface IAbility {
  id: number;
  name: string;
  is_main_series: boolean;
  names: IBaseName[];
  effect_entries: IVerboseEffect[];
  pokemon: IAbilityPokemon[];
}
