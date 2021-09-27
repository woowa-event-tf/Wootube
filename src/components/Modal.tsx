import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { useModal } from '../contexts/ModalProvider';

const Modal = () => {
  const { closeModal, name } = useModal();

  const content = (
    <ModalOuter>
      <ModalContainer>
        <Header>
          {name}의 장점 적기
          <button onClick={closeModal}></button>
        </Header>
        <Body>
          <div>
            <span>쓰는 사람</span>
            <input />
          </div>
          <div>
            <span>장점 적기</span>
            <textarea />
          </div>
        </Body>
        <SubmitContainer>
          <button>확인</button>
        </SubmitContainer>
      </ModalContainer>
    </ModalOuter>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal')!);
};

const ModalOuter = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: bold;
  border-bottom: 1px solid #b6b6b6;
  padding: 0 20px 20px 20px;
  display: flex;
  justify-content: space-between;

  button {
    padding: 0 10px;
    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Multiplication_Sign.svg/1024px-Multiplication_Sign.svg.png)
      no-repeat center;
    background-size: 20px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  div {
    margin-bottom: 20px;

    span {
      display: inline-block;
      margin-bottom: 5px;
    }

    input,
    textarea {
      border: 1px solid #b6b6b6;
      padding: 10px;
      font-size: 16px;
      display: block;
      width: 100%;
      resize: none;
    }
  }
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 20px;

  button {
    background: black;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    padding: 10px 30px;
  }
`;

const ModalContainer = styled.section`
  width: 600px;
  height: 380px;
  border-radius: 20px;
  border: 1px solid #b6b6b6;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fafafa;
`;

export default Modal;
