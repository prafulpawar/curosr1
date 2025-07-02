export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">INVI</span>
              <span className="text-[var(--cyber-green)]">data</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Making data invisible, untouchable, and undefeatable with zero-byte self-defense mechanisms.
            </p>
            <div className="flex space-x-4">
              <div className="text-2xl text-[var(--cyber-green)]">#ZeroByteSecurity</div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--cyber-green)] transition-colors duration-300"
                >
                  INVImanager
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--cyber-green)] transition-colors duration-300"
                >
                  Technology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--cyber-green)] transition-colors duration-300"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--cyber-green)] transition-colors duration-300">Download</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--cyber-green)] transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li><a href="#" className="hover:text-[var(--cyber-green)] transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-[var(--cyber-green)] transition-colors duration-300">Support</a></li>
              <li><a href="#" className="hover:text-[var(--cyber-green)] transition-colors duration-300">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
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
