import { TitleDescriptionProps } from '@/collections/Pages/editor/btp_blocks/title_description'

export default function ContactHeader({
  title,
  description,
  textColor,
  backgroundColor,
  isFullWidth,
}: TitleDescriptionProps) {
  return (
    <div
      className={isFullWidth === 'No' ? 'custom_container mb-16 text-center' : 'mb-16 text-center'}
      style={{ backgroundColor: backgroundColor || 'white' }}
    >
      <h2
        className="text-4xl font-black tracking-tight text-primary sm:text-5xl"
        style={{ color: textColor || 'black' }}
      >
        {title}
      </h2>
      <p className="mt-4 text-lg text-text-muted" style={{ color: textColor || 'black' }}>
        {description}
      </p>
    </div>
  )
}
