import React from 'react';
import { XIcon } from 'lucide-react';
interface MapSectionProps {
  onClose: () => void;
}
const MapSection = ({
  onClose
}: MapSectionProps) => {
  return <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b bg-blue-50">
          <h2 className="text-2xl font-bold text-blue-900">
            Assembly Points Map
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-blue-100 transition-colors">
            <XIcon size={24} />
          </button>
        </div>
        <div className="p-4 overflow-auto" style={{
        maxHeight: 'calc(90vh - 70px)'
      }}>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative">
              <img src="/Map.jpg" alt="Assembly Points Map" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold mb-6 text-blue-900">
                Assembly Points Legend
              </h3>
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-500 flex items-center justify-center mr-4 rounded-full">
                  <span className="text-white text-xs font-bold">AP</span>
                </div>
                <div>
                  <span className="font-bold">Assembly Point</span>
                  <p className="text-sm text-gray-600">
                    Official gathering location during emergencies
                  </p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                In case of emergency, please proceed to the nearest assembly
                point as shown on the map. Follow the evacuation routes marked
                with red arrows. Do not use elevators during an emergency. Wait
                at the assembly point until further instructions are provided by
                safety personnel.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 border-t bg-gray-50 flex justify-end">
          <button onClick={onClose} className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg font-semibold transition duration-300 shadow-md">
            Close Map
          </button>
        </div>
      </div>
    </div>;
};
export default MapSection;