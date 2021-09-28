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
      <BoardItem>
        <div>
          <Thumbnail backgroundImageUrl={imgUrl} width={280} height={160} content={title} />
          <span>09:27</span>
        </div>
        <h3>{title}</h3>
        <div>
          <span>조회수 3천</span>
          <span>{from}</span>
        </div>
      </BoardItem>
    </>
  );
};

const BoardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      bottom: 5%;
      padding: 0 0.2rem;
    }
  }

  > h3 {
    width: 280px;
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

export default BoardContent;
