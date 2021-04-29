import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over the posts and show them */}
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.slug}`} key={post.id}>
            <a>
              <h2>{post.title}</h2>
              <div>{post.user.username}</div>
            </a>
          </Link>
        ))}
    </div>
  )
}

export async function getStaticProps() {
  // get posts from api
  const res = await fetch('http://localhost:1337/posts')
  const posts = await res.json()

  return {
    props: { posts },
  }
}
