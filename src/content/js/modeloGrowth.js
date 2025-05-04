import React from "react";
import CenteredIconHeaderDescription from "/src/components/CenteredIconHeaderDescription";
import IconHeaderDescription from "/src/components/icon-header-description";
import IconHeader from "/src/components/IconHeader";
import NumberComponent from "/src/components/NumberComponent";
import ProcessCard from "/src/components/ProcessCard";
import objective1 from "/src/images/modeloGrowth/objective1.png";
import objective2 from "/src/images/modeloGrowth/objective2.png";
import objective3 from "/src/images/modeloGrowth/objective3.png";
import process1 from "/src/images/modeloGrowth/process1.png";
import process2 from "/src/images/modeloGrowth/process2.png";
import process3 from "/src/images/modeloGrowth/process3.png";
import takeaway1 from "/src/images/modeloGrowth/takeaway1.png";
import takeaway2 from "/src/images/modeloGrowth/takeaway2.png";
import takeaway3 from "/src/images/modeloGrowth/takeaway3.png";

const ModeloGrowthHacking = () => {
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
            In early December, Modelo entered a growth hacking phase with the
            primary goals of user acquisition and growth. This phase was driven
            by the realization that we needed to expand beyond our existing user
            base, and focused on product-led growth strategies such as SEO and
            SEM.
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
            The primary objective of this phase was to significantly expand our
            user base. To achieve this, we employed a multifaceted approach that
            centered around rigorous{" "}
            <span style={{ color: "#F75223" }}>A/B testing</span>. This involved
            developing and implementing a series of strategic initiatives
            designed to attract and engage new users, and then systematically
            evaluating their effectiveness through controlled experimentation.
            By iteratively testing and refining different strategies, we were
            able to identify the most impactful approaches and optimize our user
            acquisition efforts. <br />
            <br />
            Some of the growth hacking and product improvements made for user
            acquisition included the following:
          </p>
        </div>
        <div className="flex flex-row gap-12 justify-center items-center mt-8">
          <IconHeader
            icon={objective1}
            description="Creating an engaged user community"
          />
          <IconHeader
            icon={objective2}
            description="A/B Testing: Enhanced Share Feature"
          />
          <IconHeader icon={objective3} description="3D viewer trials" />
        </div>
      </div>

      {/* Improve Workspace User Interface Process+results Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <div className="flex items-center gap-4 mb-8 mt-8">
          <NumberComponent Number="01" Color="#F75223" />
          <h2 className="text-3xl font-bold">Growing an Engaged Community</h2>
        </div>
        <p className="mb-8">
          Product features and changes were obviously crucial in the growth
          hacking phase. However, that was not the only component required for
          success. To truly be able to grow our product, we needed to know what
          our users were saying and what they thought of the product. <br />
          <br />
          To be able to do so, we engaged in several ways to get in touch with
          our community and gather user feedback:
        </p>
        <div className="flex flex-col gap-4 justify-center items-center mt-8">
          <ProcessCard
            number="1"
            title="Webinar and Product Demos"
            description="We hosted webinars to do product walkthroughs and demonstrations, allowing users to see the product in action and ask questions in real-time."
            inverted={true}
          />
          <ProcessCard
            number="2"
            title="In-depth product Tutorials and Guides"
            description="We created tutorial videos posted on YouTube to have detailed explanations on how to use features, giving users a resource they could access at any time and at their own pace."
            inverted={false}
          />
          <ProcessCard
            number="3"
            title="Community Building"
            description="We created a Discord channel and engaged actively on public channels with our users. This allowed us to directly interact with users, answer questions, gather feedback, and address any concerns."
            inverted={true}
          />
        </div>
        <p>
          Gathering and analyzing this user feedback allowed us to identify
          areas for improvement, prioritize new features, and make changes to
          the product that would better meet the needs of our users. This
          user-centric approach was essential to our growth hacking efforts and
          helped us to build a product that people loved.
        </p>
      </div>

      {/* A/B Testing: Enhanced Share Feature Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <div className="flex items-center gap-4 mb-8 mt-8">
          <NumberComponent Number="02" Color="#F75223" />
          <h2 className="text-3xl font-bold">
            A/B Testing: Enhanced Share Feature
          </h2>
        </div>
        <p>
          Many successful startups have leveraged the power of peer referrals to
          fuel their initial growth. Companies like Dropbox and others have
          implemented unique peer referral strategies to effectively expand
          their user base. We aimed to adopt a similar approach for Modelo,
          recognizing the potential of peer referrals as a growth strategy.{" "}
          <br />
          <br />
          We believed that the core share functionality of this product could be
          leveraged to replicate previous successes and drive growth. This
          functionality allowed existing users to share the 3D model with
          anyone, regardless of whether they had an account. By enabling this
          seamless sharing, we aimed to convert potential users who interacted
          with shared models into active users of our platform. <br />
          <br />
          To achieve this, I focused on improving our existing share
          functionality by concentrating on two key areas and AB testing them:
        </p>
        <div className="flex flex-row gap-8 justify-center items-start w-full">
          <div className="flex-1 basis-1/2 max-w-[48%]">
            <CenteredIconHeaderDescription
              icon={process1}
              header="Enhanced User Interface"
              description="We tested out a new user interface by setting up an AB test. The user interface for sharing was redesigned to be more intuitive and user-friendly. This included simplifying the steps involved in sharing, providing clear visual cues, and optimizing the experience for different devices and screen sizes."
            />
          </div>
          <div className="flex-1 basis-1/2 max-w-[48%]">
            <CenteredIconHeaderDescription
              icon={process2}
              header="Streamlined Sharing and Embedding"
              description="We implemented features to make it easier for users to share and embed 3D models into various online platforms and websites. This involved generating shareable links and embed codes that could be easily copied and pasted, as well as ensuring compatibility with popular content management systems and social media platforms."
            />
          </div>
        </div>
        <p className="mt-8">
          I was responsible for the relaunch strategy and market fit analysis
          for a product improvement initiative led by my manager. My primary
          focus was on re-engaging our previous user base of approximately
          40,000 people by notifying them of our 2.0 upgrade and encouraging
          them to return.
        </p>

        <h2 className="text-2xl font-bold mb-8 mt-8">Results</h2>
        <div className="flex flex-row gap-16 justify-center items-center mt-8">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">30%</h2>
            <p className="text-center">
              increase in <span style={{ color: "#F75223" }}>use of share</span>{" "}
              functionality 
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">50%</h2>
            <p className="text-center">
              increase in{" "}
              <span style={{ color: "#F75223" }}>
                new users resulting from share referrals
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">20%</h2>
            <p className="text-center">
              increase in <span style={{ color: "#F75223" }}>new users</span>{" "}
              week on week
            </p>
          </div>
        </div>

        <p className="mt-8">
          This was an example of successful AB testing where we found that this
          feature improvement greatly enhanced our product user acquisition.
          Realizing this, we quickly rolled out this feature to the rest of our
          users.{" "}
        </p>
      </div>

      {/* 3D Viewer Trials Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <div className="flex items-center gap-4 mb-8 mt-8">
          <NumberComponent Number="03" Color="#F75223" />
          <h2 className="text-3xl font-bold">3D Viewer Trials</h2>
        </div>
        <p>
          In addition to our core value of "share," our arguably most important
          core value, "view," needed a way to be presented and demonstrated to
          potential new users. We needed a mechanism to convert users who first
          encountered our landing page from a Google search or other referral
          into new users. Showcasing the strength of "view" was paramount.{" "}
          <br />
          <br />
          To achieve this, we developed a quick "viewing" platform that allowed
          users to test our product rapidly without creating an account.
          <img
            src={process3}
            alt="3D Viewer Trials"
            className="mt-8 mb-8 rounded-lg"
          />
          <p>
            This feature enabled users to upload a small 3D model to experience
            our product on a limited scale. We also provided pre-uploaded 3D
            models that users could view if they didn't have a model readily
            available.
          </p>
        </p>
        <h2 className="text-2xl font-bold mb-8 mt-8">Results</h2>
        <div className="flex flex-row gap-16 justify-center items-center mt-8">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold">10%</h2>
            <p className="text-center">increase in user conversion rates</p>
          </div>
          <p>
            This 3D viewer "trial" feature proved to be one of the most crucial
            elements we built during the growth hacking phase. By combining this
            strategy with Search Engine Marketing (SEM) using Google Ads, we
            achieved outstanding results. The ability to quickly and easily
            experience the power and potential of our 3D viewing platform
            without any commitment or hassle significantly lowered the barrier
            to entry for potential users.{" "}
          </p>
        </div>
      </div>

      {/* Takeaways Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "60px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Takeaways</h2>
        <div className="flex flex-row gap-12 justify-center items-start mt-8">
          <div className="flex-1 basis-1/3 max-w-[33%]">
            <IconHeaderDescription
              icon={takeaway1}
              header="Striking a balance between short term goals and long term strategic planning"
              description="When growing a product and trying to acquire as many users as possible, there are so many things that one could do and test out. While during the growth hacking phase it is important to constantly have things to test and try out, it is also important to look at the bigger picture and think about where the product is going in an overall direction. Who are its real users and what is the true value that we want to bring to our users. "
            />
          </div>
          <div className="flex-1 basis-1/3 max-w-[33%]">
            <IconHeaderDescription
              icon={takeaway2}
              header="Use data to drive product feature proposals"
              description="Backing my proposals with not just current product data, but also competitive analysis of other products to answer the 'why' for product feature proposals."
            />
          </div>
          <div className="flex-1 basis-1/3 max-w-[33%]">
            <IconHeaderDescription
              icon={takeaway3}
              header="Varying priorities in a team can lead to different ideas in how a product could grow"
              description="These varying viewpoints, while potentially causing initial friction, can ultimately lead to a more robust and well-rounded product strategy, as they encourage a comprehensive exploration of possibilities and potential challenges."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeloGrowthHacking;
