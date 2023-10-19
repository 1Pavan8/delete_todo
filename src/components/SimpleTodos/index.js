import './index.css'
import {Component} from 'react'
import Todoitem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todolist: initialTodosList}

  delete = id => {
    const {todolist} = this.state
    const finallist = todolist.filter(each => each.id !== id)
    this.setState(() => ({todolist: finallist}))
  }

  render() {
    const {todolist} = this.state
    return (
      <div className="main">
        <div className="subc">
          <h1 className="head">Simple Todos</h1>
          <ul>
            {todolist.map(eachtodo => (
              <Todoitem
                key={eachtodo.id}
                details={eachtodo}
                dlt={this.delete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
