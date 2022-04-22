import Chart from "../../Components/charts/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import "./home.css"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
}

