"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Suspense, useEffect, useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";
import { LogOut, ShoppingCart } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { get } from "http";
import { AuthButton } from "./auth-button";

export default function CustomNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Offers",
      link: "/offers",
    },
    {
      name: "Receipes",
      link: "/receipes",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  async function getUserDetails() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getClaims();

    if (error || !data?.claims) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }

  async function signOut() {
    const supabase = await createClient();

    await supabase.auth.signOut();

    getUserDetails();
  }

  useEffect(() => {
    getUserDetails();
  }, [])

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4 z-50">
          <ThemeSwitcher />
          <Button variant="ghost" size={"sm"}><ShoppingCart /></Button>
          <div>
            <AuthButton />
          </div>
        </div>
      </NavBody >
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <ThemeSwitcher />
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Login
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar >
  );
}
