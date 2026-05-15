import React from 'react';

export default function DashboardLayoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <section>
            {children}
        </section>
    );
}