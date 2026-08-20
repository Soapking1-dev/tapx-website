// Content sourced from the live TAPX store (tapx.shop) on 2026-08-19, plus
// original copy written for this rebuild. Facts marked "real" come directly
// from the existing site. Nothing here is an invented statistic, price,
// testimonial, or guarantee.

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "יצירת קשר",
    body: "אתם שולחים לנו את הלוגו, הצבעים והמיקום שבו המעמד יעמוד.",
  },
  {
    n: "02",
    title: "עיצוב מותאם אישית",
    body: "אנחנו מעצבים את המעמד בהתאמה למידות, לסגנון ולצרכים של העסק שלכם.",
  },
  {
    n: "03",
    title: "הדפסה בתלת ממד",
    body: "המעמד מיוצר בהדפסה מדויקת מחומר איכותי, בצבעים שבחרתם.",
  },
  {
    n: "04",
    title: "משלוח והתקנה",
    body: "המעמד מגיע אליכם מוכן לשימוש — פשוט להניח ולסרוק או לגעת.",
  },
] as const;

// Real FAQ content, copied from tapx.shop and lightly tightened for tone.
export const FAQ = [
  {
    q: "אילו קישורים אפשר לשים על המעמד?",
    a: "כל קישור שתרצו — לדוגמה תפריט, אתר העסק, תשלום ב-Bit או PayBox, אינסטגרם, WhatsApp, פייסבוק, ביקורות בגוגל, ניווט, הזמנת תור, קטלוג מוצרים, חנות אונליין, קופונים, יצירת קשר ועוד.",
  },
  {
    q: "האם אפשר לעדכן את הברקוד בעתיד?",
    a: "את הברקוד עצמו לא ניתן לערוך לאחר הייצור. במידת הצורך, אפשר להזמין ברקוד חדש ולהחליף אותו במעמד, בתשלום.",
  },
  {
    q: "מאיזה חומר עשוי המעמד?",
    a: "כברירת מחדל, כל המעמדים מודפסים בתלת־ממד מחומר PLA+ איכותי, עם גימור נקי ומראה מודרני. למי שזקוק לעמידות גבוהה יותר קיימת אפשרות להזמין מחומרים חזקים יותר, המתאימים לשימוש ממושך ולחשיפה לשמש.",
  },
  {
    q: "אילו צבעים אפשר לבחור?",
    a: "אנחנו עובדים יחד עם כל לקוח כדי לבחור ולשלב את הצבעים המתאימים ביותר למיתוג ולעיצוב של העסק שלו.",
  },
] as const;

// The only customer review currently published on tapx.shop — reused as-is,
// no additional testimonials invented.
export const TESTIMONIAL = {
  quote:
    "כיף לראות שיש עוד ילדים עם רעב להצלחה וטומי הוא אחד מהם! בחור רציני עם סבלנות, מעולה וכמובן עם חיוך. המוצר יצא מושלם בדיוק כמו שתיכננו ושדמיינתי בראש. תודה רבה טומי והרבה בהצלחה💪🏽",
  author: "דוראל קזבלן",
  avatar: "/images/reviewer-logo.png",
  rating: 5,
};

export const USE_CASES = [
  { label: "יותר ביקורות בגוגל", hint: "מסך אחד, לינק ישיר לדירוג" },
  { label: "עוקבים חדשים באינסטגרם", hint: "מעבר ישיר לפרופיל העסק" },
  { label: "תפריט דיגיטלי", hint: "בלי לעדכן חוברות מודפסות" },
  { label: "שיחת WhatsApp", hint: "פנייה מיידית ללקוח" },
  { label: "ניווט לעסק", hint: "מסלול ישיר מהטלפון" },
  { label: "הזמנת תור", hint: "חיבור למערכת התורים שלכם" },
  { label: "קטלוג מוצרים", hint: "או חנות אונליין מלאה" },
  { label: "תשלום ב-Bit או PayBox", hint: "גבייה מהירה בלי מסופון" },
] as const;

// Real completed projects photographed on-site by TAPX (source: tapx.shop
// product gallery, Aug 2026). Categories/labels reflect only what is
// legible in the photos themselves.
export const GALLERY = [
  {
    id: "nook-cafe",
    name: "Nook Café",
    category: "בית קפה",
    image: "/images/product-2.jpg",
    focus: "38% 42%",
    colors: ["#c99a6b", "#3b2417", "#f4ead9"],
    link: "ביקורות בגוגל",
    note: "מעמד קשתי בגוון קרם וחום, עם לוגו וסלוגן המותג משולבים בגוף המעמד.",
  },
  {
    id: "hapina",
    name: "הפינה",
    category: "בית קפה",
    image: "/images/product-4.jpg",
    focus: "45% 38%",
    colors: ["#caa06a", "#5a3b22", "#efe6d8"],
    link: "ביקורות בגוגל",
    note: "עיצוב קשתי עם ספל קפה ופולים מוטבעים, תואם למיתוג הפינה.",
  },
  {
    id: "get-phone",
    name: "Get Phone",
    category: "חנות סלולר",
    image: "/images/product-5.jpg",
    focus: "48% 45%",
    colors: ["#111111", "#ff8a1e", "#ffffff"],
    link: "ביקורות בגוגל",
    note: "שחור וכתום נטו, עם דמות המותג משולבת מעל קוד ה-QR.",
  },
  {
    id: "hummus-place",
    name: "חומוסיה",
    category: "מזון",
    image: "/images/product-3.jpg",
    focus: "50% 40%",
    colors: ["#a9d3e0", "#c98a4b", "#ffffff"],
    link: "ביקורות בגוגל",
    note: "עיצוב נמס בהשראת המוצר עצמו, בצבעי המיתוג של העסק.",
  },
  {
    id: "popsicle-shop",
    name: "חנות ארטיקים",
    category: "קמעונאות",
    image: "/images/product-6.jpg",
    focus: "center",
    colors: ["#f3b6c9", "#bfe6ef", "#ffffff"],
    link: "WhatsApp · אינסטגרם · פייסבוק",
    note: "מעמד עם שלוש נקודות NFC נפרדות בבסיס — כל אחת מובילה ליעד אחר.",
  },
] as const;

export const NAV_LINKS = [
  { href: "#how-it-works", label: "איך זה עובד" },
  { href: "#work", label: "עבודות" },
  { href: "#faq", label: "שאלות נפוצות" },
  { href: "#contact", label: "יצירת קשר" },
] as const;

// Real facts: single SKU, real price, from tapx.shop/collections/all
export const PRODUCT = {
  name: "מעמד מודפס בתלת־ממד, בעיצוב אישי מלא",
  price: 350,
  currency: "₪",
  material: "PLA+ (כברירת מחדל), עם אפשרות לחומר עמיד יותר לשימוש חיצוני",
};
