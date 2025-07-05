import { SERVICES } from "../utils/constants";
import { Droplet, Scissors, PawPrint, Bug, Dog, Shield } from "lucide-react";

const iconMap = {
  droplet: Droplet,
  scissors: Scissors,
  paw: PawPrint,
  bug: Bug,
  tooth: PawPrint,
  dog: Dog,
  shield: Shield,
};

const Services = () => (
  <section id="servicios" className="section-padding bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center text-orange-600 mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon] || PawPrint;
          return (
            <div
              key={service.id}
              className="card flex flex-col items-center p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <Icon className={`w-10 h-10 mb-4 ${service.iconColor}`} />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* Features list removed */}
              <div className="font-bold text-orange-600 mb-1">
                {service.price}
              </div>
              <div className="text-xs text-gray-400 mb-2">
                {service.duration}
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow w-full h-48 object-cover mb-2"
              />
              <button className="btn-primary mt-2">Book</button>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
