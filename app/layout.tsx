import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'סוכן ביטוח מקצועי - בדיקת זכאות מהירה',
  description: 'בדקו את זכאותכם לביטוחים שונים עם סוכן ביטוח מקצועי. תהליך מהיר ופשוט לקבלת הצעה מותאמת אישית.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

