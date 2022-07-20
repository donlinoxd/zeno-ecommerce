import styled, { css } from "styled-components";

export const radialGradient = css`
  background: radial-gradient(
    farthest-side circle at bottom right,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.9) 50%,
    ${({ theme }) => theme.colors.black} 70%
  );
`;

export const Container = styled.div`
  ${radialGradient}
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.gray};
  width: 400px;
  max-width: 90%;
  padding: 2rem;
  border-radius: 2px;
  display: grid;
  gap: 1.35rem 1.5rem;
  z-index: 1;
`;

export const BtnWrapper = styled.div`
  margin: 0.2rem 0;
  display: flex;
  justify-content: center;
`;
export const GoogleBtn = styled.button`
  display: flex;
  background: ${({ theme }) => theme.colors.red};
  border: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.8rem 1.45rem;
  border-radius: 2px;
  letter-spacing: 0.2px;
  font-size: 0.95rem;
  cursor: pointer;

  span {
    margin-left: 0.95rem;
  }

  ${({ theme }) => theme.screen.tablet} {
    font-size: 1.1rem;
  } ;
`;

export const Wrapper = styled.div`
  margin: 0.2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 0.85em;
  margin-bottom: 0.4rem;

  strong {
    text-decoration: underline;
  }
`;

export const Background = styled.img`
  position: absolute;
  right: -40%;
  bottom: 0;
  height: 100%;
  object-fit: cover;
  opacity: 75%;
  filter: drop-shadow(-10px 4px 20px rgba(0, 0, 0, 0.75));

  ${({ theme }) => theme.screen.tablet} {
    right: 0;
  } ;
`;

export const headingcss = css`
  margin-bottom: 1rem;
`;
