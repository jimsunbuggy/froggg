import '@/app/ui/global.css';
import { inter, dancing_script } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dancing_script.className} antialiased`}>{children}</body>
    </html>
  );
}
