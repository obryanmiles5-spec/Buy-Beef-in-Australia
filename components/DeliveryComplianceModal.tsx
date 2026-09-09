'use client';

import { useState } from 'react';
import { 
  X, 
  Truck, 
  ShieldAlert, 
  ThermometerSnowflake, 
  FileText, 
  Scale, 
  CheckCircle,
  AlertTriangle 
} from 'lucide-react';
import { COMPLIANCE_SECTIONS } from '@/lib/data';

interface DeliveryComplianceModalProps {
  initialSectionId?: string;
  onClose: () => void;
}

export default function DeliveryComplianceModal({
  initialSectionId = 'delivery-info',
  onClose,
}: DeliveryComplianceModalProps) {
  const [activeTab, setActiveTab] = useState<string>(initialSectionId);

  return (
    <div
      id="compliance-modal"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="compliance-hub-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-stone-200 animate-fade-in relative text-[#151515]">
        {/* Modal Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50 rounded-t-2xl">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7A1F2B] font-bold">
              <ShieldAlert className="w-4 h-4 text-[#7A1F2B]" />
              <span>Australian Food Safety & Compliance Hub</span>
            </div>
            <h2 id="compliance-hub-title" className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Delivery, Cold-Chain & Food Retail Policies
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            aria-label="Close compliance modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Legal Disclaimer Callout */}
        <div className="bg-amber-50 border-b border-amber-200 px-6 py-2.5 flex items-center gap-2 text-xs text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            Compliance Notice: All operational parameters, ABN numbers, and delivery zones contain placeholders requiring verification by an Australian legal and food compliance officer prior to production trading.
          </span>
        </div>

        {/* Modal Body: Sidebar Tabs + Content Area */}
        <div className="flex-1 overflow-y-auto flex flex-col md:flex-row">
          {/* Tabs Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-stone-200 p-4 bg-stone-50/70 space-y-1">
            {COMPLIANCE_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveTab(sec.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                  activeTab === sec.id
                    ? 'bg-[#151515] text-white shadow-sm'
                    : 'text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                <span className="truncate">{sec.title}</span>
                {activeTab === sec.id && <CheckCircle className="w-3.5 h-3.5 text-[#C7903E]" />}
              </button>
            ))}
          </div>

          {/* Active Section Content */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6">
            {COMPLIANCE_SECTIONS.filter((s) => s.id === activeTab).map((section) => (
              <div key={section.id} className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-stone-900 pb-2 border-b border-stone-200">
                  {section.title}
                </h3>
                <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-4 font-sans">
                  <p>{section.content}</p>

                  {section.id === 'cold-chain' && (
                    <div className="bg-stone-100 p-4 rounded-xl border border-stone-200 space-y-2 mt-4">
                      <h5 className="font-bold text-stone-900 flex items-center gap-1.5 text-xs">
                        <ThermometerSnowflake className="w-4 h-4 text-[#2E6B4D]" />
                        <span>Food Safety Temperature Control Matrix</span>
                      </h5>
                      <ul className="text-xs text-stone-600 list-disc list-inside space-y-1">
                        <li><strong>Chilled Storage Target:</strong> 0°C to 4°C during active delivery run</li>
                        <li><strong>Frozen Goods Target:</strong> -18°C or lower</li>
                        <li><strong>Australian Standards Reference:</strong> Food Safety Standard 3.2.2</li>
                        <li><strong>Insulation Technology:</strong> Heavy-duty recyclable thermal box liners with high-freeze eutectic gel packs</li>
                      </ul>
                    </div>
                  )}

                  {section.id === 'returns-refunds' && (
                    <div className="bg-stone-100 p-4 rounded-xl border border-stone-200 space-y-2 mt-4">
                      <h5 className="font-bold text-stone-900 flex items-center gap-1.5 text-xs">
                        <Scale className="w-4 h-4 text-[#7A1F2B]" />
                        <span>Australian Consumer Law (ACL) Perishable Protocol</span>
                      </h5>
                      <p className="text-xs text-stone-600">
                        Claims regarding compromised vacuum seal, delivery delays exceeding safe thermal thresholds, or missing items must be submitted with digital photographs to [EMAIL ADDRESS] within 2 hours of consignment drop-off.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between rounded-b-2xl text-xs text-stone-500">
          <span className="font-mono">Australian Consumer Law & FSANZ Compliant Framework</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#151515] text-white font-semibold rounded-lg hover:bg-stone-800"
          >
            Close Policy Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
