import Card from "../elements/Card";
import styles from "./Projects.module.css";
import dncWeather from "./../../Image/prev-tempo.png";
import arqDnc from "./../../Image/landing-arq.png";
import landingDnc from "./../../Image/landing-dnc.png";
import portFlutter from "./../../Image/portfolio-flutter.png";

function Projects() {
  return (
    <container className={styles.title}>
      <h1>Projetos</h1>

      <div id="Projects" className={styles.projects}>
        <div>
          <Card
            img={dncWeather}
            title="DNC Weather"
            description="Aplicação que consome a API Busca CEP e a API de previsão do tempo"
            repo="https://github.com/LucasAlbergoni/previsao-tempo-dncr"
            site="https://previsaotempo-dnc.netlify.app/"
          />
          <Card
            img={landingDnc}
            title="Landing Page DNC"
            description="Desenvolvimento de uma landing page da escola DNC"
            repo="https://github.com/LucasAlbergoni/dnc-landing-page"
            site="https://lucasalbergoni.github.io/dnc-landing-page/"
          />
        </div>
        <div>
          <Card
            img={arqDnc}
            title="Landing page para empresa de arquitura DNC"
            description="Construção de um Portfólio utilizando React"
            repo="https://github.com/LucasAlbergoni/dnc-desafio-landing-page-arquitetura"
            site="https://main--dncdesafioarquitetura.netlify.app/"
          />
          <Card
            img={portFlutter}
            title="Portfolio FLutter"
            description="Página web de apresentacao no formato de curriculum virtual feito em flutter "
            repo="https://github.com/LucasAlbergoni/lucasalbergoni.github.io"
            site="https://lucasalbergoni.github.io/"
          />
        </div>
      </div>
    </container>
  );
}

export default Projects;
