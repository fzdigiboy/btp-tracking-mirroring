
//   export  const getIconComponent = (iconName: string) => {
//       const IconComponent = (LucideIcons as any)[iconName]
//       return IconComponent || LucideIcons.HelpCircle 
//     }
export default function ServicesSection({ title, services, isFullWidth, description }: any) {
       
    return (
        <section className={`py-16 sm:py-24 ${isFullWidth === 'No' ? 'custom_container' : ''}`}>
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        {title}
                    </h2>
                    <p className="mt-4 text-lg text-text-muted">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service:any, index: number) => {
                        // 1. Get the component (the function/object)
                       return( <div
                            key={index}
                            className="flex flex-col gap-4 rounded-lg border border-border bg-card p-8 text-center items-center"
                        >
                            <span className="text-4xl">
                                {service?.icon }
                            </span>  
                            <h3 className="text-xl font-bold">{service?.title}</h3>
                            <p className="text-text-muted text-base">{service?.description}</p>
                        </div>)
                        } )}
                </div>
            </div>
        </section>
    );
}
