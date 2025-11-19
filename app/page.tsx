import { EligibilityForm } from '@/components/eligibility-form'
import { BenefitsSection } from '@/components/benefits-section'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-primary">סוכן ביטוח מקצועי</h1>
              <p className="text-sm text-gray-600">ייעוץ והתאמה אישית</p>
            </div>
            <Button variant="outline" asChild>
              <a href="tel:+972501234567">
                <Phone className="ml-2 h-4 w-4" />
                התקשר עכשיו
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              בדיקת זכאות מהירה
              <br />
              <span className="text-primary">לביטוחים מותאמים אישית</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              מלא את הטופס הבא ונבדוק יחד את הזכאות שלך לביטוחים שונים.
              <br />
              תהליך פשוט ומהיר שיעזור לך למצוא את הכיסוי המושלם.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="ml-2">✓ ללא התחייבות</span>
              </div>
              <div className="flex items-center">
                <span className="ml-2">✓ תהליך מהיר</span>
              </div>
              <div className="flex items-center">
                <span className="ml-2">✓ ייעוץ מקצועי</span>
              </div>
            </div>
          </div>

          {/* Eligibility Form */}
          <EligibilityForm />
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            מלא את הטופס למעלה או צור איתנו קשר ישירות
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+972501234567">
                <Phone className="ml-2 h-5 w-5" />
                התקשר: 050-123-4567
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <a href="mailto:info@insurance-agent.co.il">
                <Mail className="ml-2 h-5 w-5" />
                שלח אימייל
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">אודות</h3>
              <p className="text-gray-400">
                סוכן ביטוח מקצועי עם שנים של ניסיון בייצוג לקוחות מול חברות הביטוח המובילות.
                אנחנו כאן כדי לעזור לך למצוא את הכיסוי המושלם.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">יצירת קשר</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="ml-2 h-4 w-4" />
                  <a href="tel:+972501234567" className="hover:text-white">
                    050-123-4567
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="ml-2 h-4 w-4" />
                  <a href="mailto:info@insurance-agent.co.il" className="hover:text-white">
                    info@insurance-agent.co.il
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="ml-2 h-4 w-4" />
                  <span>תל אביב, ישראל</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">שעות פעילות</h3>
              <ul className="space-y-2 text-gray-400">
                <li>ראשון - חמישי: 09:00 - 18:00</li>
                <li>שישי: 09:00 - 13:00</li>
                <li>שבת: סגור</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} סוכן ביטוח מקצועי. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

