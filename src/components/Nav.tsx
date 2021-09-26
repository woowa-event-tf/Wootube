import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { gitHubList, projects, subscribeList } from '../info';
import NavItem from './NavItem';

export interface Item {
  name: string;
  url: string;
  imageUrl: string;
}

const Nav = () => {
  return (
    <AsideContainer>
      <ul>
        {gitHubList.map(({ name, url, imageUrl }: Item) => (
          <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <NavItem name={name} url={url} imageUrl={imageUrl} />
            </a>
          </li>
        ))}
      </ul>

      <ul>
        <span>구독</span>
        {subscribeList.map(({ name, url, imageUrl }: Item) => (
          <li>
            <Link to={url}>
              <NavItem name={name} url={url} imageUrl={imageUrl} />
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        <span>우리들의 프로젝트</span>
        {projects.map(({ name, url, imageUrl }: Item) => (
          <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <NavItem name={name} url={url} imageUrl={imageUrl} />
            </a>
          </li>
        ))}
      </ul>

      {/* <ul>
        <span>우리들의 프로젝트</span>
        {projects.map(({ name, url, imageUrl }: Item) => (
          <li>
            <a href={url} target="_blank">
              <NavItem name={name} url={url} imageUrl={imageUrl} />
            </a>
          </li>
        ))}
      </ul> */}
    </AsideContainer>
  );
};

const AsideContainer = styled.nav`
  width: 13rem;
  height: 92vh;
  overflow: auto;

  ul {
    width: 100%;
    /* max-height: 16rem; */
    /* overflow: hidden; */
    padding: 0.8rem 1rem;
    border: 1px solid #c7c7c7;
    border-top: none;

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
    }
  }
`;

export default Nav;
