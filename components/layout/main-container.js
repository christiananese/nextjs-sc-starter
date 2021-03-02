import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns 1fr min(65ch, calc(100% - calc(var(--gutterWidth) * 2))) 1fr;
  grid-column-gap: var(--gutterWidth);
`;

export const Section = styled.section`
  position: relative;
  grid-column: ${(p) => (p.fullBleed ? "1 / -1" : 2)};
`;

export const Contain = styled.div`
  width: var(--layoutWidth);
  max-width: var(--layoutWidthMax);
  margin: 0 auto;
`;
