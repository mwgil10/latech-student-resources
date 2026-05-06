import { BookOpen, Users2, HeartHandshake, DollarSign } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

export function AcademicSupport() {
  const resources = [
    {
      icon: BookOpen,
      title: "Tutoring Services",
      description: "Get help with coursework through free tutoring and study groups.",
      links: [
        { label: "Schedule Tutoring", url: "#" },
        { label: "Writing Center", url: "#" },
        { label: "Math Lab", url: "#" }
      ]
    },
    {
      icon: Users2,
      title: "Student Success",
      description: "Access workshops and resources to enhance your academic skills.",
      links: [
        { label: "Study Skills Workshops", url: "#" },
        { label: "Time Management Resources", url: "#" },
        { label: "Academic Coaching", url: "#" }
      ]
    },
    {
      icon: HeartHandshake,
      title: "Wellness & Counseling",
      description: "Support services for your mental and physical wellbeing.",
      links: [
        { label: "Counseling Services", url: "#" },
        { label: "Student Health Center", url: "#" },
        { label: "Crisis Resources", url: "#" }
      ]
    },
    {
      icon: DollarSign,
      title: "Financial Aid",
      description: "Information about scholarships, loans, and financial assistance.",
      links: [
        { label: "Financial Aid Portal", url: "#" },
        { label: "Scholarship Search", url: "#" },
        { label: "Emergency Funding", url: "#" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="mb-2">Academic Support Services</h2>
        <p className="text-muted-foreground">
          Comprehensive support services to help you succeed academically and personally.
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
