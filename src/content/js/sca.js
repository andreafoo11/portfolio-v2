import React from "react";
import NumberComponent from "/src/components/NumberComponent";
import ScaResourceAllocation from "/src/images/supplyCrunchAllocation/sca2.png";

const ScaMicroservice = () => {
  return (
    <>
      {/* Introduction Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <div className="space-y-6">
          <p>
            Grab, a leading Southeast Asian ride-hailing and food delivery
            company, operates with a business model similar to Uber. It offers a
            wide range of services, including transportation, food delivery, and
            digital payments, to millions of customers across the region. Supply
            Crunch Allocation was a project that I worked on during my time at
            Grab as a summer intern on the transportation dispatch team. 
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
            The COVID pandemic caused shifts in marketplace patterns and driver
            earning expectations, leading to supply shortages in the recovery
            markets. In Singapore, for example, approximately 10% of bookings,
            particularly during peak hours like morning peaks and weekends, are
            unallocated due to a lack of available drivers. 
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
            To address this issue, the primary objective was to decrease the
            unallocation rate caused by undersupply by giving priority to
            drivers willing to move towards predicted undersupplied locations.
            The main goal was to get ahead of the curve by focusing on jobs that
            are in areas expected to be undersupplied in the near future. This
            means that, all other things being equal, it's more important to
            send drivers to areas with a lack of supply than to other areas. 
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
          <div>
            <div className="flex items-center gap-4 mb-8 mt-8">
              <NumberComponent Number="01" Color="#7C8BC3" />
              <h2 className="text-2xl font-bold">Forecasting Location</h2>
            </div>
            <p>
              The initial phase of this optimization strategy involves
              forecasting the precise locations where supply shortages are
              likely to occur. This can be achieved through a meticulous
              analysis of a range of signals. These signals may include current
              supply chain data, real-time updates from service providers, and
              historical trends. By examining these data points, particularly
              those from the past 10 minutes, predictive models can be developed
              to anticipate potential supply gaps across various geographical
              areas and timeframes.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-8 mt-8">
              <NumberComponent Number="02" Color="#7C8BC3" />
              <h2 className="text-2xl font-bold">Resource Allocation</h2>
            </div>
            <p>
              The subsequent phase, once these underserved areas are identified,
              is to efficiently allocate resources to meet the anticipated
              demand. This involves prioritizing available drivers and guiding
              them towards the areas projected to experience supply shortages.
              This dynamic allocation of drivers helps to ensure that resources
              are strategically positioned to address emerging needs promptly
              and effectively.
            </p>
            <br />
            <img
              src={ScaResourceAllocation}
              alt="Resource Allocation"
              className="w-full h-auto"
            />
            <br />
            <p>
              By proactively identifying potential supply gaps and responsively
              directing resources to those areas, this approach aims to optimize
              service delivery, minimize response times, and enhance overall
              customer satisfaction. The use of real-time data and predictive
              analytics allows for a more agile and adaptable strategy that can
              respond effectively to the ever-changing dynamics of supply and
              demand.
            </p>
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
          The result of this project is a new microservice that should improve
          supply allocation during busy periods. This will allow for more
          optimized pickup times and a better overall uber experience for all
          users. My contributions to this project will be built upon by other
          engineers in the future.
        </p>
        <br />
      </div>

      {/* Takeaways Section */}
      <div
        className="max-w-5xl mx-auto"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <h2 className="text-3xl font-bold mb-8">Takeaways</h2>
        <p>
          I spearheaded the development of a new microservice, gaining hands-on
          experience in GO backend service development and proficiency in key
          technologies like Docker, Kubernetes, and gRPC. While the project was
          successful, it highlighted my preference for frontend and design work,
          solidifying my resolve to concentrate on those areas in my future
          career.
        </p>
      </div>
    </>
  );
};

export default ScaMicroservice;
