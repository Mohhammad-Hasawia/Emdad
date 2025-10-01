import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useState, useRef } from 'react';
import { Truck, Droplet, Globe, Clock, Users, Award } from 'lucide-react';

export function QualityNumbers() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    distance: 0,
    volume: 0,
    earth: 0,
    delay: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  // الأرقام الآن منطقية
  const stats = [
    { key: 'distance', target: 800000, label: t('quality.numbers.distance'), icon: Truck, suffix: 'كم', color: 'from-blue-600 to-blue-800' },
    { key: 'volume', target: 218000, label: t('quality.numbers.volume'), icon: Droplet, suffix: 'م³', color: 'from-amber-600 to-yellow-700' },
    { key: 'earth', target: 20, label: t('quality.numbers.earth'), icon: Globe, suffix: '', color: 'from-green-600 to-emerald-700' },
    { key: 'delay', target: 0.3, label: t('quality.numbers.delay'), icon: Clock, suffix: '%', color: 'from-purple-600 to-indigo-700' },
    { key: 'satisfaction', target: 96.5, label: t('quality.numbers.satisfaction'), icon: Users, suffix: '%', color: 'from-red-600 to-rose-700' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat) => {
      let currentValue = 0;
      const increment = stat.target / steps;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.target) {
          currentValue = stat.target;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => ({
          ...prev,
          [stat.key]: currentValue
        }));
      }, interval);
    });
  };

  const formatNumber = (value: number, suffix: string): string => {
    if (value >= 1000000 && !suffix.includes('%')) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000 && !suffix.includes('%')) {
      return Math.floor(value / 1000).toLocaleString() + 'K';
    }
    return value.toFixed(suffix === '%' ? 1 : 0);
  };

  return (
    <section 
      ref={sectionRef}
      id="quality-numbers" 
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emdad-gold to-yellow-600 rounded-full mb-6 shadow-2xl">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="heading-section font-bold text-white mb-6 tracking-tight">
            {t('quality.numbers.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emdad-gold to-yellow-500 mx-auto mb-6" />
          <p className="text-gray-300 body-small leading-relaxed max-w-2xl mx-auto arabic-text">
            {t('quality.numbers.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const animatedValue = animatedValues[stat.key] || 0;
            const displayValue = formatNumber(animatedValue, stat.suffix);

            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emdad-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <div className="mb-4">
                  <span className="heading-card font-bold text-white block leading-none">
                    {isVisible ? displayValue : '0'}
                  </span>
                  {stat.suffix && (
                    <span className="heading-card font-semibold text-emdad-gold ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <p className="text-gray-300 body-small font-medium leading-relaxed group-hover:text-white transition-colors duration-300 arabic-text">
                  {stat.label}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emdad-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
