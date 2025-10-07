import React from "react";
import { Sparkles } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white py-16 px-6 sm:px-12 lg:px-20 rounded-b-3xl shadow-lg overflow-hidden">
      
     
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center sm:text-left max-w-4xl mx-auto">
        <div className="flex justify-center sm:justify-start items-center gap-2 mb-4">
          <Sparkles className="text-yellow-200" size={28} />
          <h3 className="uppercase tracking-widest font-semibold text-sm sm:text-base">
            🎇 Diwali Mega Sale 🎆
          </h3>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Light Up Your Festive Season with <br />
          <span className="text-yellow-200">Up to 70% OFF!</span>
        </h1>

        <p className="text-base sm:text-lg text-white/90 mb-6">
          Celebrate this Diwali with exclusive discounts on electronics, fashion, and more.
          Limited-time festive deals just for you!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
          <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-100 transition transform hover:scale-105">
            Shop Now 🛍️
          </button>
          <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-600 transition transform hover:scale-105">
            Explore Offers 🎁
          </button>
        </div>
      </div>

    
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-300"></div>
    </section>
  );
}

export default HeroSection;
