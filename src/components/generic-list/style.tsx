import styled from 'styled-components';

export const ListContainer = styled.ul`
  width: 70%;
  margin: 2rem auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
