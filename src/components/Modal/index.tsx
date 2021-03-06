import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F2F2F2',
          color: '#000000',
          borderRadius: '8px',
          maxWidth: '95%',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

