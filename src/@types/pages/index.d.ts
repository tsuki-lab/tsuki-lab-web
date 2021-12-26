
type IndexDataQuery = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: {
        name: string
        title: string
        message: string
      }
      links: {
        name: string
        href: string
      }[]
      contact: {
        name: string
        href: string
      }[]
    }
  }
  allNotion: {
    nodes: NotionNode[]
  }
}

type NotionNode = {
  id: string
  title: string
  properties: {
    development_role: NotionPropertiesValue
    development_type: NotionPropertiesValue
    environments: NotionPropertiesValues
    job_type: NotionPropertiesValue
    member_count: NotionPropertiesValue<number>
    year_label: NotionPropertiesValue
  }
  raw: {
    parent: {
      database_id: string
    }
  }
}

type NotionPropertiesValue<T = { name: string }> = {
  value: T
} | null

type NotionPropertiesValues<T = { name: string }> = {
  value: T[]
} | null