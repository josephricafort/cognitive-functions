import React, { Fragment } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";

import Arc from "../components/shapes/Arc";
import ArcHollow from "../components/shapes/ArcHollow";
import { cogFuncAllConfig } from "../data/cogFuncAllConfig";

const ClipPathStyled = styled.clipPath`
  transition: all 1s ease;
  transform-origin: center;
`;

const CognitiveFunction = ({
  cogFunc: currCogFunc,
  isExvert,
  stackFunc: currStackFunc,
  type,
  chartId,
  configType,
  radius
}) => {
  const { cogFuncConfig, stackFuncConfig, xVersionConfig } = cogFuncAllConfig[
    configType
  ];

  const cogFuncIdx = cogFuncConfig.map((d) => d.cogFunc).indexOf(currCogFunc);
  const isExvertIdx = isExvert ? 0 : 1;
  const stackFuncIdx = stackFuncConfig
    .map((d) => d.stackFunc)
    .indexOf(currStackFunc);

  const {
    style: { fill, quad }
  } = cogFuncConfig[cogFuncIdx];
  const {
    style: { rotation }
  } = stackFuncConfig[stackFuncIdx];
  const {
    style: { areaRatio }
  } = xVersionConfig[isExvertIdx];

  const commonProps = {
    isExvert,
    x: 250,
    y: 250,
    startAngle: -90,
    endAngle: 0,
    radiusFull: 250,
    fill: fill,
    gap: 5
  };

  const { x, y, radiusFull } = commonProps;

  const rScale = (areaRatio) => radiusFull / Math.sqrt(areaRatio + 1);

  const arcHollowProps = {
    ...commonProps,
    radius: radiusFull,
    radiusHollow: rScale(areaRatio)
  };

  const arcProps = {
    ...commonProps,
    radius: rScale(areaRatio)
  };

  const isExvertLabel = isExvert ? "extravert" : "introvert";
  const uniqueId = `${chartId}-${type}-${currCogFunc}-${currStackFunc}-${isExvertLabel}`;
  const cogFuncId = `cogfunc-${uniqueId}`;
  const clipPathId = `clip-path-${uniqueId}`;
  const transformClipPath = `rotate(${rotation})`;
  const transformCogFunc = `scale(${quad[0] ? -1 : 1} ${quad[1] ? -1 : 1})`;

  return (
    <g
      className="cognitive-function"
      transform={transformCogFunc}
      style={{ transformOrigin: "center" }}
    >
      <Transition classNames="cog-func-transition" in={true} timeout={1000}>
        <ClipPathStyled id={cogFuncId} transform={transformClipPath}>
          <rect id={clipPathId} width={x} height={y} />
        </ClipPathStyled>
      </Transition>
      {/* <use xlinkHref={`#${clipPathId}`} fill="#eee" /> */}
      <g className="arcs" clipPath={`url(#${cogFuncId})`}>
        <ArcHollow {...arcHollowProps} />
        <Arc {...arcProps} />
      </g>
    </g>
  );
};

export default CognitiveFunction;
