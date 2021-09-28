import styled from '@emotion/styled';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Cover = ({ children }: Props) => {
  return (
    <CoverSection>
      <TextWrapper>{children}</TextWrapper>

      <ImageWrapper>
        <img
          src="https://media.glassdoor.com/sqll/1702996/toss-s-korea-squarelogo-1578909764879.png"
          alt="Toss Logo"
        />
      </ImageWrapper>
    </CoverSection>
  );
};

const CoverSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  background-color: #1142f1ee;
  color: white;
  padding: 0 40px;
`;

const TextWrapper = styled.div`
  max-width: 800px;
  margin-right: 20px;

  p:first-of-type {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 20px 0;
  }

  p:last-of-type {
    font-size: 16px;
    font-weight: 500;
  }
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export default Cover;
