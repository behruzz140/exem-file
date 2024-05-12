import React from 'react';
// import { Dashboard, Orders } from "@pages";
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import CategoryIcon from '@mui/icons-material/Category';
interface Route {
    path: string;
    content: string;
    icon: React.ReactElement;
}

const routes: Route[] = [
    {
        path: "/main",
        content: "Workers",
        icon: <PersonIcon/>
    },
    {
        path: "/main/service",
        content: "Products",
        icon: <LocalMallIcon />
    },
    {
        path: "/main/orders",
        content: "Orders",
        icon: <TurnedInNotIcon />
    },
   
    {
        path: "/main/category",
        content: "Category",
        icon: <CategoryIcon />
    },

];
    
export default routes;
