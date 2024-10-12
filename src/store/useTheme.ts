import { create } from "zustand";

interface ThemeState {
  dark: boolean;
  changeTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  dark: true,
  changeTheme: () => set({ dark: !dark }),
}));

export default useThemeStore;
