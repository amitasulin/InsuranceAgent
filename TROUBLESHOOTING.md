# פתרון בעיות - Vercel Deployment

## בעיות נפוצות ופתרונות

### 1. האתר לא נטען ב-Vercel

**תסמינים:**
- שגיאת 404 או 500
- דף ריק
- שגיאת build

**פתרונות:**
1. בדוק את ה-Logs ב-Vercel Dashboard → Deployments → [הפריסה האחרונה] → Logs
2. ודא שהבנייה עוברת בהצלחה: `npm run build`
3. בדוק שאין שגיאות TypeScript: `npm run lint`

### 2. API Routes לא עובדים

**תסמינים:**
- הטופס לא נשלח
- שגיאת 404 ב-`/api/leads`
- שגיאת CORS

**פתרונות:**
1. ודא שה-API route נמצא ב-`app/api/leads/route.ts`
2. בדוק את ה-Logs ב-Vercel Functions
3. ודא שהפונקציה export נכונה: `export async function POST()`

### 3. בעיות עם RTL/עברית

**תסמינים:**
- הטקסט לא מוצג נכון
- כיוון לא נכון

**פתרונות:**
1. ודא ש-`dir="rtl"` ב-`app/layout.tsx`
2. ודא ש-`lang="he"` ב-HTML tag
3. בדוק שהגופן תומך בעברית (Inter עובד אבל לא אופטימלי)

### 4. Tailwind CSS לא עובד

**תסמינים:**
- סגנונות לא מוצגים
- דף ללא עיצוב

**פתרונות:**
1. ודא ש-`tailwind.config.ts` קיים
2. ודא ש-`postcss.config.js` קיים
3. ודא ש-`app/globals.css` כולל את ה-Tailwind directives

### 5. שגיאת Build ב-Vercel

**תסמינים:**
- Build נכשל
- שגיאות TypeScript

**פתרונות:**
1. הרץ `npm run build` מקומית ובדוק שגיאות
2. ודא שכל התלויות ב-`package.json` תקינות
3. בדוק שאין imports חסרים
4. ודא ש-TypeScript עובר: `npx tsc --noEmit`

### 6. משתני סביבה לא עובדים

**תסמינים:**
- API keys לא נטענים
- שגיאות undefined

**פתרונות:**
1. הוסף משתני סביבה ב-Vercel → Settings → Environment Variables
2. ודא שבחרת את הסביבה הנכונה (Production/Preview/Development)
3. ודא שהשמות תואמים לקוד: `process.env.VARIABLE_NAME`
4. **חשוב:** לאחר הוספת משתנים, צריך לעשות Redeploy

### 7. בעיות עם Imports (@/)

**תסמינים:**
- שגיאת Module not found
- Path resolution לא עובד

**פתרונות:**
1. ודא ש-`tsconfig.json` כולל:
   ```json
   "paths": {
     "@/*": ["./*"]
   }
   ```
2. ודא שהקובץ קיים בנתיב הנכון
3. נסה להשתמש ב-relative imports במקום `@/`

## בדיקות לפני פריסה

1. ✅ `npm run build` עובר בהצלחה
2. ✅ `npm run lint` עובר ללא שגיאות
3. ✅ האתר עובד ב-localhost
4. ✅ הטופס שולח נתונים בהצלחה
5. ✅ אין שגיאות בקונסול הדפדפן

## בדיקות אחרי פריסה

1. פתח את הקישור מ-Vercel
2. בדוק את הקונסול בדפדפן (F12 → Console)
3. בדוק את Network tab - האם יש שגיאות?
4. נסה למלא את הטופס ולבדוק אם הוא נשלח
5. בדוק את ה-Logs ב-Vercel Functions

## קבלת עזרה

אם הבעיה נמשכת:

1. בדוק את ה-Logs ב-Vercel Dashboard
2. בדוק את ה-Console בדפדפן
3. בדוק את Network tab - איזה requests נכשלים?
4. שתף את ה-Logs או שגיאות ספציפיות

## קישורים שימושיים

- [Vercel Status](https://www.vercel-status.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

