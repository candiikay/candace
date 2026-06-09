'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import Link from 'next/link';

import { ChevronRight, ChevronDown, Folder, File, Instagram, Linkedin } from 'lucide-react';



export default function PortfolioSite() {

  const [openFolders, setOpenFolders] = useState({});

  const [showAbout, setShowAbout] = useState(false);



  const toggleFolder = (folderId) => {

    setOpenFolders(prev => ({

      ...prev,

      [folderId]: !prev[folderId]

    }));

  };



  const categories = [

    {

      id: 'algorithms',

      name: 'Algorithms',

      description: 'How computational systems listen, classify, track, and misread the world.',

      projects: [

        { name: 'Algorithmic Ear', description: 'Experimental tool exploring algorithmic perception', slug: 'algorithmic-ear', imageFolder: 'Algo Ear' },

        { name: 'The Machine Tries to See Caitlin Clark', description: 'Computational media field notebook on why machine vision misses context in sports footage', slug: 'machine-tries-to-see-caitlin-clark', imageFolder: 'Machine' }

      ]

    },

    {

      id: 'extended-reality',

      name: 'Extended Reality',

      description: 'Immersive environments of care and embodiment.',

      projects: [

        { name: '4TH KIT', description: '3D jersey designer for crafting custom patterns and unique designs', slug: '4th-kit', imageFolder: '4th kit' },

        { name: 'Sneaker Builder AR', description: 'Immersive, gamified sneaker design challenge with time-based constraints', slug: 'sneaker-builder-ar', imageFolder: 'sneaker ' },

        { name: 'Soma AR', description: 'AR flower growth experience for relaxation and mindful breathing', slug: 'soma-ar', imageFolder: 'soma' }

      ]

    },

    {

      id: 'knowledge-infrastructure',

      name: 'Knowledge Infrastructure',

      description: 'Building relational systems for collective knowledge.',

      projects: [

        { name: 'Field Node v1', description: 'First prototype of an open-source learning system', slug: 'field-node-v1', imageFolder: 'FN V1' },

        { name: 'Field Node v2', description: 'Integrated Are.na & Hugging Face APIs', slug: 'field-node-v2', imageFolder: 'FN V2' }

      ]

    },

    {

      id: 'culture-data-transformation',

      name: 'Culture, Data & Transformation',

      description: 'Projects where culture, data, structure, and public storytelling get turned into interfaces and artifacts.',

      projects: [

        { name: 'FORM', description: 'A visual pick-em that turns weekly WNBA matchups into a data-driven field instead of a standard list of choices', slug: 'form-wnba', imageFolder: 'FORM' },

        { name: 'Beyond the Waterline', description: 'Interactive women’s basketball timeline tracing the game, the money, and the context around it', slug: 'beyond-the-waterline', imageFolder: 'Waterline' },

        { name: 'Systems Are Never Neutral', description: 'Feminist systems theory project with a digital book, zine, and process deck on inherited structural forms', slug: 'systems-are-never-neutral', imageFolder: 'SDL' }

      ]

    },

    {

      id: 'creator-partnerships',

      name: 'Creator Partnerships',

      description: 'UGC creator partnerships for tech, AI, and product-led brands.',

      projects: [

        { name: 'UGC for Tech Brands', description: 'Short-form creator content grounded in product fluency, scripting, and clear demos', slug: 'creator-partnerships', imageFolder: 'UGC' }

      ]

    },

    {

      id: 'design-theory',

      name: 'Design Theory',

      description: 'The theoretical backbone for everything else—readings, studies, and academic writing that inform my practice.',

      projects: [

        { name: 'Cyborg Manifesto', description: 'My understanding of the readings', slug: 'cyborg-manifesto', imageFolder: null }

      ]

    }

  ];



  return (

    <div className="min-h-screen bg-white text-black font-mono">

      {/* Header */}

      <div className="border-b border-black">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

            <div className="flex-shrink-0 flex justify-center sm:justify-start">

              <Image

                src="/proflie.png"

                alt="Candace Stewart"

                width={150}

                height={150}

                className="rounded-full object-cover border-2 border-black w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"

                priority

              />

            </div>

            <div className="flex-1">

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Candace Stewart</h1>

                <div className="flex items-center gap-3 sm:mt-2 flex-shrink-0">

                  <a 

                    href="https://www.instagram.com/candiikay/?__d=11" 

                    target="_blank" 

                    rel="noopener noreferrer"

                    className="text-gray-700 hover:text-pink-600 transition-colors"

                    aria-label="Instagram"

                  >

                    <Instagram className="w-5 h-5" />

                  </a>

                  <a 

                    href="https://www.linkedin.com/in/candaceks" 

                    target="_blank" 

                    rel="noopener noreferrer"

                    className="text-gray-700 hover:text-pink-600 transition-colors"

                    aria-label="LinkedIn"

                  >

                    <Linkedin className="w-5 h-5" />

                  </a>

                </div>

              </div>

              <p className="text-base sm:text-lg mb-2">I design products, research systems, and make technology legible.</p>

              <p className="text-sm sm:text-base text-gray-700 mb-4">

                I work across product design, creative technology, sports media, and creator-led storytelling.

              </p>

              <a
                href="mailto:candace.keenya@gmail.com"
                className="text-sm text-gray-600 hover:text-pink-600 transition-colors break-all"
              >
                candace.keenya@gmail.com
              </a>

              <div className="text-xs sm:text-sm text-gray-600 space-y-1 border-t border-gray-200 pt-4 mt-4">

                <p className="break-words">West Point • B.S. Engineering Psychology, Systems Engineering track</p>

                <p className="break-words">Parsons School of Design • M.A. Media Studies and Creative Coding</p>

              </div>

              {/* About / Context Section */}

              <div className="border-t border-gray-200 pt-4 mt-4">

                <button

                  onClick={() => setShowAbout(!showAbout)}

                  className="w-full flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-pink-600 active:text-pink-700 transition-colors group touch-manipulation py-2"

                >

                  {showAbout ? (

                    <ChevronDown className="w-4 h-4 flex-shrink-0" />

                  ) : (

                    <ChevronRight className="w-4 h-4 flex-shrink-0" />

                  )}

                  <span className="font-medium">About / Context</span>

                </button>

                {showAbout && (

                  <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 space-y-2 sm:space-y-3 pl-4 sm:pl-6 break-words">

                    <p>

                      I’m a designer and systems thinker working across technology, culture, sports, and care.

                    </p>

                    <p>

                      At <strong>West Point</strong>, I studied Engineering Psychology with a systems engineering lens, which taught me to look at how people, interfaces, and technical constraints shape each other.

                    </p>

                    <p>

                      For the past five years at the <strong>NHL</strong>, I’ve built participatory digital products and explored how emerging technologies shape fandom, play, and community behavior.

                    </p>

                    <p>

                      At <strong>The New School</strong>, my recent work has focused on women’s basketball, media systems, creative coding, and algorithmic visibility. I move between <strong>product thinking</strong>, <strong>research</strong>, and <strong>creator communication</strong> — building things, explaining them, and studying how they land in culture.

                    </p>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* Main Content - File Explorer */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">

        <div className="space-y-1">

          {categories.map((category) => {
            const isSingleProject = category.projects.length === 1;
            const singleProject = isSingleProject ? category.projects[0] : null;

            return (
            <div key={category.id} className="border border-black">

              {/* Folder Header */}
              {isSingleProject ? (
                <Link
                  href={`/project/${singleProject.slug}`}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 hover:bg-pink-50 active:bg-pink-100 transition-colors group touch-manipulation"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-pink-600 transition-colors" />
                  <Folder className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:text-pink-600 transition-colors" />
                  <div className="flex-1 text-left min-w-0">
                    <div className="font-semibold text-sm sm:text-base group-hover:text-pink-600 transition-colors break-words">
                      {category.name}
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                      {category.description}
                    </div>
                  </div>
                </Link>
              ) : (
              <button
                type="button"
                onClick={() => toggleFolder(category.id)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 hover:bg-pink-50 active:bg-pink-100 transition-colors group touch-manipulation"
              >
                {openFolders[category.id] ? (
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 flex-shrink-0" />
                )}
                <Folder className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:text-pink-600 transition-colors" />
                <div className="flex-1 text-left min-w-0">
                  <div className="font-semibold text-sm sm:text-base group-hover:text-pink-600 transition-colors break-words">
                    {category.name}
                  </div>
                  {!openFolders[category.id] && (
                    <div className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                      {category.description}
                    </div>
                  )}
                </div>
              </button>
              )}

              {/* Folder Contents */}
              {!isSingleProject && openFolders[category.id] && (

                <div className="border-t border-black bg-gray-50">

                  <div className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 border-b border-gray-200">

                    {category.description}

                  </div>

                  <div className="divide-y divide-gray-200">

                    {category.projects.map((project, idx) => (

                      <Link

                        key={idx}

                        href={`/project/${project.slug}`}

                        className="px-3 sm:px-4 py-2.5 sm:py-3 pl-8 sm:pl-12 flex items-start gap-2 sm:gap-3 hover:bg-pink-50 active:bg-pink-100 transition-colors cursor-pointer group block touch-manipulation"

                      >

                        <File className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 text-gray-400 group-hover:text-pink-600 transition-colors" />

                        <div className="flex-1 min-w-0">

                          <div className="font-medium text-sm sm:text-base group-hover:text-pink-600 transition-colors break-words">

                            {project.name}

                          </div>

                          <div className="text-xs text-gray-600 mt-1 break-words">

                            {project.description}

                          </div>

                        </div>

                      </Link>

                    ))}

                  </div>

                </div>

              )}

            </div>
            );
          })}

        </div>



        {/* Footer note */}

        <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-200">

          <p className="text-xs sm:text-sm text-gray-500 italic mb-4 sm:mb-6 break-words">

            Product systems, sports media, creator communication, and research-led technology experiments.

          </p>

          <div className="text-xs text-gray-400 space-y-1">

            <p>© 2026 Candace Stewart</p>

            <p>
              <a href="mailto:candace.keenya@gmail.com" className="hover:text-pink-600 transition-colors">
                candace.keenya@gmail.com
              </a>
            </p>

            <p>Made with care</p>

          </div>

        </div>

      </div>

    </div>

  );

}
