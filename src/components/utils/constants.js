import { CheckCircle, Bug, Scissors, Droplet, PawPrint, Dog } from 'lucide-react';
export const 
COMPANY_INFO = {
  name: "MOVIMASCOTA",
  tagline: "Mobile Grooming",
  phone: "+51 994 926 887",
  email: "movimascota@gmail.com",
  address: "Lima, Peru",
  hours: "Mon - Sun: 8:00 AM - 6:00 PM"
};

export const SERVICES = [
  {
    id: 1,
    title: "Full Bath",
    icon: "droplet",
    iconColor: "text-blue-500",
    description: "Bath with specialized shampoo according to coat type, professional drying, and detangling.",
    price: "From S/. 35",
    duration: "45-60 min",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
    features: ["Specialized shampoo", "Professional drying", "Detangling", "Pet perfume"]
  },
  {
    id: 2,
    title: "Professional Haircut",
    icon: "scissors",
    iconColor: "text-pink-500",
    description: "Specialized haircut according to breed, desired style, and groomer's recommendations.",
    price: "From S/. 45",
    duration: "60-90 min",
    image: "https://i.pinimg.com/736x/96/82/f5/9682f5bc0ec2016f78c20d00e7afb9ae.jpg",
    features: ["Breed-specific cut", "Styling", "Professional scissors", "Perfect finish"]
  },
  {
    id: 3,
    title: "Premium Spa",
    icon: "paw",
    iconColor: "text-purple-500",
    description: "Complete treatment: bath, haircut, nails, ear cleaning, and special care session for your pet.",
    price: "From S/. 70",
    duration: "90-120 min",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=300&fit=crop",
    features: ["All services", "Nail trimming", "Ear cleaning", "Special treatment"]
  },
  {
    id: 4,
    title: "Deworming",
    icon: "bug",
    iconColor: "text-green-600",
    description: "Elimination of external and internal parasites with safe products.",
    price: "From S/. 30",
    duration: "30 min",
    image: "https://i.pinimg.com/736x/39/67/7f/39677fa83262255dc7a7c6f6c3e5e5d0.jpg",
    features: ["Internal deworming", "External deworming", "Certified products"]
  },
  {
    id: 5,
    title: "Nail Trimming",
    icon: "scissors",
    iconColor: "text-red-400",
    description: "Professional and safe nail trimming for dogs and cats.",
    price: "From S/. 15",
    duration: "15 min",
    image: "https://i.pinimg.com/736x/26/eb/bd/26ebbdda3cb0f231fbd612381efe894c.jpg",
    features: ["Safe trimming", "Stress-free", "Includes filing"]
  },
  {
    id: 6,
    title: "Dental Cleaning",
    icon: "tooth",
    iconColor: "text-yellow-500",
    description: "Basic teeth cleaning to prevent tartar and bad breath.",
    price: "From S/. 25",
    duration: "20 min",
    image: "https://i.pinimg.com/736x/dc/89/1f/dc891f2e006877fb424ba64a7f8f09e3.jpg",
    features: ["Teeth brushing", "Gum check", "Special products"]
  },
  {
    id: 7,
    title: "Medicated Bath",
    icon: "droplet",
    iconColor: "text-cyan-500",
    description: "Bath with special products for sensitive skin or dermatological issues.",
    price: "From S/. 40",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop",
    features: ["Medicated shampoo", "Relieves irritation", "Suitable for all breeds"]
  },
  {
    id: 8,
    title: "Dog Walking",
    icon: "dog",
    iconColor: "text-orange-500",
    description: "safe walks for your pet in the best areas of the city.",
    price: "From S/. 20",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=300&fit=crop",
    features: ["Individual walks", "Constant supervision", "Hydration included"]
  },
  {
    id: 9,
    title: "Basic Training",
    icon: "shield",
    iconColor: "text-indigo-500",
    description: "Obedience and socialization sessions for young and adult dogs.",
    price: "From S/. 60",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=300&fit=crop",
    features: ["Basic commands", "Positive reinforcement", "Certified trainers"]
  }
];

export const STATS = [
  { number: "500+", label: "Happy pets", icon: "heart" },
  { number: "Certified", label: "100% Professional", icon: "award" },
  { number: "98%", label: "Satisfaction", icon: "star" },
  { number: "24/7", label: "Support", icon: "phone" }
];

export const PROCESS_STEPS = [
  {
    step: "1",
    title: "Book your appointment",
    description: "Call us or use our app to schedule the service",
    icon: "calendar",
    color: "orange"
  },
  {
    step: "2",
    title: "We arrive at your home",
    description: "Our mobile team arrives on time with all equipment",
    icon: "mapPin",
    color: "blue"
  },
  {
    step: "3",
    title: "Professional service",
    description: "We take care of your pet with love and professionalism",
    icon: "shield",
    color: "green"
  },
  {
    step: "4",
    title: "Happy pet",
    description: "Your pet is clean, beautiful, and ready to be pampered",
    icon: "heart",
    color: "red"
  }
];

export const NAVIGATION_LINKS = [
  { href: "#inicio", label: "Home" },
  { href: "#servicios", label: "Services" },
  { href: "#como-funciona", label: "How it works?" },
  { href: "#nosotros", label: "About us" }
];