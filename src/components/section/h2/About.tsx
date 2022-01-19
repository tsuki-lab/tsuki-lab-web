import React from 'react'
import { Links, Props as LinksProps } from '@/components/section/h3/Links'
import { Skill, Props as SkillProps } from '@/components/section/h3/Skill'
import authorIcon from '@/images/icon.png';

export type Props = LinksProps & SkillProps & {
  author: {
    name: string
    title: string
    message: string
  }
}

export const About: React.VFC<Props> = ({ skills, links, author }) => {
  return (
    <section>
      <h2>about me</h2>

      <div className="author">
        <img className="author-icon" src={authorIcon} alt=""  width="75" height="75" />
        <div>
          <p className="author-name">{ author.name  }</p>
          <p className="author-title">{ author.title }</p>
        </div>
      </div>

      <p>{ author.message }</p>

      <Skill skills={skills} />

      <Links links={links} />

    </section>
  )
}
