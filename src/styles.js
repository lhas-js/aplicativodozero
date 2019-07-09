import styled, { createGlobalStyle } from "styled-components";

export const GlobalStylesheet = createGlobalStyle`
    body {
        background: #000;
        font-family: "Fira Sans Condensed";
    }
`;

export const Logo01dev = styled.a`
  padding: 10px;
  display: block;
  text-align: center;
  margin-top: 20px;

  img {
    height: 50px;
  }
`;

export const PresentText = styled.p`
  color: #fff;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 200;
`;

export const LogoCurso = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;

  img {
    height: 100px;
    margin-right: 10px;
  }

  @media (min-width: 375px) {
    img {
      height: 180px;
    }
  }

  @media (min-width: 768px) {
    img {
      height: 240px;
    }
  }
`;

export const LogoCursoTexto = styled.aside`
  border-left: 1px solid #fff;
  padding-left: 20px;

  h1 {
    color: #fff;
    text-transform: uppercase;
    font-size: 2em;
    margin: 0px;
    font-weight: 200;
    line-height: 1;
  }
  h2 {
    color: #fff;
    text-transform: uppercase;
    font-size: 2.6em;
    margin: 0px;
    font-weight: 900;
    line-height: 1;
  }
  h3 {
    color: #fff;
    text-transform: uppercase;
    margin: 0px;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.25;
  }

  @media (min-width: 375px) {
    h1 {
      font-size: 2.25em;
    }
    h2 {
      font-size: 2.85em;
    }
    h3 {
      font-size: 1.09em;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 5.25em;
    }
    h3 {
      font-size: 2em;
    }
  }
`;

export const VideoApresentacao = styled.main`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 600px;
  margin: 0 auto;

  iframe {
    width: 100%;
    height: 160px;
    margin: 0 auto;
    display: block;
    background: rgba(255, 255, 255, 0.25);
    padding: 10px;
    border-radius: 10px;
  }

  @media (min-width: 375px) {
    iframe {
      height: 195px;
    }
  }

  @media (min-width: 425px) {
    iframe {
      height: 220px;
    }
  }

  @media (min-width: 768px) {
    iframe {
      max-width: 450px;
      height: 260px;
    }
  }
`;

export const VideoApresentacaoTexto = styled.section`
  color: #fff;
  text-align: center;
  font-weight: 200;
  margin-bottom: 40px;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
  }
`;

export const BlocoBrancoTexto = styled.section`
  text-align: center;
  font-weight: 300;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;

  p {
    font-size: 26px;
  }

  strong {
    font-weight: 700;
  }
`;

export const BlocoPretoTexto = styled.section`
  text-align: center;
  font-weight: 300;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  color: #fff;

  p {
    font-size: 26px;
  }

  strong {
    font-weight: 700;
  }
`;

export const HeroUnit = styled.div`
  width: 100%;
  max-width: 300px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 20px;
  text-align: center;

  em {
    text-decoration: line-through;
  }

  h2 {
    font-size: 26px;
    margin: 0px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    margin: 0px;
  }

  h4 {
    margin: 0px;
    font-size: 36px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const HeroUnitTexto = styled.div`
  width: 100%;
  padding: 40px;
  text-align: left;

  p {
    font-size: 24px;
    font-weight: 600;
  }

  li {
    font-size: 18px;
    line-height: 1.75;
    margin-bottom: 20px;
    font-weight: 200;
  }
`;

export const BlocoHeroUnit = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
