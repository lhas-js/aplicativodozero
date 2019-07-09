import React from "react";
import { Button, Grid, Icon } from "semantic-ui-react";

import {
  BlocoBrancoTexto,
  BlocoHeroUnit,
  BlocoPretoTexto,
  GlobalStylesheet,
  HeroUnit,
  HeroUnitTexto,
  Logo01dev,
  LogoCurso,
  LogoCursoTexto,
  PresentText,
  VideoApresentacao,
  VideoApresentacaoTexto,
} from "./styles";

function App() {
  return (
    <>
      <GlobalStylesheet />
      <Grid>
        <Grid.Row centered>
          <Grid.Column>
            <Logo01dev
              href="https://01dev.codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/01dev.svg" alt="01dev" />
            </Logo01dev>
            <PresentText>Apresenta:</PresentText>
            <LogoCurso>
              <img
                src="/logo.svg"
                alt="Curso de Aplicativo do Zero Com Firebase e React"
              />
              <LogoCursoTexto>
                <h1>Aplicativo</h1>
                <h2>do zero</h2>
                <h3>com Firebase e React</h3>
              </LogoCursoTexto>
            </LogoCurso>
            <VideoApresentacao>
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/336812660"
                width="640"
                height="260"
                frameborder="0"
                allowfullscreen
              />
            </VideoApresentacao>
            <VideoApresentacaoTexto>
              <h2>
                Descubra como{" "}
                <strong>
                  criar aplicativos do zero que são altamente escaláveis{" "}
                </strong>{" "}
                em <strong>tempo recorde</strong>.
              </h2>
              <p>
                Você já pensou em criar um aplicativo mas teve dificuldade em...
              </p>
              <p>
                <span role="img" aria-label="Tick">
                  ✔️
                </span>{" "}
                Decidir qual linguagem de programação usar...
              </p>
              <p>
                <span role="img" aria-label="Tick">
                  ✔️
                </span>{" "}
                Como estruturar o back-end e mantê-lo escalável para muitos
                usuários...
              </p>
              <p>
                <span role="img" aria-label="Tick">
                  ✔️
                </span>{" "}
                Criar interfaces que funcionem em tempo real entre seus
                usuários...
              </p>
            </VideoApresentacaoTexto>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <p>
              Você sempre quis ter um <strong>aplicativo de sucesso</strong> na
              internet?
            </p>
            <p>
              Mas se sente <strong>confuso</strong> quando pesquisa sobre o
              assunto no Google?{" "}
              <span role="img" aria-label="Carinha confusa">
                ️🤨
              </span>
            </p>
            <p>
              Está em dúvida para saber o que{" "}
              <strong>você deve aprender</strong> para{" "}
              <strong>criar um aplicativo bonito e escalável?</strong>
            </p>
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Você tem ideias boas que podem revolucionar onde você mora ou com
              o que você trabalha?
            </p>
            <p>
              Quer aprender a ter uma <strong>renda extra</strong> com seus
              aplicativos?{" "}
              <span role="img" aria-label="Carinha confusa">
                ️🤑
              </span>
            </p>
            <p>
              <strong>
                Esta pode ser a mensagem mais importante da sua vida.
              </strong>
            </p>
          </BlocoPretoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <p>
              Eu passei os últimos dez anos trabalhando para empresas de todos
              os tipos: de startups a multinacionais.
            </p>
            <p>
              Todas elas tinham um objetivo em comum: construir uma aplicação
              web que fosse fácil de usar, implementar e divulgar.
            </p>
            <p>
              Muitas delas fracassavam por cometer alguns erros que acabavam
              comprometendo todo o seu produto.
            </p>
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Eu vivenciei na pele cada um desses erros e quero que VOCÊ não
              cometa-os.
            </p>
            <p>Você estará adquirindo um material de retorno incalculável.</p>
          </BlocoPretoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <h1>
              Faça parte do grupo de pessoas que aprenderam a construir
              aplicativos do zero
            </h1>
          </BlocoBrancoTexto>
          <BlocoHeroUnit>
            <HeroUnit>
              <h2>
                Acesso por
                <br /> 12 meses ao curso
              </h2>
              <h3>
                De <em>R$ 1.200,00</em> por apenas:
              </h3>
              <h4>R$ 345,00</h4>
              <p>Custa R$0,94/dia</p>
            </HeroUnit>
            <HeroUnitTexto>
              <p>Você terá direito a:</p>
              <ul>
                <li>
                  <strong>Certificado de conclusão</strong> que comprova a carga
                  horária e o material passado no curso
                </li>
                <li>
                  <strong>Acesso</strong> a todo o material do curso por{" "}
                  <strong>12 meses</strong>. O material estará{" "}
                  <strong>
                    disponível 24 horas por dia, 7 dias por semana
                  </strong>
                  . Você pode ver e rever as aulas o quanto quiser.
                </li>
                <li>
                  <strong>Conteúdo bônus 1:</strong> Você aprenderá a criar
                  anúncios em plataformas de divulgação (Google Ads, Instagram
                  Ads e Facebook Ads).
                </li>
                <li>
                  <strong>Conteúdo bônus 2:</strong> Você aprenderá a montar um
                  plano de negócios MATADOR para sua startup.
                </li>
                <li>
                  <strong>Satisfação garantida:</strong> Se o conteúdo não te
                  interessar em até 7 dias, nós devolvemos 100% do seu dinheiro.
                </li>
              </ul>
              <Button
                icon
                color="green"
                style={{ marginBottom: "40px" }}
                fluid
                size="massive"
                labelPosition="left"
              >
                <Icon name="cart" />
                Quero me inscrever agora
              </Button>
              <img
                style={{ width: "100%" }}
                src="/vantagens.png"
                alt="Compra segura, satisfação garantida, privacidade protegida"
              />
            </HeroUnitTexto>
          </BlocoHeroUnit>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Nada deve ser mais urgente que a{" "}
              <strong>busca por conhecimento</strong>. Você{" "}
              <strong>nunca se arrependerá</strong> de seguir esse conselho.
            </p>
            <p>Tudo dentro de você lutará contra a mudança.</p>
            <p>O mundo somente se importa com o que pode obter de você.</p>
            <p>
              O que <strong>você produz</strong> não tem a ver com{" "}
              <strong>ganhar dinheiro</strong>, mas tem a ver com{" "}
              <strong>beneficiar pessoas.</strong>
            </p>
            <p>
              Uma das maneiras de beneficiar pessoas é construir um aplicativo
              de sucesso que consegue resolver um ou mais problemas da
              sociedade.
            </p>
            <p>
              <strong>Faça as contas:</strong>
            </p>
            <p>
              Quanto de seu tempo é gasto em consumir as coisas que outras
              pessoas fizeram (TV, música, videogames, sites) contra as feitas
              por você?
            </p>
            <p>Somente um desses dois adiciona valor a você como ser humano.</p>
          </BlocoPretoTexto>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default App;
