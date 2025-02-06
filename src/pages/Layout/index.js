import { TabBar } from "antd-mobile"
import { useEffect } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getBillList } from "@/store/modules/billStore"
import './index.scss'
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline
} from 'antd-mobile-icons'

//Bottom menu bar
const tabs = [
  {
    key: '/month',
    title: 'Monthly bill',
    icon: <BillOutline />,
  },
  {
    key: '/new',
    title: 'Entry',
    icon: <AddCircleOutline />,
  },
  {
    key: '/year',
    title: 'Annual bill',
    icon: <CalculatorOutline />,
  },
]

const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillList());

    //define updateViewport function to set the window size the same as mobile
    const updateViewport = () => {
      const metaViewport = document.querySelector('meta[name="viewport"]');

      if (window.innerWidth > 768) { 
        metaViewport?.setAttribute("content", "width=375, initial-scale=1");
      } else {
        metaViewport?.setAttribute("content", "width=device-width, initial-scale=1");
      }
    };

    updateViewport(); 
    window.addEventListener("resize", updateViewport); 

    return () => {
      window.removeEventListener("resize", updateViewport); 
    };
  }, [dispatch]); 

  //Route switch and tab bar activation
  const navigate = useNavigate()
  const location = useLocation()
  const currentTab = location.pathname
  const switchRoute = (path) =>{
    navigate(path)
  }
  return (
    <div className="layout">
      <div className="container">
        <Outlet />
      </div>
      {/* Render the bottom menu bar */}
      <div className="footer">
        <TabBar activeKey={currentTab} onChange={switchRoute}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}


export default Layout