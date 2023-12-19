import { NextSeo } from "next-seo";

import linkedin from "../content/linkedin.json";

import Block from "../components/Block";
import Experience from "../components/Experience.js";
import SectionTitle from "../components/SectionTitle.js";
import SkillGrid from "../components/SkillGrid.js";

const experiences = linkedin.experiences;
const education = linkedin.education;
const certifications = linkedin.certifications;
const skills = linkedin.skills;

import { AtSymbolIcon, CursorArrowRaysIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Jp Valery — Resume"
        description="Web-first printable resume for Jp Valery"
        openGraph={{
          title: "Jp Valery 🦝",
          description: "Web-first printable resume for Jp Valery",
          images: [
            {
              url: "https://og.jpvalery.me/**Resume**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main className="hyphens-manual">
        {/* Page */}
        <div className="page mx-auto max-w-2xl bg-white p-6 print:max-w-letter xsm:p-8 sm:p-9 md:h-letter md:max-w-letter md:p-16">
          {/* Name */}
          <header className="mb-6 flex items-center md:mb-11">
            <div
              className="initials-container mr-5 bg-zinc-800 px-3 text-base font-medium leading-none text-white print:bg-black"
              style={{ paddingBottom: "0.6875rem", paddingTop: "0.6875rem" }}
            >
              <div
                className="initial text-center"
                style={{ paddingBottom: "0.1875rem" }}
              >
                J
              </div>
              <div className="initial text-center">P</div>
            </div>
            <div>
              <h1 className="pb-px text-4xl font-bold uppercase text-zinc-900">
                Jp Valery
              </h1>
              <div className="flex gap-2 font-mono text-sm">
                <div className="flex items-center gap-1">
                  <AtSymbolIcon className="h-4 w-4" />
                  <span>contact@jpvalery.me</span>
                </div>

                <span>|</span>

                <div className="flex items-center gap-1">
                  <CursorArrowRaysIcon className="h-4 w-4" />
                  <span>resume.jpvalery.me</span>
                </div>
              </div>
            </div>
          </header>
          {/* end Name */}
          {/* Column */}
          <div className="col-gap-md col-fill-auto print:h-letter-col print:col-count-2 md:h-letter-col md:col-count-2">
            <div className="break-inside-avoid">
              <SectionTitle title="Experience" />
              <div className="grid gap-4">
                {experiences.map((experience) => {
                  return (
                    <Experience
                      company={experience.company}
                      logo={experience.logo_url}
                      location={experience.location}
                      roles={experience.roles}
                      key={experience.company}
                    />
                  );
                })}
              </div>
            </div>
            <div className="break-inside-avoid">
              <SectionTitle title="Affiliations" />
              <Block
                title="Pavilion"
                subtitle="Associate Chapter Head"
                logo="/static/pavilion.jpg"
                start="Nov 2020"
                end="Jan 2023"
              />
              <Block
                title="Tegus"
                subtitle="Consultant"
                logo="/static/tegus.jpg"
                start="May 2021"
                end=""
              />
              <Block
                title="GLG"
                subtitle="Consultant"
                logo="/static/glg.jpg"
                start="Apr 2019"
                end=""
              />

              <SectionTitle title="Education & Certifications" />

              {certifications.map((item) => {
                return (
                  <Block
                    title={item.name}
                    subtitle={item.authority}
                    description={item.shortDescription}
                    start={item.start}
                    end={item.end}
                    logo={item.logo_url}
                    key={item.name}
                  />
                );
              })}

              {education.map((item) => {
                return (
                  <Block
                    title={item.degree_name}
                    subtitle={item.school}
                    description={item.shortDescription}
                    start={item.start}
                    end={item.end}
                    logo={item.logo_url}
                    key={item.degree_name}
                  />
                );
              })}

              <SectionTitle title="Skills" />
              {skills.map((item) => {
                return <SkillGrid title={item.title} content={item.content} key={item.title} />;
              })}
            </div>
          </div>
          {/* end Column */}
        </div>
        {/* end Page */}
      </main>
    </>
  );
}
