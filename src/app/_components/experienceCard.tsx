import { Badge } from "~/components/ui/badge";
import { Card, CardDescription } from "~/components/ui/card";

export type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
};

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <Card className="border-none bg-transparent">
    <div className="items-start justify-start gap-6 py-4 lg:flex">
      <div className="lg:w-1/4">
        <p className="pb-1 text-xs font-semibold uppercase text-muted-foreground lg:pb-0">
          {experience.date}
        </p>
      </div>
      <div className="lg:w-3/4">
        <div>
          <h3 className="text-sm font-semibold">
            {experience.title} · {experience.company}
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
