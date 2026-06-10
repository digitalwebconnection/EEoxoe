interface LeadPopupProps {
  onClose: () => void;
}

export default function LeadPopup({ onClose }: LeadPopupProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl text-center shadow-2xl max-w-sm w-full mx-4">
        <h2 className="text-2xl font-bold mb-3 text-slate-900">Get a Free Consultation</h2>
        <p className="mb-6 text-slate-600 text-sm">Please reach out to us to discover how solar can transform your energy costs.</p>
        <div className="flex justify-center gap-4">
          <button onClick={onClose} className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
