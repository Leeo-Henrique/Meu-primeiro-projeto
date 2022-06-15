import { StyledList } from "./styles";
export const Lista = ({ empresa }) => {
  console.log(empresa);
  return (
    <StyledList>
      <figure>
        <img
          src={empresa.owner.avatar_url}
          alt={empresa.owner.login + " logo"}
        ></img>
      </figure>
      <div className="subtitle">
        <h1>{empresa.full_name}</h1>
        <p>{empresa.description}</p>
      </div>
    </StyledList>
  );
};
