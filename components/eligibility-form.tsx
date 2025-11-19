'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'

interface FormData {
  age: string
  employmentStatus: string
  hasInsurance: string
  insuranceInterests: string[]
  budgetRange: string
  contactPreference: string
  name?: string
  phone?: string
  email?: string
}

export function EligibilityForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    age: '',
    employmentStatus: '',
    hasInsurance: '',
    insuranceInterests: [],
    budgetRange: '',
    contactPreference: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 6

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      const interests = prev.insuranceInterests || []
      if (interests.includes(interest)) {
        return { ...prev, insuranceInterests: interests.filter(i => i !== interest) }
      } else {
        return { ...prev, insuranceInterests: [...interests, interest] }
      }
    })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error('Error response:', data)
        alert(`אירעה שגיאה: ${data.error || 'שגיאה לא ידועה'}. אנא נסו שוב.`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('אירעה שגיאה בחיבור לשרת. אנא בדקו את החיבור לאינטרנט ונסו שוב.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">תודה רבה!</h2>
        <p className="text-gray-600 mb-6">
          פרטיך התקבלו בהצלחה. נציגנו יצור איתך קשר בהקדם.
        </p>
        <Button onClick={() => {
          setIsSubmitted(false)
          setCurrentStep(1)
          setFormData({
            age: '',
            employmentStatus: '',
            hasInsurance: '',
            insuranceInterests: [],
            budgetRange: '',
            contactPreference: '',
          })
        }}>
          שלח טופס נוסף
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            שלב {currentStep} מתוך {totalSteps}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round((currentStep / totalSteps) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Age */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">מה הגיל שלך?</h2>
            <p className="text-gray-600">הגיל חשוב לקביעת התאמת ביטוחים</p>
          </div>
          <div className="space-y-4">
            <Label htmlFor="age">גיל</Label>
            <Input
              id="age"
              type="number"
              min="18"
              max="100"
              value={formData.age}
              onChange={(e) => updateFormData('age', e.target.value)}
              placeholder="הכנס את גילך"
              className="text-lg"
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={nextStep} disabled={!formData.age}>
              הבא <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Employment Status */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">מה הסטטוס התעסוקתי שלך?</h2>
            <p className="text-gray-600">זה עוזר לנו להתאים את ההצעה הטובה ביותר</p>
          </div>
          <div className="space-y-4">
            <RadioGroup
              value={formData.employmentStatus}
              onValueChange={(value) => updateFormData('employmentStatus', value)}
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="employed" id="employed" />
                <Label htmlFor="employed" className="cursor-pointer flex-1">
                  שכיר
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="self-employed" id="self-employed" />
                <Label htmlFor="self-employed" className="cursor-pointer flex-1">
                  עצמאי
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="unemployed" id="unemployed" />
                <Label htmlFor="unemployed" className="cursor-pointer flex-1">
                  מובטל
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="retired" id="retired" />
                <Label htmlFor="retired" className="cursor-pointer flex-1">
                  פנסיונר
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student" className="cursor-pointer flex-1">
                  סטודנט
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              <ArrowRight className="ml-2 h-4 w-4" /> הקודם
            </Button>
            <Button onClick={nextStep} disabled={!formData.employmentStatus}>
              הבא <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Existing Insurance */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">האם יש לך ביטוחים פעילים?</h2>
            <p className="text-gray-600">זה עוזר לנו להבין את המצב הנוכחי שלך</p>
          </div>
          <div className="space-y-4">
            <RadioGroup
              value={formData.hasInsurance}
              onValueChange={(value) => updateFormData('hasInsurance', value)}
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="cursor-pointer flex-1">
                  כן, יש לי ביטוחים פעילים
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="cursor-pointer flex-1">
                  לא, אין לי ביטוחים פעילים
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              <ArrowRight className="ml-2 h-4 w-4" /> הקודם
            </Button>
            <Button onClick={nextStep} disabled={!formData.hasInsurance}>
              הבא <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Insurance Interests */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">באילו תחומי ביטוח אתה מעוניין?</h2>
            <p className="text-gray-600">ניתן לבחור מספר אפשרויות</p>
          </div>
          <div className="space-y-3">
            {['חיים', 'בריאות', 'משכנתא', 'תאונות', 'ביטוח רכב', 'ביטוח נסיעות', 'אחר'].map((interest) => (
              <div
                key={interest}
                onClick={() => handleInterestToggle(interest)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.insuranceInterests?.includes(interest)
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2 space-x-reverse">
                  <input
                    type="checkbox"
                    checked={formData.insuranceInterests?.includes(interest) || false}
                    onChange={() => handleInterestToggle(interest)}
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                  />
                  <Label className="cursor-pointer text-lg font-medium">{interest}</Label>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              <ArrowRight className="ml-2 h-4 w-4" /> הקודם
            </Button>
            <Button onClick={nextStep} disabled={!formData.insuranceInterests || formData.insuranceInterests.length === 0}>
              הבא <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 5: Budget Range */}
      {currentStep === 5 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">מה טווח התקציב המשוער שלך?</h2>
            <p className="text-gray-600">זה עוזר לנו להציע לך אפשרויות מתאימות</p>
          </div>
          <div className="space-y-4">
            <Select
              value={formData.budgetRange}
              onValueChange={(value) => updateFormData('budgetRange', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="בחר טווח תקציב" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-200">עד 200 ₪ לחודש</SelectItem>
                <SelectItem value="200-500">200-500 ₪ לחודש</SelectItem>
                <SelectItem value="500-1000">500-1,000 ₪ לחודש</SelectItem>
                <SelectItem value="1000-2000">1,000-2,000 ₪ לחודש</SelectItem>
                <SelectItem value="2000+">מעל 2,000 ₪ לחודש</SelectItem>
                <SelectItem value="not-sure">לא בטוח</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              <ArrowRight className="ml-2 h-4 w-4" /> הקודם
            </Button>
            <Button onClick={nextStep} disabled={!formData.budgetRange}>
              הבא <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 6: Contact Preference & Details */}
      {currentStep === 6 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">איך תרצה שנצור איתך קשר?</h2>
            <p className="text-gray-600">נשמח לעזור לך למצוא את הביטוח המתאים</p>
          </div>
          <div className="space-y-4">
            <RadioGroup
              value={formData.contactPreference}
              onValueChange={(value) => updateFormData('contactPreference', value)}
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="phone" id="phone" />
                <Label htmlFor="phone" className="cursor-pointer flex-1">
                  שיחה טלפונית
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email" className="cursor-pointer flex-1">
                  אימייל
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="whatsapp" id="whatsapp" />
                <Label htmlFor="whatsapp" className="cursor-pointer flex-1">
                  וואטסאפ
                </Label>
              </div>
            </RadioGroup>

            {formData.contactPreference && (
              <div className="space-y-4 pt-4 border-t">
                <div>
                  <Label htmlFor="name">שם מלא *</Label>
                  <Input
                    id="name"
                    value={formData.name || ''}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    placeholder="הכנס את שמך המלא"
                  />
                </div>
                {formData.contactPreference === 'phone' || formData.contactPreference === 'whatsapp' ? (
                  <div>
                    <Label htmlFor="phone">מספר טלפון *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="050-1234567"
                    />
                  </div>
                ) : (
                  <div>
                    <Label htmlFor="email">כתובת אימייל *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              <ArrowRight className="ml-2 h-4 w-4" /> הקודם
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={
                !formData.contactPreference ||
                !formData.name ||
                (!formData.phone && !formData.email) ||
                isSubmitting
              }
            >
              {isSubmitting ? 'שולח...' : 'שלח טופס'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

