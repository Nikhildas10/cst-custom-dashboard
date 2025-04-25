import { LoginForm } from "@/components/forms/loginForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Sign in to your account
          </CardTitle>
          <CardDescription>
            Enter your credentials below to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              Create an account
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
