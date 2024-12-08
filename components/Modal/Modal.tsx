"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { cloneElement, ReactElement, ReactNode, useState } from "react";

const Modal = ({
  button,
  children
}: {
  button: ReactElement;
  children?: ReactElement;
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const ref = useClickOutside<HTMLDivElement>({
    closeFn: () => setOpenModal(false),
    stopBubbling: true
  });

  return (
    <div>
      {cloneElement(button, { onClick: () => setOpenModal(true) })}
      {openModal && (
        <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-50">
          <div ref={ref}>
            {cloneElement(children, {
              setCloseModal: () => setOpenModal(false)
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
