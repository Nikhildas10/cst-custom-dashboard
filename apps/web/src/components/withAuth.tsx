'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'

export function authProtected<P extends object>(Component: React.ComponentType<P>) {
  return function ProtectedRoute(props: P) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const accessToken = useAuthStore((state) => state.accessToken)

    useEffect(() => {
      // Small delay to ensure store is hydrated from localStorage
      const checkAuth = setTimeout(() => {
        if (!accessToken) {
          router.replace('/login')
        }
        setIsLoading(false)
      }, 100)

      return () => clearTimeout(checkAuth)
    }, [accessToken, router])

    if (isLoading) {
      return null // Or a loading spinner
    }

    if (!accessToken) {
      return null
    }

    return <Component {...props} />
  }
}
