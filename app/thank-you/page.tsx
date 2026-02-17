import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-12 text-center shadow-2xl">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Message Received!
        </h1>
        <p className="text-slate-600 mb-10">
          Thank you for reaching out to Tinacon Limited. One of our project
          specialists will contact you shortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
