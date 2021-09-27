import { MouseEvent, useState } from 'react';

import BoardContent from './BoardContent';
import styled from '@emotion/styled';

interface Letter {
  title: string;
  from: string;
  imgSrc: string;
}

interface Prop {
  letters: Letter[];
}

const Board = ({ letters }: Prop) => {
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
      <BoardSection>
        {BoardState === '동영상' &&
          letters.map((letter, index) => <BoardContent letter={letter} key={index} />)}
      </BoardSection>
    </ContentContainer>
  );
};

const BoardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 40px;

  padding: 20px 40px;
  margin: 0 auto;
`;

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
  border-bottom: 1px solid black;
`;

export default Board;
('');
