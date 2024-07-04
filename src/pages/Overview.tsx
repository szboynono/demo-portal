import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const navigation = [
  { name: "main", href: "main", current: true },
  { name: "faq", href: "faq", current: false },
];

function Overview() {
  return (
    <div className="flex">
      <div>
        <SideNav navigation={navigation} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Overview;
