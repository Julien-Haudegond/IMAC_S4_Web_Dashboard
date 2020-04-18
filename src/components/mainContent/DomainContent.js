import { h } from 'hyperapp'

export default ({ title, festivals }) => {
  return (
    <div>
      <h1>Domain view: {title}</h1>
      {
        festivals.map(item => <p>{item.name}</p>)
      }
    </div>
  )
}
