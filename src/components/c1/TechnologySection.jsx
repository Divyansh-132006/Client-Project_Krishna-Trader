import FeatureBlock from "./FeatureBlock";
import motorImg from "../../assets/solar/one.png";
import batteryImg from "../../assets/solar/two.png";
import keyImg from "../../assets/solar/three.png";

const TechnologySection = () => {
  return (
    <section className="w-[90%] mx-auto mt-16">
      <h2 className="text-4xl font-bold text-green-700 mb-4">
        TORA ELECTRIC SCOOTER : TECHNOLOGY
      </h2>

      <p className="text-xl text-gray-700 mb-12">
        WE PROVIDE EXCEPTIONAL E-SCOOTERS WITH HI-TECH FEATURES
      </p>

      <FeatureBlock
        title="High Torque BLDC Motor"
        description="E-Scooty with high torque BLDC permanent magnet motor delivers"
        highlight="25% more torque and higher efficiency"
        img={motorImg}
      />

      <FeatureBlock
        title="Long Lasting Lithium Ferrous Phosphate Battery"
        description="Extra long battery life with more than"
        highlight="2000 cycles and advanced BMS system"
        img={batteryImg}
        reverse
      />

      <FeatureBlock
        title="Anti Theft Alarm System"
        description="Now you never need to worry about your NIJ electric scooter being unattended."
        highlight="Built-in advanced protection"
        img={keyImg}
      />
    </section>
  );
};

export default TechnologySection;
