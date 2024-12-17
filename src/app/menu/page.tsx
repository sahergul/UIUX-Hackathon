import Dessert from "@/components/Dessert";
import Drink from "@/components/Drinks";
import Experience from "@/components/Experience";
import MainCours from "@/components/MainCourse";
import StarterMenu from "@/components/StarterMenu";
import PartnersAndClients from "@/components/PartnerClient";
import Header from "@/components/Header";


export default function Menu() {
  return (

<div className="max-w-screen-2xl mx-auto">
<Header heading="Our Menu" subheading="Menu" />
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}