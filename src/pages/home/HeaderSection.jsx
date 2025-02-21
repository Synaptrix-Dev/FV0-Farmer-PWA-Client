import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isWeatherExpanded, setIsWeatherExpanded] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-green-800 to-green-900 text-white shadow-lg">
      {/* Main Header Content */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Farm Title and Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-6">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              <i className="fas fa-leaf text-green-400 mr-2"></i>
              <span className="text-white">FarmConnect</span>
            </h1>
            <p className="mt-1 text-sm sm:text-base text-green-100 max-w-lg">
              Smart solutions for modern agriculture. Monitor, manage, and
              maximize your farm&apos;s potential.
            </p>
          </div>

          {/* Action Buttons - Stack on mobile, row on larger screens */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link
              to="/market-prices"
              className="bg-green-700 hover:bg-green-600 px-3 py-2 sm:px-4 text-xs sm:text-sm rounded-md flex items-center justify-center transition-colors duration-200 whitespace-nowrap"
            >
              <i className="fas fa-chart-line mr-1.5"></i>
              Market Prices
            </Link>
            <Link
              to="/weather"
              className="bg-green-700/50 hover:bg-green-600/50 px-3 py-2 sm:px-4 text-xs sm:text-sm rounded-md flex items-center justify-center transition-colors duration-200 whitespace-nowrap"
            >
              <i className="fas fa-cloud-sun mr-1.5"></i>
              Weather
            </Link>
          </div>
        </div>

        {/* Stats Grid - Responsive from 1 column on mobile to 4 on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Crop Stats Card */}
          <div className="bg-white/10 rounded-lg shadow-md p-4 hover:bg-white/15 transition-colors duration-200 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xs sm:text-sm uppercase tracking-wider text-green-200 font-medium">
                  Crops
                </h3>
                <p className="mt-1 text-xl sm:text-2xl font-bold">5</p>
                <p className="mt-1 text-xs text-green-200">
                  varieties in cultivation
                </p>
              </div>
              <span className="h-10 w-10 rounded-full bg-green-700/30 flex items-center justify-center">
                <i className="fas fa-seedling text-green-300"></i>
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                to="/crops"
                className="text-xs text-green-300 hover:text-green-200 flex items-center"
              >
                View crop details
                <i className="fas fa-arrow-right ml-1 text-xs"></i>
              </Link>
            </div>
          </div>

          {/* Livestock Stats Card */}
          <div className="bg-white/10 rounded-lg shadow-md p-4 hover:bg-white/15 transition-colors duration-200 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xs sm:text-sm uppercase tracking-wider text-green-200 font-medium">
                  Livestock
                </h3>
                <p className="mt-1 text-xl sm:text-2xl font-bold">128</p>
                <p className="mt-1 text-xs text-green-200">healthy animals</p>
              </div>
              <span className="h-10 w-10 rounded-full bg-green-700/30 flex items-center justify-center">
                <i className="fas fa-cow text-green-300"></i>
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                to="/livestock"
                className="text-xs text-green-300 hover:text-green-200 flex items-center"
              >
                View livestock details
                <i className="fas fa-arrow-right ml-1 text-xs"></i>
              </Link>
            </div>
          </div>

          {/* Yield Stats Card */}
          <div className="bg-white/10 rounded-lg shadow-md p-4 hover:bg-white/15 transition-colors duration-200 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xs sm:text-sm uppercase tracking-wider text-green-200 font-medium">
                  Annual Yield
                </h3>
                <p className="mt-1 text-xl sm:text-2xl font-bold">24.8 tons</p>
                <p className="mt-1 text-xs text-green-200">
                  <i className="fas fa-arrow-up text-green-400 mr-1"></i>
                  8% increase from last year
                </p>
              </div>
              <span className="h-10 w-10 rounded-full bg-green-700/30 flex items-center justify-center">
                <i className="fas fa-balance-scale text-green-300"></i>
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                to="/production"
                className="text-xs text-green-300 hover:text-green-200 flex items-center"
              >
                View production stats
                <i className="fas fa-arrow-right ml-1 text-xs"></i>
              </Link>
            </div>
          </div>

          {/* Equipment Stats Card */}
          <div className="bg-white/10 rounded-lg shadow-md p-4 hover:bg-white/15 transition-colors duration-200 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xs sm:text-sm uppercase tracking-wider text-green-200 font-medium">
                  Equipment
                </h3>
                <p className="mt-1 text-xl sm:text-2xl font-bold">95%</p>
                <p className="mt-1 text-xs text-green-200">
                  operational status
                </p>
              </div>
              <span className="h-10 w-10 rounded-full bg-green-700/30 flex items-center justify-center">
                <i className="fas fa-tractor text-green-300"></i>
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                to="/equipment"
                className="text-xs text-green-300 hover:text-green-200 flex items-center"
              >
                View equipment status
                <i className="fas fa-arrow-right ml-1 text-xs"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Weather Preview - Expandable on mobile */}
        <div className="mt-5 bg-white/5 rounded-lg overflow-hidden">
          <div
            className="flex items-center justify-between p-3 cursor-pointer sm:cursor-default"
            onClick={() => setIsWeatherExpanded(!isWeatherExpanded)}
          >
            <div className="flex items-center">
              <i className="fas fa-sun text-yellow-300 mr-2"></i>
              <span className="font-medium">Today&apos;s Weather</span>
            </div>
            <button className="sm:hidden text-green-300">
              <i
                className={`fas fa-chevron-${
                  isWeatherExpanded ? "up" : "down"
                }`}
              ></i>
            </button>
          </div>

          <div
            className={`${
              isWeatherExpanded ? "block" : "hidden"
            } sm:block border-t border-white/10`}
          >
            <div className="p-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="flex flex-col items-center">
                <span className="text-xs text-green-200">Now</span>
                <i className="fas fa-sun text-yellow-300 my-1 text-xl"></i>
                <span className="text-lg font-medium">24°C</span>
                <span className="text-xs text-green-200">Clear</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-green-200">10 AM</span>
                <i className="fas fa-sun text-yellow-300 my-1 text-xl"></i>
                <span className="text-lg font-medium">26°C</span>
                <span className="text-xs text-green-200">Clear</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-green-200">12 PM</span>
                <i className="fas fa-cloud-sun text-yellow-300 my-1 text-xl"></i>
                <span className="text-lg font-medium">28°C</span>
                <span className="text-xs text-green-200">Partly Cloudy</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-green-200">2 PM</span>
                <i className="fas fa-cloud text-gray-300 my-1 text-xl"></i>
                <span className="text-lg font-medium">27°C</span>
                <span className="text-xs text-green-200">Cloudy</span>
              </div>
              <div className="hidden lg:flex flex-col items-center">
                <span className="text-xs text-green-200">4 PM</span>
                <i className="fas fa-cloud-sun text-yellow-300 my-1 text-xl"></i>
                <span className="text-lg font-medium">25°C</span>
                <span className="text-xs text-green-200">Partly Cloudy</span>
              </div>
            </div>
            <div className="bg-white/5 p-3 border-t border-white/10 flex justify-between items-center">
              <div>
                <span className="text-xs text-green-200">
                  Field conditions:
                </span>
                <span className="ml-1 text-sm font-medium">
                  Suitable for fieldwork
                </span>
              </div>
              <Link
                to="/weather"
                className="text-xs text-green-300 hover:text-green-200 flex items-center"
              >
                Detailed forecast
                <i className="fas fa-arrow-right ml-1 text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
