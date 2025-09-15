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
{/* Add to Agenda Button */}
<div className="text-center mb-6">
  <button
    onClick={() =>
      window.location.href =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=Z7_1wZeIYk6LB5Rfdyki7VhDx2tG2BJMhGBCcyupMp1UQ1ZZTEtWNDZKRDFYNktGRFFTNUIxSDRTQi4u"
    }
    className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
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

          {/* Agenda Items */}
          {[
            { start: "03:30 PM", end: "", detail: "Arrival of guests and seating." },
            {
              start: "04:00 PM",
              end: "04:10 PM",
              detail: "Arrival and reception of the Chief Guest and unveiling the plaque."
            },
            {
              start: "04:10 PM",
              end: "04:30 PM",
              detail: `Photograph of Lakdhanavi Management & Project team with the Chief Guest and Minister of Energy.
Chief Guest and Minister of Energy inspecting the Power Plant, And arriving at the Control Room`
            },
            {
              start: "04:30 PM",
              end: "04:45 PM",
              detail: "Hon. Minister of Energy Synchronizing the Power Plant to the National Grid."
            },
            {
              start: "04:45 PM",
              end: "04:50 PM",
              detail: 'Hon. Prime Minister and the Minister of Energy signing of the "Visitor Book".'
            },
            {
              start: "04:50 PM",
              end: "05:00 PM",
              detail: "Dignitaries arriving at the ceremonial meeting venue."
            },
            {
              start: "05:00 PM",
              end: "05:10 PM",
              detail: "Company Video – LTL Holdings, Lakdhanavi and Sobadhanavi"
            },
            {
              start: "05:10 PM",
              end: "05:15 PM",
              detail: "Welcome Speech by Chief Executive Officer of LTL Holdings Limited, Eng. Nuhuman Marikkar"
            },
            {
              start: "05:15 PM",
              end: "05:25 PM",
              detail: "Technical presentation on Sobadhanavi Power Plant Project"
            },
            {
              start: "05:25 PM",
              end: "05:35 PM",
              detail: "Speech by Hon. Minister of Energy, Eng. Kumara Jayakody"
            },
            {
              start: "05:35 PM",
              end: "05:45 PM",
              detail: "Speech by the Chief Guest, Hon. Dr. Harini Amarasuriya"
            },
            {
              start: "05:45 PM",
              end: "onwards",
              detail: "Tea and Refreshments"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="border-b border-gray-300 py-4"
            >
              <div className="grid grid-cols-12 gap-4 py-2">
                <div className="col-span-3 md:col-span-2 font-bold text-blue-800">{item.start}</div>
                {item.end && <div className="col-span-1 text-center">-</div>}
                {item.end && <div className="col-span-3 md:col-span-2 font-bold text-blue-800">{item.end}</div>}
                <div className="col-span-5 md:col-span-7 text-blue-700">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default AgendaSection;
