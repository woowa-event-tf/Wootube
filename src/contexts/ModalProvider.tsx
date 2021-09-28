import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { Target } from '../@types';
import Modal from '../components/Modal';

interface Value {
  openModal: (name: Target, fetcher: () => Promise<void>) => void;
  closeModal: () => void;
  name: Target | null;
}

export const ModalContext = createContext<Value | null>(null);

const ModalProvider = ({ children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState<Target | null>(null);
  const refetchRef = useRef<() => Promise<void>>();

  const openModal = (name: Target, refetch: () => Promise<void>) => {
    setName(name);
    setIsModalOpen(true);
    refetchRef.current = refetch;
  };

  const closeModal = () => {
    setIsModalOpen(false);
    refetchRef.current?.();
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, name }}>
      {isModalOpen && <Modal name={name} closeModal={closeModal} />}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
