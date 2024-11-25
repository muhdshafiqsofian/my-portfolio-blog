import React from "react";
import { faker } from "@faker-js/faker";
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

export default function Resume(data: ResumeSchema) {
  const lorem = faker.lorem.paragraph();

  return (
    <section id="resume" className="mx-auto my-10 w-[60%]">
      <div className="grid grid-cols-1 md:grid-cols-[20%_80%] items-start text-justify gap-4">
        <p id="about" className="text-2xl uppercase font-bold">
          About
        </p>
        <div>{data.basics?.summary}</div>

        <p className="text-xl uppercase font-bold">Skills</p>
        <div className="flex flex-col gap-4">
          {data.skills?.map((skill) => {
            return (
              <div key={skill.name} className="flex gap-4 items-center">
                {skill.level}
                {skill.keywords?.map((keyword) => {
                  return (
                    <Badge key={keyword} variant="outline">
                      {keyword}
                    </Badge>
                  );
                })}
              </div>
            );
          })}
        </div>

        <p className="text-xl uppercase font-bold">Experience</p>
        <div>
          {data.work?.map((item) => {
            return (
              <div key={item.name} className="mb-4">
                <p className="flex justify-between">
                  {item.name}
                  <span className="text-right">{item.startDate}</span>
                </p>
                <p className="text-sm">{item.position}</p>
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

        <p className="text-xl uppercase font-bold">Education</p>
        <div>
          {data.education?.map((item) => {
            return (
              <div key={item.area} className="mb-4">
                <p className="flex justify-between">
                  {`${item.institution}`}
                  <span>{`${dayjs(item.startDate).format("MMM-YYYY")} - ${dayjs(
                    item.endDate
                  ).format("MMM-YYYY")}`}</span>
                </p>
                <p className="text-sm">{`${item.area}, ${item.studyType}`}</p>
              </div>
            );
          })}
        </div>

        <p className="text-xl uppercase font-bold">Projects</p>
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
                  <ul className="list-disc pl-6">
                    {project.highlights?.map((highlight) => {
                      return <li key={highlight}>{highlight}</li>;
                    })}
                  </ul>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="outline">Go</Button>
                </CardFooter> */}
              </Card>
            );
          })}
        </div>

        <p className="text-xl uppercase font-bold">Contact</p>
        <p>{lorem}</p>
      </div>
    </section>
  );
}
