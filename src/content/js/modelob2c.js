import React from "react";
import IconHeaderDescription from "/src/components/icon-header-description";
import IconHeader from "/src/components/IconHeader";
import NumberComponent from "/src/components/NumberComponent";
import objective1 from "/src/images/modelob2c/objective1.png";
import objective2 from "/src/images/modelob2c/objective2.png";
import objective3 from "/src/images/modelob2c/objective3.png";
import onboarding1 from "/src/images/modelob2c/onboarding.png";
import onboarding2 from "/src/images/modelob2c/onboarding2.png";
import process1 from "/src/images/modelob2c/process1.1.png";
import process2 from "/src/images/modelob2c/process1.2.png";
import results1 from "/src/images/modelob2c/results2.1.png";
import results3_1 from "/src/images/modelob2c/results3.1.png";
import results3_2 from "/src/images/modelob2c/results3.2.png";
import takeaway1 from "/src/images/modelob2c/takeaway1.png";
import takeaway2 from "/src/images/modelob2c/takeaways2.png";
import takeaway3 from "/src/images/modelob2c/takeaways3.png";

const ModeloB2C = () => {
  return (
    <>
      {/* Introduction Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "80px", marginBottom: "60px" }}
      >
        <div className="space-y-6">
          <p>
            Modelo is a 3D model viewing software that allows users to easily
            view their 3D models of any different formats online and share with
            other people without the need for bulky software like Revit. 
          </p>
        </div>
      </div>

      {/* Problem Space Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Problem Space</h2>
        <div className="space-y-6">
          <p>
            While we achieved significant growth after the Modelo 2.0 relaunch
            phase, reaching approximately
            <span style={{ color: "#F75223" }}>1500 active users per week</span>
            , we encountered a persistent challenge with{" "}
            <span style={{ color: "#F75223" }}>
              low user retention rates (between 3-7%).
            </span>{" "}
            A key factor contributing to this low retention rate was identified
            as the product's origin as a B2B offering. A B2B offering with a
            Product Led Growth Strategy simply did not make sense. Not only was
            our product too complicated for simple consumers, it was also
            slightly above a normal price point a consumer would be willing to
            pay.
          </p>
        </div>
      </div>

      {/* Objective Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "60px", marginBottom: "60px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Objective</h2>
        <div className="space-y-6">
          <p>
            With that problem in mind, we decided to lead a product
            transformation – transforming our product from a B2B to a B2C
            model. 
          </p>
          <br />
          <p>The transformation can be broken down into three parts:</p>
        </div>
        <div className="flex flex-row gap-8 justify-center">
          <IconHeader
            icon={objective1}
            description="Improved Workspace Experience"
          />
          <IconHeader
            icon={objective2}
            description="Enhanced New User Onboarding"
          />
          <IconHeader
            icon={objective3}
            description="Pricing and Revenue Model Revisions "
          />
        </div>
      </div>

      {/* Improve Workspace User Interface Process+results Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <div className="flex items-center gap-4 mb-8 mt-8">
          <NumberComponent Number="01" Color="#F75223" />
          <h2 className="text-3xl font-bold">
            Improved Workspace User Interface
          </h2>
        </div>
        <h2 className="text-2xl font-bold mb-8">Design Process</h2>
        <p>
          Enterprise clients previously received training and guidance on
          navigating and utilizing specific features within Modelo. However,
          user feedback highlighted difficulties in navigation and understanding
          the product, leading to frustration and abandonment. 
        </p>
        <br />
        <p>
          It was crucial to address these usability issues, as continued growth
          without doing so would result in significant user churn. This resulted
          in a focus in transforming and improving the workspace user
          interface. 
        </p>
        <div className="flex flex-row gap-8 justify-center items-center mt-8">
          <h2 className="text-2xl font-bold">Before</h2>
          <img
            src={process1}
            alt="Process 1"
            style={{
              width: "40vw",
              maxWidth: "500px",
            }}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-row gap-8 justify-center items-center mt-8">
          <img
            src={process2}
            alt="Process 2"
            style={{
              width: "40vw",
              maxWidth: "500px",
            }}
            className="rounded-lg"
          />
          <h2 className="text-2xl font-bold">After</h2>
        </div>
        <p className="mt-8">
          The workspace user interface underwent a significant redesign, with a
          strong focus on improving both navigability and ease of use. I
          collaborated closely with the UI Designer throughout the development
          process to ensure that the new interface was intuitive and efficient.
        </p>

        <h2 className="text-2xl font-bold mb-8 mt-8">Results</h2>
        <p>
          Results of all the action items taken above was optimal. Metrics on{" "}
          <span style={{ color: "#F75223" }}>
            usage of the product and conversion rates improved greatly
          </span>
          : 
        </p>
        <div className="flex flex-row gap-16 justify-center items-center mt-8">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">17%</h2>
            <p className="text-center">
              highest{" "}
              <span style={{ color: "#F75223" }}>
                {" "}
                week on week user retention
              </span>{" "}
              after revamping the entire workspace
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">25%→93%</h2>
            <p className="text-center">
              <span style={{ color: "#F75223" }}>conversion</span> rate increase
              of workspace to model viewing
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">57.1%</h2>
            <p className="text-center">
              new user onboarding{" "}
              <span style={{ color: "#F75223" }}>completion rate</span>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced New User Onboarding Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <div className="flex items-center gap-4 mb-8 mt-8">
          <NumberComponent Number="02" Color="#F75223" />
          <h2 className="text-3xl font-bold">Enhanced New User Onboarding</h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8">Design Process</h2>
          <p>
            The revamped onboarding experience was meticulously crafted to
            expedite users' comprehension of the product's core value
            proposition: the ability to effortlessly upload and interact with
            their own 3D models. <br />
            <br />
            This was achieved through the implementation of two key elements:
          </p>
          <div className="flex flex-row gap-8 justify-center items-center mt-8">
            <img src={onboarding1} alt="Onboarding 1" className="rounded-lg" />
            <div className="flex flex-col gap-8 justify-center mt-8">
              <h2 className="text-2xl font-bold">Onboarding Questionnaire</h2>
              <p>
                This interactive questionnaire was designed to glean valuable
                insights about new users, including their specific industry,
                professional role, and primary use cases for the product. This
                information allowed for a more personalized onboarding
                experience, guiding users towards features and functionalities
                that were most relevant to their needs.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8 justify-center items-center mt-8">
            <div className="flex flex-col gap-8 justify-center mt-8">
              <h2 className="text-2xl font-bold">Onboarding Guide</h2>
              <p>
                This step-by-step guide was designed to seamlessly lead users to
                the "Aha" moment—the point at which they successfully uploaded
                and viewed their own 3D model. By providing clear instructions
                and visual cues, the guide ensured that users could quickly
                experience the product's core value and understand its potential
                benefits.
              </p>
            </div>
            <img src={onboarding2} alt="Onboarding 2" className="rounded-lg" />
          </div>
          <p className="mt-8">
            By incorporating these two elements, the onboarding experience
            effectively communicated the product's value proposition and
            empowered users to quickly and easily achieve their goals. This
            resulted in increased user engagement, satisfaction, and retention.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8 mt-8">Results</h2>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">57.1%</h2>
            <p className="text-center">
              new user onboarding{" "}
              <span style={{ color: "#F75223" }}>completion rate</span>
            </p>
          </div>
          <p className="mt-8">
            As a result of the new user onboarding, we had better understanding
            of our users with the new user onboarding questionnaire
          </p>
          <img src={results1} alt="Results 3" className="mt-8" />
        </div>
      </div>

      {/* Pricing and Revenue Model Revisions Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <div className="flex items-center gap-4 mb-8 mt-8">
          <NumberComponent Number="03" Color="#F75223" />
          <h2 className="text-3xl font-bold">
            Pricing and Revenue Model Revisions
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8">Design Process</h2>
          <p>
            The third aspect of this transformation was a two-part challenge
            related to changes to our Membership Model:
            <br />
            1. Creating a user experience aligned with our users and their user
            journey.
            <br /> 2. Implementing a system that empowers our team to conduct
            more effective Product-led growth.
            <br />
            <br />
            The old workspace version and membership structure presented us with
            numerous issues. The entire upgrade process was very confusing for
            users, as personal workspace remained "free," and upgrading simply
            meant creating a new "paid workspace" (as shown in the image below).
            This unusual approach resulted in users having multiple expired
            accounts and one "working" account, as each workspace expiration and
            subsequent renewal attempt created a new workspace. This caused
            confusion for many users and resulted in a poor user experience,
            particularly for paid users.
          </p>
          <div className="flex items-center justify-center w-full mt-8">
            <img
              src={results3_1}
              alt="Results 3"
              className="mt-8 rounded-lg"
              style={{
                width: "75%",
                maxWidth: "800px",
                display: "block", // ensures image is block-level
                margin: "0 auto", // centers the image
              }}
            />
          </div>
          <p className="mt-8">
            To address this, we aimed to create a more enhanced and intuitive
            user experience. We observed that individual users primarily used
            Modelo as a visualization tool, while larger teams and companies
            utilized it for both visualization and asset management
            (enterprise). To differentiate these use cases, we segmented users
            and introduced a new "professional" plan tier.
          </p>
          <div className="flex items-center justify-center w-full mt-8">
            <img
              src={results3_2}
              alt="Results 3_2"
              className="mt-8 rounded-lg"
              style={{
                width: "75%",
                maxWidth: "800px",
                display: "block", // ensures image is block-level
                margin: "0 auto", // centers the image
              }}
            />
          </div>
          <p className="mt-8">
            This segmentation not only provided clearer insights into user
            intentions based on their upgrade journey but also enabled the
            identification of potential leads for large enterprise users in the
            future (based on whether they upgraded to teams)
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8 mt-8">Results</h2>
          <p>
            The introduction of a new pricing tier, specifically a "Pro" tier,
            had a substantial impact on user behavior and revenue generation.
            This new tier, strategically positioned within the pricing model,
            offered enhanced features or benefits that appealed to a wide
            segment of the user base. As a result, a significant number of users
            opted to upgrade their accounts to the "Pro" tier, resulting in a{" "}
            <span
              style={{ color: "#F75223", fontSize: "40px", fontWeight: "bold" }}
            >
              25%{" "}
            </span>
            increase in total number in paid users and leading to a marked
            increase in overall monthly revenue.
          </p>
        </div>
      </div>

      {/* Takeaways Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Takeaways</h2>

        <div className="flex flex-row gap-8 justify-center items-start mt-8 w-full">
          <div className="flex-1 basis-1/3 max-w-[33%]">
            <IconHeaderDescription
              icon={takeaway1}
              header="How to Engage Users"
              description="Strategizing different ways of reaching users through analyzing their current behaviors using the product and providing incentives that would  draw them in. This was applied when I was inviting users to be part of user interviews and to join or core slack group."
            />
          </div>
          <div className="flex-1 basis-1/3 max-w-[33%]">
            <IconHeaderDescription
              icon={takeaway2}
              header="Use data to drive product feature proposals"
              description="Instead of simply absorbing what users tell me word-by-word, I started to think more about their underlying pain points behind what they were saying by looking at their key behaviors. "
            />
          </div>
          <div className="flex-1 basis-1/3 max-w-[33%]">
            <IconHeaderDescription
              icon={takeaway3}
              header="AI is a great hook but not a great way to retain users"
              description="It is really hard to produce actual use cases that users feel they would integrate into their workflow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeloB2C;
