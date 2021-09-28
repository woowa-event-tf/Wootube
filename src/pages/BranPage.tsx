import Board from '../components/Board';
import Cover from '../components/Cover';
import Subscribe from '../components/Subscribe';
import IMAGE_URLS from '../constants/imageUrls';
import TARGETS from '../constants/targets';
import useLetters from '../hooks/useLetters';


const BranPage = () => {
  const { letters, refetch } = useLetters(TARGETS.BRAN);

  return (
    <>
      <Cover>
        <p>포용과 혁신의 은행을 지향합니다.</p>
        <p>
          토스뱅크의 목표는 두 가지 입니다. 하나는 기존 은행의 주고객이었던 직장인 뿐만 아니라,
          소상공인, 저신용까지도 <br />
          부담없이 이용할 수 있는 접근성 높은 은행이 되는 것, 다른 하나는 금융 산업의 축을 공급자
          중심에서 사용자 중심으로 <br /> 완벽하게 옮겨오는 것입니다.
        </p>
      </Cover>
      <Subscribe title="토스뱅크" name={TARGETS.BRAN} refetch={refetch} />
      <Board
        letters={letters}
        imgUrl={IMAGE_URLS.BRAN}
      />
    </>
  );
};

export default BranPage;
