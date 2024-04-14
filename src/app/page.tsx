import { getAllPostsByDate } from "../helpers/file-helpers";
import Card from "../components/Card";
import styles from "./home.module.css";

async function HomePage() {
  const posts = await getAllPostsByDate();
  return (
    <div>
      <div>
        <div className={styles.projects}>
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
    </div>
  );
}

export default HomePage;
