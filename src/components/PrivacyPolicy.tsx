import React from "react";
import { ShieldCheck, LockKeyhole, EyeOff, Globe, AlertTriangle, Info } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="PrivacyPolicy" className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Commitment to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
              Data Privacy
            </span>
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            We take your trust seriously. Here's how we collect, use, and protect your information.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section Block Template */}
          {[
            {
              icon: LockKeyhole,
              title: "1. Information We Collect",
              content: [
                "Personal Identification Information (e.g., name, email address, phone number)",
                "Technical Data (e.g., IP address, browser type, device information)",
                "Usage Data (e.g., pages visited, links clicked, time spent on site)",
              ],
            },
            {
              icon: Globe,
              title: "2. How We Use Your Information",
              content: [
                "Provide and maintain our services",
                "Improve our website and user experience",
                "Respond to inquiries and support requests",
                "Send newsletters or promotional content (if opted-in)",
              ],
            },
            {
              icon: EyeOff,
              title: "3. Sharing Your Information",
              content: [
                "We never sell your data.",
                "We may share it with trusted service providers as needed (e.g., hosting, analytics).",
                "Legal compliance or fraud prevention may also require sharing.",
              ],
            },
            {
              icon: ShieldCheck,
              title: "4. Cookies & Tracking",
              content: [
                "We use cookies to enhance your experience and analyze site traffic.",
                "You can control cookies via your browser settings.",
              ],
            },
            {
              icon: LockKeyhole,
              title: "5. Data Security",
              content: [
                "We implement technical and organizational safeguards.",
                "Your data is protected against unauthorized access or disclosure.",
              ],
            },
            {
              icon: AlertTriangle,
              title: "6. Your Rights",
              content: [
                "Access, update, or delete your personal information.",
                "Withdraw consent for data processing (if applicable).",
                "File a complaint with your local data authority.",
              ],
            },
            {
              icon: Globe,
              title: "7. Third-Party Links",
              content: [
                "Our site may link to external websites.",
                "We’re not responsible for their privacy practices.",
              ],
            },
            {
              icon: Info,
              title: "8. Policy Updates",
              content: [
                "This policy may be updated periodically.",
                "Any changes will appear here with a new effective date.",
              ],
            },
            {
              icon: ShieldCheck,
              title: "9. Contact Us",
              content: [
                "Email: privacy@radiantech.com",
                "Address: RadianTech HQ, 123 Innovation Drive, Tech City, Country",
              ],
            },
          ].map(({ icon: Icon, title, content }, idx) => (
            <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center mb-4 space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-xl">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
              <ul className="list-disc list-inside text-blue-100 space-y-2 pl-2">
                {content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm text-blue-300 text-center mt-16">
          Effective Date: July 12, 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
