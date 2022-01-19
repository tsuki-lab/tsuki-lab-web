import React from 'react'

export type Props = {
  links: {
    name: string
    href: string
  }[]
}

export const Links: React.VFC<Props> = ({ links }) => {
  return (
    <section>
      <h3>links</h3>
      <ul className="sns-list">
        { links.map((link, i) => (
          <li key={i}>
            <a href={link?.href} target="_blank" rel="noopener">
              { link?.name }
            </a>
          </li>
        )) }
      </ul>
    </section>
  )
}
