import { useEffect, useRef } from "react";

const useCloseModal = <TElement extends HTMLElement>(cb: () => false) => {
  const modalRef = useRef<TElement>(null!);

  useEffect(() => {
    const modalElement = modalRef.current;

    window.addEventListener("click", (e) => {
      if (modalElement && !modalElement.contains(e.target as HTMLElement)) {
        cb();
      }
    });

    return () => {
      window.removeEventListener("click", (e) => {
        if (modalElement && !modalElement.contains(e.target as HTMLElement)) {
          cb();
        }
      });
    };
  }, [modalRef, cb]);

  return modalRef;
};

export default useCloseModal;
