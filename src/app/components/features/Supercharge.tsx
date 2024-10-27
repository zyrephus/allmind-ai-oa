import Image from "next/image";

const Supercharge = () => {
  return (
    <>
      {/* Supercharge your workflow */}
      <div className="container centered card-sand overflow-hidden">
        <div className="flex flex-row justify-center items-center overflow-auto">
          <div className="column-text flex flex-col items-center">
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e07_img_icon_workflow.svg"
              alt="Infinity"
              width={36}
              height={36}
            />
            <h5 className="mb-3">Supercharge your workflow</h5>
            <p className="centered-subheading">
              Transform tasks such as issuing equity and
              stakeholder communications into remarkably
              simple, automated workflows. Get back to
              focusing on building your business in minutes,
              not hours.
            </p>
          </div>
          <Image
            src="/assets/IssueOptionGrants.png"
            alt="Issue Option Grants"
            width={472}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Supercharge;
