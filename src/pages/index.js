import Card from "../components/Card";

import { getSortedPostsData } from "../lib/posts";

import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  padding: 0 2rem;
  flex-grow: 2;
`;

function HomePage({ allPostsData }) {
  return (
    <Main>
      <ul>
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
      </ul>
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
