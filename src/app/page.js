import About from "@/components/pages/HomePage/About";
import Banner from "@/components/pages/HomePage/Banner";
import CustomerSays from "@/components/pages/HomePage/CustomerSays";
import Products from "@/components/pages/HomePage/Products";
import Services from "@/components/pages/HomePage/services/Services";
import Team from "@/components/pages/HomePage/Team";
import WhyChoose from "@/components/pages/HomePage/WhyChoose";

const HomePage = () => {
  return (
    <div className="mt-16 space-y-32">
      <Banner />
      <About />
      <Services />
      <Products />
      <Team />
      <WhyChoose />
      <CustomerSays />
    </div>
  );
};

export default HomePage;
