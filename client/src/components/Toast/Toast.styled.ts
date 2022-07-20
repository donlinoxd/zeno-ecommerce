import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const ToastWrapper = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  .toast {
    margin: 0 auto;
    font-size: 0.85rem;
    background: rgba(0, 0, 0, 0.85);
    color: ${({ theme }) => theme.colors.white};
    min-height: auto;
    width: 250px;
    border-radius: 3px;
    padding: 0.6rem;
  }

  button[aria-label="close"] {
    color: ${({ theme }) => theme.colors.white};
  }

  .body {
    padding: 0;
    margin-right: 0.5rem;
    svg {
      width: 90%;
      height: 90%;
    }
  }
`;
