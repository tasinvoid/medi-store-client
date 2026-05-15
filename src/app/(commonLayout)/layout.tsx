import { Navbar } from '@/components/layout/navbar';
import React from 'react';

export default function CommonLayoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <section>
            <Navbar></Navbar>
            {children}
        </section>
    );
}