'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/auth"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { RegisterForm } from "@/components/forms/registerForm"

export default function RegisterPage() {
  const router = useRouter()
  const accessToken = useAuthStore((state) => state.accessToken)

  useEffect(() => {
    if (accessToken) {
      router.replace('/dashboard')
    }
  }, [accessToken, router])

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
