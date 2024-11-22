import type { Metadata } from "next";
import "./globals.css";
import QueryWrapper from "@/components/wrappers/QueryWrapper";
import ReduxWrapper from "@/components/wrappers/ReduxWrapper";
import AppWrapper from "@/components/wrappers/AppWrapper";
import ToastWrapper from "@/components/wrappers/ToastWrapper";
import EventWrapper from "@/components/wrappers/EventWrapper";

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
      <body>
        <ReduxWrapper>
          <QueryWrapper>
            <ToastWrapper>
              <EventWrapper>
                <AppWrapper>{children}</AppWrapper>
              </EventWrapper>
            </ToastWrapper>
          </QueryWrapper>
        </ReduxWrapper>
      </body>
    </html>
  );
}
