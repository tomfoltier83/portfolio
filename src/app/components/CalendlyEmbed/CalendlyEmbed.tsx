"use client"; // (si tu es dans app/)

import React, { useEffect } from "react";

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget min-w-[320px] h-[600px] md:h-[700px]"
      data-url="https://calendly.com/techpulse-dev/30min?hide_event_type_details=1&hide_gdpr_banner=1"
    />
  );
};

export default CalendlyEmbed;
