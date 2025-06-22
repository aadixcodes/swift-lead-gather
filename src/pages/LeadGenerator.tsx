
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Target, Download, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeadGenerator = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [niche, setNiche] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!location.trim() || !niche.trim()) {
      return;
    }

    setIsSubmitting(true);
    setShowSuccess(false);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Auto-hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center text-gray-600 hover:text-[#141414] transition-colors text-sm sm:text-base p-2 sm:p-3"
          >
            <ArrowLeft className="mr-1 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Button>
          
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#141414] rounded-lg sm:rounded-xl flex items-center justify-center">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm sm:rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Instructions (shows first on mobile) */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-1 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#141414] leading-tight">
                Generate Lead Excel Sheet in Just{" "}
                <span className="text-gray-600">3 Steps</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 font-light">
                Follow these simple steps to get your customized lead data
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#141414] text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-base sm:text-lg">
                  1
                </div>
                <div className="space-y-1 sm:space-y-2 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#141414] flex items-center flex-wrap">
                    <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Enter the Location</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Specify the geographic area where you want to find leads
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#141414] text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-base sm:text-lg">
                  2
                </div>
                <div className="space-y-1 sm:space-y-2 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#141414] flex items-center flex-wrap">
                    <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Enter the Niche</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Define your target industry or business type
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#141414] text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-base sm:text-lg">
                  3
                </div>
                <div className="space-y-1 sm:space-y-2 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#141414] flex items-center flex-wrap">
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Download Excel Sheet</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Click submit and get your organized lead data instantly
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form (shows second on mobile) */}
          <div className="animate-fade-in order-2 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gray-50 border-0 shadow-lg rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#141414]">
                      Lead Generator
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                      Fill in the details to generate your leads
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-[#141414] font-medium text-sm sm:text-base">
                        Location
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="e.g., New York, Los Angeles, London"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="bg-white border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-[#141414] placeholder:text-gray-400 focus:border-[#141414] focus:ring-[#141414] transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="niche" className="text-[#141414] font-medium text-sm sm:text-base">
                        Niche
                      </Label>
                      <Input
                        id="niche"
                        type="text"
                        placeholder="e.g., Restaurants, Real Estate, Fitness"
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        className="bg-white border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-[#141414] placeholder:text-gray-400 focus:border-[#141414] focus:ring-[#141414] transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#141414] hover:bg-gray-800 text-white py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-sm sm:text-base">Generating...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="text-sm sm:text-base">Generate & Download</span>
                        </div>
                      )}
                    </Button>

                    {/* Success Message */}
                    {showSuccess && (
                      <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <p className="text-green-800 text-sm font-medium">
                          Excel sheet generated successfully!
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGenerator;
