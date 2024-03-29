import { useState } from "react";
import styled from "styled-components";

import SelectorPerType from "../components/ui/SelectorPerType";
import GridLoop from "./GridLoop/GridLoop";
import { usePerTypeStates } from "../components/ui/usePerTypeStates";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 630px;
  width: 100%;
  margin: 100px auto;
  border: 1px solid #aaa;
  padding: 20px;
`;

const CompareTypesGrid = ({ counter }) => {
  const { cogFuncsStates } = usePerTypeStates();
  const [{ ei }, { sn }, { tf }, { jp }] = cogFuncsStates;

  const [currPersonType, setCurrPersonType] = useState(ei.concat(sn, tf, jp));

  return (
    <Container className="compare-types-grid">
      {/* <SelectorPerType type={currPersonType} setType={setCurrPersonType} /> */}
      <GridLoop
        type={currPersonType}
        setType={setCurrPersonType}
        counter={counter}
      />
    </Container>
  );
};

export default CompareTypesGrid;
