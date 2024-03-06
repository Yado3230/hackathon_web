"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useAuth } from "../api/auth/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [isOpened, setIsOpened] = useState(true);
  const [passwordChanged, setPasswordChanged] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { accessToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!mounted) {
      return;
    }

    // if (!accessToken) {
    //   router.push("/");
    // }
  }, [mounted, accessToken, router, passwordChanged]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className={cn("min-h-screen bg-background font-sans antialiased")}>
        <div>
          <Navbar setIsOpened={setIsOpened} isOpened={isOpened} />
          <Sidebar setIsOpened={setIsOpened} isOpened={isOpened} />
          <div className="m-8 md:ml-72 mt-16 pt-4">{children}</div>
        </div>
      </div>
    </>
  );
}
