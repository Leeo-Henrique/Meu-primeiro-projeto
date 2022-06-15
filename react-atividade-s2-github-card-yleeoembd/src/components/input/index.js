import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledTextField } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./styled";
import { Lista } from "../List";

export const Input = () => {
  const [platform, setPlatform] = useState([]);
  const [error, setError] = useState("");

  const schema = yup.object().shape({
    search: yup.string().required("Empty field!"),
  });

  const receiveData = (data) => {
    const dataTrim = data.search.trim()
    axios
      .get(`https://api.github.com/repos/${dataTrim}`)
      .then((res) => setPlatform([...platform, res.data]))
      .catch((err) => setError("Not found!"));
    setTimeout(() => {
      setError("");
    }, "5000");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log(errors);
  return (
    <Container>
      <form onSubmit={handleSubmit(receiveData)}>
        <StyledTextField
          id="standard-basic"
          label="Pesquisar"
          variant="standard"
          error={errors.search ? errors.search.message : error}
          placeholder="facebook/react"
          helperText={errors.search ? errors.search.message : error}
          {...register("search")}
        />
        <button onClick={console.log(platform)}>Pesquisar</button>
      </form>
      <ul className="containerList">
        {platform?.map((empresa) => {
          return <Lista empresa={empresa}></Lista>;
        })}
      </ul>
    </Container>
  );
};
