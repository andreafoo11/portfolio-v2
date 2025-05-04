import { motion } from "framer-motion"; // Make sure to npm install framer-motion
import { graphql, Link } from "gatsby";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Intro from "../components/intro";
import Layout from "../components/Layout";
import Project from "../components/Project";
import SideMenu from "../components/SideMenu";
import SplineScene from "../components/SplineScene";
export const query = graphql`
  query {
    weBelongImage: file(relativePath: { eq: "WeBelong/weBelongHeader.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mindOverMediaImage: file(
      relativePath: { eq: "mindOverMedia/thumbnail.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    basilImage: file(relativePath: { eq: "basil/basil1.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    tlabImage: file(relativePath: { eq: "t-lab/educms3.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    scaImage: file(relativePath: { eq: "supplyCrunchAllocation/sca2.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    modeloRelaunchImage: file(
      relativePath: { eq: "modeloRelaunch/modeloHeaderImg.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    modeloB2CImage: file(relativePath: { eq: "modelob2c/cover.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    modeloGrowthImage: file(relativePath: { eq: "modeloGrowth/process3.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { showInProjects: { eq: true } } }
      sort: { frontmatter: { orderID: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            orderID
          }
        }
      }
    }
  }
`;

function IndexPage({ data }) {
  console.log("Image data:", data);

  const projects = data.allMarkdownRemark.edges;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate mouse position as percentage (-50 to 50)
      const xPercentage = (clientX / innerWidth - 0.5) * 100;
      const yPercentage = (clientY / innerHeight - 0.5) * 100;

      // Select all elements with parallax class
      const elements = document.querySelectorAll(".parallax");

      elements.forEach((element) => {
        // Get speed multiplier from data attribute (or default to 1)
        const speed = element.dataset.speed || 1;

        // Calculate movement (smaller speed = more movement)
        const x = xPercentage * speed * 0.1;
        const y = yPercentage * speed * 0.1;

        // Apply transform
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen text-white pt-16 flex flex-col"
      style={{ backgroundColor: "#151515" }}
    >
      <Layout>
        <SideMenu />

        <div id="intro" className="relative h-[80vh]">
          <SplineScene />
        </div>
        <motion.div
          className="flex flex-col items-center mb-12 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p className="text-sm mb-2">Scroll for more</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
        <br />
        <br />
        <Intro />
        <br />
        <br />
        <h2 className="text-3xl leading-relaxed text-gray-300 uppercase text-center">
          all projects
        </h2>

        {/* Projects Menu Bar */}
        <div className="max-w-5xl mx-auto my-8 parallax" data-speed="1.5">
          <div className="flex flex-wrap justify-center gap-3">
            {[...projects].reverse().map((project, index) => (
              <Link
                key={index}
                to={`/project${project.node.frontmatter.slug}`}
                className="px-4 py-2 rounded-lg text-sm transition-all duration-300 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
              >
                {project.node.frontmatter.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Existing Projects Grid */}
        <div className="-space-y-24">
          <div id="modelo-relaunch">
            <Project
              imageSrc={data.modeloRelaunchImage}
              imageAlt="Modelo Relaunch Thumbnail"
              title={
                <div className="flex flex-col text-left">
                  <span>Modelo 2.0</span>
                  <span>Relaunch</span>
                </div>
              }
              number="01"
              description="Product revamp to improve user experience and relaunch to gain traction."
              tags={["Figma", "User Research", "Prototyping"]}
              inverted={false}
              slug="modelo-relaunch"
            />
          </div>
          <div id="modelo-b2c" className="-mt-24">
            <Project
              imageSrc={data.modeloB2CImage}
              imageAlt="Modelo B2B to B2C Thumbnail"
              title={
                <div className="flex flex-col text-left">
                  <span>Modelo 2.0</span>
                  <span>B2B to B2C</span>
                </div>
              }
              number="02"
              description="Product transformation from B2B to B2C strategy."
              tags={["Figma", "User Interview", "Prototyping"]}
              inverted={true}
              slug="modelo-b2b-to-b2c"
            />
          </div>
          <div id="modelo-growth" className="-mt-24">
            <Project
              imageSrc={data.modeloGrowthImage}
              imageAlt="Modelo Growth Hacking Thumbnail"
              title={
                <div className="flex flex-col text-left">
                  <span>Modelo 2.0</span>
                  <span>Growth Hacking</span>
                </div>
              }
              number="03"
              description="Growth hacking phase with the primary goals of user acquisition and growth"
              tags={["Figma", "User Interview", "Prototyping"]}
              inverted={false}
              slug="modelo-growth-hacking"
            />
          </div>
          <div id="we-belong">
            <Project
              imageSrc={data.weBelongImage}
              imageAlt="We Belong Project Thumbnail"
              title="We Belong"
              number="04"
              description="A community-driven platform that connects people through shared interests and meaningful conversations."
              tags={["Figma", "User Research", "Prototyping"]}
              inverted={true}
              slug="we-belong"
            />
          </div>

          <div id="basil">
            <Project
              imageSrc={data.basilImage}
              imageAlt="Basil Thumbnail"
              title="Basil App"
              number="05"
              description="A family recipe sharing app where people are able to upload personal recipes and share with friends and family."
              tags={["Project Management", "Uesr Interview", "Wireframing"]}
              inverted={false}
              slug="basil"
            />
          </div>
          <div id="t-lab">
            <Project
              imageSrc={data.tlabImage}
              imageAlt="T-lab Thumbnail"
              title="T-Lab Education"
              number="06"
              description="A Content Management System for teams to manage promotion websites."
              tags={["AngularJS", "Postman", "Remote Work"]}
              inverted={true}
              slug="t-lab"
            />
          </div>
          <div id="sca">
            <Project
              imageSrc={data.scaImage}
              imageAlt="SCA Microservice Thumbnail"
              title="SCA Microservice"
              number="07"
              description="A new microservice to improve the supply allocation process for Grab's Transportation service."
              tags={["GoLang", "Postman", "Github"]}
              inverted={false}
              slug="sca-microservice"
            />
          </div>
          <Link
            href="/about"
            className="text-2xl text-center py-16 block mx-auto w-full parallax"
            data-speed="3"
          >
            Learn more about my experiences →
          </Link>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default IndexPage;
