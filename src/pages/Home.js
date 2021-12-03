import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import Image from "../assets/giphy.gif";

const Home = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="title">
          <h1 className="title-text">Como ser uma pessoa mais produtiva?</h1>
        </div>
        <div className="animation">
          <img
            className="img-gif"
            src={Image}
            alt="animação de personagem de desenho"
          />
        </div>
        <div className="contents">
          <p className="contents-txt">
            <h2 className="contents-titles">Beginning</h2>
            Desde a revolução industrial e o crescimento e evolução das máquinas
            no mundo, o dever do ser humano foi ficando cada vez mais claro:
            Realizar tarefas inteligentes. Deixar tudo que é físico ou
            repetitivo para as máquinas. O valor do ser humano está no cérebro,
            e ser produtivo é fazer o cérebro funcionar da melhor maneira
            possível, e para fazer isso precisamos nos treinar.
          </p>

          <p className="contents-txt">
            <h2 className="contents-titles">Produtividade física</h2>A
            produtividade está diretamente ligada à energia do seu corpo. O
            ideal para ser produtivo é manter seus níveis de energia estáveis.
            Sempre que o seu nível de energia baixa você se torna menos
            produtivo, e seu corpo busca mais o prazer instantâneo em tarefas
            que não exigem muito raciocínio, como ficar no facebook ou assistir
            um filme no netflix, ao invés do prazer a longo prazo, como
            trabalhar bem para ficar mais rico no futuro.
          </p>

          <p className="contents-txt">
            <h2 className="contents-titles">Produtividade mental</h2>
            Algumas ideias de como aumentar sua produtividade mental:
            <ul className="list-home">
              <li className="li-home">- Não ficar sozinho</li>
              <li className="li-home">- Ficar rodeado de gente feliz</li>
              <li className="li-home">- Se afastar de gente ruim</li>
              <li className="li-home">- Estar sempre melhorando</li>
              <li className="li-home">- Ser produtivo</li>
              <li className="li-home">
                - Traçar pequenas metas e alcançar elas
              </li>
            </ul>
            Essas e outras ideias além de te relaxar, organizar os pensamentos e
            te deixa ciente de si mesmo, também é incrível para o seu
            treinamento de foco (por causa do exercício de respiração).
          </p>

          <p className="contents-txt">
            <h2 className="contents-titles">Produtividade temporal</h2>A
            produtividade temporal consiste em dois princípios:
            <ul className="list-home">
              <li className="li-home">
                - Otimizar o tempo: Onde investir o seu tempo
              </li>
              <li className="li-home">
                - Gerenciar o tempo: Quanto e quando se dedicar para cada coisa.
              </li>
            </ul>
          </p>

          <p className="contents-txt">
            Para ajudar você a organizar melhor seu tempo, montamos uma lista de
            tarefas para que você consiga melhor otimizar e gerenciar seu tempo.
          </p>

          <p>
            Leia o texto na íntegra:{" "}
            <a
              className="a-txt"
              href="https://medium.com/@alexdubugras/produtividade-6a1146d2dbad"
            >
              Medium
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
