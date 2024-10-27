import Image from "next/image";

import React from "react";

const Copilot = () => {
  return (
    <>
      {/* Co-Pilot */}
      <div className="container centered card-sand flex flex-col items-center">
        <div className="co-pilot-animation-wrap w-container flex flex-col items-center">
          <Image
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e05_temp_AI.png"
            alt="Co-Pilot"
            width={120}
            height={120}
          />

          {/* Need to add text here */}
          <Image src="/assets/form.png" alt="Form" width={1120} height={186} />
        </div>

        <div className="margin-bottom-small">
          <h5>Get it done with your AI Co-pilot</h5>
        </div>

        <p className="centered-subheading">
          Breeze through essential tasks, pull critical information, and <br />
          visualize your ownership data instantly.
        </p>
      </div>
    </>
  );
};

export default Copilot;
