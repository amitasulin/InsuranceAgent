# מדריך פריסה ל-Vercel

## שלב 1: התחברות ל-Vercel

1. היכנס ל-https://vercel.com
2. לחץ על **"Sign Up"** או **"Log In"**
3. בחר **"Continue with GitHub"** (מומלץ - קישור ישיר ל-repository)

## שלב 2: ייבוא הפרויקט

1. לאחר ההתחברות, לחץ על **"Add New..."** → **"Project"**
2. בחר את ה-repository: **`amitasulin/InsuranceAgent`**
3. Vercel יזהה אוטומטית:
   - ✅ Framework: **Next.js**
   - ✅ Build Command: `next build`
   - ✅ Output Directory: `.next`
   - ✅ Install Command: `npm install`

## שלב 3: הגדרות פריסה (אופציונלי)

### Root Directory
- השאר ריק (ברירת מחדל)

### Framework Preset
- Next.js (זוהה אוטומטית)

### Build and Output Settings
- Build Command: `npm run build` (ברירת מחדל)
- Output Directory: `.next` (ברירת מחדל)
- Install Command: `npm install` (ברירת מחדל)

## שלב 4: משתני סביבה (Environment Variables)

אם תרצה לחבר ל-CRM או למסד נתונים, הוסף משתני סביבה:

### דוגמה ל-Supabase:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### דוגמה ל-HubSpot:
```
HUBSPOT_API_KEY=your_hubspot_api_key
```

### דוגמה ל-Email (SMTP):
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
```

**איך להוסיף:**
1. בפרויקט ב-Vercel, לחץ על **Settings**
2. בחר **Environment Variables**
3. הוסף כל משתנה בנפרד
4. בחר את הסביבות (Production, Preview, Development)
5. לחץ **Save**

## שלב 5: פריסה

1. לחץ על **"Deploy"**
2. Vercel יתחיל לבנות את הפרויקט
3. תהליך הבנייה ייקח 1-3 דקות
4. לאחר סיום, תקבל קישור לאתר: `https://your-project-name.vercel.app`

## שלב 6: בדיקת האתר

1. פתח את הקישור שקיבלת
2. בדוק שהדף נטען כראוי
3. בדוק את הטופס - מלא אותו ובדוק שהנתונים נשמרים
4. בדוק תמיכה במובייל

## עדכונים עתידיים

כל push ל-`main` branch יגרום לפריסה אוטומטית חדשה!

- **Production**: כל push ל-`main`
- **Preview**: כל push ל-branches אחרים (PRs)

## פתרון בעיות נפוצות

### שגיאת Build
- בדוק את ה-Logs ב-Vercel
- ודא שכל התלויות ב-`package.json` תקינות
- ודא ש-TypeScript עובר ללא שגיאות

### משתני סביבה לא עובדים
- ודא שהוספת את המשתנים ב-Settings → Environment Variables
- ודא שבחרת את הסביבה הנכונה (Production/Preview)
- ודא שהשמות תואמים לקוד ב-`app/api/leads/route.ts`

### בעיות RTL/עברית
- ודא ש-`dir="rtl"` ב-`app/layout.tsx`
- בדוק שהטקסט מוצג נכון בדפדפן

## קישורים שימושיים

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

