import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthState {
  accessToken: string | null
  username: string | null
  setAuth: (accessToken: string, username: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      username: null,
      setAuth: (accessToken, username) => set({ accessToken, username }),
      clearAuth: () => set({ accessToken: null, username: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
