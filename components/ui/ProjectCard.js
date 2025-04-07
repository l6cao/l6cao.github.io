import FlipCard from './FlipCard';
import Button from './Button';

export default function ProjectCard({
  title,
  description,
  technologies,
  links = {},
  image,
  className = ''
}) {
  const frontContent = (
    <div className="h-full flex flex-col">
      {image && (
        <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-bold text-surface mb-2">{title}</h3>
      <p className="text-surface/70 line-clamp-3 mb-4">{description}</p>
      <div className="mt-auto">
        <p className="text-accent-green text-sm">Click to learn more →</p>
      </div>
    </div>
  );

  const backContent = (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-surface mb-4">{title}</h3>
      <p className="text-surface/70 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-accent-green/10 text-accent-green"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-2">
        {links.github && (
          <Button
            href={links.github}
            variant="outline"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        )}
        {links.demo && (
          <Button
            href={links.demo}
            variant="primary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <FlipCard
      frontContent={frontContent}
      backContent={backContent}
      className={className}
    />
  );
} 