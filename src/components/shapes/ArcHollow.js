import React, { Fragment } from "react";
import styled from "styled-components";

import { describeArcHollow } from "../../utils/helpers";

const Path = styled.path`
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
`;

const Arc = ({
  x,
  y,
  radius,
  startAngle,
  endAngle,
  radiusHollow,
  fill,
  isExvert,
  gap
}) => {
  return (
    <Fragment>
      <Path
        className="arc"
        d={describeArcHollow(
          x,
          y,
          radius,
          startAngle,
          endAngle,
          radiusHollow + gap / 2,
          gap
        )}
        opacity={isExvert ? 1 : 0.15}
        fill={fill}
      />
    </Fragment>
  );
};

export default Arc;
