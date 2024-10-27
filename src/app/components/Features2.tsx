import React from 'react'

const Features2 = () => {
  const features = {
    "Fundraising": "Model rounds, issue SAFEs, and track the whole process all in one place.",
    "Cap Tables": "Effortlessly track and organize your cap table, providing a transparent view of your company's ownership.",
    "Planning and Forecasting": "Powerful tools to model your hiring needs with visualizations that streamline your decision making.",
    "Issue Equity": "Create and manage multiple option plans and issue option grants with predictive workflows.",
    "Automated Signing": "Setup approvals and templates in a single click. Automatic reminders for outstanding actions to keep everything moving.",
    "Data Rooms": "No more scattered documents in inboxes and siloed information systems. All your documents in one place, found instantly when you need them."
  }

  return (
    <section className="section-wrapper">
      <div className="container">
        <h2>
          Manage everythingin one place with
          simple, straightforwad tools
          augmented with AI
        </h2>

        <div className="h-px my-16" style={{ backgroundColor: 'var(--color--fills--divider-light)' }}></div>

        <div className="grid grid-cols-3 gap-10 auto-rows-fr">
          {Object.entries(features).map(([featureName, featureDescription], index) => (
            <div key={index}>
              <h6 className="mb-3">{featureName}</h6>
              <p style={{ fontSize: "var(--font-size-desktop--small)" }}>{featureDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features2