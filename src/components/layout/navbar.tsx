"use client";

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/images/medi-store-logo.png",
    alt: "logo",
    title: "Medi-Store",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "All Medicines", url: "/all-medicines" },
    { title: "Login", url: "/login" },
    { title: "Sign up", url: "/register" },
  ],

  className,
}: Navbar1Props) => {
  const path = usePathname();
  const router = useRouter();
  const session = authClient.useSession();
  const filteredMenuItems = menu.filter((item) => {
    if (session.data && (item.url === "/login" || item.url === "/register")) {
      return false;
    }
    return true;
  });
  if (session.data) {
    filteredMenuItems.push({ title: "Logout", url: "/logout" });
  }
  const handleLogout = async (): Promise<void> => {
    console.log('ji');
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
  };

  return (
    <section className={cn("bg-primary", className)}>
      <div className="container mx-auto   p-3 rounded-2xl">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-center lg:flex">
          <div className="flex items-center ">
            {/* Logo */}

            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {filteredMenuItems.map((item) =>
                    renderMenuItem(item, path, handleLogout),
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {filteredMenuItems.map((item) =>
                      renderMobileMenuItem(item),
                    )}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (
  item: MenuItem,
  path: string,
  handleLogout: () => Promise<void>,
) => {
  if (item.title === "Logout") {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink
          href={item.url}
          className={
            (cn(
              "group inline-flex h-full w-max items-center justify-center text-md font-semibold text-secondary-text   ",
            ),
            path === item.url
              ? "bg-highlight text-primary-foreground font-bold"
              : "text-muted-foreground hover:bg-muted")
          }
          asChild
        >
          <Button
            className="hover:bg-muted-text smooth-hover mx-5"
            onClick={() => handleLogout()}
          >
            {item.title}
          </Button>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={
          (cn(
            "group inline-flex h-full w-max items-center justify-center text-md font-semibold text-secondary-text   ",
          ),
          path === item.url
            ? "bg-highlight text-primary-foreground font-bold"
            : "text-muted-foreground hover:bg-muted")
        }
        asChild
      >
        <Link className="hover:bg-muted-text smooth-hover mx-5" href={item.url}>
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

export { Navbar };
