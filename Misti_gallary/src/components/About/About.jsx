import React from 'react';
import logo from '../../assets/logo.jpg';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl mt-4 mb-4">
    <img src={logo} alt="Logo" className="w-14 h-14 rounded-lg shadow-md bg-indigo-400" />
        <h1 className="text-4xl font-bold text-center">
          📸 Welcome to <span className="text-indigo-400">Misti Gallary:</span> – Your Free Image Gallery 🌟
        </h1>
      
      <p className="text-lg mb-6 text-gray-300 text-center italic">
        “Creativity is nothing but a mind set free.” – Torrie T. Asai
      </p>

      <p className="text-base mb-4 leading-relaxed">
        At <strong>PixelVault</strong>, we believe that creativity should be <span className="text-indigo-400 font-semibold">limitless</span> and <span className="text-indigo-400 font-semibold">accessible to all</span>. That’s why we’ve built a space where stunning visuals meet freedom — offering <span className="font-semibold text-white">high-quality images</span> that are absolutely <span className="text-green-400 font-bold">free to download</span> and use for personal or commercial projects.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">🌍 What We Offer:</h2>
      <ul className="list-disc list-inside space-y-2 text-base pl-4">
        <li>✅ <strong>Free Downloads</strong> – No paywalls. No catches.</li>
        <li>✅ <strong>High Resolution</strong> – Crystal-clear images that elevate your work.</li>
        <li>✅ <strong>Wide Variety</strong> – Nature 🌿, Urban 🌆, Portraits 👤, Abstract 🎨, and more!</li>
        <li>✅ <strong>Royalty-Free Use</strong> – Use images without worries of copyright issues.</li>
      </ul>

      <p className="text-lg mt-6 mb-6 text-center text-gray-300 italic">
        “Art speaks where words are unable to explain.” – Mathiole
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-300">💡 Why Choose Us?</h2>
      <p className="text-base leading-relaxed mb-4">
        We’re not just a gallery. We’re a <span className="font-semibold text-white">community of creators</span>. Every image here tells a story, sparks an idea, or becomes part of something bigger.
      </p>

      <ul className="list-disc list-inside space-y-2 text-base pl-4">
        <li>✨ Made with love, curated with care.</li>
        <li>🖼️ For creators, by creators.</li>
      </ul>

      <p className="text-lg mt-6 mb-6 text-center text-gray-300 italic">
        “A picture is a poem without words.” – Horace
      </p>

      <div className="text-center mt-10">
        <p className="text-xl font-semibold text-white">So go ahead — explore, download, create! 🚀</p>
        <p className="text-sm text-gray-400 mt-2">Stay inspired. Stay creative.</p>
        <p className="text-sm text-gray-400">💬 Have suggestions? We'd love to hear from you!</p>
      </div>
    </div>
  );
}

export default About;
