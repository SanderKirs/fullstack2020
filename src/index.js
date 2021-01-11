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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  return(
    <div>
      <p>
        {part1.name} {part1.exercises}
      </p>
    </div>
  )
}
const Part2 = () => {
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  return(
    <div>
      <p>
      {part2.name} {part2.exercises}
      </p>
    </div>
  )
}
const Part3 = () => {
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return(
    <div>
      <p>
      {part3.name} {part3.exercises}
      </p>
    </div>
  )
}

const Content = () => {
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return(
    <div>
      <Part1 part1={part1.name} exercises1={part1.exercises} />
      <Part2 part2={part2.name} exercises2={part2.exercises}/>
      <Part3 part3={part3.name} exercises3={part3.exercises}/>
    </div>
  )
}

const Total = () => {
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return(
    <div>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const [part1, part2, part3] = parts
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name}  part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}  />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}  />

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))