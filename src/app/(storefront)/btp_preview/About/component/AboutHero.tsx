export default function AboutHero() {
    return (
        <section className="relative">
            <div
                className="flex min-h-[480px] flex-col items-start justify-center bg-cover bg-center bg-no-repeat px-4 py-16 text-white md:px-8"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8) 0%, rgba(0, 51, 102, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQKrk_9DVTb5kOM-FLWFq7_In8_bBFyXv8Y8DL_HBaj91wrNZtyIyStp2iFIBe89a5k2xc_fTYH_EdgmYhib2y1N31XcYcR5IxpTbjFVyrK-AGDJjhyYhJfrJlRtgfZI79kYP1mlBJ4JfTs6hP0CMbkr_wVbeCLPW9js1Qaftjl-sK8HtdTz9IlZtis6yBBENZgYw6MXyv5lDYFhzYz8FAvMjkl4OIYpQbA5XE_kNq12lz24cbGHKAtdR4ByMp1MpMxgUaTZkcWTdd")`
                }}
            >
                <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-14">
                    <div>
                        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl text-center">
                            Bridging Distances, Building Dreams in Togo
                        </h1>
                        <p className="mt-4 text-lg font-normal leading-normal text-slate-200 text-center">
                            We are your trusted partner on the ground, turning your investment vision into concrete reality with confidence and excellence, no matter where you are in the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}