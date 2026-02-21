"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { buttonStyle } from "@/app/utility/stylevariables";
import { nyuCourses as courses, nyuProjectInfo as projectInfo, type NyuProject } from "./projects-data";

const specializations = ["Strategy", "Sustainability & Innovation", "Global Business"];

const groups = [
  {
    short: "ETA",
    title: "Entrepreneurship through acquisition",
    url: "https://www.sterneta.com/",
  },
  {
    short: "L&RC",
    title: "NYU Stern Luxury & Retail Club",
    url: "https://www.sternluxuryretail.com/",
  },
  {
    short: "OUT",
    title: "NYU Stern Outclass",
    url: "https://www.sternoutclass.com/",
  },
];

const classNames = (...values: Array<string | false | null | undefined>) =>
  values.filter(Boolean).join(" ");

export default function NYUPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<NyuProject | null>(null);

  const projects = useMemo<NyuProject[]>(
    () =>
      courses.flatMap((course) =>
        course.projects.map((projectName) => ({
          courseName: course.name,
          projectName,
          description: projectInfo[projectName]?.description,
          outcomes: projectInfo[projectName]?.outcomes,
          urls: projectInfo[projectName]?.urls,
        }))
      ),
    []
  );

  const visibleProjects = selectedCourse
    ? projects.filter((project) => project.courseName === selectedCourse)
    : projects;

  const slideCount = 3;

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse((current) => (current === courseName ? null : courseName));

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#projects");
    }
  };

  const renderSlide = () => {
    if (activeSlide === 0) {
      return (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full max-w-[198px] md:max-w-[231px] aspect-[3/4] overflow-hidden rounded-2xl shadow-xl mx-auto md:mx-auto justify-self-center">
            <Image
              src="/class-rep.png"
              alt="Class representative speaking to peers"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-purple-700 dark:text-purple-200">Student Leadership</p>
            <h3 className="text-3xl font-nyu-ultra">Class Representative</h3>
            <p className="text-lg text-gray-800 dark:text-gray-100">
              Elected by peers to advocate for student issues, coordinate events, and elevate the Executive MBA Class of A27 experience.
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              This role keeps student voices at the center of every conversation with faculty and administration.
            </p>
          </div>
        </div>
      );
    }

    if (activeSlide === 1) {
      return (
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-700 dark:text-purple-200">Academic Focus</p>
          <h3 className="text-3xl font-nyu-ultra">Specializations</h3>

          <div className="grid gap-4 sm:grid-cols-3">
            {specializations.map((area) => (
              <button
                key={area}
                type="button"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-700 text-white px-4 py-10 shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
                <span className="relative text-xl font-semibold">{area}</span>
                <span className="relative block text-sm mt-2 opacity-75">
                  Tap to expand (coming soon)
                </span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-purple-700 dark:text-purple-200">Community</p>
        <h3 className="text-3xl font-nyu-ultra">Clubs & Cohorts</h3>

        <div className="grid gap-4 sm:grid-cols-3">
          {groups.map((group) => (
            <Link
              key={group.short}
              href={group.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-purple-200 dark:border-purple-900 bg-white dark:bg-purple-900/40 p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl font-black tracking-tight text-purple-800 dark:text-purple-100">{group.short}</div>
              <div className="mt-3 font-semibold text-gray-800 dark:text-gray-100">{group.title}</div>
              <span className="mt-2 inline-block text-sm text-purple-600 dark:text-purple-200 underline">Open in new tab</span>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>NYU Stern | Arnab Majumdar</title>
        <meta
          name="description"
          content="Executive MBA, Class of A27 at New York University Leonard N. Stern School of Business."
        />
      </Head>

      <main className="font-nyu bg-white text-gray-900 dark:bg-black dark:text-gray-100 min-h-screen pb-12">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2e0068] via-[#5a1dab] to-[#b373ff] text-white py-16 px-6 md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" aria-hidden />

          <div className="relative max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.3em] text-sm text-purple-100">New York University Leonard N. Stern School of Business</p>
              <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">Executive MBA, Class of A27</h1>
              <p className="text-lg md:text-xl text-purple-50 max-w-2xl">
                A journey rooted in rigor, community, and leadership—built in the heart of New York City and sharpened through Stern&apos;s collaborative culture.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="https://www.stern.nyu.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold shadow-lg ring-1 ring-white/30 transition hover:translate-y-[-2px] hover:bg-white/20"
                >
                  <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white/80">
                    <Image src="/stern.png" alt="NYU Stern logo" fill className="object-contain" />
                  </span>
                  <span>
                    Visit NYU Stern
                    <span className="block text-xs text-purple-100 group-hover:underline">Opens in new tab</span>
                  </span>
                </Link>
                <Link href="/" className="underline text-purple-100">
                  go back to home
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur shadow-2xl border border-white/20">
                <h2 className="text-xl font-semibold">What drives this chapter</h2>
                <ul className="mt-4 space-y-2 text-sm text-purple-100">
                  <li>• Leading with empathy and data.</li>
                  <li>• Bridging strategy, sustainability, and innovation.</li>
                  <li>• Elevating classmates as Class Representative.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDING SECTIONS */}
        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12 min-h-[780px] md:min-h-[540px]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-nyu-ultra">Stern Snapshots</h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="rounded-full border border-purple-200 dark:border-purple-800 p-2 text-purple-800 dark:text-purple-100 hover:bg-purple-50 dark:hover:bg-purple-900"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="rounded-full border border-purple-200 dark:border-purple-800 p-2 text-purple-800 dark:text-purple-100 hover:bg-purple-50 dark:hover:bg-purple-900"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="relative mt-8 rounded-3xl border border-purple-100 dark:border-purple-900 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-[#0c041a] dark:via-[#0f0922] dark:to-[#160f2f] p-6 shadow-xl">
              <div className="relative min-h-[640px] md:min-h-[360px]">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={classNames(
                      "absolute inset-0 transition duration-500",
                      index === activeSlide
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 pointer-events-none translate-x-6"
                    )}
                  >
                    {index === activeSlide && renderSlide()}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={classNames(
                      "h-2.5 w-2.5 rounded-full transition",
                      index === activeSlide
                        ? "bg-purple-700"
                        : "bg-purple-200 dark:bg-purple-900"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-black dark:via-[#0a0514] dark:to-black py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-nyu-ultra">Courses</h2>
                <p className="text-gray-700 dark:text-gray-300">Tap to focus a course and see related projects.</p>
              </div>
              {selectedCourse && (
                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  className={classNames(buttonStyle, "text-sm shadow-md")}
                >
                  Show all courses
                </button>
              )}
            </div>

            <div className="overflow-x-auto pb-4">
              <div className="grid grid-rows-1 grid-flow-col gap-4 md:grid-rows-2">
                {courses.map((course) => (
                  <button
                    key={course.name}
                    type="button"
                    onClick={() => handleCourseClick(course.name)}
                    className={classNames(
                      "min-w-[260px] max-w-[320px] rounded-2xl p-5 text-left border flex flex-col h-full tile-3d",
                      "bg-[#57068c] text-white border-purple-200/40",
                      "dark:bg-white dark:text-[#2e0068] dark:border-purple-900/60",
                      selectedCourse === course.name && "tile-3d-active ring-4 ring-purple-200 dark:ring-purple-700"
                    )}
                  >
                    <div className="flex h-full flex-col gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold leading-tight">{course.name}</h3>
                      </div>

                      <div className="text-sm text-purple-50 dark:text-[#2e0068]">
                        <div className="text-xs uppercase tracking-[0.2em] text-purple-200 dark:text-purple-500">Taught by</div>
                        {course.faculty.url ? (
                          <Link
                            href={course.faculty.url}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold underline decoration-purple-200 underline-offset-4 hover:text-amber-200 dark:text-[#2e0068] dark:hover:text-purple-700"
                          >
                            {course.faculty.name}
                          </Link>
                        ) : (
                          <div className="font-semibold">{course.faculty.name}</div>
                        )}
                      </div>

                      <div className="flex-1" />

                      {course.passWithDistinction && (
                        <div className="flex justify-start">
                          <span className="inline-flex items-center rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-black shadow-sm">
                            Pass with distinction
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-[#0c041a] text-white dark:bg-white dark:text-gray-900 py-14 px-6 md:px-12 transition-colors duration-300">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-nyu-ultra">Projects</h2>
                <p className="text-purple-100 dark:text-gray-700">
                  {selectedCourse ? `Showing projects for ${selectedCourse}.` : "All projects from across courses."}
                </p>
              </div>

              {selectedCourse && (
                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 dark:border-purple-200 dark:bg-purple-50 dark:text-[#2e0068] dark:hover:bg-purple-100"
                >
                  Show all
                </button>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.length === 0 ? (
                <div className="col-span-full rounded-2xl border border-white/20 bg-white/5 p-6 text-center text-sm text-purple-100 dark:border-purple-200 dark:bg-purple-50 dark:text-[#2e0068]">
                  {selectedCourse ? "No projects listed yet for this course." : "Projects will appear here as they are added."}
                </div>
              ) : (
                visibleProjects.map((project) => (
                  <button
                    key={`${project.courseName}-${project.projectName}`}
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="group rounded-2xl border border-white/15 bg-white/10 p-5 text-left shadow-lg transition hover:-translate-y-1 hover:bg-white/15 dark:border-purple-200 dark:bg-purple-50 dark:hover:bg-white"
                  >
                    <div className="text-sm uppercase tracking-[0.2em] text-purple-200 dark:text-purple-600">{project.courseName}</div>
                    <div className="mt-2 text-xl font-semibold text-white dark:text-[#2e0068]">{project.projectName}</div>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm text-purple-100 underline decoration-purple-200 group-hover:underline-offset-4 dark:text-purple-700">
                      View details
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </section>
        <div className="pt-8 pb-10 md:pb-0 text-center">
          <Link href="#navigation" className='hover:underline text-purple-800'>go to top</Link>
        </div>
      </main>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 text-gray-900 shadow-2xl dark:bg-zinc-950 dark:text-gray-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300">Project</p>
                <h3 className="text-2xl font-nyu-ultra">{activeProject.projectName}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Course: {activeProject.courseName}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close"
                className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-900 hover:bg-purple-200 dark:bg-purple-900 dark:text-white dark:hover:bg-purple-800"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {activeProject.description && (
                <p className="text-base text-gray-800 dark:text-gray-100 leading-relaxed">
                  {activeProject.description}
                </p>
              )}

              {activeProject.outcomes?.length ? (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300">
                    Learning outcomes
                  </h4>
                  <ul className="mt-2 space-y-2 rounded-2xl border border-dashed border-purple-200 bg-purple-50 p-4 text-sm text-purple-900 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-50">
                    {activeProject.outcomes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50 p-4 text-sm text-purple-800 dark:border-purple-800 dark:bg-purple-900/40 dark:text-purple-100">
                  Additional details coming soon. In the meantime, use the link below to open the project space.
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {activeProject.urls?.length ? (
                activeProject.urls.map((link) => {
                  const isPlaceholder = link.url.startsWith("https://example.com/");
                  const isExternal = /^https?:\/\//i.test(link.url);
                  return isPlaceholder ? (
                    <span
                      key={link.url}
                      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-100/80 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-400 cursor-not-allowed"
                    >
                      {link.title || "Click link"} (coming soon)
                    </span>
                  ) : (
                    <Link
                      key={link.url}
                      href={link.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="rounded-lg border border-purple-200 bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:-translate-y-[1px] hover:bg-purple-700 dark:border-purple-800"
                    >
                      {link.title || "Click link"}
                    </Link>
                  );
                })
              ) : (
                <span className="text-sm text-gray-500 dark:text-gray-400">Project link coming soon</span>
              )}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
