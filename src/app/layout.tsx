import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Navbar } from "./components/Navbar"; // Ensure the path is correct
import "./globals.css";

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
              <div className="flex justify-center items-center h-screen">
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>{children}</SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
