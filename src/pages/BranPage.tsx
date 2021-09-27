import Board from '../components/Board';
import Cover from '../components/Cover';
import Subscribe from '../components/Subscribe';
import { letterToGoni } from '../data/letterToGoni';

const BranPage = () => {
  return (
    <>
      <Cover>
        <h1>포용과 혁신의 은행을 지향합니다.</h1>
        <h3>
          토스뱅크의 목표는 두 가지 입니다. 하나는 기존 은행의 주고객이었던 직장인 뿐만 아니라,
          소상공인, 저신용까지도 <br />
          부담없이 이용할 수 있는 접근성 높은 은행이 되는 것, 다른 하나는 금융 산업의 축을 공급자
          중심에서 사용자 중심으로 <br /> 완벽하게 옮겨오는 것입니다.
        </h3>
      </Cover>
      <Subscribe title="토스뱅크" />
      <Board letters={letterToGoni} />
    </>
  );
};

export default BranPage;
