
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Logo Placeholder */}
        <div className="w-16 h-16 bg-[#141414] rounded-2xl mx-auto mb-12 flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-lg"></div>
        </div>

        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#141414] leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#141414] to-gray-600 bg-clip-text text-transparent">
              Lead Scraper
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-xl mx-auto leading-relaxed">
            Get client data from websites easily using our powerful scraping tool.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            onClick={() => navigate("/generator")}
            className="bg-[#141414] hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            Start
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Subtle decoration */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gray-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
