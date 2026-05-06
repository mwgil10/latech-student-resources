import { Calendar, FileText, Clock, UserPlus } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

export function RegistrationResources() {
  const resources = [
    {
      icon: Calendar,
      title: "Course Registration",
      description: "Access the registration system to enroll in classes for upcoming quarters.",
      links: [
        { label: "Register for Classes", url: "#" },
        { label: "View Course Catalog", url: "#" },
        { label: "Check Prerequisites", url: "#" }
      ]
    },
    {
      icon: Clock,
      title: "Registration Windows",
      description: "Check your assigned registration time and important deadlines.",
      links: [
        { label: "My Registration Time", url: "#" },
        { label: "Registration Calendar", url: "#" },
        { label: "Priority Registration", url: "#" }
      ]
    },
    {
      icon: FileText,
      title: "Add/Drop Classes",
      description: "Modify your course schedule during the add/drop period.",
      links: [
        { label: "Add/Drop Procedures", url: "#" },
        { label: "Refund Deadlines", url: "#" },
        { label: "Late Registration", url: "#" }
      ]
    },
    {
      icon: UserPlus,
      title: "Waitlist Management",
      description: "Join waitlists for full classes and track your position.",
      links: [
        { label: "How Waitlists Work", url: "#" },
        { label: "Check Waitlist Status", url: "#" },
        { label: "Waitlist Notifications", url: "#" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="mb-2">Registration Resources</h2>
        <p className="text-muted-foreground">
          Everything you need to manage your course enrollment and registration process.
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
