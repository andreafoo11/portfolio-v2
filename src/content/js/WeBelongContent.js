import React from "react";
import NumberComponent from "/src/components/NumberComponent";
import WebelongDesignProcess1 from "/src/images/WeBelong/designProcessImg1.png";
import WebelongDesignProcess2 from "/src/images/WeBelong/designProcessImg2.png";
import WebelongDesignProcess3 from "/src/images/WeBelong/designProcessImg3.png";
import WebelongDesignProcess4 from "/src/images/WeBelong/designProcessImg4.png";
import WebelongDesignProcess5 from "/src/images/WeBelong/designProcessImg5.png";
import WebelongDesignProcess6 from "/src/images/WeBelong/designProcessImg6.png";
import WeBelongPSIcon1 from "/src/images/WeBelong/ps_icon1.png";
import WeBelongPSIcon2 from "/src/images/WeBelong/ps_icon2.png";
import WeBelongPSIcon3 from "/src/images/WeBelong/ps_icon3.png";

const ProblemSpaceDetails = ({ icon, heading, description }) => {
  return (
    <div
      className="flex flex-col items-start gap-4"
      style={{ width: "200px", minWidth: "180px" }}
    >
      <img src={icon} alt={heading} className="w-12 h-12" />
      <h3 className="text-lg font-bold">{heading}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const DesignProcessDetails = ({
  Number,
  Title,
  DesignProcessImage1,
  DesignProcessImage2,
  UserFeedback,
}) => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8 mt-8">
        <NumberComponent Number={Number} Color="#F7DBFC" />
        <h2 className="text-2xl font-bold">{Title}</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <img
          src={DesignProcessImage1}
          alt="WeBelong Design Process 1"
          style={{ width: "auto", height: "400px" }}
          className="mx-auto"
        />
        <img
          src={DesignProcessImage2}
          alt="WeBelong Design Process 2"
          style={{ width: "auto", height: "400px" }}
          className="mx-auto"
        />
      </div>
      <div
        className="flex flex-col justify-center mx-auto p-4 rounded-lg relative z-10"
        style={{
          backgroundColor: "#F7DBFC",
          color: "#A99898",
          width: "70%",
          marginTop: "-60px",
        }}
      >
        <h2 className="text-2xl font-bold">User Feedback</h2>
        <p>{UserFeedback}</p>
      </div>
    </div>
  );
};

const WeBelongProject = ({ data }) => {
  return (
    <>
      {/* Introduction Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        {/* ... existing code ... */}
      </div>

      {/* Problem Space Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Problem Space</h2>
        <div className="space-y-6">
          <p>
            From school to workplace, Asian women in STEM face many barriers
            including lack of support, confidence, and sense of belonging. 
          </p>
          <br />
          <p>This can be seen in:</p>
          <div className="flex flex-wrap gap-16 justify-center">
            <ProblemSpaceDetails
              icon={WeBelongPSIcon1}
              heading="Gender gap in STEM starts in   School"
              description="Many girls in Asia encounter psychological, familial, and pedagogical barriers in engaging with STEM subjects."
            />
            <ProblemSpaceDetails
              icon={WeBelongPSIcon2}
              heading="Glass ceiling for Asian women in STEM leadership"
              description="Asian women are the least likely to get promoted to managerial positions
1 in 285 Asian women in Silicon valley was an executive (compared to 1 in 123 white women and 1 in 87 white men). "
            />
            <ProblemSpaceDetails
              icon={WeBelongPSIcon3}
              heading="Amplified barriers resulting from intersectionality of identities"
              description="Alfred et al. (2019) found that the intersectionalities between STEM, gender, and race amplify barriers for Asian women."
            />
          </div>
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
            We want to promote high school East Asian girls' shared identities
            with female role models in the STEM industry to enhance their sense
            of belonging. Ultimately, we hope to encourage them to meaningfully
            engage with advanced STEM courses and career-related opportunities
            in the male-dominated STEM space. 
          </p>
        </div>
      </div>

      {/* Design Process Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Design Process</h2>
        <div className="space-y-6">
          <p>
            To achieve our goal, we went through several iterations and user
            testing to refine our ideas.
          </p>
        </div>

        <DesignProcessDetails
          Number="01"
          Title="Initial Idea Generation and First MVP"
          DesignProcessImage1={WebelongDesignProcess1}
          DesignProcessImage2={WebelongDesignProcess2}
          UserFeedback="Mentors may be unresponsive in chats and that may lead to negative impact on students."
        />

        <DesignProcessDetails
          Number="02"
          Title="Version 2: Second MVP"
          DesignProcessImage1={WebelongDesignProcess3}
          DesignProcessImage2={WebelongDesignProcess4}
          UserFeedback="Users like the videos idea and the ability to post how they feel and gain a community of support"
        />

        <DesignProcessDetails
          Number="03"
          Title="Version 3: Wireframe on Figma"
          DesignProcessImage1={WebelongDesignProcess5}
          DesignProcessImage2={WebelongDesignProcess6}
          UserFeedback=" Experts in the industries may not feel comfortable posting videos, having other ways to show representation in the industry would be helpful"
        />
      </div>

      {/* Results Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Results</h2>
        <div className="space-y-6">
          <p>
            After numerous iterations and refinements, we successfully developed
            a Minimum Viable Product (MVP). The MVP is an app that allows users
            to share career advice, connect with career-forward women, and watch
            videos that allow for career exploration.This MVP was then subjected
            to rigorous testing with a select group of potential users, allowing
            us to gather valuable feedback and insights.
          </p>
          <div className="flex justify-center my-12">
            <div
              className="relative w-full max-w-3xl"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                src="https://embed.figma.com/proto/DRmsMtpdKAUMIzS66cT20t/Impact-by-Design-Prototyping?node-id=289-4608&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=289%3A4608&embed-host=share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Takeaways Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Takeaways</h2>
        <div className="space-y-6">
          <p>
            This project enhanced my user testing and research skills. Its focus
            on impact challenged me to prioritize user needs and comprehensive
            research before ideation, a shift from my solution-focused
            engineering background. This experience highlighted the importance
            of user-centric design and taught me valuable technical skills like
            Figma and video creation.
          </p>
        </div>
      </div>
    </>
  );
};

export default WeBelongProject;
