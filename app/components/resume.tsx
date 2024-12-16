import React from "react";
// import { faker } from "@faker-js/faker";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import dayjs from "dayjs";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Resume(data: ResumeSchema) {
  // const lorem = faker.lorem.paragraph();

  return (
    <section id="resume" className="w-full p-4 md:mx-auto my-10 md:w-[60%]">
      <div className="grid grid-cols-1 md:grid-cols-[20%_80%] items-start text-justify gap-4">
        <label id="about" className="text-2xl uppercase font-bold">
          About
        </label>
        <div>{data.basics?.summary}</div>

        <label className="text-xl uppercase font-bold">Skills</label>
        <div className="flex flex-col gap-4">
          {data.skills?.map((skill) => {
            return (
              <div
                key={skill.name}
                className="flex flex-wrap gap-4 items-center"
              >
                {/* {skill.level} */}
                {skill.keywords?.map((keyword) => {
                  return (
                    <Badge key={keyword} variant="outline" className="">
                      {keyword}
                    </Badge>
                  );
                })}
              </div>
            );
          })}
        </div>

        <label className="text-xl uppercase font-bold">Experience</label>
        <div>
          {data.work?.map((item, index) => {
            const isLatestWork = index === 0;
            return (
              <div key={item.name} className="mb-4">
                <p className="flex justify-between">
                  {item.name}
                  <span className="text-right">
                    {isLatestWork
                      ? `${dayjs(item.startDate).format("MMM YYYY")} - Present`
                      : dayjs(item.startDate).format("MMM YYYY")}
                  </span>
                </p>
                <p className="text-sm italic">{item.position}</p>
                <p className="text-muted-foreground mt-2 text-sm">
                  {item.summary}
                </p>
                <ul className="list-disc mt-2 pl-6 text-sm">
                  {item.highlights?.map((highlight) => {
                    return <li key={highlight}>{highlight}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <label className="text-xl uppercase font-bold">Education</label>
        <div>
          {data.education?.map((item) => {
            return (
              <div key={item.area} className="mb-4">
                <p className="flex justify-between">
                  <Link href={item.url || ""} target="_blank">
                    {`${item.institution}`}
                  </Link>
                  <span>{`${dayjs(item.startDate).format("MMM YYYY")} - ${dayjs(
                    item.endDate
                  ).format("MMM YYYY")}`}</span>
                </p>
                <p className="text-sm italic">{`${item.area}, ${item.studyType}`}</p>
              </div>
            );
          })}
        </div>

        <label className="text-xl uppercase font-bold">Projects</label>
        <div
          id="projects"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full flex-wrap"
        >
          {data.projects?.map((project) => {
            return (
              <Card key={project.name} className="hover:border-slate-500">
                <CardHeader>
                  <CardTitle className="text-md">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 text-sm">
                    {project.highlights?.map((highlight) => {
                      return <li key={highlight}>{highlight}</li>;
                    })}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
