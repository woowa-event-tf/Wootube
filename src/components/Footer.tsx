import styled from '@emotion/styled';
import { creatorList } from '../data/creatorList';

const Footer = () => {
  return (
    <Container>
      <p>© 2021 woowacourse FE event-TF</p>
      <p>
        made by :
        {creatorList.map((creator, index) => (
          <>
            {' '}
            <a href={creator.url} target="_blank" rel="noopener noreferrer">
              {creator.name}
              {index !== creatorList.length - 1 ? ',' : ''}
            </a>
          </>
        ))}
      </p>
    </Container>
  );
};

const Container = styled.footer`
  padding: 1rem 1rem 2.5rem;
  color: #606060;

  p {
    margin: 0.5rem 0;

    font-size: 0.85rem;
    line-height: 1.5;
  }

  a {
    color: #606060;

    :hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
