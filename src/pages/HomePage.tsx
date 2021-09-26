import styled from '@emotion/styled';

import { blogList } from '../data/blogList';

import ThumbnailItem from '../components/ThumbnailItem';
export interface BlogItem {
  name: string;
  imgUrl: string;
  blogUrl: string;
  nickName: string;
}
const HomePage = () => {
  return (
    <Section>
      <ul>
        {blogList.map(({ name, imgUrl, blogUrl, nickName }: BlogItem) => (
          <li>
            <ThumbnailItem name={name} imgUrl={imgUrl} blogUrl={blogUrl} nickName={nickName} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

const Section = styled.section`
  height: 92vh;
  overflow: auto;

  > ul {
    padding: 3rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.5rem;
    grid-row-gap: 1.5rem;
  }
`;

export default HomePage;
