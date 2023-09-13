interface IProps {
  ability: IAbility;
}

export const Ability = ({ ability }: IProps) => {
  const { name } = ability;

  return (
    <li>
      <div>{name}</div>
    </li>
  );
};
