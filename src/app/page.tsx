// pages/index.js
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-gray-800 rounded-2xl p-12 shadow-xl max-w-md w-full">
        <div className="flex items-center justify-center mb-8">
          <Image
            src="/logo.jpg"
            alt="Company Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Website coming soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          We’re currently upgrading our online presence.
        </p>
        <p className="text-lg text-gray-400">
          For any inquiries or business opportunities, please contact us at{" "}
          <a
            href="mailto:swiftxport@gmail.com"
            className="text-blue-400 hover:underline"
          >
            swiftxport@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
