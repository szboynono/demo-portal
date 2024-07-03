import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";

const navigation = [
  { name: "main", href: "", current: true },
  { name: "overview", href: "overview", current: false },
  { name: "faq", href: "faq", current: false },
];

function Resources() {
  return (
    <div className="flex">
      <div>
        <SideNav navigation={navigation} />
      </div>
      <Outlet />
    </div>
  );
}

export default Resources;
