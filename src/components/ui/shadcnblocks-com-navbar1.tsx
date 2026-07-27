"use client";

import React from "react";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Button } from "@/src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const renderIcon = (icon: React.ReactNode, isDarkBg: boolean) => {
  if (!icon) return null;
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon as React.ReactElement<any>, {
      className: cn(
        (icon as React.ReactElement<any>).props.className,
        isDarkBg ? "!text-brand-yellow" : "!text-brand-blue"
      ),
    });
  }
  return icon;
};

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  mobileExtraLinks = [
    { name: "Press", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Imprint", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-3 bg-brand-blue text-white font-sans border-b border-white/10 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="hidden justify-between lg:flex items-center">
          <div className="flex items-center gap-8">
            <a href={logo.url} className="flex items-center gap-3 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} className="w-9 h-auto object-contain" alt={logo.alt} />
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-yellow transition-colors font-sans">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-blue font-sans font-semibold rounded-xl bg-transparent transition-all px-4 h-9">
              <a href={auth.login.url}>{auth.login.text}</a>
            </Button>
            <Button asChild size="sm" className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue font-sans font-bold rounded-xl shadow-md transition-all px-4 h-9 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} className="w-8 h-auto object-contain" alt={logo.alt} />
              <span className="text-lg font-bold text-white tracking-tight font-sans">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-white/20 hover:bg-white/10 text-white bg-transparent">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-brand-blue text-white border-l border-white/10 font-sans p-6 w-80">
                <SheetHeader className="text-left border-b border-white/10 pb-4">
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} className="w-8 h-auto object-contain" alt={logo.alt} />
                      <span className="text-lg font-bold text-white tracking-tight font-sans">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t border-white/10 py-4">
                    <div className="grid grid-cols-2 gap-2">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-1 text-xs font-medium text-white/70 hover:text-brand-yellow hover:bg-white/5 transition-colors font-sans"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pt-2">
                    <Button asChild variant="outline" className="border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-blue bg-transparent transition-all rounded-xl font-semibold font-sans w-full justify-center">
                      <a href={auth.login.url}>{auth.login.text}</a>
                    </Button>
                    <Button asChild className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue font-bold rounded-xl transition-all font-sans w-full justify-center cursor-pointer">
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-white/10 hover:text-brand-yellow data-[state=open]:bg-white/10 data-[state=open]:text-brand-yellow focus:bg-white/10 focus:text-brand-yellow font-sans font-medium transition-all duration-200 cursor-pointer">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-85 p-3 bg-white text-brand-ink rounded-xl shadow-xl border border-brand-blue-50/85">
            <NavigationMenuLink asChild>
              <div className="flex flex-col gap-1">
                {item.items.map((subItem) => (
                  <a
                    key={subItem.title}
                    className="flex select-none gap-4 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-brand-white-50 text-brand-blue-600 hover:text-brand-blue font-sans group/sub"
                    href={subItem.url}
                  >
                    {renderIcon(subItem.icon, false)}
                    <div>
                      <div className="text-sm font-semibold text-brand-ink group-hover/sub:text-brand-blue transition-colors">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-xs leading-snug text-brand-blue-400 mt-1">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white/90 hover:text-brand-yellow hover:bg-white/10 focus:text-brand-yellow focus:bg-white/10 font-sans transition-all duration-200"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-2 text-white/95 font-semibold hover:no-underline hover:text-brand-yellow transition-colors font-sans text-sm">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-1">
          <div className="flex flex-col gap-1 pl-3 border-l border-white/10">
            {item.items.map((subItem) => (
              <a
                key={subItem.title}
                className="flex select-none gap-3 rounded-lg p-2.5 leading-none outline-none transition-all hover:bg-white/5 text-white/80 hover:text-brand-yellow font-sans"
                href={subItem.url}
              >
                {renderIcon(subItem.icon, true)}
                <div>
                  <div className="text-xs font-semibold">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-[11px] leading-snug text-white/60 mt-0.5">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-white/95 hover:text-brand-yellow py-2 font-semibold font-sans text-sm transition-colors block">
      {item.title}
    </a>
  );
};

export { Navbar1 };
