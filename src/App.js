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
              Eu passei os últimos <strong>10 anos</strong> trabalhando para
              empresas de todos os tipos: de <strong>startups</strong> a{" "}
              <strong>multinacionais</strong>.
            </p>
            <p>
              <strong>Todas</strong> elas tinham um{" "}
              <strong>objetivo em comum</strong>: construir uma aplicação que
              fosse fácil de usar, implementar e divulgar.
            </p>
            <p>
              <strong>Muitas delas</strong> simplesmente fracassavam no meio do
              processo por cometer alguns deslizes que acabavam{" "}
              <strong>comprometendo todo o seu produto</strong>.
            </p>
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              <strong>Eu vivenciei</strong> na pele cada um desses deslizes e
              quero que você <strong>NÃO</strong> passe por eles.
            </p>
            <p>
              Estes{" "}
              <strong>deslizes envolvem desde a criação do primeiro MVP</strong>{" "}
              ou da <strong>cultura da empresa</strong> até a{" "}
              <strong>estratégia de divulgação</strong> a ser usada.
            </p>
            <p>
              Este curso fará com que você <strong>encurte os desafios</strong>{" "}
              da <strong>sua jornada</strong> para ser um(a) desenvolvedor(a) de{" "}
              <strong>sucesso</strong>.
            </p>
          </BlocoPretoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <p>
              Eu acredito que você, assim como eu, sempre teve o{" "}
              <strong>sonho de ajudar o máximo de pessoas</strong> possível.
            </p>
            <p>
              Porém, as cobranças do <em>dia-a-dia</em>, a{" "}
              <em>falta de ideias</em> ou até mesmo de motivação para criar algo
              novo, sempre te impediu de fazer algo assim.
            </p>
            <p>
              Pensando em alguém como <strong>você</strong> que eu resolvi
              montar essa <strong>plataforma on-line</strong>.
            </p>
            <p>
              Através dessa plataforma, você terá acesso a um material de
              altíssima qualidade técnica e uma comunidade jovem e ativa
              interessada em construir algo.
            </p>
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Eu quero te dar todo o <strong>conhecimento técnico</strong> que
              você precisa para você construir as suas ideias em tempo recorde.
            </p>
            <p>
              Além de todo esse conteúdo, você terá <strong>acesso</strong> a
              uma <strong>comunidade ativa</strong> de desenvolvedores e
              entusiastas que tem algo em comum com você:
              <br />a vontade de montar um <strong>negócio digital</strong> de
              sucesso.
            </p>
            <p>
              É claro que para isso acontecer, vai depender{" "}
              <strong>100%</strong> do seu <strong>empenho</strong> e{" "}
              <strong>dedicação</strong>.
            </p>
            <p>
              Mas uma coisa eu posso garantir: os meus pupilos que se dedicaram
              totalmente ao meu conteúdo, hoje estão muito bem, obrigado.
            </p>
          </BlocoPretoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <p>
              No curso <strong>Aplicativo do Zero com Firebase e React</strong>,
              você irá aprender
              <br />
              as principais tecnologias no mercado de programação.
              <br />
              <br />
              Dentro destas tecnologias, estão em destaque: o{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{" "}
              e o{" "}
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase
              </a>
              .
            </p>
            <p>
              Para você ter uma ideia,{" "}
              <a
                href="https://neuvoo.com/salary/?job=React%20Js%20Developer"
                target="_blank"
              >
                a média salarial de um desenvolvedor React nos{" "}
                <strong>Estados Unidos</strong>
              </a>{" "}
              é de <strong>12 MIL dólares por MÊS</strong>.<br />
              Isso dá uma média de <strong>US$ 61,00/hora</strong>.
            </p>
            <p>
              Isso dá, na cotação atual, aprox.{" "}
              <strong>R$231,00 por HORA</strong>. Muito mais que a{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.salario.com.br/profissao/medico-clinico-cbo-225125/"
              >
                média salarial de um médico no Brasil
              </a>
              .
            </p>
            <p>
              Com estas tecnologias, você será <strong>capacitado</strong> o
              suficiente para construir qualquer ideia mirabolante que vier na
              sua cabeça.
            </p>
            <p>
              Já sei, tu <strong>NÃO</strong> quer ser dono de um{" "}
              <strong>aplicativo de sucesso</strong>? Relaxa, não tem problema
              algum.
            </p>
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Você vai ter um currículo de fazer inveja, graças aos insights que
              eu vou passando durante o curso.
            </p>
            <p>Quer ter headhunters implorando pela sua atenção no LinkedIn?</p>
            <p>
              Estudar este curso é um dos primeiros passos para que isso ocorra.
            </p>
          </BlocoPretoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <p>Nosso material é 100% atualizado com as técnicas atuais.</p>
            <p>
              Você irá aprender do zero o que desenvolvedores seniors usam
              diariamente para criar as aplicações mais usadas do momento.
            </p>
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Um dos meus últimos trabalhos foi construir um aplicativo em React
              Native com Firebase para uma empresa da Estônia.
            </p>
            <p>
              Este aplicativo era um monitorador de trades com criptomoedas.
            </p>
            <p>
              Após a entrega deste aplicativo, eu me dei conta de que é uma
              obrigação minha compartilhar o máximo de conhecimento possível.
            </p>
            <p>
              Eu não posso morrer com toda essa informação no meu cérebro, sem
              que antes eu passe ela para pessoas como você.
            </p>
          </BlocoPretoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <p>
              Eu tenho tanta certeza de que o meu conteúdo irá lhe trazer uma
              outra visão de mundo,
              <br />
              que se em 7 dias você não gostar do curso, eu irei devolver 100%
              do seu dinheiro.
            </p>
            <p>
              É uma promessa: conhecimento de primeira garantido ou seu dinheiro
              de volta.
            </p>
          </BlocoBrancoTexto>
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
                Acesso ao curso
                <br />
                por 12 meses
              </h2>
              <h3>
                De <em>R$ 2.497,75</em> por apenas:
              </h3>
              <h4>12x de R$28,75</h4>
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
                href="https://pay.hotmart.com/X13624514V?off=w8v3nkwj"
                icon
                color="green"
                style={{ marginBottom: "40px" }}
                fluid
                size="massive"
                labelPosition="left"
              >
                <Icon name="cart" />
                Quero me inscrever agora!
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
