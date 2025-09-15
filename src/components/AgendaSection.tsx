import React, { useState } from "react";

const AgendaSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", department: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Agenda Registration");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nDepartment: ${formData.department}`
    );
    window.location.href = `mailto:it.intern@ltl.lk?subject=${subject}&body=${body}`;
    setIsOpen(false); // close popup after sending
  };

  return (
    <section className="py-10 bg-white/80 rounded-lg shadow-lg my-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Ceremonial Opening of
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Sobadhanavi 350 MW LNG Power Plant
          </h3>
          <p className="text-xl md:text-2xl font-semibold">
            17<sup>th</sup> September 2025
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-blue-900 mt-6"
            style={{ fontFamily: "cursive" }}
          >
            Agenda
          </h2>
        </div>

        {/* Add to Agenda Button */}
        <div className="text-center mb-6">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            Add to Agenda (RSTP)
          </button>
        </div>

        {/* Agenda Items */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-blue-800">
              Chief Guest: Hon. Dr. Harini Amarasuriya
            </h3>
            <p className="text-lg text-blue-700">
              The Prime Minister of Democratic Socialist Republic of Sri Lanka
            </p>
          </div>

          {/* Example agenda items (repeat structure for all items) */}
        <div className="border-t border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 03:30 PM </div> <div className="col-span-9 md:col-span-10"> Arrival of guests and seating. </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 04:00 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 04:10 PM </div> <div className="col-span-5 md:col-span-7"> Arrival and reception of the Chief Guest and unveiling the plaque. </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 04:10 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 04:30 PM </div> <div className="col-span-5 md:col-span-7"> <p> Photograph of Lakdhanavi Management & Project team with the Chief Guest and Minister of Energy </p> <p> Chief Guest and Minister of Energy inspecting the Power Plant, And arriving at the Control Room </p> </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 04:30 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 04:45 PM </div> <div className="col-span-5 md:col-span-7"> Hon. Minister of Energy Synchronizing the Power Plant to the National Grid. </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 04:45 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 04:50 PM </div> <div className="col-span-5 md:col-span-7"> Hon. Prime Minister and the Minister of Energy signing of the "Visitor Book". </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 04:50 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:00 PM </div> <div className="col-span-5 md:col-span-7"> Dignitaries arriving at the ceremonial meeting venue. </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:00 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:10 PM </div> <div className="col-span-5 md:col-span-7"> Company Video – LTL Holdings, Lakdhanavi and Sobadhanavi </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:10 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:15 PM </div> <div className="col-span-5 md:col-span-7"> Welcome Speech by Chief Executive Officer of LTL Holdings Limited, Eng. Nuhuman Marikkar </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:15 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:25 PM </div> <div className="col-span-5 md:col-span-7"> Technical presentation on Sobadhanavi Power Plant Project </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:25 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:35 PM </div> <div className="col-span-5 md:col-span-7"> Speech by Hon. Minister of Energy, Eng. Kumara Jayakody </div> </div> </div> <div className="border-b border-gray-300 py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:35 PM </div> <div className="col-span-1 text-center">-</div> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:45 PM </div> <div className="col-span-5 md:col-span-7"> Speech by the Chief Guest, Hon. Dr. Harini Amarasuriya </div> </div> </div> <div className="py-4"> <div className="grid grid-cols-12 gap-4 py-2"> <div className="col-span-3 md:col-span-2 font-bold text-blue-800"> 05:45 PM </div> <div className="col-span-4 md:col-span-3 text-blue-600 italic"> onwards </div> <div className="col-span-5 md:col-span-7"> Tea and Refreshments </div> </div> </div>

          {/* Continue all other agenda items as in your original code */}
          {/* ... */}
       

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Register for Agenda
            </h3>
            <div className="mb-4">
              <label className="block text-blue-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 mb-1">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your Department"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSendEmail}
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
              >
                Save & Send Email
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AgendaSection;
