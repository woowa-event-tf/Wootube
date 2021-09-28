import Board from '../components/Board';
import Cover from '../components/Cover';
import Subscribe from '../components/Subscribe';
import { letterToGoni } from '../data/dummy/letterToGoni';

const GoniPage = () => {
  return (
    <>
      <Cover>
        <p>
          상식적인 금융 서비스는
          <br />
          삶을 윤택하게 합니다.
        </p>
        <p>
          문자 메시지 보내듯 편하게 송금하고, 모든 자산을 손끝에서 편하게 관리하고, 최고의 사용
          경험을 선사하는 디자인
          <br /> 덕분에 행복해지고, 큰 노력 없이 금융과 관련된 고민을 모두 해결하는 것. 토스에서는
          눈구나 경험할 수 있습니다.
        </p>
      </Cover>
      <Subscribe title="토스코어" name="곤이" />
      <Board
        letters={letterToGoni}
        imgUrl="https://user-images.githubusercontent.com/59258239/135033372-1abb2d56-2d9e-4b6a-9f7f-57f0356ee437.jpeg"
      />
    </>
  );
};

export default GoniPage;
