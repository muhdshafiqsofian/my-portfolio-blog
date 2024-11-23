import React from "react";
import { faker } from "@faker-js/faker";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { Button } from "@/components/ui/button";

export default function Resume(data: ResumeSchema) {
  const lorem = faker.lorem.paragraph();

  return (
    <section id="resume" className="mx-auto mt-8 w-[80%]">
      <div className="grid md:grid-cols-[10%_90%] items-start text-justify gap-4">
        <p className="text-2xl uppercase font-bold">About Me</p>
        <div>{data.basics?.summary}</div>

        <p className="text-xl uppercase font-bold">Skills</p>
        <div className="flex flex-col gap-4">
          {data.skills?.map((skill) => {
            return (
              <div className="flex gap-4 items-center">
                {skill.level}
                {skill.keywords?.map((keyword) => {
                  return <Button key={keyword}>{keyword}</Button>;
                })}
              </div>
            );
          })}
        </div>

        <p className="text-xl uppercase font-bold">Experience</p>
        <div>
          {data.work?.map((item) => {
            return (
              <div className="mb-4">
                <p className="flex justify-between">
                  {item.name}
                  <span className="text-right">{item.startDate}</span>
                </p>
                <p className="text-sm">{item.position}</p>
                <p className="text-sm">{item.summary}</p>
                {item.highlights?.map((highlight) => {
                  return (
                    <ul key={highlight} className="text-sm text-slate-100">
                      <li>{highlight}</li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>

        <p className="text-xl uppercase font-bold">Education</p>
        <p>{lorem}</p>

        <p className="text-xl uppercase font-bold">Projects</p>
        <p>{lorem}</p>

        <p className="text-xl uppercase font-bold">Contact</p>
        <p>{lorem}</p>
      </div>
    </section>
  );
}
