import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = ({
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) => {
  return (
    <div className={cn('mb-12', {
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
    })}>
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 -mb-2"></span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;