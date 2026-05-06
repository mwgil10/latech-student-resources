import { LucideIcon, ExternalLink } from 'lucide-react';

interface ResourceLink {
  label: string;
  url: string;
}

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  links: ResourceLink[];
}

export function ResourceCard({ icon: Icon, title, description, links }: ResourceCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="space-y-2 border-t border-border pt-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent transition-colors group"
          >
            <span className="text-foreground">{link.label}</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}
