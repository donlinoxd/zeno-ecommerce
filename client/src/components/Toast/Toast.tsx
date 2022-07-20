import { ToastWrapper } from "./Toast.styled";

const Toast = () => {
  return (
    <ToastWrapper
      autoClose={false}
      hideProgressBar={true}
      pauseOnFocusLoss={false}
      limit={1}
    />
  );
};
export default Toast;
