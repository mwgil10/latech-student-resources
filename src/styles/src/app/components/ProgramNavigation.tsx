import { BookMarked, Users, Briefcase, Award } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

export function ProgramNavigation() {
  const resources = [
    {
      icon: BookMarked,
      title: "Degree Requirements",
      description: "Track your progress toward degree completion and view program requirements.",
      links: [
        { label: "Degree Audit", url: "#" },
        { label: "Program Requirements", url: "#" },
        { label: "Course Substitutions", url: "#" }
      ]
    },
    {
      icon: Users,
      title: "Academic Advising",
      description: "Connect with your advisor to plan your academic path.",
      links: [
        { label: "Schedule Advising Appointment", url: "#" },
        { label: "Find My Advisor", url: "#" },
        { label: "Change of Major", url: "#" }
      ]
    },
    {
      icon: Briefcase,
      title: "Career Services",
      description: "Explore career resources and internship opportunities.",
      links: [
        { label: "Career Center", url: "#" },
        { label: "Internship Portal", url: "#" },
        { label: "Resume Resources", url: "#" }
      ]
    },
    {
      icon: Award,
      title: "Graduation Planning",
      description: "Plan for graduation and commencement ceremonies.",
      links: [
        { label: "Apply for Graduation", url: "#" },
        { label: "Graduation Checklist", url: "#" },
        { label: "Commencement Information", url: "#" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="mb-2">Program Navigation</h2>
        <p className="text-muted-foreground">
          Tools and resources to help you navigate your degree program from enrollment to graduation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}
