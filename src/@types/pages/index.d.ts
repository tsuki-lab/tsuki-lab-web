type SiteData = {
  siteMetadata: {
    title: string
    description: string
  }
}

type Profile = {
  author: string
  title: string
  message: string
  links: {
    name: string
    href: string
  }[]
  skill: {
    name: string
  }[]
}

type Year = 2021|2020|2019|2018

type HistoryOfDevelopment = ({
  name: string
  type: '個人制作'
  year: Year
  skill: {
    name: string
  }[]
}|{
  name: string
  type: '業務'
  role: string
  member: number
  year: Year
  skill: {
    name: string
  }[]
}|{
  name: string
  type: '業務'
  year: Year
  member: '個人'
  skill: {
    name: string
  }[]
})

type Contact = {
  name: string
  href: string
}

type IndexDataQuery = {
  site: SiteData
  dataYaml: Profile
  allHistoryOfDevelopmentYaml: {
    nodes: HistoryOfDevelopment[]
  },
  allContactsYaml: {
    nodes: Contact[]
  }
}