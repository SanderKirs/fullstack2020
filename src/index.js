import React from 'react'
import ReactDOM from 'react-dom'


const Header = () => {
  const course = 'Half Stack application development'
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part1 = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  return(
    <div>
      <p>
        {part1} {exercises1}
      </p>
    </div>
  )
}
const Part2 = () => {
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  return(
    <div>
      <p>
        {part2} {exercises2}
      </p>
    </div>
  )
}
const Part3 = () => {
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
      <Part1 part1={part1} exercises1={exercises1} />
      <Part2 part2={part2} exercises2={exercises2}/>
      <Part3 part3={part3} exercises3={exercises3}/>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return(
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1}  part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}  />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}  />

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))