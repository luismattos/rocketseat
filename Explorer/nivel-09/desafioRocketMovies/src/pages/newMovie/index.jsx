import {
  Container,
  Title,
  MovieTitle,
  MovieRating,
  Summary,
  MovieTags,
  DeleteBtn,
  UpdateBtn,
} from "./styles.js";
import { Header } from "../../components/header";
import { TextButton } from "../../components/textButton";
import { Input } from "../../components/input";
import { Tag } from "../../components/tag";
import { Button } from "../../components/button";
import { TfiArrowLeft, TfiPlus, TfiClose } from "react-icons/tfi";
import theme from "../../styles/theme.js";

export function NewMovie({ userName, userImgUrl, ...rest }) {
  const lrPadding = "12rem";

  return (
    <Container lrPadding={lrPadding}>
      <header>
        <Header
          userName={userName}
          userImgUrl={userImgUrl}
          lrPadding={lrPadding}
        />

        <div>
          <TextButton
            to="/"
            icon={TfiArrowLeft}
            textColor={theme.COLOR.PINK}
            text="Voltar"
          />
        </div>
      </header>

      <main>
        <Title>Novo Filme</Title>
        <MovieTitle>
          <Input type="text" placeholder="Titulo" />
        </MovieTitle>
        <MovieRating>
          <Input type="text" placeholder="Sua nota (0-5)" />
        </MovieRating>
        <Summary>
          <textarea placeholder="Observacoes" />
        </Summary>
        <MovieTags>
          <div>Marcadores</div>
          <div>
            <Tag content={"React"} icon={TfiClose} />
            <Tag content={"React"} icon={TfiClose} />
            <Tag content={"Novo marcador"} icon={TfiPlus} enabled />
          </div>
        </MovieTags>

        <DeleteBtn>
          <Button
            text={"Excluir Filme"}
            textColor={theme.COLOR.PINK}
            backgroundColor={theme.COLOR.BLACK}
          ></Button>
        </DeleteBtn>

        <UpdateBtn>
          <Button text={"Salvar Alterações"} />
        </UpdateBtn>
      </main>
    </Container>
  );
}
