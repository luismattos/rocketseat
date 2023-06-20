import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
} from "react-icons/md";

import { Container } from "./styles.js";

export function Stars({ nStars = 0, size = "1.6rem" }) {
  const stars = [];

  for (let i = 0; i < Math.floor(Math.abs(nStars)); i++) {
    stars.push(<MdOutlineStar key={"outStar" + i} />);
  }

  if (Math.abs(nStars) - Math.floor(Math.abs(nStars)) != 0) {
    stars.push(<MdOutlineStarHalf key={"outStarHalf"} />);
  }

  for (let i = 5; i > Math.ceil(nStars); i--) {
    stars.push(<MdOutlineStarOutline key={"outStarOut" + i} />);
  }

  return <Container size={size}>{stars.map((star) => star)}</Container>;
}
