import Background from "@/Components/Background";
import BarGraph from "@/Components/BarGraph";
import Calendar from "@/Components/Calendar";
import Expenditure from "@/Components/Expenditure";
import Header from "@/Components/Header";
import LineGraph from "@/Components/LineGraph";
import PieChart from "@/Components/PieChart";


export default function Home() {
  return (
    <div className="h-screen w-full bg-gray-200 ">
      {/* <div className="h-full w-full absolute bg-gray-200 border z-[1]"></div> */}
      <Header />
      <div className="flex">
        <Calendar />
        <Expenditure />
      </div>
      <BarGraph/>
      <LineGraph/>
      <PieChart/>

    </div>
  )
}
