import styled from 'styled-components';

export const Container = styled.div`
  max-width: 450px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--white-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  footer {
    display: flex;
    gap: 8px;

    #edit-button,
    #deactivate-button,
    #delete-button {
      background: transparent;
      border: 1px solid var(--border);
      cursor: pointer;
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      &:hover {
        background: var(--background);
        color: var(--black-color);
      }
    }

    #delete-button {
      flex: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  h1 {
    color: var(--primary);
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--secondary);
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
