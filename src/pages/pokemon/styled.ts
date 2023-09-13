import styled from "@emotion/styled";

export const PokemonPageStyled = styled.div`
  .pokemon-title {
    text-transform: capitalize;
  }

  .ability-title {
    margin: 0;
  }

  ul {
    padding: 12px;
  }

  .sprites {
    display: flex;
    width: fit-content;
    max-width: 90%;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
