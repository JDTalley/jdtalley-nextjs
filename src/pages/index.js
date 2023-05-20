import Card from "../components/Card";

import { getSortedPostsData } from "../lib/posts";

import styled from "styled-components";

const Main = styled.main`
  background-color: ${(props) => props.theme.colors.grayscale.contrast};
  color: ${(props) => props.theme.colors.grayscale.main};
  line-height: 1.6;
  margin: 0 auto;
  padding: 0 2rem;
  flex-grow: 2;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Recent = styled.div``;

const RecentTitle = styled.h1`
  color: ${(props) => props.theme.colors.secondary.main};
  text-transform: uppercase;
  font-weight: 500;
`;

const BlogList = styled.ul`
  //max-width: min(700px, 100%);
  padding: 0;
`;

const Sidebar = styled.div`
  //max-width: min(700px, 100%);
  color: ${(props) => props.theme.colors.secondary.main};
  text-transform: uppercase;
  font-weight: 500;
`;

function HomePage({ allPostsData }) {
  return (
    <Main>
      <Recent>
        <RecentTitle>Recently Published</RecentTitle>
        <BlogList>
          {allPostsData.map(({ slug, title, description }) => {
            return (
              <Card
                slug={slug}
                title={title}
                description={description}
                key={slug}
              />
            );
          })}
        </BlogList>
      </Recent>
      <Sidebar>
        <p>Sidebar</p>
      </Sidebar>
    </Main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default HomePage;
