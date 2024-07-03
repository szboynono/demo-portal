import { Outlet } from "react-router-dom";
import Tabs from "../components/Tabs";
import SideNav from "../components/SideNav";

const navigation = [{ name: "main", href: "naja", current: true }, { name: "faq", href: "faq", current: false }];

function Detail() {
  return (
    <div className="p-4">
      <h2>NAJA</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis
        blanditiis deserunt, temporibus modi impedit doloremque quia odit
        tempora inventore amet rerum repellat maxime possimus nostrum officiis
        eius veniam! Quam?
      </p>
      <Tabs />
      <div className="flex">
        <div>
        <SideNav navigation={navigation} />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Detail;
