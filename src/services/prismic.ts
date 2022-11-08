import Prismic from '@prismicio/client'

function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client('https://sistemaadmin.prismic.io/api/v2', {
    req,
  })

  return prismic
}

export default getPrismicClient