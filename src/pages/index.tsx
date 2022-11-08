import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/home.module.sass";

import Image from "next/image";

import techsImage from "../../public/images/hotel.png";
import  getPrismicClient  from '../services/prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

type Content = {
    title: string;
    titleContent: string;
    linkAction: string;
    mobileTitle: string;
    mobileContent: string;
    mobileBanner: string;
    webTitle: string;
    webContent: string;
    webBanner: string;
}

interface ContentProps{
  content: Content
}

export default function Home({ content }: ContentProps) {


  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>
              {content.titleContent}
            </span>

            <a href={content.linkAction} target='blank'>
              <button>AGENDAR DATA</button>
            </a>
          </section>
          <img src="/images/bannersvg.svg" alt="banner" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>{content.mobileTitle}</h2>
            <span>
              {content.mobileContent}
            </span>
          </section>

          <img src={content.mobileBanner} alt="conteudos mobile" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img className={styles.webImg} src={content.webBanner} alt="conteudos mobile" />

          <section>
            <h2>{content.webTitle}</h2>
            <span>
              {content.webContent}
            </span>
          </section>
        </div>

        <div className={styles.footer}>
          <Image src={techsImage} alt="tecnologias" />
          <h2>
            Mais de <span>15</span> hotéis espalhados pelo Brasil.
          </h2>
          <span>
            Tem interesse em viajar para outra cidade? Veja as nossas localidades!
          </span>

          <a href={content.linkAction} target='blank'>
            <button>VER LOCALIDADES</button>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])


  const {
    title, sub_title, link_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner
  } = response.results[0].data

  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,
    mobileTitle: RichText.asText(mobile),
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url
  }

  return {
    props: {
      content
    },
    revalidate: 60 * 2  // a cada 2 minutos
  };
};
