export default function ServicesCTA() {
    return (
        <section className="w-full bg-primary text-white rounded-xl p-8 sm:p-12 my-12 text-center">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-bold">Ready to build your dream in Togo?</h2>
                <p className="max-w-2xl">
                    Let&apos;s turn your vision into reality. Contact our team today for a free, no-obligation consultation to discuss your project requirements.
                </p>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-secondary text-primary text-base font-bold shadow-lg hover:opacity-90 transition-opacity">
                    <span className="truncate">Tell Us About Your Project</span>
                </button>
            </div>
        </section>
    );
}
