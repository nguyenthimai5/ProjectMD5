import "./button.scss"

const Button = ({ type }) => {
  return <button className={"buttonWidgetLg " + type}>{type}</button>
}

export default Button
