import FeatureCard from "./core/components/feature_card";
import Features from "./core/components/features";
import Footer from "./core/components/footer";
import Header from "./core/components/header";
import { RentalWrapper } from "./core/components/styles/app_styles";


function App() {
  return (
    <div>
      <RentalWrapper>
        <Header></Header>
        <Features></Features>
        <FeatureCard></FeatureCard>
        <Footer></Footer>
      </RentalWrapper>
    </div>
  );
}

export default App;
