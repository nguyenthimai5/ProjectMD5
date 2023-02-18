import "./topbar.scss"
import { NotificationsNone, Language, Settings } from "@mui/icons-material/"

const Topbar = () => {
  return (
    <div className="topbarComponent">
      <div className="wrapper" >
        <div className="left" >
          <span>Drinks</span>
        </div>
        <div className="right">
          <div className="icon">
            <NotificationsNone />
            <span>2</span>
          </div>
          <div className="icon">
            <Language />
            <span>2</span>
          </div>
          <div className="icon">
            <Settings />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Topbar
