// src/app/(app)/_components/ProjectsClient.tsx
'use client'

import React from 'react'
import { useSectionInView } from '@/lib/hooks'
import SectionHeading from '../section-heading'
import ProjectComponent from './project'

import { Project } from '../../../../../payload-types'

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {' '}
        {/* Adjust gap as needed */}
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <ProjectComponent
              id={project.id}
              title={project.title}
              description={
                project.description ?? {
                  root: {
                    type: '',
                    children: [],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 0,
                  },
                }
              }
              tags={project.tags ?? []}
              image={project.image ?? ''}
              href={project.href ?? ''}
              updatedAt={project.updatedAt}
              createdAt={project.createdAt}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
