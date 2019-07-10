import React from "react";
import { Helmet } from "react-helmet";
import { Button, Grid } from "semantic-ui-react";

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

const CallToAction = () => (
  <Button
    href="https://pay.hotmart.com/X13624514V?off=w8v3nkwj"
    icon
    color="green"
    fluid
    size="massive"
    style={{ maxWidth: "500px", margin: "0 auto" }}
  >
    Quero me inscrever agora
  </Button>
);

function App() {
  return (
    <>
      <Helmet>
        <meta
          property="og:title"
          content="Curso Aplicativo do Zero com Firebase e React"
        />
        <meta
          property="og:description"
          content="Descubra como criar aplicativos do zero que são altamente escaláveis em tempo recorde usando as tecnologias mais modernas do mercado."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aplicativodozero.com.br" />
        <meta
          property="og:image"
          content="https://aplicativodozero.com.br/cover.png"
        />
      </Helmet>
      <GlobalStylesheet />
      <Grid style={{ width: "100%", margin: "0" }}>
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
                title="Vídeo de apresentação"
                src="https://drive.google.com/file/d/1em-qACBGLQ6DIk3sQh1r7aNgQuRfEyqg/preview"
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
                  criar aplicativos do zero
                  <br /> rapidamente que são altamente escaláveis{" "}
                </strong>{" "}
                <br />
                com as tecnologias mais modernas do mercado.
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
              <CallToAction />
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
            <CallToAction />
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
            <CallToAction />
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
            <CallToAction />
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
                rel="noopener noreferrer"
              >
                a média salarial de um desenvolvedor React nos EUA
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
            <CallToAction />
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Você vai ter um <strong>currículo</strong> de{" "}
              <strong>fazer inveja</strong>, graças aos insights que eu vou
              passando durante o curso.
            </p>
            <p>
              Quer ter headhunters <strong>implorando</strong> pela sua atenção
              no <strong>LinkedIn</strong>?
            </p>
            <p>
              Estudar este curso é um dos primeiros passos pra que isso ocorra.
            </p>
          </BlocoPretoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <p>
              Nosso material é <strong>100% atualizado</strong> com as técnicas
              e tecnologias atuais.
            </p>
            <p>
              Você irá aprender <strong>do zero</strong> o que os
              desenvolvedores seniors estão usando diariamente em 2019 para
              criar <strong>as aplicações mais quentes</strong> do momento.
            </p>
            <CallToAction />
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Um dos meus últimos <strong>trabalhos</strong> foi construir um{" "}
              <strong>aplicativo</strong> em{" "}
              <a
                href="https://facebook.github.io/react-native/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Native
              </a>{" "}
              com{" "}
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase
              </a>{" "}
              para uma empresa da{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://epocanegocios.globo.com/Tecnologia/noticia/2018/08/como-estonia-construiu-uma-sociedade-digital.html"
              >
                Estônia
              </a>
              .
            </p>
            <p>
              Este aplicativo era um <strong>monitorador de trades</strong> com{" "}
              <strong>criptomoedas</strong>.
            </p>
            <p>
              Após a entrega deste aplicativo, eu me dei conta de que é uma
              <strong>obrigação minha compartilhar</strong> o máximo de{" "}
              <strong>conhecimento</strong> possível.
            </p>
            <p>
              Eu não posso <em>morrer</em> com toda essa informação no meu
              cérebro, sem que antes eu passe ela para pessoas como{" "}
              <strong>você</strong>.
            </p>
            <p>
              Eu trabalho com internet desde os meus <em>14/15 anos</em>, quando
              consegui um estágio para uma{" "}
              <strong>agência de marketing digital</strong>.
            </p>
            <p>
              Eu consegui esse estágio após me candidatar a uma vaga de junior,
              onde na minha <strong>carta de apresentação</strong> eu fiz um
              site em HTML/CSS, usando uma técnica que na época chamávamos de{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Tableless_web_design"
              >
                Tableless
              </a>
              .
            </p>
            <p>
              Os donos desta agência gostaram tanto da{" "}
              <strong>minha iniciativa</strong>, que me deram a oportunidade de
              estagiar na área tão cedo.
            </p>
            <p>
              Graças a esse início, <strong>desde 2010</strong> eu tenho contato
              com este mundo de <strong>marketing digital</strong>. Eu aprendi a
              criar sistemas em diversas linguagens de programação, integrar
              ferramentas com as mais variadas <strong>APIs</strong>, fazer
              gestão de anúncios em plataforma de anunciantes, entre outros.
            </p>
            <p>
              Uma das{" "}
              <a
                href="https://www.xtechcommerce.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                startups que eu trabalhei mais de um ano
              </a>
              , 4 anos depois, foi vendida por{" "}
              <a
                href="https://www.baguete.com.br/noticias/08/12/2017/vtex-compra-xtech-commerce"
                rel="noopener noreferrer"
                target="_blank"
              >
                14 milhões de reais
              </a>
              .
            </p>
            <p>
              Sou muito <strong>grato</strong> a estas oportunidades que o{" "}
              <strong>universo</strong> me deu. <br />
              Quero que elas se repitam para milhares de pessoas que nem{" "}
              <strong>você</strong> que estão em busca de uma vida melhor.
              <br />
              Assim como eu estava com os meus 14 anos.
            </p>
            <p>
              Meu objetivo é{" "}
              <strong>profissionalizar 10 mil desenvolvedores</strong> até 2022.
            </p>
            <p>
              Quero que estes novos profissionais ajudem a sociedade a prosperar
              numa <strong>revolução tecnológica</strong> jamais vista.
            </p>
            <p>
              Mais do que isso, eu quero que o Brasil se torne um polo em
              destaque na área tecnológica.{" "}
              <a
                href="http://revistaepoca.globo.com/Revista/Epoca/0,,EDR53613-6010,00.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                Muito mais do que nós já somos.
              </a>
            </p>
            <CallToAction />
          </BlocoPretoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <p>
              Já tem <strong>4 anos</strong> que eu produzo{" "}
              <a
                href="https://01dev.codes"
                target="_blank"
                rel="noopener noreferrer"
              >
                conteúdo gratuito sobre programação na internet
              </a>
              .
            </p>
            <p>
              Desde 2016, o <strong>meu conteúdo</strong> já foi{" "}
              <strong>visualizado</strong> mais de <strong>45 mil</strong>{" "}
              vezes.
            </p>
            <p>
              Eu já tive mais de <strong>13 mil usuários</strong> por mês,
              aprendendo continuamente sobre tecnologias em alta tendência.
            </p>
            <p>
              Boa parte dos artigos da 01dev foram republicados em{" "}
              <a
                href="https://imasters.com.br/perfil/luizhenriquealmeida"
                target="_blank"
                rel="noopener noreferrer"
              >
                portais como iMasters
              </a>
              .
            </p>
            <p>
              Além disso, eu cheguei a <strong>prestar consultorias</strong>{" "}
              para desenvolvedores com a carreira em ascensão.
            </p>
            <p>Só que isso não foi o suficiente para mim...</p>
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Eu quis montar um <strong>conteúdo selecionado</strong> que fosse{" "}
              <strong>amigável</strong> para um iniciante,
              <br />
              mas ao mesmo tempo <strong>desafiador</strong> para alguém mais
              experiente.
            </p>
            <p>
              O conteúdo é <strong>100% progressivo</strong>, ou seja, os
              primeiros módulos são bem amigáveis e os últimos tratam de
              assuntos mais avançados.
            </p>
            <p>
              Você irá aprender a construir <strong>3 aplicativos</strong> super
              modernos! E este número só tende a aumentar...
            </p>
            <p>
              O <strong>resultado</strong> de todo esse trabalho é esse curso,
              que está sendo lançado com um <strong>preço irrisório</strong>,
              dado o <strong>retorno sobre o investimento (ROI)</strong>.
            </p>
            <p>
              Este preço é <strong>temporário</strong>. Após o lançamento, esse
              material vai custar muito mais...
            </p>
            <CallToAction />
          </BlocoPretoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <p>
              O curso é bem <strong>interativo</strong>. No final de cada
              módulo, você tem um desafio com diversas perguntas sobre o
              material apresentado.
            </p>
            <p>
              <strong>Você</strong> pode postar sua <strong>dúvida</strong>{" "}
              diretamente na página do curso e eu e meu time responderemos o{" "}
              <strong>mais rápido possível</strong>.
            </p>
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Eu tenho tanta <strong>certeza</strong> de que o meu conteúdo irá
              lhe trazer uma outra <strong>visão de mundo</strong>,
              <br />
              que se em <strong>7 dias</strong> você NÃO gostar do curso, eu
              irei devolver <strong>100%</strong> do seu dinheiro.
            </p>
            <p>
              <strong>É uma promessa:</strong> conhecimento de primeira
              garantido ou seu <strong>dinheiro de volta</strong>.
            </p>
            <p>
              <blockquote>
                "Quando decidir virar programador, eu tinha acabado de terminar
                a faculdade de administração, e o @lhas foi essencial pra essa
                transição. Graças ao material dele eu consegui aprender
                rapidamente a programar e em apenas 1 mês estava empregado.
                Hoje, sou um front-end sênior e tenho uma remuneração alta
                graças àquele ponta pé inicial."
              </blockquote>
              <strong>Eric Vasconcelos</strong>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/ericvdeoliveira/"
              >
                @ericvdeoliveira
              </a>
            </p>
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
              <CallToAction />
              <img
                style={{ width: "100%", marginTop: "40px" }}
                src="/vantagens.png"
                alt="Compra segura, satisfação garantida, privacidade protegida"
              />
            </HeroUnitTexto>
          </BlocoHeroUnit>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#FFF" }}>
          <BlocoBrancoTexto>
            <h2>Perguntas Frequentes (FAQ)</h2>

            <ul>
              <li>
                <h3>1. O curso tem uma duração limite?</h3>
                <p>
                  Sim! Você terá acesso por 12 meses ao material integral do
                  curso. Você pode assistir as aulas no seu próprio ritmo, como
                  achar melhor. Também é possível re-assistir as aulas quantas
                  vezes forem necessárias. Você é livre!
                </p>
              </li>
              <li>
                <h3>2. Esse curso já foi totalmente gravado?</h3>
                <p>
                  Não! E nem nunca será! Pois nós estamos continuamente
                  adicionando novos conteúdos, refazendo aqueles que já estão lá
                  e sempre otimizando e atualizando o máximo possível.
                </p>
              </li>
              <li>
                <h3>3. Meus dados (nome, e-mail, CPF) estão seguros?</h3>
                <p>
                  Sim. Estão 100% seguros. Todas essas informações são
                  utilizadas apenas internamente, para emissão de nota fiscal e
                  prevenção de fraudes. Nada será vendido ou repassado a
                  terceiros, pois zelamos pela confiança depositada em nossos
                  produtos. Todos os detalhes estão em nossa Política de
                  Privacidade.
                </p>
              </li>
              <li>
                <h3>4. Qual a garantia de que receberei o curso?</h3>
                <p>
                  O curso utiliza a plataforma de vendas Hotmart, que
                  consideramos a melhor e mais segura plataforma de vendas do
                  Brasil. Caso você não receba o acesso no prazo estipulado, o
                  Hotmart garante a devolução de 100% do seu dinheiro investido,
                  sem preocupações.
                </p>
              </li>
              <li>
                <h3>5. Como poderei rastrear minha compra?</h3>
                <p>
                  Muito simples. Assim que sua compra é efetuada, você receberá
                  o número da transação por e-mail. Se tiver qualquer dúvida,
                  basta entrar em contato conosco e tiraremos todas as suas
                  dúvidas.
                </p>
              </li>
              <li>
                <h3>6. Não sei programar, posso fazer?</h3>
                <p>
                  Se você for muito esforçado, sim. Se você tiver dificuldades
                  em lidar com programação, talvez esse não seja o curso ideal.{" "}
                  O material é voltado para pessoas que tenham tido um
                  background mínimo com programação para web.
                </p>
              </li>
              <li>
                <h3>7. Como eu vou acessar esse curso?</h3>
                <p>
                  No momento que sua compra for aprovada pelo serviço de
                  pagamento, automaticamente o sistema irá criar a sua conta e
                  enviará todos os dados de acesso ao seu e-mail. Caso, por
                  qualquer motivo, você não consiga acessar de imediato, basta
                  enviar um e-mail para luizhrqas@gmail.com. que eu te ajudo!
                </p>
              </li>
              <li>
                <h3>8. Como funciona a garantia de 7 dias?</h3>
                <p>
                  Se você não ficar satisfeito com o curso, basta nos avisar em
                  até 7 dias e devolveremos seu dinheiro. Isso mostra o quanto
                  nós confiamos em nosso curso e na transformação que ele causa.
                  Pedimos apenas que o motivo seja informado para que possamos
                  melhorar o atendimento.
                </p>
              </li>
              <li>
                <h3>9. Os dados do meu cartão de crédito estão seguros?</h3>
                <p>
                  Sim. 100% seguros. Todo o processo de compra é gerenciado pelo
                  Hotmart, maior plataforma de produtos digitais do Brasil,
                  através de uma transação criptografada com 128 bits. Nenhuma
                  informação do seu cartão de crédito é mantida em nosso banco
                  de dados.
                </p>
              </li>
              <li>
                <h3>10. Há alguma garantia de obtenção de lucros?</h3>
                <p>
                  Não. Como toda base de conhecimento, nosso papel é te dar todo
                  o conhecimento necessário para você construir aplicativos
                  usando as tecnologias mais modernas. Porém, os resultados
                  dependem única e exclusivamente do seu esforço e dedicação.
                </p>
              </li>
            </ul>
          </BlocoBrancoTexto>
        </Grid.Row>
        <Grid.Row centered style={{ background: "#000" }}>
          <BlocoPretoTexto>
            <p>
              Nada deve ser mais urgente que a{" "}
              <strong>busca por conhecimento</strong>. Você{" "}
              <strong>nunca se arrependerá</strong> de seguir esse conselho.
            </p>
            <p>Tudo dentro de você lutará contra a mudança.</p>
            <p>
              O que <strong>você produz</strong> não tem a ver com{" "}
              <strong>ganhar dinheiro</strong>, mas tem a ver com{" "}
              <strong>beneficiar pessoas.</strong>
            </p>
            <p>
              Uma das maneiras de <strong>beneficiar pessoas</strong> é criar um{" "}
              <strong>aplicativo de sucesso</strong> que consegue resolver um ou
              mais problemas da sociedade.
            </p>
            <p>
              Nós <strong>NÃO</strong> garantimos que você vai terminar o curso
              e terá o <strong>emprego dos sonhos</strong>.
            </p>
            <p>
              Porém garantimos que, se <strong>você se empenhar</strong> em cada
              assunto abordado, a probabilidade de{" "}
              <strong>você ser bem sucedido</strong> é <strong>bem alta</strong>
              .
            </p>
            <p>
              Caso tu aprenda tudo que é passado no curso e siga os passos para
              ser um desenvolvedor de sucesso, você tem altíssima chance de dar
              certo nessa área.
            </p>
            <p>
              A possibilidade de você estar empregado com um salário de 5
              dígitos ou criar um aplicativo profissional monetizável é bem
              alta.
            </p>
            <p>Mudando um pouco de assunto, mas ainda falando sobre você...</p>
            <p>
              <strong>Faça as contas:</strong>
            </p>
            <p>
              Quanto de seu tempo é gasto em consumir as coisas que outras
              pessoas fizeram (TV, música, videogames, sites) contra as feitas
              por você?
            </p>
            <p>Somente um desses dois adiciona valor a você como ser humano.</p>
            <CallToAction />
            <small style={{ marginTop: "40px", display: "block" }}>
              Todos os direitos reservados - 2016-2019 01dev.
              <br />
              Em caso de dúvidas, entre em contato no e-mail{" "}
              <a href="mailto:luizhrqas@gmailcom">luizhrqas@gmail.com</a>
            </small>
          </BlocoPretoTexto>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default App;
