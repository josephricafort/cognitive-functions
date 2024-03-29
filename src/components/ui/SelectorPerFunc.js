import { SelectorButtons, ButtonGroup, Button } from "./styledComponents";

const SelectorPerFunc = ({ cogFuncsArrs, cogFuncsStates }) => {
  const [eiArr, snArr, tfArr, jpArr] = cogFuncsArrs;
  const [
    { ei, setEI },
    { sn, setSN },
    { tf, setTF },
    { jp, setJP }
  ] = cogFuncsStates;

  const getFuncState = (letter) => {
    const either = (d) => d === letter;

    if (eiArr.some(either)) return ei;
    else if (snArr.some(either)) return sn;
    else if (tfArr.some(either)) return tf;
    else if (jpArr.some(either)) return jp;
  };

  const handleButtonClick = (letter) => {
    const either = (d) => d === letter;

    if (eiArr.some(either)) {
      setEI(letter);
    } else if (snArr.some(either)) {
      setSN(letter);
    } else if (tfArr.some(either)) {
      setTF(letter);
    } else if (jpArr.some(either)) {
      setJP(letter);
    }
  };

  return (
    <div className="selector">
      <div className="current-cog-type">
        {ei} {sn} {tf} {jp}
      </div>
      <SelectorButtons className="selector-buttons">
        {cogFuncsArrs.map((group, i) => (
          <ButtonGroup key={`btn-group-${i}`} className="btn-group">
            {group.map((letter, j) => (
              <Button
                key={`button-${j}-${letter}`}
                onClick={() => handleButtonClick(letter)}
                letter={letter}
                arrFuncState={getFuncState(letter)}
              >
                {letter}
              </Button>
            ))}
          </ButtonGroup>
        ))}
      </SelectorButtons>
    </div>
  );
};

export default SelectorPerFunc;
