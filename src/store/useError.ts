import { create } from "zustand";

interface ErrorState {
  error: string | null; // error는 string 또는 null 타입
  setError: (message: string) => void;
  clearError: () => void;
}

const useErrorStore = create<ErrorState>((set) => ({
  error: null,
  setError: (message: string) => set({ error: message }),
  clearError: () => set({ error: null }),
}));

export default useErrorStore;
