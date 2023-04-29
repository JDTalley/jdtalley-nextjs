import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { getSortedPostsData } from '../lib/posts';

const wrapperStyle = {
    margin: 0,
}

function HomePage({ allPostsData }) {
    return (
        <div style={wrapperStyle}>
            <Navbar />
            <div>
                <ul>
                    {allPostsData.map(({ slug, title, description }) => {
                        return (
                            <Card
                                slug={slug}
                                title={title}
                                description={description}
                                key={slug} />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
  }

  export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
  
  export default HomePage
  