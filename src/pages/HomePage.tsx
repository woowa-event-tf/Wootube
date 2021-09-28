import styled from '@emotion/styled';

import { blogList } from '../data/blogList';

import ThumbnailItem from '../components/ThumbnailItem';
export interface BlogItem {
  name: string;
  imgUrl: string;
  blogUrl: string;
  nickName: string;
  birth: string;
}
const HomePage = () => {
  return (
    <Section>
      <ul>
        {blogList.map(({ name, imgUrl, blogUrl, nickName, birth }: BlogItem) => (
          <li key={name}>
            <ThumbnailItem
              name={name}
              imgUrl={imgUrl}
              blogUrl={blogUrl}
              nickName={nickName}
              birth={birth}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

const Section = styled.section`
  height: 92vh;
  overflow: auto;

  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    > ul {
      padding: 3rem 0.2rem;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 1.5rem;
    }
  }

  @media screen and (min-width: 1200px) {
    > ul {
      padding: 3rem 0.5rem;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 1.5rem;
    }
  }
`;

export default HomePage;
