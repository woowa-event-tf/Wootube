import styled from '@emotion/styled';
import { useModal } from '../contexts/ModalProvider';

interface YoutubeTitle {
  title: string;
  name: string;
}

const Subscribe = ({ title, name }: YoutubeTitle) => {
  const { openModal } = useModal();

  return (
    <SubscribeSection>
      <LogoWrapper>
        <ImageWrapper>
          <img
            src="https://media.glassdoor.com/sqll/1702996/toss-s-korea-squarelogo-1578909764879.png"
            alt="Toss Logo"
          />
        </ImageWrapper>
        <h3>{title}</h3>
      </LogoWrapper>

      <Subscription>
        <button onClick={() => openModal(name)}>구독</button>
      </Subscription>
    </SubscribeSection>
  );
};

const SubscribeSection = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 15px;
  }
`;

const ImageWrapper = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #b6b6b6;

  img {
    width: 100%;
    height: auto;
  }
`;

const Subscription = styled.div`
  button {
    width: 80px;
    height: 35px;
    background-color: #e62117;
    color: white;
  }
`;

export default Subscribe;
