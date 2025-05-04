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
    <div className="min-h-screen text-white" style={{ backgroundColor: '#151515' }}>
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
                className="px-3 py-1 bg-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
            {frontmatter.softSkills?.map((skill, index) => (
              <span 
                key={`soft-${index}`}
                className="px-3 py-1 bg-gray-700 rounded-full text-sm"
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
              className={`w-full md:flex-1 md:max-w-[350px] flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group border border-gray-700/30 hover:border-gray-600/30`}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="group-hover:-translate-x-1 transition-transform duration-300 text-gray-400 group-hover:text-white min-w-[20px] md:min-w-[24px] md:w-6 md:h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col gap-0.5 min-w-0 max-w-full">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium whitespace-nowrap">Previous Project</span>
                <span className="text-sm md:text-base text-white font-semibold truncate max-w-[180px] md:max-w-[220px]">{previousProject.title}</span>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block md:flex-1" />
          )}
          
          {nextProject ? (
            <Link 
              to={`/project${nextProject.slug}`} 
              className={`w-full md:flex-1 md:max-w-[350px] flex items-center justify-end gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group border border-gray-700/30 hover:border-gray-600/30`}
            >
              <div className="flex flex-col items-end gap-0.5 min-w-0 max-w-full">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium whitespace-nowrap">Next Project</span>
                <span className="text-sm md:text-base text-white font-semibold truncate max-w-[180px] md:max-w-[220px]">{nextProject.title}</span>
              </div>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="group-hover:translate-x-1 transition-transform duration-300 text-gray-400 group-hover:text-white min-w-[20px] md:min-w-[24px] md:w-6 md:h-6"
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