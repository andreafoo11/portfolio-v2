import React from "react";
import NumberComponent from "/src/components/NumberComponent";
import TlabFlowchart from "/src/images/t-lab/t-lab1.png";
import TLabMocks from "/src/images/t-lab/t-lab2.png";
import TlabFinal from "/src/images/t-lab/t-lab3.png";
const Tlab = () => {
  return (
    <>
      {/* Introduction Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <div className="space-y-6">
          <p>
            T-Lab Education, an EdTech startup based in Shanghai, China, focused
            on building an educational technology platform for pre-K-12
            students. During my six-month, full-stack software engineering
            internship in 2021, I collaborated with the marketing and operations
            team to optimize the promotional process for the web app.
          </p>
        </div>
      </div>

      {/* Problem Space Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Problem Space</h2>
        <div className="space-y-6">
          <p>
            The marketing and operations team at this pre-launch startup was
            preoccupied with developing and implementing promotional strategies
            for their web app. As the full-stack engineer dedicated their
            efforts to the web app's development, the marketing team focused on
            building product awareness. During my internship at this startup, I
            was granted significant creative freedom by my manager and mentor. I
            collaborated with the marketing team to optimize the promotional
            process for the web app.
          </p>
        </div>
      </div>

      {/* Objective Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Objective</h2>
        <div className="space-y-6">
          <p>
            The goal of this project was to develop a content management system
            that streamlines the marketing team's process of creating landing
            pages for new product promotions and advertisements.
          </p>
        </div>
      </div>

      {/* Design Process Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Design Process</h2>
        <p>There were three phases to this project. </p>
        <div>
          <div className="flex items-center gap-4 mb-8 mt-8">
            <NumberComponent Number="01" Color="#7C8BC3" />
            <h2 className="text-2xl font-bold">User Research</h2>
          </div>
          <p>
            The initial phase of the project involved a deep dive into
            understanding the core issues and requirements of the end-users.
            This was achieved through extensive discussions and interviews with
            key stakeholders from both the marketing and product management
            teams. These insightful interactions enabled the creation of a
            comprehensive flowchart that mapped out the essential needs for the
            content management system.
          </p>
          <br />
          <div className="mx-auto">
            <img
              src={TlabFlowchart}
              alt="Flowchart"
              style={{ width: "500px" }}
              className="h-auto mx-auto block"
            />
          </div>
          <br />
          <p>
            Based on this analysis, three primary areas were identified for
            initial focus:
          </p>
          <div className="flex justify-center items-center gap-4 mb-8 mt-8">
            <div
              className="rounded-lg px-6 py-3"
              style={{ backgroundColor: "#7C8BC3", color: "#232A45" }}
            >
              <h2 className="text-xl font-bold">Banner Management</h2>
            </div>
            <div
              className="rounded-lg px-6 py-3"
              style={{ backgroundColor: "#7C8BC3", color: "#232A45" }}
            >
              <h2 className="text-xl font-bold">Event Management</h2>
            </div>
            <div
              className="rounded-lg px-6 py-3"
              style={{ backgroundColor: "#7C8BC3", color: "#232A45" }}
            >
              <h2 className="text-xl font-bold">Product Introduction</h2>
            </div>
          </div>
          <p>
            These areas were deemed critical for the efficient and effective
            operation of the content management system.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-8 mt-8">
            <NumberComponent Number="02" Color="#7C8BC3" />
            <h2 className="text-2xl font-bold">Solution Prototyping</h2>
          </div>
          <p>
            The subsequent stage involved translating these requirements into
            tangible designs. Using Figma, a collaborative design tool, mockups
            were created to visualize the proposed solutions. These mockups were
            then subjected to multiple rounds of feedback and iteration,
            incorporating valuable insights from users to refine and optimize
            the designs.
          </p>
          <br />
          <div className="mx-auto">
            <img
              src={TLabMocks}
              alt="Flowchart"
              style={{ width: "80%" }}
              className="h-auto mx-auto block"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-8 mt-8">
            <NumberComponent Number="03" Color="#7C8BC3" />
            <h2 className="text-2xl font-bold">Development</h2>
          </div>
          <p>
            This iterative process culminated in the production of final designs
            that were subsequently developed using AngularJS, a robust
            JavaScript framework. The end result was a content management system
            that was tailored to meet the specific needs of the marketing and
            product management teams, streamlining their workflows and enhancing
            their productivity.
          </p>
          <br />
          <img
            src={TlabFinal}
            alt="Final"
            style={{ width: "80%" }}
            className="h-auto mx-auto block"
          />
        </div>
      </div>

      {/* Results Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Results</h2>
        <p>
          The implementation of a new content management system, equipped with
          admin verification, significantly streamlined the operations team's
          workflow. This enhanced system granted the team the autonomy to
          generate diverse landing pages, each with unique content and layouts,
          tailored to meet the specific requirements of their various marketing
          initiatives.
        </p>
        <br />
        <br />
        <p>
          The admin verification feature ensured that all content adhered to
          company standards and guidelines before being published, while the
          flexibility of the content management system empowered the operations
          team to respond rapidly and effectively to evolving marketing demands.
          This solution not only improved the efficiency of content creation but
          also enhanced the overall quality and consistency of the company's
          marketing materials.
        </p>
      </div>

      {/* Takeaways Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Takeaways</h2>
        <p>
          I experienced significant growth as both a programmer and a team
          player throughout this project. Collaboration with software engineers,
          product managers, and the operations team was essential, from design
          to implementation. Clear documentation of my work was crucial to
          ensure a smooth transition for other engineers after my departure.
        </p>
      </div>
    </>
  );
};

export default Tlab;
