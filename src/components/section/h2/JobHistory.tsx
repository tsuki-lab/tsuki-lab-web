import React from 'react'

type Props = {
  jobHistories: NotionNode[]
}

export const JobHistory: React.VFC<Props> = ({ jobHistories }) => {

  const jobHistory = jobHistories.reduce((acc, crr) => {
    if (!crr.properties.year_label) return acc
    if (acc[crr.properties.year_label.value.name]) {
      acc[crr.properties.year_label.value.name].push(crr)
    } else {
      acc[crr.properties.year_label.value.name] = [crr]
    }
    return acc
  }, {} as Record<string, NotionNode[]>)

  const jobHistoryYears = Object.keys(jobHistory).sort((a, b) => Number(a) > Number(b) ? -1 : 1)

  const parseJobHistory = (notion: NotionNode) => {
    let str = ''
    if (notion.properties.job_type) {
      str += notion.properties.job_type.value.name
    }

    if (notion.properties.member_count) {
      str += ` / ${notion.properties.member_count.value}人`
    }

    if (notion.properties.development_role) {
      str += ` / ${notion.properties.development_role.value.name}`
    }

    return str
  }
  return (
    <section>
      <h2>Job history</h2>
      { jobHistoryYears.map(year => (
        <>
          <h3>{ year }</h3>
          <ul>
            { jobHistory[year].map(value => (
              <li key={value.id}>
                <dl>
                  <dt>{ value.title }</dt>
                  <dd>{ parseJobHistory(value) }</dd>
                  <dd>{ value.properties.environments?.value.sort().map(v => v.name).join(', ') }</dd>
                </dl>
              </li>
            )) }
          </ul>
        </>
      )) }
    </section>
  )
}
