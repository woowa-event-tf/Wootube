import { useContext } from 'react';
import styled from '@emotion/styled';

import { Target } from '../@types';
import { ModalContext } from '../contexts/ModalProvider';

interface YoutubeTitle {
  title: string;
  name: Target;
  refetch: () => Promise<void>;
}

const Subscribe = ({ title, name, refetch }: YoutubeTitle) => {
  const { openModal } = useContext(ModalContext) ?? {};

  return (
    <SubscribeSection>
      <LogoWrapper>
        <ImageWrapper>
          <img
            src="https://media.glassdoor.com/sqll/1702996/toss-s-korea-squarelogo-1578909764879.png"
            alt="Toss Logo"
          />
        </ImageWrapper>
        <h2>{title}</h2>
      </LogoWrapper>

      <Subscription>
        <button onClick={() => openModal?.(name, refetch)}>구독</button>
      </Subscription>
    </SubscribeSection>
  );
};

const SubscribeSection = styled.section`
  position: sticky;
  top: 0;
  background-color: #fafafa;
  z-index: 1;

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

  h2 {
    font-size: 18.72px;
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
