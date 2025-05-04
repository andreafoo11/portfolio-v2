import React from "react";
import CenteredIconHeaderDescription from "/src/components/CenteredIconHeaderDescription";
import ProcessCard from "/src/components/ProcessCard";
import ModeloRelaunchMetrics1 from "/src/images/modeloRelaunch/metrics1.png";
import ModeloRelaunchMetrics2 from "/src/images/modeloRelaunch/metrics2.png";
import ModeloRelaunchMetrics4 from "/src/images/modeloRelaunch/metrics4.png";
import ModeloRelaunchMetrics5 from "/src/images/modeloRelaunch/metrics5.png";
import ModeloRelaunchMetrics6 from "/src/images/modeloRelaunch/metrics6.png";
import ModeloRelaunch1 from "/src/images/modeloRelaunch/objective.png";
import ModeloRelaunch2 from "/src/images/modeloRelaunch/objective2.png";
import ModeloRelaunch3 from "/src/images/modeloRelaunch/objective3.png";
import ModeloRelaunchResults1 from "/src/images/modeloRelaunch/results1.png";
import ModeloRelaunchResults2 from "/src/images/modeloRelaunch/results2.png";
import ModeloRelaunchResults3 from "/src/images/modeloRelaunch/results3.png";
import ModeloRelaunchMetrics3 from "/src/images/modeloRelaunch/test.png";

const ModeloRelaunch = () => {
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
            Despite its 2014 launch, Modelo, a small product within our parent
            company Coohom, had received limited resources and development
            attention. However, upon my joining in 2013, the company decided to
            relaunch Modelo 2.0 in the US, and I was actively involved in this
            effort.
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
            The Objective for this relaunch can be broken down into three parts:
          </p>
        </div>
        <div className="flex flex-row gap-4 justify-center pt-8">
          <CenteredIconHeaderDescription
            icon={ModeloRelaunch1}
            header="Product Improvement"
            description="Improved User Interface and brand new features with an emphasis on collaboration features and AI"
          />
          <CenteredIconHeaderDescription
            icon={ModeloRelaunch2}
            header="Understanding Market Fit"
            description="Analyzing the competitive landscape to identify gaps in the market and opportunities for differentiation "
          />
          <CenteredIconHeaderDescription
            icon={ModeloRelaunch3}
            header="Go-to-Market Relaunch"
            description="Revamp of marketing and sales collateral, including website, social media, and sales decks"
          />
        </div>
        <p className="pt-16">
          I was responsible for the relaunch strategy and market fit analysis
          for a product improvement initiative led by my manager. My primary
          focus was on re-engaging our previous user base of approximately
          40,000 people by notifying them of our 2.0 upgrade and encouraging
          them to return.
        </p>
      </div>

      {/* Design Process Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Design Process</h2>
        <div className="space-y-6">
          <p>
            During my initial two months at Modelo, I dedicated significant
            effort to the go-to-market launch. My work primarily focused on
            marketing initiatives to ensure a successful product launch.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center">
            <ProcessCard
              number="1"
              title="Market Fit Analysis"
              description="Analyzing the competitive landscape to identify gaps in the market and opportunities for differentiation "
              inverted={true}
            />
            <ProcessCard
              number="2"
              title="Competitive Market Landscape Research"
              description="Understanding the main competitors in the market currently, and what can be our edge that attracts users "
              inverted={false}
            />
            <ProcessCard
              number="3"
              title="Creation of Marketing Videos"
              description="Collaborated with designer to created marketing videos to convey the value propositions "
              inverted={true}
            />
            <ProcessCard
              number="4"
              title="Landing Page Development"
              description="This landing page would be the page that we would use to publicize the launch of Modelo 2.0 with all the previously aforementioned product value propositions. The three main value propositions were view, interact, and AI Conceptualization"
              inverted={false}
            />
            <ProcessCard
              number="5"
              title="Go-to-Market Launch Strategy"
              description="Targeted email and social media marketing was used to reach approximately 48,000 existing users. The marketing campaign was intended to announce new features and encourage old users to re-engage."
              inverted={true}
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Results</h2>
        <p>
          Our in-depth knowledge of our target audience, their needs, and
          preferences, combined with a comprehensive understanding of the
          competitive landscape, allowed us to create impactful and persuasive
          marketing videos that effectively highlighted our unique value
          proposition and differentiated us from competitors.
        </p>
        <br />
        <br />
        <p>We launched with three main value propositions: </p>
        <div className="flex flex-col gap-4 justify-center items-center mt-8">
          <img
            src={ModeloRelaunchResults1}
            alt="Modelo Results 1"
            style={{ paddingBottom: "40px", width: "85%" }}
          />
          <img
            src={ModeloRelaunchResults2}
            alt="Modelo Results 2"
            style={{ paddingBottom: "40px", width: "85%" }}
          />
          <img
            src={ModeloRelaunchResults3}
            alt="Modelo Results 3"
            style={{ paddingBottom: "40px", width: "85%" }}
          />
        </div>
      </div>

      {/* Metrics Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Metrics</h2>
        <div className="flex flex-row justify-center items-center">
          <img
            src={ModeloRelaunchMetrics1}
            alt="Modelo Relaunch Metrics"
            style={{ width: "20%", margin: "0 80px" }}
          />
          <img
            src={ModeloRelaunchMetrics2}
            alt="Modelo Relaunch Metrics"
            style={{ width: "20%", margin: "0 80px" }}
          />
          <img
            src={ModeloRelaunchMetrics3}
            alt="Modelo Relaunch Metrics"
            style={{ width: "20%", margin: "0 80px" }}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            src={ModeloRelaunchMetrics4}
            alt="Modelo Relaunch Metrics"
            style={{ width: "20%", margin: "0 80px" }}
          />
          <img
            src={ModeloRelaunchMetrics5}
            alt="Modelo Relaunch Metrics"
            style={{ width: "20%", margin: "0 80px" }}
          />
          <img
            src={ModeloRelaunchMetrics6}
            alt="Modelo Relaunch Metrics"
            style={{ width: "20%", margin: "0 80px" }}
          />
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
            The relaunch was successful in terms of user satisfaction with the
            new features and overall revamp, and we effectively communicated the
            value propositions. However, we failed to identify and target the
            right users, resulting in low CTR and limited user growth
            post-launch (reaching only 400 users in a week). We assumed we could
            revitalize a portion of our 48,000 existing users, but this
            assumption proved incorrect.
          </p>
          <br />
          <p>
            Looking back, we should have investigated why users abandoned our
            product before the relaunch. Our attempts at this were unsuccessful,
            and we quickly realized our limitations in attracting users back
            after the launch, highlighting the importance of pre-launch research
            in this area.
          </p>
        </div>
      </div>
    </>
  );
};

export default ModeloRelaunch;
