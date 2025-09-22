import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { COMPANY_INFO } from "../constants/CompanyInfo";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We'll get back to you soon.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen">
      <div className="container">
        <PageTitle title="Contact Us" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center my-20">
          <div>
            <h1 className="lg:text-5xl text-3xl font-semibold">
              We're Always Eager to Hear From You!
            </h1>
            <p className="mt-5 text-secondary">
              Have service-related questions or interested in other
              collaborations? We're here to support your every steps{" "}
            </p>
            <div className="w-full h-0.5 bg-primary-card-light my-10" />
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-semibold">Address</h2>
                <p className="mt-3 ml-3 text-secondary">
                  {COMPANY_INFO.ADDRESS}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Email</h2>
                <p className="mt-3 ml-3 text-secondary">{COMPANY_INFO.EMAIL}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Phone</h2>
                <p className="mt-3 ml-3 text-secondary">
                  {COMPANY_INFO.PHONE.map((phone, index) => (
                    <div key={index}>{phone}</div>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-primary-card border border-primary-border rounded-xl">
            <h2 className="text-3xl font-semibold">
              Fill out the form and we will contact you
            </h2>
            
            {result && (
              <div className={`mt-4 p-3 rounded-lg ${
                result.includes("successfully") 
                  ? "bg-green-100 text-green-700 border border-green-300" 
                  : result.includes("Sending") 
                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                    : "bg-red-100 text-red-700 border border-red-300"
              }`}>
                {result}
              </div>
            )}

            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-5 mt-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter full name"
                    className="p-3 bg-transparent border border-primary-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    className="p-3 bg-transparent border border-primary-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter subject"
                    className="p-3 bg-transparent border border-primary-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter message"
                    className="p-3 bg-transparent border border-primary-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-vertical"
                    rows={5}
                    required
                  ></textarea>
                </div>
                
                {/* Honeypot field for spam protection */}
                <input type="hidden" name="_captcha" value="false" />
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`cursor-pointer py-3 px-8 bg-primary border border-primary-border rounded-lg w-fit transition-all duration-200 ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-primary-dark hover:shadow-md'
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Maps */}
        <div className="w-full h-1/2 bg-primary-card border border-primary-border rounded-2xl mb-20">
          <iframe
            src={COMPANY_INFO.ADDRESS_MAP_IFRAME}
            width="100%"
            height="600px"
            className="rounded-2xl dark:[filter:invert(100%)_contrast(100%)_hue-rotate(180deg)]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
