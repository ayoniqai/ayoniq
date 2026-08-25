import { PersonCard } from "./PersonCard";
import { getPeople } from "@/src/lib/content";
import { FadeIn } from "@/src/components/ui/FadeIn";
import Link from "next/link";

export function PeopleListSection() {
  const people = getPeople();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {people.map((person, idx) => (
        <FadeIn key={person.slug} delay={idx * 0.1} className="h-full">
          <PersonCard 
            id={person.slug}
            name={person.data.name}
            role={person.data.role}
            bio={person.data.bio}
            imageUrl={person.data.avatarUrl}
            twitter={person.data.twitter}
            github={person.data.github}
            linkedin={person.data.linkedin}
          />
        </FadeIn>
      ))}
    </div>
  );
}
