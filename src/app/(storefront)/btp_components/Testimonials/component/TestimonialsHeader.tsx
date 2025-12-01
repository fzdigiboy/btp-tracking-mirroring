export default function TestimonialsHeader({ title, description, isFullWidth, align, color }: any) {
  return (
    <div
      className={`flex flex-col gap-3 py-7 bg-white ${isFullWidth === 'No' ? 'custom_container' : ''}`}
    >
      <p
        style={{ textAlign: align?.title, color: color?.text }}
        className="text-4xl font-black leading-tight tracking-[-0.033em]  md:text-5xl"
      >
        {title}
      </p>
      <p
        style={{ textAlign: align?.description, color: color?.descrition }}
        className="text-base font-normal leading-normal text-text-muted max-w-3xl mx-auto"
      >
        {description}
      </p>
    </div>
  )
}
