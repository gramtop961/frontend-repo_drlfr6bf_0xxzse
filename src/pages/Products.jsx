import { useEffect, useState } from 'react'

const demoProducts = [
  { id: 1, name: 'Wireless Headphones', price: 89.99, image: '', description: 'Noise-cancelling over-ear headphones.' },
  { id: 2, name: 'Smart Watch', price: 129.99, image: '', description: 'Track health and notifications on the go.' },
  { id: 3, name: 'Bluetooth Speaker', price: 49.99, image: '', description: 'Compact speaker with rich sound.' },
  { id: 4, name: 'Laptop Stand', price: 29.99, image: '', description: 'Ergonomic aluminum stand for laptops.' },
]

function ProductCard({ product }) {
  return (
    <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
      <div className="aspect-square rounded-lg bg-gray-50 border border-gray-100" />
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="mt-1 text-gray-600 text-sm">{product.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Add to Cart</button>
      </div>
    </div>
  )
}

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // In the future, replace with backend API call
    setProducts(demoProducts)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <div className="text-sm text-gray-500">Showing {products.length} items</div>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default Products
