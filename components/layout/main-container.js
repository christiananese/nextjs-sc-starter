import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns 1fr min(65ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;
`;

export const Section = styled.section`
  grid-column: ${(p) => (p.fullBleed ? "1 / -1" : 2)};
`;

export const Contain = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export default Container;
