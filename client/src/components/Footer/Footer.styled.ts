import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 2rem 0;
  display: grid;
  border-top: 1px solid rgba(0, 0, 0, 0.35);
  gap: 2.5rem;

  ${({ theme }) => theme.screen.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
  ${({ theme }) => theme.screen.laptop} {
    gap: 3rem;
  } ;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.screen.tablet} {
    align-items: start;
  } ;
`;

export const Text = styled.p`
  font-size: 0.85em;
  margin: 1rem 0;
`;

export const Socials = styled.div`
  display: flex;
`;

export const Social = styled.div<{ bg?: string }>`
  padding: 0.5rem;
  background: ${({ bg }) => bg};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

export const Title = styled.strong`
  display: block;
  margin-bottom: 1rem;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const List = styled.li`
  grid-column: 1fr;
  font-size: 0.85em;
`;

export const DetailWrapper = styled.div``;

export const Detailed = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;

  span {
    margin-left: 1rem;
  }
`;
