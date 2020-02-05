import React from "react";

import Header from "../Header/Header";
import Button from "../Button/Button";
import Center from "../Center/Center";

const Error = ({ onRetry }) => (
  <Center>
    <Header centered>Ops!</Header>
    <p>Ocorreu um erro inesperado ao carregar a lista de notas.</p>
    <Button onClick={onRetry}>Tentar novamente!</Button>
  </Center>
);

export default Error;