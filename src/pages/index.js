import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { getSortedPostsData } from '../lib/posts';

function HomePage({ allPostsData }) {
    return (
        <>
            <Navbar />
            <div>
                <ul>
                    {allPostsData.map(({ slug, title, description }) => {
                        return (
                            <Card
                                slug={slug}
                                title={title}
                                description={description} />
                        )
                    })}
                </ul>
            </div>
        </>
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
  