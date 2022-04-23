import Chart from "../../Components/charts/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import "./home.css";
import {userData} from "../../dummyData"
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data ={userData} title= "User Analytics" grid dataKey="Active User"/>
    </div>
  );
}

