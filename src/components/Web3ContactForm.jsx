import React, { useState } from "react";

/**
 * Web3ContactForm Component
 * 
 * To use this:
 * 1. Get your Access Key from https://web3forms.com/
 * 2. Pass it as the `accessKey` prop.
 * 3. You can customize the `formName` to track where the submission came from.
 */
const Web3ContactForm = ({ 
  accessKey, 
  formName = "General Contact Form",
  onSuccess,
  onError,
  className = ""
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.target);
    // These fields are required by Web3Forms
    formData.append("access_key", accessKey);
    formData.append("from_name", "Buzziwah Website");
    formData.append("subject", `New Lead from ${formName}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        if (onSuccess) onSuccess(data);
        e.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        if (onError) onError(data);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong!");
      if (onError) onError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-6">
        <div className="cyber-input-wrap">
          <input required type="text" name="name" placeholder=" " className="cyber-input" />
          <label className="cyber-input-label">Your Name *</label>
          <div className="cyber-input-line" />
        </div>

        <div className="cyber-input-wrap">
          <input required type="email" name="email" placeholder=" " className="cyber-input" />
          <label className="cyber-input-label">Email Address *</label>
          <div className="cyber-input-line" />
        </div>

        <div className="cyber-input-wrap">
          <textarea required rows={4} name="message" placeholder=" " className="cyber-input" style={{ resize: "none" }} />
          <label className="cyber-input-label">Tell us about your project *</label>
          <div className="cyber-input-line" />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-btn w-full justify-center disabled:opacity-50"
          style={{
            background: 'linear-gradient(135deg, #adfa3b, #83cd15)',
            color: '#000',
            padding: '16px',
            borderRadius: '12px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {isSubmitting ? "Processing..." : "Submit Proposal"}
        </button>
        
        {result && (
          <p className={`text-xs mt-4 text-center ${result.includes("Successfully") ? "text-[#adfa3b]" : "text-red-500"}`}>
            {result}
          </p>
        )}
      </div>
    </form>
  );
};

export default Web3ContactForm;
