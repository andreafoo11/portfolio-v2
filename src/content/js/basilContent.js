import React from "react";
import NumberComponent from "/src/components/NumberComponent";
import BasilSolutionIcon1 from "/src/images/basil/basil_solution_1_icon.png";
import BasilSolutionIcon2 from "/src/images/basil/basil_solution_2_icon.png";
import BasilSolutionIcon3 from "/src/images/basil/basil_solution_3_icon.png";
import LisaIcon from "/src/images/basil/lisa_icon.svg";
import BasilUserResearch from "/src/images/basil/user_research_image.png";

const VideoEmbed = ({ src, title }) => (
  <div className="flex justify-center my-12">
    <div
      className="relative w-full max-w-3xl"
      style={{ paddingBottom: "56.25%" }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

const BasilProject = ({ data }) => {
  return (
    <>
      {/* Problem Space Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Problem Space</h2>
        <div className="space-y-6">
          <p>
            College students are experiencing a disconnect between their
            familiar home life and their new, independent lives. They struggle
            to integrate their home culture into their new environment and seek
            ways to connect with it outside of their childhood home.
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
            Inspired by our own concerns with financial independence, full-time
            benefits, and complete freedom post-grad, we started out being
            interested in understanding the journey of young adults navigating
            post-college life.
          </p>
        </div>

        <div
          className="p-6 rounded-lg mt-8"
          style={{ backgroundColor: "#79A69E" }}
        >
          <p className="text-white">
            We were interested in discovering how we can help young adults learn
            necessary life skills as they enter the workforce and maintain a
            work life balance, but with a possible finance focus in mind.
          </p>
        </div>
      </div>

      {/* Design Process Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Design Process</h2>
        <div className="space-y-8">
          <p>
            We sought to look at how young professionals, both those in the
            working world and those about to enter, have transitioned from their
            university days into their adult life. Through interviews with three
            young adults, 2 of which were in the workforce and 1 who plans on
            entering it following college graduation, we were able to get a
            sense of what things excite these young professionals about
            adulthood and what still remains a cause for worry.
          </p>
          <div>
            <div className="flex items-center gap-4 mb-8 mt-8">
              <NumberComponent Number="01" Color="#79A69E" />
              <h2 className="text-2xl font-bold">User Research</h2>
            </div>

            <p>
              We assumed most young adults would be most concerned with
              financial literacy & independence. They are not. 
            </p>
            <br />
            <img
              src={BasilUserResearch}
              alt="Basil User Research"
              className="w-full h-auto"
            />

            <p className="mt-8">
              They valued success and independence in their personal lives,
              including goals to eat healthier, exercise more, and stay
              connected with loved ones. Although financial awareness was a
              common pain point, users prefer learning from friends and family. 
            </p>
            <br />
            <p>
              User interviews revealed that family disconnect was a major issue
              for students. To address this, we aimed to develop a
              recipe-sharing app that fosters connection through the shared
              language of food, allowing students to experience the comforting
              flavors of home.User interviews revealed that family disconnect
              was a major issue for students. To address this, we aimed to
              develop a recipe-sharing app that fosters connection through the
              shared language of food, allowing students to experience the
              comforting flavors of home.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8 mt-8">
              <NumberComponent Number="02" Color="#79A69E" />
              <h2 className="text-2xl font-bold">Solution Prototyping</h2>
            </div>

            <div>
              <div className="flex items-center gap-8 mt-8">
                <p>
                  To allow us to build a functional app that hit the main needs
                  of our user, we broke down the core functionality into 3 main
                  blocks. This can be modeled with a user persona, 'Lisa'.{" "}
                </p>
                <img
                  src={LisaIcon}
                  alt="Lisa persona icon"
                  className="w-24 h-24"
                />
              </div>

              <div className="flex items-center gap-8 mt-8 pt-8">
                <img
                  src={BasilSolutionIcon1}
                  alt="Basil Solution Icon 1"
                  className="w-32 h-32"
                />
                <p>
                  Lisa is feeling homesick at college and wants to recreate the
                  Ethiopian spiced lamb stew recipe her mom always made for her
                  growing up. Our app will allow Lisa to access her family's
                  shared recipes and find the exact one her mom used to make.
                </p>
              </div>

              <div className="flex items-center gap-8 mt-8 pt-8">
                <img
                  src={BasilSolutionIcon2}
                  alt="Basil Solution Icon 2"
                  className="w-32 h-32"
                />
                <p>
                  Lisa's mom takes a photo of the family recipes that she has
                  and uploads it to their family group on our app, allowing Lisa
                  to get all the family's recipes in one place, where she can
                  access them whenever they want without having to ask their mom
                  again.
                </p>
              </div>
              <div className="flex items-center gap-8 mt-8 pt-8 pb-8 mb-8">
                <img
                  src={BasilSolutionIcon3}
                  alt="Basil Solution Icon 3"
                  className="w-32 h-32"
                />
                <p>
                  The app will provide Lisa with a list of places near her
                  location that sell the required ingredients for the recipe.
                  She will also be able to get directions from her location to
                  the stores so she can buy the required ingredients and then be
                  able to start making her dish once she gets back home.
                </p>
              </div>

              <p>
                Here is a concept video of how we expect this solution to
                fulfill the needs of our users. 
              </p>
              <br />
              <VideoEmbed
                src="https://www.youtube.com/embed/nSv-PRnFXwA"
                title="Basil Solution Video"
              />
              <br />
              <p>
                Using the concept video and assumptions, we ran several user
                interviews and developed a lo-fi prototype in which we ran
                through with our testing users. 
              </p>
            </div>
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
          This project began with ideation and storyboarding, and culminated in
          the creation of a functional app prototype.
        </p>
        <br />
        <VideoEmbed
          src="https://www.youtube.com/embed/4O0hLJcb8mo"
          title="Basil Demo Short"
        />
        <p className="mt-8">
          Through interviews and discussions, we refined our initial ideas and
          direction. Low-fi prototyping and testing informed the development of
          a hi-fi prototype using Figma, which illustrated the app's flow. The
          resulting prototype offers a tested and verified solution, validated
          by feedback from multiple users within our target audience.
        </p>
      </div>

      {/* Takeaways Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Takeaways</h2>
        <p>
          While we are currently satisfied with our app's prototype, we believe
          that it could be expanded in the future to include additional features
          that would allow users to interact with each other and share recipes.
          These features may include the ability to edit and/or make suggestions
          to other users' recipes, as well as the ability to share recipes via
          other social media platforms, such as Facebook Messenger and text
          messaging. As most of our team members are computer science majors
          with app development experience, the next step would be to code and
          implement the prototype so that it is fully functional. We are
          confident that we will be able to expand this project in the future.
        </p>
      </div>
    </>
  );
};

export default BasilProject;
