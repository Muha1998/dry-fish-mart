import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { LatestSlider } from "@/components/landing/latestSlider";
import { ItemsList } from "@/components/landing/itemsList";

export default function Home() {
  return (
    <main >
      <div className="relative w-full">

        <NavbarDemo />

        <div className="container mx-auto p-8 pt-24">
          <h1 className="mb-4 text-center text-3xl font-bold">
            Check the navbar at the top of the container
          </h1>
          <LatestSlider />
          <ItemsList />
        </div>
      </div>
    </main>
  );
}
