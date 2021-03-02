import React from "react";
import styled from "styled-components";
import Image from "next/image";
import media from "styled-media-query";

const BG = styled.div`
  padding: 64px var(--columnPaddingNormal);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gutterWidth);

  ${media.greaterThan("medium")`
    grid-template-columns: 1fr 1fr;
  `}
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Heading = styled.h2`
  font-size: calc(var(--size-xl) * 1.5);
  line-height: 1.25em;
`;

const Subheading = styled.h3`
  font-size: var(--size-xl);
  line-height: 1.333em;
`;

function SplitView({ title, text, img }) {
  return (
    <BG>
      <Grid>
        <div>
          <Heading>{title}</Heading>
          <Subheading>{text}</Subheading>
        </div>
        <ImgContainer>
          <Image src={img} layout="intrinsic" width="750" height="500" />
        </ImgContainer>
      </Grid>
    </BG>
  );
}

export default SplitView;
