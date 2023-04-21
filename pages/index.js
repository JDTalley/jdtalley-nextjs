import Navbar from '../components/Navbar';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

function HomePage({ allPostsData }) {
    console.log(allPostsData);
    return (
        <>
            <Navbar />
            <div>
                <ul>
                    {allPostsData.map(({ slug, title, description }) => {
                        return (
                            <>
                                <Link href={`/posts/${slug}`} key={slug}>{title}</Link>
                                <p>{description}</p>
                            </>
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
  