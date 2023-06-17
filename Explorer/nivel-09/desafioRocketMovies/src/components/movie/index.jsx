import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
} from "react-icons/md";
import { Tag } from "../../components/tag";
import { Container, Tags } from "./styles.js";

export function Movie({ title, nStars, summary, tags }) {
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

  return (
    <Container>
      <div id="title">{title}</div>
      <div id="stars">{stars.map((star) => star)}</div>
      <div id="summary">{summary}</div>
      {tags && (
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag} content={tag} />
          ))}
        </Tags>
      )}
    </Container>
  );
}
