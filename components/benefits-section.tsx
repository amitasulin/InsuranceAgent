import { Shield, Clock, Users, Award, Phone, CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'ייעוץ מקצועי מותאם',
    description: 'סוכן ביטוח מנוסה שיעזור לך למצוא את הכיסוי המושלם עבורך',
  },
  {
    icon: Clock,
    title: 'תהליך מהיר ופשוט',
    description: 'בדיקת זכאות תוך דקות ספורות ללא טרטורים מיותרים',
  },
  {
    icon: Users,
    title: 'שירות אישי',
    description: 'ליווי צמוד לאורך כל התהליך עד למציאת הביטוח המתאים',
  },
  {
    icon: Award,
    title: 'השוואת הצעות',
    description: 'גישה למגוון רחב של חברות ביטוח והצעות מותאמות',
  },
  {
    icon: Phone,
    title: 'זמינות גבוהה',
    description: 'זמינים עבורך בכל עת לשאלות וייעוץ מקצועי',
  },
  {
    icon: CheckCircle2,
    title: 'ללא התחייבות',
    description: 'בדיקת זכאות ללא כל התחייבות מצדך',
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            למה לבחור בנו?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנחנו כאן כדי לעזור לך למצוא את הביטוח המתאים ביותר עבורך
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

