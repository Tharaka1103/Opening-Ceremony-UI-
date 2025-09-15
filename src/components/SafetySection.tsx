import React from "react";

interface SafetySectionProps {
  onViewMap: () => void;
}

const SafetySection = ({ onViewMap }: SafetySectionProps) => {
  return (
    <section className="py-10 bg-white/90 rounded-lg shadow-lg my-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            YOUR SAFETY IS OUR PRIORITY
          </h2>
          <h3 className="text-xl md:text-xl font-bold mb-4 text-center">
    Emergency Evacuation Guide for Visitors
  </h3>
          <p className="text-xl text-red-600 font-semibold">
            "Once the emergency alarm is raised for any emergency situation"
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Safety Steps */}
          <div className="mb-8">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">▶</span>
                <span>
                  Remain calm, do not rush or panic, and stop what you are doing
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">▶</span>
                <span>
                  Refer to the emergency evacuation plan below and follow the
                  directions to the nearest assembly point
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">▶</span>
                <span>
                  Walk, do not run, and do not attempt to collect personal
                  belongings. Proceed directly to the designated assembly point
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">▶</span>
                <span>Assist with head counting at the assembly point</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">▶</span>
                <span>
                  Do not re-enter the building or Morque area until clearance is
                  given by authorized personnel
                </span>
              </li>
            </ul>
          </div>

          {/* Evacuation Plan Button */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">
              Emergency Evacuation Plan
            </h3>
            <button
              onClick={onViewMap}
              className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 shadow-md flex items-center mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              View Assembly Point Map
            </button>
          </div>

          {/* Emergency Contact Table */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Emergency Contact Numbers</h3>
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="bg-gradient-to-r from-blue-800 to-blue-700 text-white py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider rounded-tl-lg">
                      Priority
                    </th>
                    <th className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                      Contact Name
                    </th>
                    <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider rounded-tr-lg">
                      Contact Number
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="py-4 px-6 whitespace-nowrap font-bold text-blue-700">
                      Priority 01
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      Control Room
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-blue-700 font-medium">
                      <a href="tel:0117780307" className="hover:underline">
                        011-7780306
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="py-4 px-6 whitespace-nowrap font-bold text-blue-700">
                      Priority 02
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      Mr. Shakthi Dissanayake
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-blue-700 font-medium">
                      <a href="tel:0777912284" className="hover:underline">
                        077-7912284
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="py-4 px-6 whitespace-nowrap font-bold text-blue-700 rounded-bl-lg">
                      Priority 03
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium">
                      Mr. Amal Fernando
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-blue-700 font-medium rounded-br-lg">
                      <a href="tel:0777224705" className="hover:underline">
                        077-7224705
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center text-red-600 font-semibold p-4 bg-red-50 rounded-lg border border-red-100 shadow-sm">
            "Our dedicated team is ready to respond to any emergency situation"
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
