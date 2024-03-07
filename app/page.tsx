"use client";
import React from "react";
import Hero from "@/components/ui/Hero";
import { Search } from "./dashboard/components/search";
import { Button } from "@/components/ui/button";
import Cards from "@/components/Card";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <div className="border-b px-10 gap-6">
        <div className="flex h-16 items-center px-4">
          Logo Here
          {/* <MainNav className="mx-6" /> */}
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <div className="flex rounded items-center space-x-2">
              {" "}
              <Button
                variant="outline"
                onClick={() => router.push("/auth/signin")}
              >
                Login
              </Button>
              <Button onClick={() => router.push("/auth/signup")}>
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <div className="grid grid-cols-3 p-10 gap-10">
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
