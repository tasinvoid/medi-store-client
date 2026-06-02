import { Navbar } from "@/components/layout/navbar";
import SecondaryBar from "@/components/layout/scondarybar";
import TopBar from "@/components/layout/topbar";
import { Toaster } from "@/components/ui/sonner";
import React from "react";

export default function CommonLayoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <TopBar></TopBar>
      <SecondaryBar></SecondaryBar>
      <Navbar></Navbar>
      <Toaster></Toaster>
      {children}
    </section>
  );
}
