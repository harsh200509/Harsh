import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Users, Search, Star, ChevronRight, Globe, Shield, Clock, Plane, Menu, X } from 'lucide-react';

const DESTINATIONS = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800',
    price: '$1,200',
    rating: 4.9,
    days: '5 Days',
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    price: '$899',
    rating: 4.8,
    days: '7 Days',
  },
  {
    id: 3,
    name: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=800',
    price: '$1,500',
    rating: 4.9,
    days: '6 Days',
  },
  {
    id: 4,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    price: '$1,800',
    rating: 4.7,
    days: '10 Days',
  }
];

const FEATURES = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Worldwide Coverage',
    description: 'Access to over 10,000 destinations across the globe with exclusive deals.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure Booking',
    description: 'Your payments and personal information are protected by bank-level security.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 Support',
    description: 'Our travel experts are always available to help you anywhere, anytime.'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Plane className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">Wanderlust</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
            <a href="#" className="hover:text-white transition-colors">Destinations</a>
            <a href="#" className="hover:text-white transition-colors">Tours</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-white font-medium hover:text-white/80 transition-colors">Log in</button>
            <button className="bg-white text-stone-900 px-5 py-2.5 rounded-full font-medium hover:bg-stone-100 transition-colors">
              Sign up
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Discover the world's most <span className="text-emerald-400 italic font-serif">beautiful</span> places.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
              Plan your perfect getaway with our curated selection of premium tours and unforgettable experiences.
            </p>
          </motion.div>

          {/* Search Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-4 rounded-2xl md:rounded-full shadow-xl flex flex-col md:flex-row items-center gap-4 max-w-4xl"
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full md:w-auto border-b md:border-b-0 md:border-r border-stone-200">
              <MapPin className="w-5 h-5 text-stone-400" />
              <div className="flex flex-col w-full">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Location</span>
                <input type="text" placeholder="Where to?" className="w-full outline-none text-stone-900 placeholder:text-stone-300 font-medium bg-transparent" />
              </div>
            </div>
            
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full md:w-auto border-b md:border-b-0 md:border-r border-stone-200">
              <Calendar className="w-5 h-5 text-stone-400" />
              <div className="flex flex-col w-full">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Date</span>
                <input type="text" placeholder="Add dates" className="w-full outline-none text-stone-900 placeholder:text-stone-300 font-medium bg-transparent" />
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full md:w-auto">
              <Users className="w-5 h-5 text-stone-400" />
              <div className="flex flex-col w-full">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Guests</span>
                <input type="text" placeholder="Add guests" className="w-full outline-none text-stone-900 placeholder:text-stone-300 font-medium bg-transparent" />
              </div>
            </div>

            <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-xl md:rounded-full flex items-center justify-center transition-colors">
              <Search className="w-5 h-5" />
              <span className="md:hidden ml-2 font-medium">Search</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-stone-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
              <p className="text-stone-500 text-lg">Explore our top-rated tour packages</p>
            </div>
            <button className="flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 text-sm font-medium">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    {dest.rating}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
                      <p className="text-stone-500 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {dest.days}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">From</span>
                      <span className="text-xl font-bold text-emerald-600">{dest.price}</span>
                    </div>
                    <button className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for your next adventure?</h2>
          <p className="text-xl text-stone-300 mb-10">Join our newsletter and get 15% off your first booking.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-emerald-400 flex-1"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-stone-900">
            <Plane className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">Wanderlust</span>
          </div>
          <p className="text-stone-500 text-sm">© 2026 Wanderlust Travels. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-stone-600">
            <a href="#" className="hover:text-stone-900">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
