
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
        {/* Logo Placeholder */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#141414] rounded-xl sm:rounded-2xl mx-auto mb-8 sm:mb-12 flex items-center justify-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md sm:rounded-lg"></div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#141414] leading-tight px-2">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#141414] to-gray-600 bg-clip-text text-transparent">
              Lead Scraper
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed px-4">
            Get client data from websites easily using our powerful scraping tool.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-6 sm:pt-8">
          <Button
            onClick={() => navigate("/generator")}
            className="bg-[#141414] hover:bg-gray-800 text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group w-full sm:w-auto"
          >
            Start
            <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Subtle decoration - hidden on very small screens */}
        <div className="hidden sm:block absolute top-20 left-20 w-32 h-32 bg-gray-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-20 right-20 w-40 h-40 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
