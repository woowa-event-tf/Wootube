import { useEffect, useState } from 'react';

import { Letter } from '../components/Board';
import { Target } from '../@types';
import api from '../api';

const useLetters = (target: Target) => {
  const [letters, setLetters] = useState<Letter[]>([]);

  const fetchLetters = async () => {
    const fetchedLetters = await api.posts.get();
    const convertedLetters = fetchedLetters.filter(
      ({ target: currentTarget }) => currentTarget === target,
    );

    setLetters(convertedLetters);
  };

  useEffect(() => {
    fetchLetters();
  }, []);

  return { letters, refetch: fetchLetters };
};

export default useLetters;
