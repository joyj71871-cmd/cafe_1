import React, { useState } from "react";
import {
  Coffee, Wifi, Users, Heart,   Phone,
  Star, MapPin, Clock, MessageCircle
} from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");

  const menuItems = [
    { name: "Espresso", price: "$4" },
    { name: "Cappuccino", price: "$6" },
    { name: "Latte", price: "$6" },
    { name: "Cold Brew", price: "$5" },
    { name: "Fresh Croissants", price: "$7" },
    { name: "Signature Desserts", price: "$9" },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1200",
  ];

  return (
    <div className="bg-[#F8F5F0] text-[#2D2D2D]">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-bold text-2xl text-[#1E3A5F]">Artisan Brew</h1>
          <div className="hidden md:flex gap-8">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="bg-[#1E3A5F] text-white px-5 py-3 rounded-full">
            Reserve Table
          </button>
        </div>
      </nav>

      {/*----------------------------    Hero Section --------------------------------------------*/}

      <section className="min-h-screen relative flex items-center justify-center">
        <img src={gallery[0]} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Crafted Coffee, Made Fresh Every Day
          </h1>
          <p className="max-w-2xl mx-auto mb-8">
            Experience specialty coffee, artisan pastries, and a cozy atmosphere.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full">View Menu</button>
            <button className="bg-[#1E3A5F] px-6 py-3 rounded-full">Reserve a Table</button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            {["15k+ Happy Guests", "20+ Signature Drinks", "5★ Rating"].map((s) => (
              <div key={s} className="bg-white/10 backdrop-blur p-5 rounded-2xl">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*----------------------------    About Us --------------------------------------------*/}

      <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <img src={gallery[1]} className="rounded-3xl h-full object-cover" />
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg leading-8">
            Founded with a passion for exceptional coffee and meaningful experiences,
            Artisan Brew combines expertly roasted beans, handcrafted beverages,
            and a warm community atmosphere.
          </p>
        </div>
      </section>

      {/*----------------------------    Featured Menu --------------------------------------------*/}

      <section id="menu" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Menu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition">
              <img src={gallery[2]} className="h-56 w-full object-cover rounded-2xl mb-4" />
              <h3 className="font-bold text-xl">{item.name}</h3>
              <p className="text-gray-600 my-3">Premium handcrafted selection.</p>
              <p className="font-bold text-[#1E3A5F]">{item.price}</p>
            </div>
          ))}
        </div>
      </section>


      {/*----------------------------    Why Choose Us --------------------------------------------*/}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[Coffee, Wifi, Users, Heart].map((Icon, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow text-center">
              <Icon className="mx-auto text-[#1E3A5F]" size={40} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1E3A5F] text-white py-24 text-center">
        <h2 className="text-5xl font-bold mb-4">Order Your Favorites Online</h2>
        <p className="mb-8">Fresh coffee and pastries delivered to your door.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-[#1E3A5F] px-6 py-3 rounded-full">Order Now</button>
          <button className="border px-6 py-3 rounded-full">View Menu</button>
        </div>
      </section>


{/*----------------------------    Testimonials --------------------------------------------*/} 
<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="text-center mb-16">
    <span className="text-[#1E3A5F] font-semibold uppercase tracking-widest">
      What Our Guests Say
    </span>
    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
      Loved by Coffee Enthusiasts
    </h2>
    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Thousands of customers enjoy our handcrafted coffee, fresh pastries,
      and cozy atmosphere every day.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Sarah Mitchell",
        role: "Food Blogger",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
        quote:
          "Every cup feels carefully crafted. The espresso is rich, smooth, and consistently exceptional.",
      },
      {
        name: "Daniel Carter",
        role: "Remote Designer",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
        quote:
          "My favorite place to work and unwind. Great coffee, warm ambiance, and friendly staff.",
      },
      {
        name: "Emma Wilson",
        role: "Local Customer",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
        quote:
          "The pastries are incredible and the coffee is always fresh. A true hidden gem in the city.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
      >
        <div className="flex items-center gap-4 mb-6">
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-lg">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.role}</p>
          </div>
        </div>

        <div className="flex gap-1 text-amber-400 mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              fill="currentColor"
              strokeWidth={0}
            />
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed italic">
          "{item.quote}"
        </p>
      </div>
    ))}
  </div>

  <div className="mt-16 text-center">
    <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-md">
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <span className="font-semibold text-gray-800">
        4.9/5 Average Rating from 2,500+ Happy Customers
      </span>
    </div>
  </div>
</section>

      {/*----------------------------    Gallery --------------------------------------------*/}

      <section id="gallery" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {gallery.map((img, i) => <img key={i} src={img} className="rounded-2xl h-72 w-full object-cover" />)}
        </div>
      </section>

      {/*----------------------------    Instagram Feed --------------------------------------------*/}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Instagram Feed</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow">
              <img src={gallery[i % 4]} className="h-64 w-full object-cover" />
              <div className="p-4 flex justify-between">
                <span>❤️ 1.2k</span><span>💬 120</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    {/*----------------------------    Reserve Your Table --------------------------------------------*/}

      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-10">Reserve Your Table</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="p-4 rounded-xl border" placeholder="Name" />
          <input className="p-4 rounded-xl border" placeholder="Phone" />
          <input type="date" className="p-4 rounded-xl border" />
          <input type="time" className="p-4 rounded-xl border" />
          <input className="p-4 rounded-xl border md:col-span-2" placeholder="Guests" />
        </div>
        <button className="mt-6 w-full bg-[#1E3A5F] text-white p-4 rounded-xl">Reserve Table</button>
      </section>

      {/*----------------------------    Newsletter --------------------------------------------*/}

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Join Our Coffee Community</h2>
          <div className="flex gap-3 mt-8">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="flex-1 border p-4 rounded-xl" placeholder="Email Address"/>
            <button className="bg-[#1E3A5F] text-white px-6 rounded-xl">Subscribe</button>
          </div>
        </div>
      </section>

      {/*----------------------------    Contact --------------------------------------------*/}

      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <div className="space-y-4">
          <p><MapPin className="inline mr-2"/>123 Artisan Avenue, Los Angeles, CA</p>
          <p><Phone className="inline mr-2"/>(555) 123-4567</p>
          <p><Clock className="inline mr-2"/>7 AM - 9 PM</p>
        </div>
      </section>

      <footer className="bg-[#1E3A5F] text-white text-center py-10">
        © 2026 Artisan Brew Cafe. All rights reserved.
      </footer>

      <a href="#" className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl">
        <MessageCircle />
      </a>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex gap-2">
        <button className="flex-1 bg-[#1E3A5F] text-white py-3 rounded-xl">Reserve</button>
        <button className="flex-1 border py-3 rounded-xl">Call Now</button>
      </div>
    </div>
  );
}
