import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
  <header className="sticky top-0 z-[999]">
    <Navbar /> 
  </header>

  <main className="w-[1440px] mx-auto min-h-[1000px]">
    {children}
  </main>

  <Footer />
  </>
  )
}
