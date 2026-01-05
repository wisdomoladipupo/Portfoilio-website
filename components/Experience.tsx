export default function Experience() {
  const experiences = [
    {
      title: 'Lead Frontend Developer',
      company: 'AltSchool Africa',
      period: '2022 - Present',
      description: 'Leading frontend development initiatives, mentoring junior developers, and implementing modern web technologies to create scalable educational platforms.'
    },
    {
      title: 'Technical Assistant / Computer Trainer',
      company: 'Elytes Elixir Venture',
      period: '2021 - 2022',
      description: 'Provided technical support and training services, assisted in software development projects, and conducted computer literacy programs.'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey as a frontend developer and technical professional
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
