import FooterSection from "./Footer";
import Navbar from "./Navbar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <FooterSection />
    </div>
  );
}
