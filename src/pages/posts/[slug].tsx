import { GetServerSideProps } from 'next'
import React from 'react'
import styles from './post.module.sass'
import { ParsedUrlQuery } from 'querystring'
import getPrismicClient from '../../services/prismic'
import Head from 'next/head'
import Image from 'next/image'
import * as prismicR from '@prismicio/richtext'
import {RichText} from 'prismic-dom'

interface PostProps{
    post: {
        slug: string;
        title: string; 
        description: string;
        cover: string;
        updatedAt: string
    }
}

function Post({ post }: PostProps) {

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className={styles.container}>
          <article className={styles.post}>
            <Image
            quality={100}
            src={post.cover}
            alt={post.title}
            width={700}
            height={410}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII='            
            />

            <h1>{post.title}</h1>
            <time>{post.updatedAt}</time>
            <div className={styles.postContent} dangerouslySetInnerHTML={{__html: post.description}}></div>
          </article>
      </main>
    </>
  )
}

export default Post

export const getServerSideProps: GetServerSideProps = async ({ req, params}) => {

    const { slug } = params as ParsedUrlQuery
    const prismic = getPrismicClient(req)

    const response = await prismic.getByUID('post', String(slug), {})

    if(!response){
        return{
            redirect:{
                destination: '/posts',
                permanent: false
            }
        }
    }

    const post = {
        slug: slug, 
        title: prismicR.asText(response.data.title),
        description: RichText.asHtml(response.data.description),
        cover: response.data.cover.url, 
        updatedAt: new Date(String(response.last_publication_date)).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return{
        props:{
            post
        }
    }
}