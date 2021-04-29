import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
      <h2>{post.title}</h2>
    </div>
  )
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch('https://next-strapi-backend-nr4i6.ondigitalocean.app//posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

// for each individua page: get the data fro that page
export async function getStaticProps({ params }) {
  const { slug } = params

  const res = await fetch(`https://next-strapi-backend-nr4i6.ondigitalocean.app/posts?slug=${slug}`)
  const data = await res.json()
  const post = data[0]

  return {
    props: { post },
  }
}
