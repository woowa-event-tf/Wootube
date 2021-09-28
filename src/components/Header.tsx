import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <header>
        <Link to="/">
          <img
            src="https://user-images.githubusercontent.com/59258239/134791043-8c560929-59d8-49db-9068-71527e9bbe4a.png"
            alt="유튜브 로고입니다."
            width="32px"
          />
          <h1>WooTube</h1>
        </Link>
        <a href="https://techcourse.woowahan.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://user-images.githubusercontent.com/59258239/134790952-5e0d4cfc-593f-420f-bc6b-1ae113165420.png"
            alt="우테코 로고입니다."
            width="190px"
            height="65px"
          />
        </a>
      </header>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background-color: #f7f7f7;
  border-bottom: 1px solid #d1d1d1;
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  height: 8vh;

  z-index: 1;
  box-shadow: 0 1px 3px rgba(75, 68, 68, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 2rem;

    > a {
      display: flex;
      align-items: center;

      h1 {
        font-weight: 600;
        font-size: 1.5rem;
        margin: 0 0.5rem;
      }
    }
  }
`;

export default Header;
