import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
}: {
  tag: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
        <span className="size-1.5 rounded-full bg-accent" />
        {tag}
      </span>
      <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
