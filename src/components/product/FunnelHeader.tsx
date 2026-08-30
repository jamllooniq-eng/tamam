import React from 'react';
import { Truck, Gift, ShieldCheck } from 'lucide-react';

interface FunnelHeaderProps {
  onScrollToOrder?: () => void;
}

const MARQUEE_ITEMS = [
  { Icon: Truck, text: 'توصيل سريع خلال يوم واحد' },
  { Icon: Gift, text: 'توصيل مجاني لكل العراق' },
  { Icon: ShieldCheck, text: 'فحص قبل الاستلام' },
];

export const FunnelHeader: React.FC<FunnelHeaderProps> = () => {
  // Render the item list twice back-to-back so the CSS animation can
  // translate exactly -50% and loop seamlessly with no visible seam/jump.
  const loopedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <header id="funnel-top-header" className="relative w-full bg-[#22A39E] text-white border-y-[3px] border-[#1b8581] overflow-hidden">
      <div className="funnel-marquee-track flex whitespace-nowrap py-1.5">
        {loopedItems.map((item, i) => {
          const { Icon } = item;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-6 text-xs sm:text-sm font-extrabold"
            >
              <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
              {item.text}
              <span className="opacity-50 mr-2" aria-hidden="true">•</span>
            </span>
          );
        })}
      </div>

      <style>{`
        .funnel-marquee-track {
          width: max-content;
          animation: funnel-marquee-scroll 16s linear infinite;
        }
        @keyframes funnel-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .funnel-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
};
