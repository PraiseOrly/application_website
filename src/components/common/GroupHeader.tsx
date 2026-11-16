import type { LucideIcon } from 'lucide-react';

/** Sub-group header: icon box, coloured title, count badge, fading rule. */
export const GroupHeader = ({
  icon: Icon, label, count, accent, description,
}: { icon: LucideIcon; label: string; count: number; accent: string; description?: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="p-2.5 rounded-xl border shrink-0"
      style={{ background: `${accent}12`, borderColor: `${accent}25`, color: accent }}>
      <Icon className="h-5 w-5" />
    </div>
    <div className="min-w-0">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-bold" style={{ color: accent }}>{label}</h3>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold border"
          style={{ background: `${accent}12`, borderColor: `${accent}25`, color: accent }}>
          {count}
        </span>
      </div>
      {description && <p className="text-gray-500 text-sm mt-0.5">{description}</p>}
    </div>
    <div className="hidden sm:block h-px flex-1"
      style={{ background: `linear-gradient(to right, ${accent}30, transparent)` }} />
  </div>
);
