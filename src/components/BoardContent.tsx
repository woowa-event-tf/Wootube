import React from 'react';
import styled from '@emotion/styled';

interface Letter {
  title: string;
  from: string;
  imgSrc: string;
}

interface Prop {
  letter: Letter;
}

const BoardContent = ({ letter }: Prop) => {
  const { title, from, imgSrc } = letter;

  return (
    <VideoWrapper>
      <ImageWrapper>
        <img src={imgSrc} alt="편지 이미지" />
      </ImageWrapper>
      <DescriptionWrapper>
        <h3>{title}</h3>

        <div>
          <span>조회수 3천</span>
          <span>{from}</span>
        </div>
      </DescriptionWrapper>
    </VideoWrapper>
  );
};

const ImageWrapper = styled.div`
  border: 1px solid #b6b6b6;
  width: 100%;
  height: auto;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 0 10px;

  h3 {
    margin-bottom: 7px;
    font-size: 18px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 12px;
    margin-bottom: 7px;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
`;

export default BoardContent;
