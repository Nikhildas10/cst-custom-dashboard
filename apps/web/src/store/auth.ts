import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthState {
  accessToken: string | null
  username: string | null
  isHydrated: boolean
  setAuth: (accessToken: string, username: string) => void
  clearAuth: () => void
  setHydrated: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      username: null,
      isHydrated: false,
      setAuth: (accessToken, username) => set({ accessToken, username }),
      clearAuth: () => set({ accessToken: null, username: null }),
      setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated()
      },
    }
  )
)

