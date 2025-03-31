import CustomerReview from "./components/customer/CustomerReview";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import PlantShop from "./components/OurTopSelling/OurTopSelling";
import OurTrendy from "./components/OurTrendy/OurTrendy";
import OurTrendy2 from "./components/OurTrendy/OurTrendy2";

export default function Home() {
  return (
 <div className="app">
<Hero/>
<OurTrendy/>
<OurTrendy2/>
<PlantShop/>
<CustomerReview/>
<Footer/>
 </div>
  );
}
