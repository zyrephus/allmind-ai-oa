import Image from "next/image";

const MakeDecisions = () => {
  return (
    <>
      {/* Make decisions, not mistakes */}
      <div className="container centered card-sand">
        <div className="flex flex-row justify-center items-center overflow-auto">
          <div className="">
            <Image
              src="/assets/TermSheets.png"
              alt="Issue Option Grants"
              width={733}
              height={500}
              //className="max-w-full h-auto rounded-br-[2rem]"
            />
          </div>

          <div className="column-text flex flex-col items-center">
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e06_img_icon_decisions.svg"
              alt="Infinity"
              width={36}
              height={36}
            />
            <h5 className="mb-3">Make decisions, not mistakes</h5>
            <p className="centered-subheading">
              Handle everything from modeling hiring plans
              to assessing jargon-heavy term sheets
              without touching a spreadsheet. In-context
              advice is there when you need it, giving you
              clear insight to make decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeDecisions;
