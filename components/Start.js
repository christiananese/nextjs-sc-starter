import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function Start() {
  return <Title>NextJS Styled components starter</Title>;
}

export default Start;
