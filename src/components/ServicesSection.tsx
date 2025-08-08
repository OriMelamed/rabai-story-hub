import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BookOpen, Users } from "lucide-react";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import torahScroll from "@/assets/torah-scroll.jpg";
import shabbatTable from "@/assets/shabbat-table.jpg";
import studyGroup from "@/assets/study-group.jpg";

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-background">
      <BackToTopButton />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services & Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Discover the many ways you can connect with your faith and community
          </p>
        </div>

        <Tabs defaultValue="worship" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-muted/50">
            <TabsTrigger 
              value="worship" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Worship Services
            </TabsTrigger>
            <TabsTrigger 
              value="learning"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Learning Programs
            </TabsTrigger>
            <TabsTrigger 
              value="community"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-4"
            >
              <Users className="w-5 h-5 mr-2" />
              Community Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="worship" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="shadow-warm border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Sacred Worship</CardTitle>
                    <CardDescription className="text-lg">
                      Join us for meaningful prayer experiences that connect you with tradition and community
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="font-medium">Friday Evening Services</span>
                        <span className="text-warm-gold">7:30 PM</span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="font-medium">Saturday Morning Services</span>
                        <span className="text-warm-gold">10:00 AM</span>
                      </div>
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="font-medium">High Holy Days</span>
                        <span className="text-warm-gold">Special Times</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Holiday Celebrations</span>
                        <span className="text-warm-gold">Seasonal</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <img 
                  src={torahScroll}
                  alt="Torah Scroll"
                  className="w-full rounded-xl shadow-soft"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={studyGroup}
                  alt="Study Group"
                  className="w-full rounded-xl shadow-soft"
                />
              </div>
              <div>
                <Card className="shadow-warm border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Torah Study & Learning</CardTitle>
                    <CardDescription className="text-lg">
                      Deepen your understanding through guided study and discussion
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-4 bg-cream rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Weekly Torah Study</h4>
                        <p className="text-sm text-muted-foreground">Thursdays 7:00 PM - Explore the weekly Torah portion</p>
                      </div>
                      <div className="p-4 bg-cream rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Hebrew Classes</h4>
                        <p className="text-sm text-muted-foreground">Sundays 9:00 AM - All levels welcome</p>
                      </div>
                      <div className="p-4 bg-cream rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Adult Education</h4>
                        <p className="text-sm text-muted-foreground">Monthly seminars on Jewish history and philosophy</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="community" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="shadow-warm border-0 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Community Gatherings</CardTitle>
                    <CardDescription className="text-lg">
                      Build lasting friendships and create meaningful memories together
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-1">Shabbat Dinners</h4>
                        <p className="text-sm text-muted-foreground">Monthly community Shabbat meals</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-1">Holiday Celebrations</h4>
                        <p className="text-sm text-muted-foreground">Passover, Sukkot, Purim and more</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-1">Youth Programs</h4>
                        <p className="text-sm text-muted-foreground">Engaging activities for children and teens</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-1">Social Action</h4>
                        <p className="text-sm text-muted-foreground">Community service and charity initiatives</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <img 
                  src={shabbatTable}
                  alt="Shabbat Table"
                  className="w-full rounded-xl shadow-soft"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};