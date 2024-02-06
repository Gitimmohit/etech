import dynamic from "next/dynamic";
import Link from "next/link";

const AllProducts = dynamic(() => import("./pages/AllProducts"));

const routes = [
  {
    path: "/pages/AllProducts",
    element: <AllProducts />,
  },
];

export {routes}