import { motion } from "framer-motion"; // Make sure to npm install framer-motion
import { graphql, Link } from "gatsby";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Project from "../components/Project";
import SideMenu from "../components/SideMenu";
import HeroMesh from "../components/HeroMesh";

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
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Layout>
        <SideMenu />

        <section
          id="intro"
          className="relative min-h-screen w-full overflow-hidden bg-page"
        >
          <HeroMesh />
          <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col px-6 pt-24 text-center md:px-10 md:pt-28">
            <div className="flex flex-1 flex-col justify-center gap-10 py-8 md:gap-12 md:py-12">
              <h1 className="text-3xl font-extralight tracking-tight text-ink md:text-4xl md:tracking-tighter lg:text-5xl">
                Andrea Foo
              </h1>
              <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-ink-muted md:text-lg md:leading-relaxed">
                Product manager with roots in Computer Science and Education. I
                turn messy problems into clear products—balancing what users
                need, what design promises, and what engineering can ship.
              </p>
            </div>

            <motion.div
              className="flex flex-col items-center pb-10 pt-4"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="mb-2 text-sm text-ink-muted">Scroll for more</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-ink-muted"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-10">
        <div id="projects" className="scroll-mt-24">
        <h2 className="text-center text-3xl uppercase leading-relaxed text-ink-muted">
          all projects
        </h2>

        {/* Projects Menu Bar */}
        <div className="mx-auto my-8 max-w-5xl parallax" data-speed="1.5">
          <div className="flex flex-wrap justify-center gap-3">
            {[...projects].reverse().map((project, index) => (
              <Link
                key={index}
                to={`/project${project.node.frontmatter.slug}`}
                className="rounded-lg border border-ink/10 bg-accent-lavender/25 px-4 py-2 text-sm text-ink-muted transition-all duration-300 hover:bg-accent-peach/50 hover:text-ink dark:border-transparent dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-white"
              >
                {project.node.frontmatter.title}
              </Link>
            ))}
          </div>
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
              tags={["Project Management", "User Interview", "Wireframing"]}
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
            to="/about"
            className="mx-auto block w-full py-16 text-center text-2xl text-ink transition-colors hover:text-accent-lavender dark:hover:text-gray-200 parallax"
          >
            Learn more about my experiences →
          </Link>
        </div>
        <Footer />
        </div>
      </Layout>
    </div>
  );
}

export default IndexPage;
