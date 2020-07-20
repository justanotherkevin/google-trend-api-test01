
const googleTrends = require('google-trends-api');

const Trend = props => {
  return (
    <div className="container">
      <h1>Trend</h1>

      <ul className="collapsible">
        <li>
          <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
      </ul>
      { props.posts.length > 0 ? (
        <ul className="collection">
          {props.posts.map((post) => (
            <li className="collection-item" key={`post_${post.id}`} >
              <span className="badge">{post.id}</span>
              {post.title}
            </li>
          ))}
        </ul>
      ) : (
        <h2>Loading</h2>
      ) }
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const trendRes = await googleTrends.interestOverTime({keyword: 'Women\'s march'})
  const trend = await JSON.parse(trendRes)

  return {
    props: {
      posts,
      trend,
    },
  }
}

export default Trend