import React, { Fragment } from "react";
import styled from "styled-components";

import { describeArc } from "../../utils/helpers";

const Path = styled.path`
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
`;

const Arc = ({ x, y, radius, startAngle, endAngle, fill, isExvert, gap }) => {
  return (
    <Fragment>
      <Path
        className="arc"
        d={describeArc(x, y, radius - gap / 2, startAngle, endAngle, gap)}
        opacity={isExvert ? 0.15 : 1}
        fill={fill}
      />
    </Fragment>
  );
};

export default Arc;
