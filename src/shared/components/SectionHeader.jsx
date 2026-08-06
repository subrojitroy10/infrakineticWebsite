import { ArrowRight } from '../../components/ui/Icons'

/**
 * SectionHeader — Title + description + right-aligned primary action
 * Every panel in the design set opens with this
 */
export default function SectionHeader({
  title,
  description,
  action,
  actionLabel,
  actionIcon: ActionIcon = ArrowRight,
  className = '',
  align = 'left', // 'left' | 'center'
}) {
  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
  }

  return (
    <header className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${alignClasses[align]} ${className}`}>
      <div>
        {title && (
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-[3.4rem] leading-[1.1]">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-white/60">
            {description}
          </p>
        )}
      </div>
      {action && actionLabel && (
        <div className="mt-4 sm:mt-0 sm:shrink-0">
          <button
            type="button"
            onClick={action}
            className="btn-primary"
          >
            {actionLabel}
            <ActionIcon size={15} />
          </button>
        </div>
      )}
    </header>
  )
}