import AppWrapper from "@/components/wrappers/AppWrapper";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppWrapper>{children}</AppWrapper>
    </>
  );
}
