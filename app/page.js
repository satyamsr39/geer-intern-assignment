"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaShoppingCart, FaUser, FaSearch, FaGem, FaCrown, FaPhoneAlt, FaInfoCircle, FaStar,
} from "react-icons/fa";
import {
  GiDiamondRing, GiGoldBar, GiPearlNecklace, GiNecklace, GiEarrings,
} from "react-icons/gi";

import Image from "next/image";

const instaImages = [
  "https://images.unsplash.com/photo-1652949714701-1be8cdac08d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amV3ZWxzcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1630534591724-dba93846b629?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGpld2Vsc3JpZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1667013829325-be7dac7d03eb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGpld2Vsc3JpZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1723144290281-de6d80a79028?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGpld2Vsc3JpZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1733256528554-3b2ae8f1b3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGpld2Vsc3JpZXN8ZW58MHx8MHx8fDA%3D",
];



const collections = [
  {
    title: "Wedding Collection",
    image: "https://plus.unsplash.com/premium_photo-1673400239449-c9236cf65fae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMGNvbGxlY3Rpb24lMjBqZXdlbGxhcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Everyday Glam",
    image: "https://media.istockphoto.com/id/1195942083/photo/woman-neck-with-hand-with-many-bracelets.webp?a=1&b=1&s=612x612&w=0&k=20&c=bYR9dr9uHZtM6crBdoqA78AqKvSTOMs622jl-mqQuJg=",
  },
  {
    title: "Festive Picks",
    image: "https://media.istockphoto.com/id/1342254465/photo/portrait-of-beautiful-indian-bengali-female-woman-in-red-and-white-traditional-ethnic-saree.jpg?s=1024x1024&w=is&k=20&c=XCtyM9qSrsJ6ivukvppdVz2v5NE-2cTn5I-MOUiazkc=",
  },
  {
    title: "Minimal Luxe",
    image: "https://images.unsplash.com/photo-1662376993778-1a1e6ecd9df2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const navItems = [
  {
    label: "Rings",
    color: "from-pink-100 to-pink-50",
    subItems: [
      { text: "Gold Ring", icon: <GiGoldBar className="text-yellow-500" /> },
      { text: "Diamond Ring", icon: <GiDiamondRing className="text-blue-400" /> },
      { text: "Engagement Ring", icon: <FaGem className="text-purple-600" /> },
      { text: "Royal Ring", icon: <FaCrown className="text-amber-600" /> },
    ],
  },
  {
    label: "Earrings",
    color: "from-yellow-100 to-yellow-50",
    subItems: [
      { text: "Studs", icon: <GiEarrings className="text-red-500" /> },
      { text: "Hoops", icon: <FaStar className="text-indigo-500" /> },
      { text: "Drop Earrings", icon: <FaStar className="text-teal-400" /> },
      { text: "Antique", icon: <FaStar className="text-rose-600" /> },
    ],
  },
  {
    label: "Necklace",
    color: "from-green-100 to-green-50",
    subItems: [
      { text: "Pearl Necklace", icon: <GiPearlNecklace className="text-gray-400" /> },
      { text: "Gold Chain", icon: <GiNecklace className="text-yellow-600" /> },
      { text: "Bridal Set", icon: <FaStar className="text-red-600" /> },
      { text: "Temple Necklace", icon: <FaStar className="text-orange-500" /> },
    ],
  },
  {
    label: "Bracelets & Bangles",
    color: "from-blue-100 to-blue-50",
    subItems: [
      { text: "Bracelet", icon: <FaStar className="text-pink-400" /> },
      { text: "Bangles", icon: <FaStar className="text-lime-500" /> },
      { text: "Cuffs", icon: <FaCrown className="text-blue-700" /> },
      { text: "Kada", icon: <FaStar className="text-gray-600" /> },
    ],
  },
  {
    label: "Contact",
    color: "from-gray-100 to-white",
    subItems: [{ text: "Customer Support", icon: <FaPhoneAlt className="text-green-600" /> }],
  },
  {
    label: "About",
    color: "from-gray-100 to-white",
    subItems: [{ text: "Our Story", icon: <FaInfoCircle className="text-blue-600" /> }],
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const dropdownRefs = useRef([]);
  const [product, setProducts]=useState([])

  const [searchQuery, setSearchQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);

const handleSearch = async () => {
  if (!searchQuery.trim()) return;
  try {
    const res = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent(searchQuery)}`);
    const data = await res.json();
    setSearchResults(data.results); // log or render this to view
    console.log("Search results:", data.results);
  } catch (err) {
    console.error("Search error:", err);
  }
};


  useEffect(() => {
    
    const fetchProducts=async()=>{
      const response=await fetch('http://localhost:3000/api/products',{})
    const data= await response.json();
    console.log(data)
    setProducts(data.products)
   
  }
fetchProducts();
    const handleClickOutside = (e) => {
      if (dropdownRefs.current.every((ref) => ref && !ref.contains(e.target))) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="font-serif text-gray-800">
      {/* Top banner */}
      <div className="text-center text-sm p-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium">
        Upto <span className="font-bold">40% off</span> this Month, Hurry up!
      </div>

      {/* Navbar */}
     <nav className="w-full flex flex-wrap items-center bg-gray-100 p-4 shadow-md">
  {/* Brand */}
  <div className="text-4xl font-bold text-slate-700 tracking-wider italic">⟡ Naksh</div>

  {/* Mobile user icon */}
  <div className="block sm:hidden ml-auto">
    <FaUser size={24} className="text-gray-800" />
  </div>

  {/* Navigation Items */}
  <ul className="flex flex-wrap items-center gap-4 text-lg font-light ml-auto">
    {navItems.map((item, idx) => (
      <div key={idx} className="relative hidden sm:block" ref={(el) => (dropdownRefs.current[idx] = el)}>
        <li
          className="px-3 py-1 rounded-md hover:bg-gray-200 cursor-pointer"
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
        >
          {item.label}
        </li>
        {item.subItems.length > 0 && openIndex === idx && (
          <ul className={`absolute right-0 mt-2 w-60 z-20 shadow-lg rounded-lg bg-gradient-to-b ${item.color}`}>
            {item.subItems.map((si, sIdx) => (
              <li
                key={sIdx}
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/60 text-gray-800 cursor-pointer"
              >
                <span className="text-xl">{si.icon}</span>
                <span>{si.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}

    {/* Search Bar */}
    <li className="hidden md:flex items-center gap-2 px-2">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <FaSearch size={22} className="text-gray-700 hover:text-gray-900 cursor-pointer" onClick={handleSearch} />
    </li>

    {/* Cart & User Icons */}
    <li className="hidden md:block px-2">
      <FaShoppingCart size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer" />
    </li>
    <li className="hidden md:block px-2">
      <FaUser size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer" />
    </li>
  </ul>
</nav>


      {/* Optional: Render Search Results */}
      {searchResults.length > 0 && (
        <div className="p-4 bg-white shadow md:px-20">
          <h3 className="text-xl font-semibold mb-4">Search Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {searchResults.map((item) => (
              <div key={item._id} className="border rounded p-2">
                <img src={item.imageUrl} alt={item.name} className="w-full h-32 object-cover rounded mb-2" />
                <h4 className="text-lg">{item.name}</h4>
                <p className="text-sm text-gray-500">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Sparkle Sustainably <br /> with Lab‑Grown Diamonds
          </h1>
          <p className="text-lg text-gray-700 mb-6">Ethically crafted brilliance ⏤ certified, customizable, and conflict‑free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded text-sm hover:bg-gray-900">Shop Collection</button>
            <button className="border border-black text-black px-6 py-3 rounded text-sm hover:bg-black hover:text-white">Book a Consultation</button>
          </div>
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FaInfoCircle className="text-green-600" /> IGI/GIA Certified
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FaPhoneAlt className="text-blue-600" /> Free Consultation
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-96 md:h-[30rem] bg-cover bg-center rounded-lg shadow-lg relative" style={{ backgroundImage: "url('/hero-model.png')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-20 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center text-black">
        <h2 className="text-3xl font-semibold mb-10">Our Bestsellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
     {product.map((item) => (
  <div key={item._id} className="flex flex-col justify-center items-center shadow-md">
    <img
      src={item.imageUrl}
      alt={item.name}
      className="w-32 h-32 object-cover rounded"
    />
    <h3>{item.name}</h3>
    <p>₹{item.price}</p>
  </div>
))}

        </div>
      </section>

      {/* Featured Collections */}
   <section className="py-16 px-6 md:px-20 bg-white text-center">
  <h2 className="text-3xl font-semibold mb-10">Featured Collections</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {collections.map((item, idx) => (
      <div key={idx} className="bg-gray-50 p-4 rounded shadow hover:shadow-lg transition">
        <div className="w-full h-40 relative mb-4 rounded overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <h3 className="font-medium">{item.title}</h3>
      </div>
    ))}
  </div>
</section>



      {/* About Us */}
      <section className="py-16 px-6 md:px-20 bg-orange-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Naksh</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          At Naksh, we redefine elegance with ethically sourced, lab-grown diamonds. Our mission is to make luxury sustainable and accessible—without compromising on beauty or authenticity.
        </p>
      </section>

      {/* Instagram Preview */}
<section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
  <h2 className="text-3xl font-semibold mb-6">Follow Us On Instagram</h2>
  <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
    {instaImages.map((src, i) => (
      <div key={i} className="relative w-full h-24 rounded overflow-hidden">
        <Image
          src={src}
          alt={`Instagram post ${i + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 33vw, (max-width: 768px) 16vw, 8vw"
        />
      </div>
    ))}
  </div>
</section>


      {/* Contact CTA */}
      <section className="py-12 px-6 md:px-20 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-4">Need Help Choosing?</h2>
        <p className="text-gray-600 mb-6">Our experts are one call away to guide you with style & sparkle.</p>
        <button className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">Talk to an Expert</button>
      </section>
    </div>
  );
}
