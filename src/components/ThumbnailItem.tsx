import { BlogItem } from 'src/pages/HomePage';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ThumbnailItem = ({ name, imgUrl, blogUrl, nickName, birth }: BlogItem) => {
  return (
    <Container href={blogUrl} target="_blank" rel="noopener noreferrer">
      <div>
        <Thumbnail imgUrl={imgUrl} />
        {birth && <span>{birth}</span>}
      </div>
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

  @media screen and (min-width: 1100px) and (max-width: 1300px) {
    width: 280px;
    height: 160px;

    > div:nth-of-type(1) {
      width: 280px;
      height: 160px;
    }

    > h3 {
      width: 280px;
    }

    > div:nth-last-of-type(1) {
      width: 280px;
    }
  }

  @media screen and (min-width: 1300px) {
    > div:nth-of-type(1) {
      width: 260px;
      height: 160px;
    }

    > h3 {
      width: 260px;
    }

    > div:nth-last-of-type(1) {
      width: 260px;
    }
  }

  :hover {
    transform: scale(1.05);
    transition: all 0.2s;
  }

  > div:nth-of-type(1) {
    overflow: hidden;

    position: relative;

    > span {
      background-color: #1a1a1a;
      color: #ffffff;
      line-height: 1.5;
      font-size: 0.7rem;

      position: absolute;
      right: 2%;
      bottom: 4%;
      padding: 0 0.2rem;
    }
  }

  > h3 {
    margin: 0.5rem 0 0.2rem;
    padding: 0 0.5rem;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
  }

  > div:nth-last-of-type(1) {
    display: flex;
    padding: 0 0.5rem;
    justify-content: space-between;
    font-size: 0.7rem;
    font-weight: 500;
    color: #666666;
  }
`;

const Thumbnail = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100%;

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
