export default function HeroSectionComponent({
  title,
  description,
  button: buttons,
  image,
  isFullWidth,
}: any) {
  return (
    <div className={isFullWidth === 'No' ? 'custom_container' : ''}>
      <div
        className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-center text-center px-4 py-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url(${image?.url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA-WpptGbWx9_thOx8-C6UeQLqyDpcYsaNuUwM7djc4DeGtC-KHhFhZerFJk34lhV8-u8NLBUjh2Fx7HvE0aQpVlgNOXLwgG3yKrAuReKd0ZvXdGwUvjmor_lmX8ShOTfHQJGK0uAh5uvZm7JV-XENLX8kweHnx8GGI3M96IGh4KOWZh2Jo2cBPWSb1oUod3C61bRaaJcagyCwcX7rInYfqO-swwVRhAGv1RqCXAG44kR7TlCp6YXQqpeyIk1vD78lw-sKF_NflCQ_'})`,
        }}
      >
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
            {title}
          </h1>
          <h2 className="text-gray-200 text-lg font-normal leading-normal md:text-xl">
            {description}
          </h2>
        </div>
        <div className="flex-wrap gap-4 flex mx-auto mt-6">
          {buttons?.map((button: any, index: number) => {
            const buttonColor = button?.color
            const buttonTextColor = button?.textColor
            return (
              <button
                key={index}
                style={{ backgroundColor: buttonColor, color: buttonTextColor }}
                className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 text-base font-bold tracking-wide hover:bg-opacity-90 transition-colors`}
              >
                <a href={button?.href} className="truncate">
                  {button?.text}
                </a>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
