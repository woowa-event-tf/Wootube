import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { projects } from '../data/projectList';
import { cannerList } from '../data/cannerList';
import { wootecoList } from '../data/wootecoList';

import NavItem from './NavItem';
import Footer from './Footer';

export interface Item {
  name: string;
  url: string;
  imageUrl: string;
}

const Nav = () => {
  return (
    <NavContainer>
      <ul>
        <span>채널</span>
        {cannerList.map(({ name, url, imageUrl }: Item) => (
          <li key={name}>
            <Link to={url}>
              <NavItem name={name} url={url} imageUrl={imageUrl} />
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        <span>우테코</span>
        {wootecoList.map(({ name, url, imageUrl }: Item) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <NavItem name={name} url={url} imageUrl={imageUrl} />
            </a>
          </li>
        ))}
      </ul>

      <ul>
        <span>우리들의 프로젝트</span>
        {projects.map(({ name, url, imageUrl }: Item) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <NavItem name={name} url={url} imageUrl={imageUrl} />
            </a>
          </li>
        ))}
      </ul>

      <Footer />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  max-width: 14rem;
  height: 92vh;
  overflow: auto;

  ul {
    width: 100%;
    padding: 0.8rem 1.5rem;
    padding-right: 0;
    border-bottom: 1px solid #c7c7c7;

    > span {
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 500;
    }

    li {
      display: flex;
      align-items: center;

      margin: 1rem 0;

      span {
        margin-left: 0.5rem;
      }

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Nav;
