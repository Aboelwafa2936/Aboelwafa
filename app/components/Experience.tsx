"use client";

import React, { useEffect, useState } from 'react';
import { experiencesData } from "@/lib/data";
import HeadingSection from "./HeadingSection";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]); // Update type to number[]
  

  useEffect(() => {
    const handleScroll = () => {
      const currentVisible: number[] = []; // Initialize as a number array
      const windowHeight = window.innerHeight;

      experiencesData.forEach((_, index) => { // Access the index directly
        const element = document.getElementById(`experience-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < windowHeight && rect.bottom > 0) {
            currentVisible.push(index); // Push index to currentVisible array
          }
        }
      });

      setVisibleExperiences(currentVisible); // Update state with visible elements
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to initialize visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='experience' className="scroll-mt-28 mb-28 max-w-[50rem] text-center sm:mb-0 px-4 dark:text-gray-700">
      <HeadingSection title='Experience' />
      <VerticalTimeline lineColor='#e5e7eb' animate={true}>
        {
          experiencesData.map((experience, index) => (
            <VerticalTimelineElement
            key={index}
            date={experience.date} // Keep the date as a string
            icon={experience.icon}
            iconStyle={{
              background: 'white',
              fontSize: "1.5rem",
            }}
            contentStyle={{
              background: '#f3f4f6',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.5rem 2rem',
              borderRadius: '10px'
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid #9ca3af'
            }}
            visible={visibleExperiences.includes(index)}
            id={`experience-${index}`}
            className="timeline-element" // Custom class for styling
          >
            <h2 className='font-semibold capitalize dark:text-gray-900'>{experience.title}</h2>
            <p className='dark:text-gray-700 text-gray-600 font-normal'>{experience.location}</p>
            <p className='font-normal dark:text-gray-700 text-gray-600'>{experience.description}</p>
          </VerticalTimelineElement>
          
          ))
        }
      </VerticalTimeline>
    </section>
  );
}


