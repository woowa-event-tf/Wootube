import { MouseEvent, useState } from 'react';

import BoardContent from './BoardContent';
import styled from '@emotion/styled';

export interface Letter {
  id: string;
  title: string;
  from: string;
}

interface Prop {
  letters: Letter[];
  imgUrl: string;
}

const Board = ({ letters, imgUrl }: Prop) => {
  const [BoardState, setBoardState] = useState('동영상');

  const onClickBoardNav = (event: MouseEvent) => {
    const button = event.target as HTMLElement;

    setBoardState(button.innerText);
  };

  return (
    <ContentContainer>
      <ContentHeader>
        <button onClick={onClickBoardNav}>동영상</button>
        <button onClick={onClickBoardNav}>커뮤니티</button>
      </ContentHeader>
      <BoardList>
        {BoardState === '동영상' &&
          letters.map((letter) => <BoardContent letter={letter} key={letter.id} imgUrl={imgUrl} />)}
      </BoardList>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  cursor: pointer;

  button {
    margin: 0 10px;
    padding: 10px 15px;
    font-size: 18px;
    background: none;
  }
`;

const ContentHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #b6b6b6;

  position: sticky;
  top: 100px;
  background-color: #fafafa;
  z-index: 1;
`;

const BoardList = styled.ul`
  padding: 2rem 0.5rem 4rem;

  display: grid;
  grid-row-gap: 1.5rem;
  justify-items: start;

  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Board;
