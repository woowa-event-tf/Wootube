import { createContext, useContext, useState } from 'react';

import Modal from '../components/Modal';

const ModalContext = createContext<any>(null);

const ModalProvider = ({ children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');

  const openModal = (name: string) => {
    setName(name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, name }}>
      {isModalOpen && <Modal />}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};

export default ModalProvider;
