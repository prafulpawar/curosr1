export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-3xl font-bold mb-6">
              <span className="text-gray-900">INVI</span>
              <span className="gradient-text">data</span>
            </div>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Making data invisible, untouchable, and undefeatable with revolutionary zero-byte self-defense mechanisms.
            </p>
            <div className="flex space-x-4">
              <div className="text-lg gradient-text font-semibold">#ZeroByteSecurity</div>
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Product</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  INVImanager
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  Technology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors duration-300">Download</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-gray-900 transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">Support</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 INVIdata Technology. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            Designed and developed by Growth Metaverse Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
