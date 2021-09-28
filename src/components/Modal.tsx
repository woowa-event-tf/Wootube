import { FormEvent } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

import { useModal } from '../contexts/ModalProvider';

const Modal = () => {
  const { closeModal, name } = useModal();

  const onWriteContent = (event: FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      writer: { value: string };
      title: { value: string };
    };

    const writer = target.writer.value;
    const title = target.title.value;
  };

  const content = (
    <ModalOuter>
      <ModalContainer>
        <Header>
          <h2>{name}의 장점 적기</h2>
          <button onClick={closeModal} aria-label="Close" />
        </Header>
        <Form onSubmit={onWriteContent}>
          <div>
            <label htmlFor="writer">쓰는 사람</label>
            <input id="writer" name="writer" />
          </div>
          <div>
            <label htmlFor="title">장점 적기</label>
            <textarea id="title" />
          </div>
          <SubmitContainer>
            <button>확인</button>
          </SubmitContainer>
        </Form>
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

  z-index: 2;
`;

const Header = styled.div`
  border-bottom: 1px solid #b6b6b6;
  padding: 0 20px 20px 20px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 22px;
    font-weight: bold;
  }

  button {
    padding: 0 10px;
    background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Multiplication_Sign.svg/1024px-Multiplication_Sign.svg.png')
      no-repeat center;
    background-size: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  div {
    margin-bottom: 20px;

    label {
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
  text-align: right;
  padding: 0 20px;

  button {
    background: #080808;
    border-radius: 10px;
    padding: 10px 30px;

    color: white;
    font-size: 16px;
  }
`;

const ModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 380px;
  padding: 20px 0;

  border-radius: 20px;
  border: 1px solid #b6b6b6;
  background: #fafafa;
`;

export default Modal;
