import { create } from 'zustand';

export const useSearchStore = create<any>()((set) => ({
  query: '',
  setQuery: (query: string) => set(() => ({ query })),
  movies: [],
  setMovies: (movies: any[]) => set(() => ({ movies })),
}));
