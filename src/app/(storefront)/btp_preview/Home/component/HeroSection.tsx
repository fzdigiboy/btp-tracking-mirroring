export default function HeroSection() {
    return (
        <div className="@container">
            <div
                className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-center text-center px-4 py-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCA-WpptGbWx9_thOx8-C6UeQLqyDpcYsaNuUwM7djc4DeGtC-KHhFhZerFJk34lhV8-u8NLBUjh2Fx7HvE0aQpVlgNOXLwgG3yKrAuReKd0ZvXdGwUvjmor_lmX8ShOTfHQJGK0uAh5uvZm7JV-XENLX8kweHnx8GGI3M96IGh4KOWZh2Jo2cBPWSb1oUod3C61bRaaJcagyCwcX7rInYfqO-swwVRhAGv1RqCXAG44kR7TlCp6YXQqpeyIk1vD78lw-sKF_NflCQ_")`
                }}
            >
                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
                        Your Trusted Partner for Building in Togo
                    </h1>
                    <h2 className="text-gray-200 text-lg font-normal leading-normal md:text-xl">
                        From Plan Conception to Key Handover, We Manage Everything Remotely.
                    </h2>
                </div>
                <div className="flex-wrap gap-4 flex mx-auto mt-6">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-opacity-90 transition-colors">
                        <span className="truncate">Request a Free Quote</span>
                    </button>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-background text-primary text-base font-bold tracking-wide hover:bg-gray-200 transition-colors">
                        <span className="truncate">Our Services</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
