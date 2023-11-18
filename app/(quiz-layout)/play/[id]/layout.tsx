import QuizProvider from "@/components/providers/QuizProvider"
import { question } from "@/contants/example"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <QuizProvider slidesValue={question}>
  {children}
  </QuizProvider>
  )
}
