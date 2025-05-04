exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      html: String
    }
    type Frontmatter {
      slug: String!
      date: String!
      title: String!
      role: String!
      technicalskills: [String]
      softSkills: [String]
      company: String
      showInProjects: Boolean
      featuredImage: File @fileByRelativePath
      component: String!  # Name of the React component to use
    }
  `
  createTypes(typeDefs)
} 