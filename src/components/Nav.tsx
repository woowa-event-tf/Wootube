import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { projects } from '../data/projectList';
import { subscribeList } from '../data/subscribeList';
import { gitHubList } from '../data/githubList';

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
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <NavItem name={name} url={url} imageUrl={imageUrl} />
            </a>
          </li>
        ))}
      </ul>

      <ul>
        <span>구독</span>
        {subscribeList.map(({ name, url, imageUrl }: Item) => (
          <li key={name}>
            <Link to={url}>
              <NavItem name={name} url={url} imageUrl={imageUrl} />
            </Link>
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
    </AsideContainer>
  );
};

const AsideContainer = styled.nav`
  min-width: 12rem;
  height: 92vh;
  overflow: auto;

  ul {
    width: 100%;
    padding: 0.8rem 2rem;
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
