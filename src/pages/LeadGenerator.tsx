
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Target, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LeadGenerator = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [niche, setNiche] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!location.trim() || !niche.trim()) {
      toast.error("Please fill in both location and niche fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Excel sheet generated successfully!");
      // Here you would typically trigger the download
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center text-gray-600 hover:text-[#141414] transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="w-10 h-10 bg-[#141414] rounded-xl flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Instructions */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#141414] leading-tight">
                Generate Lead Excel Sheet in Just{" "}
                <span className="text-gray-600">3 Steps</span>
              </h1>
              <p className="text-lg text-gray-600 font-light">
                Follow these simple steps to get your customized lead data
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-[#141414] text-white rounded-xl flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#141414] flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Enter the Location
                  </h3>
                  <p className="text-gray-600">
                    Specify the geographic area where you want to find leads
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-[#141414] text-white rounded-xl flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#141414] flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Enter the Niche
                  </h3>
                  <p className="text-gray-600">
                    Define your target industry or business type
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-[#141414] text-white rounded-xl flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#141414] flex items-center">
                    <Download className="mr-2 h-5 w-5" />
                    Download Excel Sheet
                  </h3>
                  <p className="text-gray-600">
                    Click submit and get your organized lead data instantly
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gray-50 border-0 shadow-lg rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-[#141414]">
                      Lead Generator
                    </h2>
                    <p className="text-gray-600">
                      Fill in the details to generate your leads
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-[#141414] font-medium">
                        Location
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="e.g., New York, Los Angeles, London"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="bg-white border-gray-200 rounded-xl px-4 py-3 text-[#141414] placeholder:text-gray-400 focus:border-[#141414] focus:ring-[#141414] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="niche" className="text-[#141414] font-medium">
                        Niche
                      </Label>
                      <Input
                        id="niche"
                        type="text"
                        placeholder="e.g., Restaurants, Real Estate, Fitness"
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        className="bg-white border-gray-200 rounded-xl px-4 py-3 text-[#141414] placeholder:text-gray-400 focus:border-[#141414] focus:ring-[#141414] transition-colors"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#141414] hover:bg-gray-800 text-white py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Generating...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Download className="h-5 w-5" />
                          <span>Generate & Download</span>
                        </div>
                      )}
                    </Button>
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
