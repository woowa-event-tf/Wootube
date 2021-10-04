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
  return (
    <ContentContainer>
      <ContentHeader>
        <button type="button">동영상</button>
      </ContentHeader>
      <BoardList>
        {letters.map((letter) => (
          <BoardContent letter={letter} key={letter.id} imgUrl={imgUrl} />
        ))}
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
  margin-top: 1rem;
  border-bottom: 1px solid #b6b6b6;

  position: sticky;
  top: 100px;
  background-color: #fafafa;
  z-index: 1;

  button {
    font-weight: 500;
  }
`;

const BoardList = styled.ul`
  padding: 2rem 0.5rem 4rem;

  @media screen and (min-width: 1100px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
  }

  @media screen and (min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2rem;
  }
`;

export default Board;
