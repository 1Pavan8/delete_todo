// Write your code here
import './index.css'

const Todoitem = props => {
  const {details, dlt} = props
  const {id, title} = details

  const deltodo = () => {
    dlt(id)
  }
  return (
    <li className="itemrow">
      <p>{title}</p>
      <button type="button" className="btn" onClick={deltodo}>
        Delete
      </button>
    </li>
  )
}

export default Todoitem
