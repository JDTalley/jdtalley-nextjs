import MainWrapper from "./components/Home/MainWrapper";
import SidebarWrapper from "./components/Home/SidebarWrapper";
import { allPosts } from "contentlayer/generated";
import Card from "./components/Card";

function HomePage() {
  const PostsByDate = allPosts.sort((a, b) => {
    if (a.datePublished < b.datePublished) {
      return 1;
    } else {
      return -1;
    }
  });

  const recentPosts = PostsByDate.slice(0, 10);

  return (
    <MainWrapper>
      <div>
        <h1>Recently Published</h1>
        <div>
          {recentPosts.map(({ title, description, datePublished, slug }) => {
            return (
              <Card
                slug={slug}
                title={title}
                description={description}
                datePublished={datePublished}
                key={slug}
              ></Card>
            );
          })}
        </div>
      </div>
      <SidebarWrapper>
        <p>Sidebar</p>
      </SidebarWrapper>
    </MainWrapper>
  );
}

export default HomePage;
