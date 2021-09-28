import styled from '@emotion/styled';

import { Letter } from './Board';
import Thumbnail from './Thumbnail';

interface Prop {
  letter: Letter;
  imgUrl: string;
}

const BoardContent = ({ letter, imgUrl }: Prop) => {
  const { title, from } = letter;

  return (
    <>
      <VideoWrapper>
        <div>
          <Thumbnail backgroundImageUrl={imgUrl} width={280} height={160} content={title} />
          <span>09:27</span>
        </div>
        <h3>{title}</h3>
        <div>
          <span>조회수 3천</span>
          <span>{from}</span>
        </div>
      </VideoWrapper>
    </>
  );
};

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 200px;

  > div:nth-of-type(1) {
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
    width: 280px;
    margin: 0.5rem 0 0.2rem;
    padding: 0 0.5rem;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
  }

  > div:nth-last-of-type(1) {
    width: 280px;
    display: flex;
    padding: 0 0.5rem;
    justify-content: space-between;
    font-size: 0.7rem;
    font-weight: 500;
    color: #666666;
  }
`;

// const Thumbnail = styled.div<{ imgUrl: string }>`
//   width: 100%;
//   height: 100%;

//   border: 1px solid #cccccc;
//   background-color: transparent;
//   background-image: url(${({ imgUrl }) => imgUrl && imgUrl});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// `;

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

export default BoardContent;
