import { getAllPostsByDate } from '../helpers/file-helpers';
import MainWrapper from '../components/Home/MainWrapper';
import SidebarWrapper from '../components/Home/SidebarWrapper';
import Card from '../components/Card';

async function HomePage() {
  const posts = await getAllPostsByDate();
  return (
    <MainWrapper>
      <div>
        <h1>Recently Published</h1>
        <div>
          {posts.map(({ slug, title, excerpt, datePublished }) => {
            return (
              <Card
                slug={slug}
                title={title}
                excerpt={excerpt}
                datePublished={datePublished}
                key={slug}
              ></Card>
            );
          })}
        </div>
      </div>
    </MainWrapper>
  );
}

export default HomePage;
