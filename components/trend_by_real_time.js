export const RealTimeTrend = props => {
  return (
    <ul>
      <li>{ props.trendData.date }</li>
      { props.trendData.storySummaries.trendingStories.map( (story, i) => (
        <li>
          {story.title && story.title}
          <ul>
            {story.articles.map( article => (
              <li>{article.articleTitle}</li>
            ))}
          </ul>
        </li>
      )) }
    </ul>
  )
}
export const RelatedQueriesDisplay = props => {
  return (
    <div>
      {props.relatedQuries.default.rankedList.map( list => (
        <ul>
          {list.rankedKeyword.map( word => (
            <li>{word.query}</li>
          ))}
        </ul>
      ))}
    </div>
  )
}