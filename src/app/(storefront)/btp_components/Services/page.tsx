// import Header from "../common_component/header";
// import Footer from "../common_component/footer";
// import ServicesHero from "./component/ServicesHero";
// import StickyNav from "./component/StickyNav";
// import ServiceCard from "./component/ServiceCard";
// import ProcessTimeline from "./component/ProcessTimeline";
// import ServicesCTA from "./component/ServicesCTA";

// export default function Services() {
//     const services = [
//         {
//             id: "land",
//             icon: "🗺️",
//             title: "Land Consulting & Purchase",
//             description: "De-risk your most critical investment. Our on-the-ground experts navigate the complexities of Togolese land acquisition, ensuring your purchase is legally sound, strategically located, and secure.",
//             steps: [
//                 {
//                     number: 1,
//                     title: "Identification & Feasibility",
//                     description: "We source and evaluate plots based on your project goals, accessibility, and future value."
//                 },
//                 {
//                     number: 2,
//                     title: "Legal Verification",
//                     description: "Our legal team conducts exhaustive due diligence on titles and ownership to prevent disputes."
//                 },
//                 {
//                     number: 3,
//                     title: "Secure Transaction",
//                     description: "We manage the entire secure payment and title transfer process on your behalf."
//                 }
//             ],
//             buttonText: "Secure Your Land Plot",
//             image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-MNBoOS9kp5sm0okipdUmVxlraoCX7UzkOMf6fN9YoR3iC0XU_ZKxciSUAN2TRF2i-hcdgoiw6o3W0J6NOURBIKetD26kc-DknmsghZEsL4jyC8hHIWE1lYjlQwiCO5v52Df6mnwBs49X1di8pHcrMH-OxDcV3AJbFqWyigZcXcz74lD1XiB3_l9fMVnUuysrFVRSadKaIEHT5O5MpYwoHKO3-TIn9J2UsSLT6EorIvbj2Opbj7zbh3_7E6BMUZgK2xpLjQn34tiD",
//             imagePosition: "right" as const
//         },
//         {
//             id: "design",
//             icon: "✏️",
//             title: "Architecture & Design",
//             description: "Transform your vision into a viable blueprint. We collaborate with talented local architects to design spaces that are modern, functional, and culturally resonant, while handling all regulatory approvals.",
//             steps: [
//                 {
//                     number: 1,
//                     title: "Concept & Feasibility",
//                     description: "We workshop your ideas into a concrete design concept aligned with your budget and local codes."
//                 },
//                 {
//                     number: 2,
//                     title: "Architectural Plans",
//                     description: "Development of detailed construction-ready blueprints, 3D models, and material specifications."
//                 },
//                 {
//                     number: 3,
//                     title: "Permit Acquisition",
//                     description: "We manage the entire building permit application process with municipal authorities for you."
//                 }
//             ],
//             buttonText: "Start Designing Your Project",
//             image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYaWDCENg3gOAxpUnwow4IbvQONpS7BqwZAG9O0ZkrKPVPp_BcbJiVMmeG1tOGikWIVRz1i_WVYCJyagCmm-7n0XCaiCG7U9zyoeFB8uBFDMuAL1LA0dGISEDaSEA98eyOFHBlBPs7OEH6WXw9x-91e6wKMLRyqtSEkZO934Cz9tEKcAddcEFlRN8O6OhS4MRQrbavOfQWh87ebmDOzWKOA-QbM9tmHWjVUZf2Ndi0pYH-AdTwMxiVY6VyLJiPcz_LMVatqN6jDjIW",
//             imagePosition: "left" as const
//         },
//         {
//             id: "management",
//             icon: "🏗️",
//             title: "Site Management & Supervision",
//             description: "Your eyes and ears on the ground. We provide transparent, remote oversight of your construction site, ensuring projects stay on schedule, within budget, and are executed to the highest standards.",
//             steps: [
//                 {
//                     number: 1,
//                     title: "Contractor Vetting",
//                     description: "We select and manage only trusted, reliable, and skilled local construction teams."
//                 },
//                 {
//                     number: 2,
//                     title: "Milestone Tracking",
//                     description: "We monitor progress against a detailed project plan, ensuring key deadlines are met."
//                 },
//                 {
//                     number: 3,
//                     title: "Regular Reporting",
//                     description: "Receive detailed weekly reports with photos, videos, and financial tracking for full transparency."
//                 }
//             ],
//             buttonText: "Get a Supervision Quote",
//             image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYHqPaz_u4F5zdWiltTEV7X8VzWSVrHS4XFANhZCqTi_i88Fut5sBV37GfCWR-O2vRG3bitLddUlghU8Vk5XKnIJ1tuK2nFTsr0d4IBnNeHs3XW3XFF9MeZWIt5GE5Tq42yLoKihByEGtevfiVw48rXYrU_u65x0M_yhoXzJcaGDh-V2NoVFbFloLdRTDq8mWcKQckTEKsZOCyoXLNsEAWzxvXfaOtge4gZBSR9GmsRXTCz9AuoRXF3o4PEgTP6puJ3UhT_DcVzdyv",
//             imagePosition: "right" as const
//         },
//         {
//             id: "quality",
//             icon: "✓",
//             title: "Quality Control & Work Acceptance",
//             description: "We guarantee your project meets international standards. Our rigorous quality control process ensures superior craftsmanship, culminating in a formal handover that certifies your project is complete and built to last.",
//             steps: [
//                 {
//                     number: 1,
//                     title: "Materials Inspection",
//                     description: "We verify the quality of all construction materials to ensure durability and safety."
//                 },
//                 {
//                     number: 2,
//                     title: "Final Snagging",
//                     description: "A meticulous inspection is conducted to identify and rectify any defects before completion."
//                 },
//                 {
//                     number: 3,
//                     title: "Official Handover",
//                     description: "We provide you with all final documentation, warranties, and the keys to your new property."
//                 }
//             ],
//             buttonText: "Ensure Project Quality",
//             image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArCAgINT0nAUf9x26q9Bxy-lOkwcPHJIWSZ7dH2d1VALtfinBjfDu6zngUQf8gRpYA3-h0S_-6VzMEcvXZC2jajSa55bzE2yhOb769qPsO7yZC5Zdoa5_dtbtw7NF6URYkdh9x2McuM4KCoZyLjDtdyprS8alUYaReXSz16RB_vdOlMSph13Xbtu6JbAPXCP0DR39DsW8uoV5LYhxlzis3xztIl4mIhn02pBJmobDhqpGY1xyqh66puLwRGg8ac7SE7lQ-fj2Fgbms",
//             imagePosition: "left" as const
//         }
//     ];

//     return (
//         <div className="relative flex h-auto min-h-screen w-full flex-col">
//             <div className="layout-container flex h-full grow flex-col">
//                 <Header />
//                 <main>
//                     <ServicesHero />
//                     <StickyNav />
//                     <div className="mx-auto px-14 flex flex-col gap-20">
//                         {services.map((service) => (
//                             <ServiceCard key={service.id} {...service} />
//                         ))}
//                     </div>
//                     <ProcessTimeline />
//                     <ServicesCTA />
//                 </main>
//                 <Footer />
//             </div>
//         </div>
//     );
// }

export default function Services() {
  return <></>
}
