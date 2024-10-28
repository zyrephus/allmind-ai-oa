import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Supercharge = () => {
  // Ref to the animation container
  const ref = useRef(null);

  // Hook to check if the element is in view
  const isInView = useInView(ref, { once: true }); // Trigger only once when in view

  return (
    <div
      ref={ref} // Attach the ref here
      className="text-left w-full max-w-[940px] mx-auto bg-[#f6efe7] pt-12 pr-0 pl-0 pb-0 flex rounded-2xl"
    >
      {/* Column 1 */}
      <div className="flex flex-col justify-center items-center text-center h-full w-1/2 pr-[3rem] pl-[3rem]">
        <Image
          src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e07_img_icon_workflow.svg"
          alt="Infinity"
          width={36}
          height={36}
        />
        <h5 className="mb-3">Supercharge your workflow</h5>
        <p className="centered-subheading">
          Transform tasks such as issuing equity and stakeholder communications
          into remarkably simple, automated workflows. Get back to focusing on
          building your business in minutes, not hours.
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col justify-center items-center h-full w-1/2 px-0 overflow-hidden">
        <motion.div
          style={{ transformOrigin: "bottom right" }}
          initial={{ scale: 1, filter: "blur(0px)" }} // Initial state before animation starts
          animate={
            isInView
              ? {
                  scale: [1, 1, 0.98, 0.98, 1], // Shrinks and returns to normal
                  filter: [
                    "blur(0px)", // Start normal
                    "blur(0px)", // Hold normal
                    "blur(5px)", // Blur while shrinking
                    "blur(5px)", // Hold the blurred state
                    "blur(0px)", // Unblur while growing back
                  ],
                }
              : {}
          }
          transition={{
            duration: 7, // Total duration of the animation (in seconds)
            times: [0, 0.1, 0.15, 0.3, 1], // Keyframe positions
            repeat: Infinity, // Loop the animation
            repeatDelay: 2, // Delay between repeats (in seconds)
            ease: "easeInOut", // Smooth transitions
          }}
          className="w-full h-auto"
        >
          <Image
            src="/assets/IssueOptionGrants.png"
            alt="Issue Option Grants"
            width={472}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Supercharge;
