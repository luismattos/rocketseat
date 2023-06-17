import { Container } from "./styles.js";
import { TfiPlus } from "react-icons/tfi";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Movie } from "../../components/movie";

export function Home({}) {
  const lrPadding = "12rem";
  return (
    <Container lrPadding={lrPadding}>
      <div>
        <Header lrPadding={lrPadding} />
      </div>
      <header>
        <div>Meus filmes</div>
        <Button icon={TfiPlus} text="Adicionar Filme" />
      </header>
      <main>
        <Movie
          title="Velozes e Furiosos"
          nStars={4}
          summary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero vitae nisi eum, dolorem aperiam id sequi labore ad itaque pariatur suscipit iste repellat, corrupti velit, ipsam ducimus aliquam minus? Quod earum velit labore, quibusdam voluptates rerum ab neque non modi quas ad laudantium corrupti ullam in, nemo aspernatur cupiditate!"
        />
        <Movie
          title="Velozes e Furiosos"
          nStars={4}
          summary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero vitae nisi eum, dolorem aperiam id sequi labore ad itaque pariatur suscipit iste repellat, corrupti velit, ipsam ducimus aliquam minus? Quod earum velit labore, quibusdam voluptates rerum ab neque non modi quas ad laudantium corrupti ullam in, nemo aspernatur cupiditate!"
        />
        <Movie
          title="Velozes e Furiosos"
          nStars={4}
          summary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero vitae nisi eum, dolorem aperiam id sequi labore ad itaque pariatur suscipit iste repellat, corrupti velit, ipsam ducimus aliquam minus? Quod earum velit labore, quibusdam voluptates rerum ab neque non modi quas ad laudantium corrupti ullam in, nemo aspernatur cupiditate!"
        />
        <Movie
          title="Velozes e Furiosos"
          nStars={4}
          summary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero vitae nisi eum, dolorem aperiam id sequi labore ad itaque pariatur suscipit iste repellat, corrupti velit, ipsam ducimus aliquam minus? Quod earum velit labore, quibusdam voluptates rerum ab neque non modi quas ad laudantium corrupti ullam in, nemo aspernatur cupiditate!"
        />
        <Movie
          title="Velozes e Furiosos"
          nStars={4}
          summary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus libero vitae nisi eum, dolorem aperiam id sequi labore ad itaque pariatur suscipit iste repellat, corrupti velit, ipsam ducimus aliquam minus? Quod earum velit labore, quibusdam voluptates rerum ab neque non modi quas ad laudantium corrupti ullam in, nemo aspernatur cupiditate!"
        />
      </main>
    </Container>
  );
}
