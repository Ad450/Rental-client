import FeatureCard from "./core/components/feature_card";
import FeatureProps from "./core/components/feature_props";
import Header from "./core/components/header";
import { RentalWrapper } from "./core/components/styles/app_styles";


function App() {
  return (
    <div>
      <RentalWrapper>
        <Header></Header>
        <FeatureProps></FeatureProps>
        <FeatureCard></FeatureCard>
      </RentalWrapper>
    </div>
  );
}

export default App;
