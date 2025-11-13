function ServiceCard({ title, description }) {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  )
}

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">We offer a complete suite of services to make your shopping experience seamless from discovery to delivery and beyond.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard title="Personalized Recommendations" description="AI‑powered suggestions tailored to your preferences." />
        <ServiceCard title="Express Delivery" description="Same‑day and next‑day options in select regions." />
        <ServiceCard title="Easy Returns" description="Hassle‑free returns within 30 days." />
        <ServiceCard title="Installation Support" description="Professional setup for eligible products." />
        <ServiceCard title="Warranty & Protection" description="Extended coverage for peace of mind." />
        <ServiceCard title="24/7 Customer Care" description="Round‑the‑clock assistance for any query." />
      </div>
    </div>
  )
}

export default Services
