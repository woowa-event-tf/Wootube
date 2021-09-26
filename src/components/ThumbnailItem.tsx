import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BlogItem } from 'src/pages/HomePage';

const ThumbnailItem = ({ name, imgUrl, blogUrl, nickName }: BlogItem) => {
  return (
    <Container href={blogUrl} target="_blank" rel="noopener noreferrer">
      <Thumbnail imgUrl={imgUrl} />
      <h3>
        {nickName}님의 블로그{!blogUrl && '가 없습니다.'}
      </h3>
      <div>
        <span>조회수 {blogUrl ? '3천' : '0'}</span>
        <span>우테코 {name}</span>
      </div>
    </Container>
  );
};

const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 260px;
  height: 200px;

  > h3 {
    width: 240px;
    margin: 0.5rem 0;
    padding: 0 0.5rem;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
  }

  > div {
    width: 240px;
    display: flex;
    padding: 0 0.5rem;
    justify-content: space-between;
    font-size: 0.7rem;
    font-weight: 500;
    color: #666666;
  }
`;

const Thumbnail = styled.div<{ imgUrl: string }>`
  width: 240px;
  height: 180px;
  border: 1px solid #cccccc;

  ${({ imgUrl }) =>
    imgUrl
      ? css`
          background-color: transparent;
          background-image: url(${imgUrl});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        `
      : css`
          background-color: #cccccc;
        `}
`;

export default ThumbnailItem;
