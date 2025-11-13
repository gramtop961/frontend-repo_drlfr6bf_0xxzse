function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="#" className="hover:text-blue-600">Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
