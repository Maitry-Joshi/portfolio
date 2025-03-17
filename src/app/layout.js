import './globals.css';
import { Inter } from 'next/font/google';
import ThemeRegistry from './themeRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Maitry Joshi - Pharmaceutical Researcher',
  description: 'Professional portfolio of Maitry Joshi, a pharmaceutical researcher specializing in analytical method development and formulation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}