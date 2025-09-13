import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users } from "lucide-react";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { useTranslation } from 'react-i18next';
import qanimage from "@/assets/qanimage.jpg";
import prep from "@/assets/preperation.png";

export const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  
  return (
    <section id="services" className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <BackToTopButton />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">

        <Tabs defaultValue="Preparation" className="w-full h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-2 gap-2 sm:gap-0 mb-6 sm:mb-8 h-auto p-1 bg-muted/50 flex-shrink-0">
            <TabsTrigger 
              value="Preparation"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 sm:py-4 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="sm:hidden">{t('services.Preparation.title')}</span>
              <span className="hidden sm:inline">{t('services.Preparation.title')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="qanda"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 sm:py-4 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="sm:hidden">{t('services.qanda.title')}</span>
              <span className="hidden sm:inline">{t('services.qanda.title')}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Preparation" className="animate-fade-in flex-1 flex items-center">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center w-full min-h-[60vh]">
              <div className="order-1">
                <img 
                  src={prep}
                  alt="Study Group"
                  className="w-full rounded-xl shadow-soft max-w-sm sm:max-w-md mx-auto"
                />
              </div>
              <div className="order-2">
                <Card className="shadow-warm border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className={`text-xl sm:text-2xl text-primary ${isRTL ? 'text-right' : 'text-left'}`}>?מה צריך להביא לברית</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <ul className={`space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">4 - טיטולים לתינוק</span>
                        </li>
                        <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">4 - חיתולי בד</span>
                        </li>
                        <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">בגדים נוחים לתינוק</span>
                        </li>
                        <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">משחת בפנטן פלוס</span>
                        </li>
                        <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">אבקת ביסמוט סובגלאט</span>
                        </li>
                          <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">נובימול</span>
                        </li>
                        <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">יין לברכה ו-2 טליתות</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="qanda" className="animate-fade-in flex-1 flex items-center">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center w-full min-h-[60vh]">
              <div className="order-1">
                <Card className="shadow-warm border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className={`text-xl sm:text-2xl text-primary ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>שאלות נפוצות</CardTitle>
                    
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className={`p-4 bg-muted/50 rounded-lg`} dir={isRTL ? 'rtl' : 'ltr'}>
                        <h4 className={`font-semibold text-primary mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>מה עושים כדי להוריד את הצהבת?</h4>
                        <p className={`text-sm text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                          מומלץ לשים את התינוק באור השמש ללא בגדים (רק עם טיטול) לסרוגין.<br />
                          מפורסם בשם הסטייפלר סגולה ליטול לתינוק ידיים פעם ביום.<br />
                          יש ברשותנו גמ"ח אבנים המסוגלות להורדת הצהבת.
                        </p>
                      </div>
                      <div className={`p-4 bg-muted/50 rounded-lg`} dir={isRTL ? 'rtl' : 'ltr'}>
                        <h4 className={`font-semibold text-primary mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>האם המוהל מגיע לפני ואחרי הברית?</h4>
                        <p className={`text-sm text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                          המוהל עובר על המכתב שחרור ונותן הנחיות לגבי הברית.<br />
                           המוהל מגיע גם אחרי הברית כדי להוריד את התחבושת.

                        </p>
                      </div>
                      <div className={`p-4 bg-muted/50 rounded-lg`} dir={isRTL ? 'rtl' : 'ltr'}>
                        <h4 className={`font-semibold text-primary mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>האם הברית מתבצעת בהרדמה?</h4>
                        <p className={`text-sm text-muted-foreground ${isRTL ? 'text-right' : 'text-left'}`}>
                          לא, זריקת ההרדמה עלולה להכאיב יותר לתינוק מאשר ברית המתבצעת לפי המסורת היהודית ולאחריה אלחוש מקומי.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="order-2">
                <img 
                  src={qanimage}
                  alt="Shabbat Table"
                  className="w-full rounded-xl shadow-soft max-w-sm sm:max-w-md mx-auto"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};