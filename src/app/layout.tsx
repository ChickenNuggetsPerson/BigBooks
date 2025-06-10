import type { Metadata } from "next";
import "./globals.css";
import { CompanyProvider } from "./CompanyContext";
import ModalContainer from "@/components/Decorative/Modal/ModalContainer";
import DevLink from "@/components/aboutModal/DevLink";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Big Books",
  description: "",
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className={`antialiased text-text bg-background`}>

        <div style={{ zIndex: 1000000 }}>
          <Toaster />
        </div>

        <CompanyProvider>
          <ModalContainer>
            {children}
          </ModalContainer>
        </CompanyProvider>


        <DevLink />

      </body>
    </html>
  );
}
