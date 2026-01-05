'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ImageWithErrorFallback from './ImageWithErrorFallback'

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>([0, 0, 0])
  
  // Auto-rotate images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev.map((index, projectIndex) => 
          (index + 1) % projects[projectIndex].images.length
        )
      )
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  const goToNextImage = (projectIndex: number) => {
    setCurrentImageIndex(prev => {
      const newIndexes = [...prev]
      newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % projects[projectIndex].images.length
      return newIndexes
    })
  }
  
  const goToPreviousImage = (projectIndex: number) => {
    setCurrentImageIndex(prev => {
      const newIndexes = [...prev]
      newIndexes[projectIndex] = newIndexes[projectIndex] === 0 
        ? projects[projectIndex].images.length - 1 
        : newIndexes[projectIndex] - 1
      return newIndexes
    })
  }
  
  const goToImage = (projectIndex: number, imageIndex: number) => {
    setCurrentImageIndex(prev => {
      const newIndexes = [...prev]
      newIndexes[projectIndex] = imageIndex
      return newIndexes
    })
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }
  const projects = [
    {
      title: 'School CBT Admin Portal',
      description: 'A comprehensive Computer-Based Test administration system with user management, exam creation, and result tracking capabilities.',
      features: ['Admin Dashboard', 'User Management', 'Exam Creation & Management', 'Results Analytics'],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      images: ['/images/school-cbt-sys.PNG', '/images/school-cbt-sys-2.PNG'],
      liveUrl: 'https://github.com/wisdomoladipupo/school-cbt-system',
      codeUrl: 'https://github.com/wisdomoladipupo/school-cbt-system'
    },
    {
      title: 'RunTech - Tech Learning Platform',
      description: 'An educational platform providing roadmaps and resources for various tech fields including frontend, backend, data analysis, and cloud engineering.',
      features: ['Tech Roadmaps', 'Learning Resources', 'School Directory', 'Career Guidance'],
      technologies: ['React', 'Responsive Design', 'Modern UI/UX'],
      images: ['/images/run-tech-1.PNG', '/images/run-tech-2.PNG'],
      liveUrl: 'https://github.com/wisdomoladipupo/run-tech',
      codeUrl: 'https://github.com/wisdomoladipupo/run-tech'
    },
    {
      title: 'Barber Shop Management System',
      description: 'A complete barber shop management solution with appointment scheduling, customer management, and service tracking.',
      features: ['Appointment Booking', 'Customer Management', 'Service Catalog', 'Payment Processing'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      images: ['/images/barber-shop-1.PNG', '/images/barber-shop-2.PNG'],
      liveUrl: 'https://github.com/wisdomoladipupo/fadez',
      codeUrl: 'https://github.com/wisdomoladipupo/fadez'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg" variants={itemVariants}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative h-64 lg:h-80 bg-gray-200 overflow-hidden group">
                    <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                         style={{ transform: `translateX(-${currentImageIndex[index] * 100}%)` }}>
                      {project.images.map((img, idx) => (
                        <div key={idx} className="w-full h-full flex-shrink-0">
                          <ImageWithErrorFallback
                            src={img}
                            alt={`${project.title} - Screenshot ${idx + 1}`}
                            className="w-full h-full object-cover"
                            fallbackClassName="w-full h-full flex items-center justify-center text-gray-400"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Carousel Controls */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => goToPreviousImage(index)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
                          aria-label="Previous image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => goToNextImage(index)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
                          aria-label="Next image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {project.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => goToImage(index, idx)}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                idx === currentImageIndex[index]
                                  ? 'bg-white w-6'
                                  : 'bg-white/50 hover:bg-white/75'
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.3 }}
                >
                  <motion.a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live
                  </motion.a>
                  <motion.a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
