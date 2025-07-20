
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (

        <main className="px-5 lg:px-8 min-h-screen bg-black/30 ">
            {children}
        </main>

    );
}