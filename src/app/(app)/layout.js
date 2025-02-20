import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Rightbar from "@/components/Rightbar";

export const metadata = {
  title: "Acadigo | Learn Easily with Expert Resources & Study Materials",
  description:
    "Explore high-quality study materials, previous year question papers, and expert resources for students. Learn smarter with Acadigo.",
  keywords:
    "Acadigo, study materials, previous year question papers, exam preparation, learning resources, PUC question papers",
  author: "Acadigo Team",
  robots: "index, follow",
  openGraph: {
    title: "Acadigo | Learn Easily with Expert Resources & Study Materials",
    description:
      "Access the best study materials and exam resources. Prepare smarter with Acadigo.",
    url: "https://yourwebsite.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className=" p-2 sm:p-6 grid grid-cols-1 sm:grid-cols-[65%_auto]  gap-4 min-h-[88vh]">
        {children}
        <Rightbar />
      </div>

      <Footer />
    </div>
  );
}
