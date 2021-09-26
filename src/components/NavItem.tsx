import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Item } from './Nav';

const NavItem = ({ name, imageUrl }: Item) => {
  return (
    <ItemWrapper>
      <Icon imageUrl={imageUrl} />
      <span>{name}</span>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  > span {
    margin-left: 0.5rem;
    font-size: 0.9rem;
    color: #404040;
  }
`;

const Icon = styled.div<{ imageUrl: string }>`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: #b8b8b8;

  ${({ imageUrl }) =>
    imageUrl &&
    css`
      background-color: transparent;
      background-image: url(${imageUrl});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `}
`;

export default NavItem;
