import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const footerContent = {
    "Products": ["Cap Talbe Management", "Planning & Forecasting", "LP Automation"],
    "Solution": ["For Founders", "For Limited Partners", "For Law Firms"],
    "Resources": ["Migrate from Carta", "Migrate from Pulley", "Migrate from Shareworks", "409A Valuations", "Privacy Policy", "Blog"],
    "Company": ["Our Team", "Security"]
  }
  const svg = {
    "M4.04918 21H0.311475V7.07242H4.04918V21ZM2.18033 5.46695C0.976787 5.46695 0 4.4667 0 3.23348C0 2.00025 0.976787 1 2.18033 1C3.38387 1 4.36066 2.00025 4.36066 3.23348C4.36066 4.4667 3.38511 5.46695 2.18033 5.46695ZM19 21H15.2623V13.9045C15.2623 9.64016 10.2787 9.96303 10.2787 13.9045V21H6.54098V7.07242H10.2787V9.30717C12.018 6.03292 19 5.79109 19 12.4421V21Z": "https://www.linkedin.com/company/withmantle/", 
    "M0.0438858 5L6.99348 14.2781L0 21.8217H1.57395L7.69674 15.2172L12.6438 21.8217H18L10.6594 12.0216L17.1689 5H15.5949L9.95613 11.0826L5.40011 5H0.0438858ZM2.3585 6.15761H4.81916L15.685 20.6639H13.2244L2.3585 6.15761Z": "https://x.com/withmantle", 
    "M0 8.14608C0 6.61566 1.24066 5.375 2.77108 5.375H17.2289C18.7593 5.375 20 6.61566 20 8.14608V18.2666C20 19.797 18.7593 21.0377 17.2289 21.0377H2.77108C1.24066 21.0377 0 19.797 0 18.2666V8.14608ZM1.20482 8.14608V8.38002C1.20482 8.92392 1.48699 9.42889 1.95021 9.71395L9.17912 14.1625C9.68253 14.4723 10.3175 14.4723 10.8209 14.1625L18.0498 9.71394C18.513 9.42889 18.7952 8.92392 18.7952 8.38002V8.14608C18.7952 7.28106 18.0939 6.57982 17.2289 6.57982H2.77108C1.90606 6.57982 1.20482 7.28106 1.20482 8.14608ZM18.7952 10.666C18.7579 10.6915 18.7199 10.7162 18.6812 10.74L11.4523 15.1886C10.5617 15.7367 9.43833 15.7367 8.54768 15.1886L1.31877 10.74C1.28006 10.7162 1.24207 10.6915 1.20482 10.666V18.2666C1.20482 19.1316 1.90606 19.8328 2.77108 19.8328H17.2289C18.0939 19.8328 18.7952 19.1316 18.7952 18.2666V10.666Z": "mailto:info@withmantle.com"
  }

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
                  <div className="flex flex-none justify-start self-start items-center mt-0 mb-0 ml-0 mr-0 gap-6">
                    {Object.entries(svg).map(([src, link]) => (
                      <Link href={link} key={src} target="_blank" rel="noopener noreferrer" className="hover:text-[#aa8540]">
                        <svg
                          width="19"
                          height="26"
                          viewBox="0 0 20 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-black hover:text-[#aa8540]"
                        >
                          <path d={src} fill="currentColor" />
                        </svg>
                      </Link>
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