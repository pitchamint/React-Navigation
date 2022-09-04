import {Link} from "react-router-dom"
import { FaBars,FaWindowClose } from "react-icons/fa"
import { useState } from "react"
import './Navigation.css'
import MenuData from "../data/MenuData"
//ในตอนแรกที่เราจะทำการลิ้งเหมือนกับ tag a ใน html เราต้องติดตั้ง React router dom ก่อน
//คำสั่ง npm install react-router-dom@5.3.0

const Navigation = () =>{
    //สรา้ง state ในการซ่อนแสดง nav ใช้ boolean ในการเปิดปิดเมนู
    const [showMenu,setShowMenu] = useState(false) //ปิด nav ในตอนเริ่มต้น
    //สร้างฟังก์ชั่น เพื่อที่จะเปลี่ยนแปลงค่า setShowMenu
    const toggleMenu = ()=> setShowMenu(!showMenu) //ให้การเปลี่ยนแปลงค่า เป็น ไม่ false ค่าก็จะเป็นจริง
    
    return(
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to="#" className="menu-bar">
                        <FaBars onClick={toggleMenu}/>
                    </Link>
                </div>
            </div>
            <nav className={showMenu ? "nav-menu active" : "nav-menu"}> 
            {/* ความหมายคือถ้า showเมนูเป็นจริงเปิด nav เท็จปิด nav */}
                <ul className="nav-menu-item" onClick={toggleMenu}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bar">
                            <FaWindowClose/>
                        </Link>
                    </li>
                     {/* เข้าถึงเมนูในอาร์เรย์ */}
                     {MenuData.map((menu,index)=>{
                        return(
                            <li className="menu-text" key={index}>
                                 <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                            </li>
                        )
                     })}

                </ul>
            </nav>
        </aside>
    )
}

export default Navigation