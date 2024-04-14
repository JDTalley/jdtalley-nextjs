import { getAllPostsByDate } from "../helpers/file-helpers";
import Card from "../components/Card";

async function HomePage() {
  const posts = await getAllPostsByDate();
  return (
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
  );
}

export default HomePage;
