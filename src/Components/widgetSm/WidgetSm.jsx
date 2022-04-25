import { Visibility } from "@mui/icons-material"
import "./widgetSm.css"

export default function WidgetSm() {
  return (
    <div className="widgetSm"> 
    <span className="widgetSmTitle">New Join Members</span>
    <ul className="widgetSmList">
      <li className="widgetSmListItem">
        <img src="./Image/Image3.jpeg" alt="" className="widgetSmImg" />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Olufemi Oluyomi</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon"/>
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src="./Image/Picture3.jpeg" alt="" className="widgetSmImg" />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Yomi Femi</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon"/>
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src="./Image/Image3.jpeg" alt="" className="widgetSmImg" />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Olufemi Oluyomi</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon"/>
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src="./Image/Image3.jpeg" alt="" className="widgetSmImg" />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Olufemi Oluyomi</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon"/>
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src="./Image/Image3.jpeg" alt="" className="widgetSmImg" />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Olufemi Oluyomi</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon"/>
          Display
        </button>
      </li>
    </ul>
    </div>
  )
}
 