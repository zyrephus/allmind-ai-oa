import Link from "next/link"


const GetStarted = () => {
  return (
    <section className="section-wrapper">
      <div className="container">
        <div className="gap-y-3 bg-black text-white text-center rounded-xl flex-col flex-1 justify-center items-center min-h-[400px] mx-auto py-12 px-32 flex">
          <h2 className="mb-3">Get started for free</h2>

          <p className="centered mb-3">
            Level up your equity management for $0 —no credit card required. Flat-rate paid
            plans start at $100 per month for unlimited stakeholders.
          </p>

          <div className="cta-button-group">
            <Link href="/seeademo" className="inline-block border border-white text-white bg-transparent px-6 py-3 rounded-full min-w-[150px] hover:bg-[#333438]">
              <div className="flex justify-center">
                <span className="uppercase font-medium tracking-widest text-xs leading-5">SEE A DEMO</span>
              </div>
            </Link>
            <Link href="/getstarted" className="inline-block border border-white text-black bg-white px-6 py-3 rounded-full min-w-[150px] hover:bg-[#e9e1db]">
              <div className="flex justify-center">
                <span className="uppercase font-medium tracking-widest text-xs leading-5">Get Started</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted