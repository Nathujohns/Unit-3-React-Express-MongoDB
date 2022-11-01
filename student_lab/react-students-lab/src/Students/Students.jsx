import React from 'react'

export default function Students(props) {
  return (
    <div>
        Students{props.name}
         {props.students.map(s=>
            <p key={s.name}>{s.name}<br/>{s.bio}</p>
        )}</div>
  )
}
