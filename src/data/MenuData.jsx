import { FaHome,FaUserAlt ,FaShoppingCart} from "react-icons/fa"

const MenuData =[
    {
        title: "HOME",
        path: "/",
        icon:<FaHome/>
    },
    {
        title: "MEMBER",
        path: "/member",
        icon: <FaUserAlt/>
    },{
        title: "Products",
        path: "/product",
        icon: <FaShoppingCart/>
    },
]

export default MenuData