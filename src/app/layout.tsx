import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Navbar } from "./components/Navbar"; // Ensure the path is correct
import "./globals.css";
import Page from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          <div className="container mx-auto">
            <SignedOut>
              <Page />
            </SignedOut>
            <SignedIn>{children}</SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
