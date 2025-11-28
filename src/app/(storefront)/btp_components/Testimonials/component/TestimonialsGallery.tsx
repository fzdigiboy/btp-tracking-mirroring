'use client'

import { useEffect, useState } from 'react';
import FilterChips from './FilterChips'
import TestimonialCard from './TestimonialCard'

export default function TestimonialsGallery({ title, isFullWidth }: any) {
  // const docs = testimonies?.docs ?? [];
  const [testimonies, setTestimonies] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Projects");

  useEffect(() => {
    fetch(`/api/testimonies/all?projectType=${activeFilter}`)
      .then(res => res.json())
      .then(data => setTestimonies(data));
  }, [activeFilter]);
  
  return (
    <div className={`w-full py-10 ${isFullWidth === 'No' ? 'custom_container' : ''}`}>
      
      <div className="flex justify-center mb-8">
        <FilterChips activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonies?.map((t: any, index: number) => (
          <TestimonialCard
            key={index}
            name={t.name}
            country={t.country}
            project={typeof t.project === 'object' ? t.project.title : 'Project'}
            message={t.content}
          />
        ))}
      </div>
    </div>
    // <div className="flex-1 p-4 sm:p-6 lg:p-8 px-4 md:px-8 lg:px-14">
    //   <FilterChips activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
    //   <div
    //     className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isFullWidth === 'No' ? 'custom_container' : ''}`}
    //   >
    //     {/* {testimonials.map((testimonial, index) => (
    //                       <TestimonialCard key={index} {...testimonial} />
    //                     ))} */}
    //     {testimonies?.map((t: any, index: number) => (
    //       // <TestimonialCard key={index} {...testimonial} />
    //       <TestimonialCard
    //         key={index}
    //         name={t.name}
    //         country={t.country}
    //         project={typeof t.project === 'object' ? t.project.title : 'Project'}
    //         message={t.content}
    //       />
    //     ))}
    //   </div>
    // </div>
    
  )
}
