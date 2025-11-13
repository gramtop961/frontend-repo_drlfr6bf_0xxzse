import { Link } from 'react-router-dom'

function Feature({ title, description, icon }) {
  return (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  )
}

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Your one‑stop shop for modern essentials
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Discover curated products, swift delivery, and outstanding support—crafted for your everyday life.
              </p>
              <div className="mt-8 flex gap-4">
                <Link to="/products" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Shop Now</Link>
                <Link to="/services" className="px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 font-semibold">Our Services</Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-white border border-gray-100 shadow-xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-100 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Shop With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature title="Quality Products" description="Hand‑picked items from trusted brands." />
            <Feature title="Fast Delivery" description="Get your orders delivered quickly." />
            <Feature title="Secure Payments" description="Safe checkout with multiple options." />
            <Feature title="24/7 Support" description="We’re here whenever you need us." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to explore our catalog?</h2>
          <p className="mt-2 text-white/90">Browse categories, compare features, and find your perfect match.</p>
          <Link to="/products" className="inline-block mt-6 px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100">Browse Products</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
