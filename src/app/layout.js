import { Inknut_Antiqua } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

const inknutAntiqua = Inknut_Antiqua({

  subsets: ['latin'],

  weight: ['300', '400', '500', '600', '700'],

});

export const metadata = {
  title: "WildWood Gardens",
  description: "Chardon Ohio Local Bonsai Master Shop",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inknutAntiqua.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
