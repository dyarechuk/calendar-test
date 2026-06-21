import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppToastContainer = () => {
  return (
    <ToastContainer
      position="bottom-right"
      newestOnTop={false}
      closeOnClick
      pauseOnHover
      draggable
    />
  );
};

export { AppToastContainer };
