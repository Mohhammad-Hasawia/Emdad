import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Activity, Users, MapPin, Truck, Globe, CircleCheck as CheckCircle } from 'lucide-react';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function Activities() {
  const { language } = useLanguage();



  const keyAchievements = [
    { titleEn: "Regional expansion to Lebanon, Jordan, Iraq, and Turkey", titleAr: "التوسع الإقليمي ليشمل لبنان، الأردن، العراق، وتركيا" },
    { titleEn: "Strategic partnerships with over 50 petroleum companies and service providers", titleAr: "شراكات استراتيجية مع أكثر من 50 شركة نفطية ومزود خدمة" },
    { titleEn: "Specialized transport services for hazardous petroleum cargo in compliance with top environmental and technical safety standards", titleAr: "تقديم خدمات نقل مخصصة للبضائع الخطرة وفقًا لأعلى معايير السلامة البيئية والتقنية" }
  ];

  const arabicContent = `منذ تأسيس شركة إمداد مباشر، ونحن نكرّس جهودنا لتقديم حلول نقل بري متخصصة وآمنة لمختلف المنتجات النفطية والنفط الخام داخل سوريا وفي المنطقة الإقليمية المحيطة. بفضل التزامنا الصارم بالجودة والكفاءة، أصبحت إمداد مباشر من أبرز الشركات العاملة في مجال النقل البري النفطي.

على مدار السنوات الماضية، نفّذنا آلاف العمليات الناجحة، شملت مشتقات نفطية متنوعة بما في ذلك النفط الخام، المازوت، البنزين، والزيوت الصناعية، ضمن بيئة تشغيلية تتطلب دقة عالية واحترافية في التعامل مع المواد الخطرة.

أسطولنا الحديث مجهز بصهاريج متطورة وأنظمة تتبّع ذكية تضمن أعلى مستويات السلامة خلال النقل، وتسمح بالمراقبة الفورية لمسار الشحنة. وقد قطع أسطولنا ملايين الكيلومترات على الطرق البرية في ظروف تشغيلية متغيرة.

يضم فريقنا مئات الموظفين من السائقين والفنيين والإداريين، يعملون وفق معايير السلامة المعتمدة وبتدريب مستمر لتلبية احتياجات عملائنا بكفاءة واحترافية.

في شركة إمداد مباشر، نؤمن أن النقل الآمن للمواد البترولية مسؤولية كبيرة، ولهذا نواصل الاستثمار في الأسطول والكوادر والتقنيات لضمان أعلى مستويات الأداء والثقة.`;

  const englishContent = `Since its founding, Emdad Mubasher has been dedicated to providing safe and specialized land transport solutions for a wide range of petroleum products and crude oil across Syria and the surrounding region. With a firm commitment to quality and efficiency, Emdad Mubasher has established itself as a leading name in the petroleum ground transport sector.

Over the years, we have successfully completed thousands of transport operations, handling various petroleum products including crude oil, diesel, gasoline, and industrial lubricants. These operations demand high levels of precision, safety, and professionalism due to the hazardous nature of the cargo.

Our modern fleet is equipped with advanced tankers and real-time tracking systems, ensuring the highest safety standards and full visibility throughout the journey. Our vehicles have collectively covered millions of kilometers across diverse terrains and logistical environments.

Our team includes hundreds of professionals—drivers, technicians, and administrative staff—all rigorously trained in safety protocols and best practices for petroleum transport.

At Emdad Mubasher, we understand that transporting petroleum products is a critical responsibility. That's why we continue to invest in our fleet, people, and technology to deliver performance and reliability that clients can trust.`;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/activities.jpeg')` }}
      >
        <div className="absolute inset-0 bg-emdad-navy opacity-80"></div>
        
        {/* Breadcrumb */}
        <div className="absolute top-20 left-0 right-0 z-20">
          <Breadcrumb className="py-4" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Activity className="w-16 h-16 text-emdad-gold mx-auto mb-6" />
          <h1 className="heading-hero font-bold
            bg-gradient-to-r from-emdad-gold via-yellow-400 to-emdad-gold
            bg-clip-text text-transparent
            mb-4 md:mb-6 leading-tight arabic-text">
            {language === 'ar' ? 'الأنشطة' : 'Activities'}
          </h1>
          <p className="body-paragraph text-white animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {language === 'ar' ? 'التخصص هو مفتاح النجاح' : 'Specialization is the Key to Success'}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-justify">
                {language === 'ar'
                  ? arabicContent.split('\n\n').map((p, i) => (
                      <p key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>{p}</p>
                    ))
                  : englishContent.split('\n\n').map((p, i) => (
                      <p key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>{p}</p>
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-emdad-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-section font-bold text-emdad-gold mb-6">
                {language === 'ar' ? 'من أبرز إنجازاتنا' : 'Key Achievements'}
              </h2>
              <div className="w-24 h-1 bg-emdad-gold mx-auto"></div>
            </div>
            <div className="space-y-6">
              {keyAchievements.map((achievement, i) => (
                <div key={i} className="flex items-start space-x-4 rtl:space-x-reverse animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex-shrink-0 w-8 h-8 bg-emdad-gold rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white body-paragraph leading-relaxed">
                    {language === 'ar' ? achievement.titleAr : achievement.titleEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
