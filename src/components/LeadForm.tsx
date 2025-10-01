import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useContentGate } from "@/contexts/ContentGateContext";
import { Loader2 } from "lucide-react";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "India",
  "Japan",
  "Brazil",
  "Mexico",
  "Spain",
  "Italy",
  "Other"
];

const LeadForm = () => {
  const { toast } = useToast();
  const { unlockContent } = useContentGate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Basic phone validation - at least 10 digits
    const phoneRegex = /\d{10,}/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number (at least 10 digits).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Supabase
      const { error } = await supabase.from("leads").insert({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        country: formData.country,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Thank you! You now have access to the full landing page.",
      });

      // Unlock content
      unlockContent();
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: ""
      });

      // Smooth scroll to unlocked content
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }, 500);

    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full bg-background py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Get Started Today</h2>
          <p className="text-muted-foreground text-center mb-8">
            Fill out the form below and we'll get back to you shortly
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@company.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            <div>
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Company Name"
                required
              />
            </div>

            <div>
              <Label htmlFor="country">Country *</Label>
              <select
                id="country"
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  Select your country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit & Unlock Content"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
