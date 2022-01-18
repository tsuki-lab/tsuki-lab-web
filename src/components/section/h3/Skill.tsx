import React from 'react'

export type Props = {
  skills: NotionNode[]
}

export const Skill: React.VFC<Props> = ({ skills }) => {
  return (
    <section>
      <h3>skill</h3>
      <ul className="skill-list">
        { skills.map(skill => (
          <li key={skill.id}>
            { skill.title }
          </li>
        )) }
      </ul>
    </section>
  )
}
