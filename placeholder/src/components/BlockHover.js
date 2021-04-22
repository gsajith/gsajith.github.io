import React from "react";
import styled from "styled-components";

const Container = styled.a`
  position: relative;
  margin-left: 4px;
  margin-right: 4px;
`;
const Base = styled.div`
  padding: ${(props) => (props.padding ? props.padding : 0)}px;
  user-select: none;
`;
const Effect = styled(Base)`
  position: absolute;
  top: 0;
  left: 0;
  filter: invert(1);
  background: white;
  clip-path: ${(props) =>
    props.hovered
      ? "polygon(0 0, 110% 0, 130% 100%, 0 100%)"
      : "polygon(-20% 0, -20% 0, 0% 100%, -0% 100%)"};
  transition: clip-path ${(props) => (props.time ? props.time : 1000)}ms;
  }
`;

const BlockHover = (props) => {
  const { padding = 8, time = 1000, children } = props;
  const [hovered, setHovered] = React.useState(false);

  return (
    <Container
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex="1">
      <Base padding={padding}>{children}</Base>
      <Effect padding={padding} time={time} hovered={hovered}>
        {children}
      </Effect>
    </Container>
  );
};

export default BlockHover;
