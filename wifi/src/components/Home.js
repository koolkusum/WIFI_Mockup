import React, { useState, useEffect } from "react";

const quotes = [
  "WiFi",
  "Empowering young women engineers worldwide.",
  "Breaking barriers and building bridges.",
  "Innovation through diversity.",
  "Creating a more inclusive future.",
];
const programs = [
  {
    title: "Education Empowerment",
    description:
      "Providing mentorship programs to empower young women to achieve their goals.",
  },
  {
    title: "Health and Wellness",
    description:
      "Promoting healthcare education by addressing reproductive health and mental health.",
  },
  {
    title: "Economic Empowerment",
    description:
      "Empower women to become financially independent through entrepreneurship programs.",
  },
  {
    title: "Advocacy and Awareness",
    description:
      "Advocating for gender equality and challenging harmful stereotypes and biases.",
  },
];

const testimonials = [
  {
    name: "Anna Smith",
    text: "WiFi has been a game-changer in empowering women in tech!",
  },
  {
    name: "Maria Johnson",
    text: "This community is the perfect place to grow both personally and professionally.",
  },
  {
    name: "Emily Davis",
    text: "Through WiFi, I've found the support I needed to break through industry barriers.",
  },
];

const Home = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) =>
        prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(testimonialInterval);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const typedTextElement = document.getElementById("typedtext");
    const aText = quotes;
    const iSpeed = 100;
    let iIndex = 0;
    let iTextPos = 0;
    let typing = true;

    function typewriter() {
      if (!isMounted || !typedTextElement) return;

      if (iIndex < aText.length) {
        if (typing) {
          typedTextElement.innerHTML =
            aText[iIndex].substring(0, iTextPos) + "_";
          if (iTextPos++ === aText[iIndex].length) {
            typing = false;
            setTimeout(() => {
              typing = true;
              iTextPos = 0;
              iIndex++;
              typewriter();
            }, 1000);
          } else {
            setTimeout(typewriter, iSpeed);
          }
        }
      } else {
        iIndex = 0;
        setTimeout(typewriter, 1000);
      }
    }

    typewriter();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="py-6 bg-gray-800 shadow-lg">
        <h1 className="text-center text-4xl font-bold tracking-wider">
          Women Infotech Foundation & Innovation
        </h1>
      </header>

      {/* Main Content */}
      <main className="py-12 flex flex-col items-center px-6">
        {/* Typewriter Section */}
        <div className="bg-black w-full max-w-4xl rounded-lg shadow-lg mb-8">
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 rounded-t-lg">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div
            id="typedtext"
            className="text-xl text-white-400 font-mono px-6 py-4"
          ></div>
        </div>
{/* Call to Action */}
<div className="w-full max-w-4xl rounded-lg p-8 shadow-md">
  <h2 className="text-center text-3xl font-bold mb-4">
    Join Our Movement
  </h2>
  <p className="text-center text-lg mb-6">
    Together, we can create a world where women feel supported, valued,
    and empowered to achieve their dreams.
  </p>
  <div className="flex justify-center gap-4"> {/* Added gap-4 for spacing between buttons */}
    <button
      onClick={() => setIsPopupVisible(true)}
      className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-900 transition"
    >
      Donate
    </button>
    <button
      onClick={() => alert("Volunteer action triggered!")}
      className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-900 transition"
    >
      Volunteer
    </button>
  </div>
</div>

        {/* Popup */}
        {isPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <img
                src={`${process.env.PUBLIC_URL}/images/Wifi_QRCODE.png`}
                alt="Donation Popup"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setIsPopupVisible(false)}
                className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-900 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Programs Section */}
      <section className="w-full flex justify-center py-12">
        <div className="max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-6">
            Explore Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold mb-4 text-pink-400">
                  {program.title}
                </h3>
                <p className="text-gray-300">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section (Slideshow) */}
      <section className="w-full bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-6 text-pink-400">
            What People Are Saying
          </h2>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <p className="text-gray-300 italic">"{testimonials[currentTestimonial].text}"</p>
            <p className="text-right font-semibold text-pink-400 mt-4">
              - {testimonials[currentTestimonial].name}
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <p className="text-center text-gray-400 text-sm">
          &copy; 2024 WiFi. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
