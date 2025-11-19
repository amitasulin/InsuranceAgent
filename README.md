# דף נחיתה לסוכן ביטוח - Landing Page for Insurance Agent

דף נחיתה מקצועי עם טופס בדיקת זכאות לבניית Next.js עבור סוכן ביטוח.

## תכונות

- ✅ דף נחיתה מודרני ומותאם למובייל
- ✅ טופס בדיקת זכאות רב-שלבי (Wizard)
- ✅ תמיכה בעברית עם RTL
- ✅ עיצוב מודרני עם Tailwind CSS ו-Shadcn UI
- ✅ API Route לשמירת לידים
- ✅ אנימציות עדינות וחוויית משתמש מעולה
- ✅ נגישות מלאה

## התקנה

1. התקן את התלויות:
```bash
npm install
```

2. הרץ את שרת הפיתוח:
```bash
npm run dev
```

3. פתח את הדפדפן בכתובת [http://localhost:3000](http://localhost:3000)

## מבנה הפרויקט

```
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts          # API endpoint לשמירת לידים
│   ├── globals.css               # סגנונות גלובליים
│   ├── layout.tsx                # Layout ראשי
│   └── page.tsx                  # דף הבית
├── components/
│   ├── ui/                       # רכיבי UI בסיסיים
│   ├── eligibility-form.tsx      # טופס בדיקת זכאות
│   └── benefits-section.tsx      # סקציית יתרונות
└── lib/
    └── utils.ts                  # פונקציות עזר
```

## אינטגרציה עם CRM

כדי לשמור לידים ב-CRM חיצוני, ערוך את הקובץ `app/api/leads/route.ts` והוסף את הקוד המתאים:

### דוגמה ל-HubSpot:
```typescript
await fetch('https://api.hubapi.com/contacts/v1/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
  },
  body: JSON.stringify({
    properties: [
      { property: 'email', value: data.email },
      { property: 'phone', value: data.phone },
      // ... more properties
    ],
  }),
})
```

### דוגמה ל-Supabase:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

await supabase.from('leads').insert([data])
```

## משתני סביבה

צור קובץ `.env.local` והוסף את המשתנים הבאים:

```env
# Database (if using Supabase)
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

# CRM API Keys
HUBSPOT_API_KEY=your_hubspot_key
```

## Deployment

הפרויקט מוכן לפריסה ב-Vercel:

1. דחוף את הקוד ל-GitHub
2. התחבר ל-Vercel
3. ייבא את הפרויקט
4. הוסף משתני סביבה במידת הצורך
5. Deploy!

## KPI Tracking

למעקב אחר KPI, ניתן להוסיף:

- Google Analytics
- Facebook Pixel
- Custom analytics endpoint

## רישיון

MIT

