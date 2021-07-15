import { useState } from "react";

export function usePerTypeStates() {
  const eiArr = ["E", "I"];
  const snArr = ["S", "N"];
  const tfArr = ["T", "F"];
  const jpArr = ["J", "P"];
  const cogFuncsArrs = [eiArr, snArr, tfArr, jpArr];

  const [ei, setEI] = useState(eiArr[0]);
  const [sn, setSN] = useState(snArr[0]);
  const [tf, setTF] = useState(tfArr[0]);
  const [jp, setJP] = useState(jpArr[0]);
  const cogFuncsStates = [
    { ei, setEI },
    { sn, setSN },
    { tf, setTF },
    { jp, setJP }
  ];

  return { cogFuncsArrs, cogFuncsStates };
}
