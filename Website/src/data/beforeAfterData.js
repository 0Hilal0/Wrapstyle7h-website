import teslaBefore from "../assets/images/Tesla-Before.png";
import teslaAfter from "../assets/images/Tesla-After.png";
import dekorFöre from "../assets/images/Skåpbil-före.png";
import dekorEfter from "../assets/images/Skåpbil-Efter.png";
import solfilmFöre from "../assets/images/Solfilm-Före.png";
import solfilmEfter from "../assets/images/Solfilm-Efter.png";
import ppfFöre from "../assets/images/PPF-Före.png";
import ppfEfter from "../assets/images/PPF-Efter.png";

const beforeAfterData = [
  {
    id: 1,
    title: "Solfilm",
    description: "Värmereducerande solfilm – komfort och integritet i kupén",
    before: solfilmFöre,
    after: solfilmEfter,
  },
  {
    id: 2,
    title: "Lackskydd PPF",
    description: "Osynligt lackskydd – skyddar mot repor och stenskott",
    before: ppfFöre,
    after: ppfEfter,
  },
  {
    id: 3,
    title: "Foliering",
    description: "Helfoliering – helt ny look utan permanent lackering",
    before: teslaBefore,
    after: teslaAfter,
  },
  {
    id: 4,
    title: "Företagsdekor",
    description: "Professionell fordonsreklam – syns på vägen, minns av kunden",
    before: dekorEfter,
    after: dekorFöre,
  },
];

export default beforeAfterData;