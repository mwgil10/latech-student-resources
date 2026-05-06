import { FileCheck, AlertCircle, ScrollText, Shield } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

export function ProcedureResources() {
  const resources = [
    {
      icon: ScrollText,
      title: "Academic Policies",
      description: "Review university policies including grading, attendance, and academic integrity.",
      links: [
        { label: "Student Handbook", url: "#" },
        { label: "Code of Conduct", url: "#" },
        { label: "Academic Integrity Policy", url: "#" }
      ]
    },
    {
      icon: FileCheck,
      title: "Forms & Documents",
      description: "Access frequently used forms and official documents.",
      links: [
        { label: "Transcript Request", url: "#" },
        { label: "Leave of Absence Form", url: "#" },
        { label: "Grade Appeal Process", url: "#" }
      ]
    },
    {
      icon: AlertCircle,
      title: "Important Deadlines",
      description: "Stay on top of critical academic dates and deadlines.",
      links: [
        { label: "Academic Calendar", url: "#" },
        { label: "Final Exam Schedule", url: "#" },
        { label: "Graduation Deadlines", url: "#" }
      ]
    },
    {
      icon: Shield,
      title: "Student Rights",
      description: "Learn about your rights and responsibilities as a student.",
      links: [
        { label: "FERPA Guidelines", url: "#" },
        { label: "Student Grievance Procedures", url: "#" },
        { label: "Disability Services", url: "#" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="mb-2">Policies & Procedures</h2>
        <p className="text-muted-foreground">
          Important policies, forms, and procedures to help you navigate university requirements.
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
