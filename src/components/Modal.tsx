import { ChangeEventHandler, FormEvent, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { INPUT_MAX_LENGTH } from '../constants/limits';
import api from '../api';
import TARGETS from '../constants/targets';
import { Target } from 'src/@types';

interface Props {
  name: Target | null;
  closeModal: () => void;
}

const DEFAULT_NAME = 'DEFAULT_NAME';
const targetName = {
  [TARGETS.GONI]: '곤이',
  [TARGETS.BRAN]: '브랜',
  DEFAULT_NAME: '',
};

const useInput = (initialValue?: string, maxLength?: number) => {
  const [value, setValue] = useState(initialValue ?? '');

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    if (value.length <= (maxLength ?? Infinity)) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const Modal = ({ name, closeModal }: Props) => {
  const { value: writer, onChange: onWriterChange } = useInput('', INPUT_MAX_LENGTH.LETTER_WRITER);
  const { value: title, onChange: onTitleChange } = useInput('', INPUT_MAX_LENGTH.LETTER_TITLE);

  const onWriteContent = async (event: FormEvent) => {
    event.preventDefault();

    if (!writer || !title) {
      alert('닉네임과 장점을 모두 입력해주세요');
      return;
    }

    if (name) {
      await api.posts.post({ target: name, author: writer, content: title });

      closeModal?.();
    }
  };

  const content = (
    <ModalOuter>
      <ModalContainer>
        <Header>
          <h2>{targetName[name ?? DEFAULT_NAME]}의 장점 적기</h2>
          <button onClick={closeModal} aria-label="닫기" />
        </Header>
        <Form onSubmit={onWriteContent}>
          <div>
            <label htmlFor="writer">
              닉네임
              <Indicator>
                {writer.length} / {INPUT_MAX_LENGTH.LETTER_WRITER}
              </Indicator>
            </label>
            <input id="writer" name="writer" value={writer} onChange={onWriterChange} required />
          </div>
          <div>
            <label htmlFor="title">
              장점 적기
              <Indicator>
                {title.length} / {INPUT_MAX_LENGTH.LETTER_TITLE}
              </Indicator>
            </label>
            <textarea id="title" value={title} onChange={onTitleChange} required />
          </div>
          <SubmitContainer>
            <button disabled={!writer || !title}>확인</button>
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
      position: relative;
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

const Indicator = styled.span`
  position: absolute;
  right: -5px;
  transform: translateX(100%);
`;

const SubmitContainer = styled.div`
  text-align: right;

  button {
    background: #080808;
    border-radius: 10px;
    padding: 10px 30px;

    color: white;
    font-size: 16px;

    :disabled {
      background-color: #656565;
      cursor: not-allowed;
    }
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
