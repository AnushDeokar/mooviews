import create from 'zustand';

export const useSearchStore = create<any>()((set) => ({
  query: '',
  setQuery: (query: string) => set(() => ({ query })),
  data: [],
  setData: (shows: any[]) => set(() => ({ shows })),
}));
