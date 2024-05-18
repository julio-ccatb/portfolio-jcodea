import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Card, CardDescription } from "~/components/ui/card";

export type Experience = {
  title: string;
  link?: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
};

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <Card className="border-none bg-transparent p-4 duration-300 ease-in-out hover:cursor-pointer hover:bg-card ">
    <div className="items-start justify-start gap-6 py-4 lg:flex">
      <div className="lg:w-1/4">
        <p className="pb-1 text-xs font-semibold uppercase text-muted-foreground lg:pb-0">
          {experience.date}
        </p>
      </div>
      <div className="lg:w-3/4">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            {experience.title} · {experience.company}{" "}
            {experience.link && (
              <Link
                target="_blank"
                href={experience.link}
                className="transition-all duration-300 ease-in-out hover:text-primary"
              >
                <SquareArrowOutUpRight size={15} />
              </Link>
            )}
          </h3>
          <CardDescription className="pt-2">
            {experience.description}
          </CardDescription>
          <div className=" mt-2 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export default ExperienceCard;
