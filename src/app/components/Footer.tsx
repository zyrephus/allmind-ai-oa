import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const footerContent = {
    "Products": ["Cap Talbe Management", "Planning & Forecasting", "LP Automation"],
    "Solution": ["For Founders", "For Limited Partners", "For Law Firms"],
    "Resources": ["Migrate from Carta", "Migrate from Pulley", "Migrate from Shareworks", "409A Valuations", "Privacy Policy", "Blog"],
    "Company": ["Our Team", "Security"]
  }
  const svg = ["/assets/linkedin.svg", "/assets/x.svg", "/assets/mail.svg"]

  return (
    <section className="footer-wrap">
      <div className="text-left border-b border-black rounded w-full max-w-[1440px] mx-auto">
        <div className="bg-transparent justify-between items-start pb-16 flex box-border">
          <Link href="/">
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/655bac9fc699356b43d171a0_Mantle_Logo_Lockup.svg"
              alt="Mantle | Equity Management from the Future"
              width={140}
              height={40}
            />
          </Link>

          <div className="footer-content">
            {Object.entries(footerContent).map(([title, links]) => (
              <div className="footer-block" key={title}>
                <div className="mb-0 font-medium block">
                  {title}
                </div>
                {links.map(link => (
                  <div key={link}>
                    <Link href="/placeholder" className="gap-x-1 gap-y-1 text-black text-sm flex flex-row items-center no-underline hover:text-[#aa8540]">
                      {link}
                      {link === "Blog" && (
                        <Image src="/assets/goto.svg" alt="test" width={19} height={20} className="ml-1"/> 
                      )}
                    </Link>
                  </div>
                ))}
                {title === "Company" && (
                  <div className="flex flex-none justify-start self-start items-center mt-0 mb-0 ml-0 gap-6">
                    {svg.map((src, index) => (
                      <Image key={index} src={src} alt={`Icon ${index}`} width={19} height={20} /> 
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="copyright-container">
          <div className="text-grey-300 mt-0 font-sans text-sm leading-7">
            © 2024 Ten Key Labs Incorporated DBA Mantle
            <strong> · </strong>
            <Link 
              href="https://tenkeylabs.notion.site/Terms-of-Use-691d79f8431a419988ff5e7a06a5a155"
              className="hover:text-[#aa8540] hover:underline"
            >
              Terms of Use
            </Link>
          </div>

          <div className="footer-badges">
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bd9ba8553e48cc93eade1_logo-google-cloud.png"
              alt="Mantle | Equity Management from the Future"
              width={150}
              height={41}
            />
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bd9cb48e225d03ac625a5_logo-AICPA-SOC.png"
              alt="Mantle | Equity Management from the Future"
              width={58}
              height={58}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer