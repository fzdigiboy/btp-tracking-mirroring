// import { ComponentConfig } from "@measured/puck";
// import { ButtonComponent } from ".";


// export const ButtonBlock: ComponentConfig<ButtonBlock> = {
//     label: "Button",
//     fields: {
//         label: {
//             type: "text",
//             placeholder: "Get in touch",
//             contentEditable: true,
//         },
//         href: { type: "text" },

//         variant: {
//             type: "radio",
//             options: [
//                 { label: "primary", value: "primary"},
//                 { label: "secondary", value: "secondary"}
//             ],
//         },
//     },
//     defaultProps: {
//         label: "Button",
//         href: "#",
//         variant: "primary",
//     },
//     render: ({ href, variant, label, puck }) => {
//         return (
//             <ButtonComponent href={href} variant={variant} label={label} puck={puck} />
//         );
//     }
// }