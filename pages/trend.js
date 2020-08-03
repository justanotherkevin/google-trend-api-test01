import {RealTimeTrend,RelatedQueriesDisplay} from '../components/trend_by_real_time';
const googleTrends = require('google-trends-api');

// This function gets called at build time
export async function getStaticProps() {
  let queryData = {
    // trendDate: new Date(),
    geo: 'US',
    category: 'b',
  }

  let errors = []
  // https://github.com/pat310/google-trends-api#realtimetrends
  const trendRes = await googleTrends.realTimeTrends(queryData,
    function(err, results) {
      if (err) errors.push(err)
      else return results
    }
  );
  const relatedQueriesData = await googleTrends.relatedQueries({keyword: 'stock'},
    function(err, results) {
      if (err) errors.push(err)
      else return results
    }
  );
  const relatedTopicsData = await googleTrends.relatedTopics({keyword: 'stock'},
    function(err, results) {
      if (err) errors.push(err)
      else return results
    }
  );
  const dailyTrendSearch = await googleTrends.dailyTrends({ trendDate: new Date(), geo: 'US', },
    function(err, results) {
      if (err) errors.push(err)
      else return results
    }
  );


  const trend = await JSON.parse(trendRes)
  const dailyTrend = await JSON.parse(dailyTrendSearch)
  const relatedQueries = await JSON.parse(relatedQueriesData)
  const relatedTopics = await JSON.parse(relatedTopicsData)

  return {
    props: {
      trend,
      dailyTrend,
      relatedQueries,
      relatedTopics,
    },
  }
}
const Trend = props => {
  return (
    <div className="container">
      <h1>Trend</h1>

      { props.trend ? (
        <>
          <RealTimeTrend trendData={props.trend} />
          <h2>*******************RELATED*********************</h2>
          <RelatedQueriesDisplay relatedQuries={props.relatedQueries} />
        </>
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


export default Trend