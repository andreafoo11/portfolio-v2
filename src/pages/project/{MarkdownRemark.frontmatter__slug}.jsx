import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout';
import * as ProjectComponents from '../../content/js';

export default function ProjectTemplate({ data }) {
  // Add console.log to debug the data
  console.log('Received data:', data);

  if (!data || !data.markdownRemark) {
    console.log('No data or markdownRemark:', data);
    return <div>Loading... (No data found)</div>;
  }

  const { markdownRemark } = data;
  console.log('MarkdownRemark:', markdownRemark);

  const { frontmatter } = markdownRemark || {};
  console.log('Frontmatter:', frontmatter);
  
  if (!frontmatter) {
    return <div>No content found (frontmatter is null)</div>;
  }

  const image = frontmatter.featuredImage?.childImageSharp?.gatsbyImageData 
    ? getImage(frontmatter.featuredImage) 
    : null;
  
  const ProjectComponent = ProjectComponents[frontmatter.component];

  if (!ProjectComponent) {
    console.error(`No component found for "${frontmatter.component}"`);
    return <div>Component not found</div>;
  }

  // Find current project index and determine next/previous
  const allProjects = data.allMarkdownRemark.edges;
  const currentIndex = allProjects.findIndex(
    edge => edge.node.frontmatter.slug === frontmatter.slug
  );
  
  const previousProject = currentIndex > 0 
    ? allProjects[currentIndex - 1].node.frontmatter 
    : allProjects[allProjects.length - 1].node.frontmatter;  // Loop to last project
    
  const nextProject = currentIndex < allProjects.length - 1 
    ? allProjects[currentIndex + 1].node.frontmatter 
    : allProjects[0].node.frontmatter;  // Loop to first project

  return (
    <div className="min-h-screen bg-page text-ink">
      <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Featured Image */}
        {image && (
          <div className="mb-8 max-w-4xl mx-auto">
            <GatsbyImage
              image={image}
              alt={frontmatter.title || ''}
              className="max-h-[550px] w-auto mx-auto rounded-lg object-contain"
            />
          </div>
        )}

        {/* Title and Project Info Section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          {/* Title Section */}
          <h1 className="text-5xl font-bold mb-2">{frontmatter.title}</h1>
          
          {/* Project Info */}
          <div className="mb-4 md:text-right">
            <h2 className="text-xl mb-2">{frontmatter.date}</h2>
            <p className="mb-2">{frontmatter.role}</p>
            <p>{frontmatter.company}</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-wrap gap-2">
            {frontmatter.technicalskills?.map((skill, index) => (
              <span 
                key={`tech-${index}`}
                className="rounded-full bg-accent-lavender/35 px-3 py-1 text-sm text-ink dark:bg-gray-700 dark:text-white"
              >
                {skill}
              </span>
            ))}
            {frontmatter.softSkills?.map((skill, index) => (
              <span 
                key={`soft-${index}`}
                className="rounded-full bg-accent-lavender/35 px-3 py-1 text-sm text-ink dark:bg-gray-700 dark:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Project-specific content */}
        <ProjectComponent data={frontmatter} />
        
        {/* Project Navigation */}
        <div className="max-w-5xl mx-auto mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          {previousProject ? (
            <Link 
              to={`/project${previousProject.slug}`} 
              className={`group flex w-full items-center gap-3 rounded-lg border border-ink/10 bg-accent-peach/25 px-4 py-4 transition-all duration-300 hover:bg-accent-mint/35 dark:border-gray-700/30 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 md:max-w-[350px] md:flex-1 md:gap-4 md:px-6 md:py-5`}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="min-w-[20px] text-ink-muted transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-ink dark:text-gray-400 dark:group-hover:text-white md:h-6 md:min-w-[24px] md:w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col gap-0.5 min-w-0 max-w-full">
                <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-ink-muted dark:text-gray-400">Previous Project</span>
                <span className="max-w-[180px] truncate text-sm font-semibold text-ink dark:text-white md:max-w-[220px] md:text-base">{previousProject.title}</span>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block md:flex-1" />
          )}
          
          {nextProject ? (
            <Link 
              to={`/project${nextProject.slug}`} 
              className={`group flex w-full items-center justify-end gap-3 rounded-lg border border-ink/10 bg-accent-peach/25 px-4 py-4 transition-all duration-300 hover:bg-accent-mint/35 dark:border-gray-700/30 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 md:max-w-[350px] md:flex-1 md:gap-4 md:px-6 md:py-5`}
            >
              <div className="flex flex-col items-end gap-0.5 min-w-0 max-w-full">
                <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-ink-muted dark:text-gray-400">Next Project</span>
                <span className="max-w-[180px] truncate text-sm font-semibold text-ink dark:text-white md:max-w-[220px] md:text-base">{nextProject.title}</span>
              </div>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="min-w-[20px] text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink dark:text-gray-400 dark:group-hover:text-white md:h-6 md:min-w-[24px] md:w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ) : (
            <div className="hidden md:block md:flex-1" />
          )}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        slug
        title
        date
        role
        technicalskills
        softSkills
        company
        showInProjects
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        component
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { showInProjects: { eq: true } } }
      sort: { fields: [frontmatter___orderID], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`