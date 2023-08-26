import { Tag } from "../tag";
import { Stars } from "../stars";
import { Container, Tags } from "./styles.js";

export function Movie({ title, nStars, summary, tags, to = "#" }) {
  return (
    <Container to={to}>
      <div id="title">{title}</div>
      <Stars nStars={nStars} size="1.2rem" />
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
