import { create } from 'zustand';

export const useSearchStore = create<any>()((set) => ({
  moviesLoading: false,
  setMoviesLoading: (moviesLoading: boolean) => set(() => ({ moviesLoading })),
  query: '',
  setQuery: (query: string) => set(() => ({ query })),
  movies: [],
  setMovies: (movies: any[]) => set(() => ({ movies })),
}));
