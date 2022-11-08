import Head from "next/head";
import React from "react";
import styles from "./styles.module.sass";

function Sobre() {
  return (
    <>
      <Head>
        <title>Quem somos? | Hiroto</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Angelo Gustavo</h1>
            <p>
              Me chamo Ângelo Gustavo e fiz esse projeto usando Next Js. É um
              projeto para praticar e para adicionar ao meu portifólio,
              portando, os conteúdos são fictícios e são apenas para ilustração.
              Moro em São Paulo e sou desenvolvedor front end Jr, buscando a
              minha primeira oportunidade de trabalho.
            </p>

            <div className={styles.links}>
              <a
                href="https://angelogustavo-portifolio.netlify.app/"
                target="blank"
              >
                Visite o meu portifólio
              </a>
              <a
                href="https://www.linkedin.com/in/souangelogustavo/"
                target="blank"
              >
                Visite o meu LinkedIn
              </a>
              <a href="https://github.com/SouAngelo" target="blank">
                Visite o meu github
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Sobre;
