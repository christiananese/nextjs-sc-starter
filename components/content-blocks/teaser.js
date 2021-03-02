import React from "react";
import styled from "styled-components";

const BG = styled.div`
  padding: var(--rowPadding, 64px)
    var(--columnPadding, var(--columnPaddingNormal));
  background-image: url(${(p) => p.bgImg});
  background-size: cover;
  background-position: center;
`;

const Heading = styled.h2`
  font-size: calc(var(--size-xl) * 1.5);
  line-height: 1.25em;
`;

const Subheading = styled.h3`
  font-size: var(--size-xl);
  line-height: 1.333em;
`;

function Teaser({ title, text, img, ...delegated }) {
  return (
    <BG bgImg={img} {...delegated}>
      <Heading>{title}</Heading>
      <Subheading>{text}</Subheading>
    </BG>
  );
}

export default Teaser;
