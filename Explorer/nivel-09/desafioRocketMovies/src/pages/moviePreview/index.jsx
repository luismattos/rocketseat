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

const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque qui fugiat totam temporibus optio ea adipisci, cum perspiciatis sit, doloribus quam. Consectetur, alias saepe, vero itaque culpa debitis architecto illo nisi rerum repellendus voluptas impedit voluptatum accusamus ipsam delectus nihil possimus omnis adipisci repudiandae. Magni cumque velit unde, expedita quo dicta blanditiis! Cumque, architecto vel dolorum debitis, molestias laboriosam hic recusandae animi cupiditate, a sit rerum non est repudiandae incidunt deserunt et neque! Assumenda ut necessitatibus illum facere tempore tenetur, porro natus accusantium architecto voluptas pariatur eveniet iusto! Dolores soluta cum assumenda eveniet obcaecati voluptas, et maiores nulla delectus est reiciendis saepe non expedita libero dicta odio mollitia. Consectetur ratione sed, laborum quia dicta beatae porro perspiciatis reprehenderit veritatis officiis odio ipsum labore nulla modi, perferendis esse dolore aliquam illo necessitatibus velit temporibus neque minima accusantium veniam? Harum, nemo vero esse illo repellendus cum temporibus, molestiae magnam deleniti distinctio voluptatibus eligendi commodi dolorum placeat atque similique velit fuga ipsa iusto accusamus voluptates laudantium delectus. Sit neque necessitatibus nesciunt dolores porro. Nihil, laborum. Assumenda enim in quas laudantium voluptates nulla vel earum dolorum magni aperiam officiis eum cumque ratione accusantium, similique architecto exercitationem, veritatis excepturi sit ipsam voluptate, quam eligendi ad. Consectetur ratione sed, laborum quia dicta beatae porro perspiciatis reprehenderit veritatis officiis odio ipsum labore nulla modi, perferendis esse dolore aliquam illo necessitatibus velit temporibus neque minima accusantium veniam? Harum, nemo vero esse illo repellendus cum temporibus, molestiae magnam deleniti distinctio voluptatibus eligendi commodi dolorum placeat atque similique velit fuga ipsa iusto accusamus voluptates laudantium delectus. Sit neque necessitatibus nesciunt dolores porro. Nihil, laborum. Assumenda enim in quas laudantium voluptates nulla vel earum dolorum magni aperiam officiis eum cumque ratione accusantium, similique architecto exercitationem, veritatis excepturi sit ipsam voluptate, quam eligendi ad.";

export function MoviePreview({
  title = "Filme X",
  nStars,
  authorImgUrl = "https://github.com/luismattos.png",
  author = "Luis Mattos",
  date = "01/01/2001",
  time = "16:30",
  tags = ["Tag1", "Tag2"],
  summary = lorem,
}) {
  const lrPadding = "12rem";

  return (
    <Container lrPadding={lrPadding}>
      <Header lrPadding={lrPadding} />
      <main>
        <TextButton
          to="/"
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
