import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'CreatiVista',
  description: 'Unleash your web development prowess. Upload, Explore, and be inspired by a vibrant community of web developers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
        {children}
  </main>
        <Footer />
        </body>
    </html>
  )
}
