export default function Education() {
  const education = [
    {
      institution: 'University of Abuja',
      degree: 'Bachelor\'s Degree',
      period: '2018 - 2022',
      description: 'Undergraduate studies in Computer Science or related field'
    },
    {
      institution: 'Elytes Elixir Academy',
      degree: 'Professional Development',
      period: '2021',
      description: 'Specialized training in web development and programming'
    },
    {
      institution: 'AltSchool Africa',
      degree: 'Frontend Development Certification',
      period: '2022',
      description: 'Intensive frontend development program focusing on modern web technologies'
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & Training
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and professional development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                <p className="text-blue-600 font-medium">{edu.degree}</p>
              </div>
              <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
