import "./globals.css";
import QueryWrapper from "@/components/wrappers/QueryWrapper";
import ReduxWrapper from "@/components/wrappers/ReduxWrapper";
import ToastWrapper from "@/components/wrappers/ToastWrapper";
import EventWrapper from "@/components/wrappers/EventWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Manager",
  description:
    "A Next js application to view, edit, and manage company records with an interactive table and update functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ReduxWrapper>
          <QueryWrapper>
            <ToastWrapper>
              <EventWrapper>{children}</EventWrapper>
            </ToastWrapper>
          </QueryWrapper>
        </ReduxWrapper>
      </body>
    </html>
  );
}
