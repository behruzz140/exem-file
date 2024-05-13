import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CategoryIcon from "@mui/icons-material/Category";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
interface Route {
  path: string;
  content: string;
  icon: React.ReactElement;
}

const routes: Route[] = [
  {
    path: "/main",
    content: "User",
    icon: <PersonIcon />,
  },
  {
    path: "/main/orders",
    content: "Workers",
    icon: <ManageAccountsIcon />,
  },

  {
    path: "/main/service",
    content: "Products",
    icon: <LocalMallIcon />,
  },
  {
    path: "/main/category",
    content: "Category",
    icon: <CategoryIcon />,
  },
];

export default routes;
