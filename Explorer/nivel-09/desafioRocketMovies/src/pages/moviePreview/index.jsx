import theme from "../../styles/theme";
import { Tag } from "../../components/tag";
import { Stars } from "../../components/stars";
import { Header } from "../../components/header";
import { TextButton } from "../../components/textButton";
import { TfiArrowLeft } from "react-icons/tfi";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  Tags,
  Infos,
  Title,
  Author,
  Summary,
  DateTime,
  Container,
  AuthorImg,
  MovieHeader,
  TitleStars,
} from "./styles.js";

export function MoviePreview({
  title,
  nStars,
  authorImgUrl,
  author,
  date,
  time,
  tags,
  summary,
}) {
  const lrPadding = "12rem";

  return (
    <Container lrPadding={lrPadding}>
      <Header lrPadding={lrPadding} />
      <main>
        <TextButton
          icon={TfiArrowLeft}
          textColor={theme.COLOR.PINK}
          text="Voltar"
        />
        <div>
          <MovieHeader>
            <TitleStars>
              <Title>{title}</Title>
              <Stars nStars={nStars} size="2rem" />
            </TitleStars>
            <Infos>
              <AuthorImg authorImgUrl={authorImgUrl} />
              <Author>{author}</Author>
              <AiOutlineClockCircle />
              <DateTime>
                {date} às {time}
              </DateTime>
            </Infos>
          </MovieHeader>

          {tags && (
            <Tags>
              {tags.map((tag) => (
                <Tag key={tag} content={tag} />
              ))}
            </Tags>
          )}

          <Summary>{summary}</Summary>
        </div>
      </main>
    </Container>
  );
}
