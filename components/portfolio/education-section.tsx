"use client";

import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science ",
    school: "UBIT - University of Karachi ",
     location: "Karachi, Pakistan",
    period: "2022 - 2026",
    focus: "Specialization in Distributed Systems & Machine Learning",
    achievements: [
      "GPA: 3.65/4.0",
    ],
  },
  {
    degree: "Pre Engineering (Intermediate)",
    school: "BAMM PECHS GOVT College For Women ",
    location: "Karachi, Pakistan",
    period: "2019 - 2021",
    focus: "Minor in Mathematics",
    achievements: [
      "Percentage: 86.73%"
    ],
  },
    {
    degree: "Matric",
    school: "The City Grammar School",
    location: "Karachi, Pakistan",
    period: "2007 - 2019",
    focus: "Minor in Mathematics",
    achievements: [
      "Percentage: 88%"
    ],
  },
];

const certifications = [
   {
    name: "Modern Web and App Development",
    issuer: "Saylani Mass IT Training Center",
    year: "2025",
  },
  {
    name: "Blockchain Basics",
    issuer: "Coursera",
    year: "2023",
  },
  {
    name: "Introduction to API Testing",
    issuer: "10Pearls University",
    year: "2025",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4A574] font-mono text-sm tracking-wider uppercase">
            // The Roasting Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E3D5CA] mt-2 mb-4">
            Education & Certifications
          </h2>
          <p className="text-[#A89A8C] max-w-2xl mx-auto">
            Where the raw beans of knowledge were carefully roasted into expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Education Cards - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold text-[#E3D5CA] flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-[#D4A574]" />
              Academic Background
            </h3>
            
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-[#251818] rounded-xl p-6 border border-[#3D2C2C] hover:border-[#8B7355]/50 transition-all duration-300"
              >
                {/* Coffee stain decoration */}
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-[#3D2C2C]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-[#E3D5CA] group-hover:text-[#D4A574] transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-[#D4A574] font-medium">{edu.school}</p>
                      <p className="text-[#A89A8C] text-sm">{edu.location}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#8B7355] text-sm font-mono shrink-0">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                  
                  {/* <p className="text-[#A89A8C] text-sm mb-4 italic">
                    {edu.focus}
                  </p> */}
                  
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#A89A8C]">
                        <span className="text-[#D4A574] mt-1">●</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-[#E3D5CA] flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-[#D4A574]" />
              Certifications
            </h3>
            
            <div className="bg-[#251818] rounded-xl border border-[#3D2C2C] overflow-hidden">
              {/* Menu header */}
              <div className="bg-[#2A1F1F] px-6 py-4 border-b border-[#3D2C2C]">
                <p className="text-[#D4A574] font-mono text-sm tracking-wider uppercase text-center">
                  Professional Credentials
                </p>
              </div>
              
              <div className="p-4 space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-[#2A1F1F] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#3D2C2C] flex items-center justify-center shrink-0 group-hover:bg-[#8B7355]/20 transition-colors">
                      <BookOpen className="w-5 h-5 text-[#D4A574]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#E3D5CA] font-medium text-sm leading-tight group-hover:text-[#D4A574] transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-[#A89A8C] text-xs mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-[#8B7355] font-mono text-xs shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Decorative bottom */}
              <div className="px-6 py-4 border-t border-[#3D2C2C] bg-[#2A1F1F]/50">
                <p className="text-[#8B7355] text-xs text-center font-mono">
                  Always learning, always brewing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
