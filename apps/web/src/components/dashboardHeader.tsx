import { User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";

export function DashboardHeader() {
    const router = useRouter();
    const clearAuth = useAuthStore(state => state.clearAuth);
    const username = useAuthStore(state => state.username);
    
    const handleLogout = () => {
        clearAuth();
        router.push("/login");
    }
    
    return (
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                <h2 className="text-3xl font-bold tracking-tight">Custom Dashboard</h2>
            </Link>
            <div className="ml-auto flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{username}</span>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <User className="h-5 w-5" />
                            <span className="sr-only">User menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
