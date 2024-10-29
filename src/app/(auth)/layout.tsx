export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background bg-[url('/images/auth-light.png')] bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-[url('/images/auth-dark.png')]">
      {children}
    </main>
  );
}
