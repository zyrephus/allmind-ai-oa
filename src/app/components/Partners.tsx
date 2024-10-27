import Image from 'next/image'

const Partners = () => {
  const partnerImages = [
    "https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/654beb40a4199812b5b99f45_fortune-black.png",
    "https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/654beb4019075ca39d2d7568_techcrunch-black.png",
    "https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/654beb95a02e4305dab55568_axios-black.png",
    "https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bde918911cddfb88c51cc_betakit-black-logo.png"
  ]

  return (
    <section className="partner-logos">
      <div className="block container">
        <div className="grid grid-cols-4 gap-x-12 gap-y-0 px-6">
        {partnerImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={image}
                alt={`Partner logo ${index + 1}`}
                width={200}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners