import { ComponentConfig } from '@measured/puck'
import ImagePickerField from '../components/ImagePickerField'
import HeroSectionComponent from '@/app/(storefront)/btp_components/Home/component/HeroSection'
import { colorPickerField } from '../fields/color-picker'
import TeamSection from '@/app/(storefront)/btp_components/About/component/TeamSection'

export interface TeamSectionProps {
  title: string
  subtitle: string
  description: string
  team_composition: Array<{
    name: string
    role: string
    description: string
    image: {
      url: string
      alt: string
    }
  }>
  // TODO: A mettre dans chaque bloc
  isFullWidth: string
}

// The block structure
export const TeamSectionBlock: ComponentConfig<TeamSectionProps> = {
  label: 'Team Section',
  fields: {
    title: { type: 'text' },
    subtitle: { type: 'text' },
    description: { type: 'textarea' },
    team_composition: {
      type: 'array',
      label: 'Team Members',
      max: 5,
      min: 1,
      arrayFields: {
        name: { type: 'text' },
        role: { type: 'text' },
        description: { type: 'textarea' },
        image: {
          type: 'custom',
          label: 'Member Image',
          render: ({ onChange, value }) => (
            <ImagePickerField
              label="Member Image"
              value={value as any}
              onChange={onChange as any}
              placeholder="Select an image from your media library"
            />
          ),
        },
      },
    },
    // image: {
    //   type: 'custom',
    //   label: 'Background Image',
    //   render: ({ onChange, value }) => (
    //     <ImagePickerField
    //       label="Background Image"
    //       value={value as any}
    //       onChange={onChange as any}
    //       placeholder="Select a background image from your media library"
    //     />
    //   ),
    // },
    isFullWidth: {
      type: 'radio',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ],
    },
  },
  defaultProps: {
    title: 'Meet Our Team',
    subtitle: 'The Experts Behind Your Vision',
    description: 'A dedicated group of professionals committed to bringing your project to life with precision and care.',
    team_composition: [
      {
        name: 'Koffi Amouzou',
        role: 'Founder & CEO',
        description: 'With 15+ years in international real estate, Koffi founded TogoBuild to bridge the trust gap for diaspora investors.',
        image: {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBclr7x6ELdPLwWoPlXqxj8jesEfiMfYZAJ6LbaNGiSVYe20TCHrZTjTRnwDkD8SivlYXrPC_1qkUJjXYFR45MEZVVu6c0Dkwa6YuU3qhGZNWwldiIbHasKYykpUlX_eKq-VxqnaEQFOajGNSiEQertdsqq6CT6zEaKafnszPYXsETjO8DQ07zGy55PD4GDgILcslT5GDUNqcLYY4F81sABcOGjsG3Dp8ITmdDbYQEBA1LIKpogO8sFjK-RySUv3Dt_v9uGHUzmCDD1',
            alt: 'Member1 Photo',
        }
      },
      {
        name: 'Adjoa Mensah',
        role: 'Lead Architect',
        description: 'Adjoa combines sustainable Togolese design with modern architectural principles, ensuring every project is beautiful and functional.',
        image: {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZiSoHELK-PS5fZUSuAvvOXqbi4fsYKX3PsFsS3JUpE_kQJjTwp61sS_9Trt6wWeqzPJ5VJmuyTgIpisfD7S05rfSPW1DBO2BUnVg9magXJ9WV6_znrHZrmASUqBbjMceUT7LSXsVhyXf4umPmvcv9sc0JXEBMRA1HWItVe8q2kpxEfmElw8uaNGKJrWqnOkA2VmQ_ldcKNCj4LmeGt9nMDqaRt0_whbKqTRCSOi3bWzR7pxNdYq_kyXf29owSAcA-PeHQxOwuAIMu',
            alt: 'Member2 Photo',
        }
      },
      {
        name: 'Yao Sotou',
        role: 'Head of Project Management',
        description: 'Yao ensures projects are delivered on time and on budget, managing all local logistics and regulatory compliance.',
        image: {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAioRH09AW36IotXPxidp8J0MbVov-L80XGFd5RbHIUgU4lKFg4yH9DOuJckAiVqfAHjXL3DR0iU_AENaopsN6FDoLMpV03tHrpT_-E9KfaAY9gS6s3VIWMfEQnHKHZ_0bugWZOMyWMe1RWc8C_CuWiJa-86jQFU5SCfpByMxGQxncl15Ztd-FnIuU4_Dvm_-U5Ku6I9iNM63RcI0PHmf5JC42sFvdaJk97ZrClqwnAu8uwZLWVYB1ccYOjoHpfk0ymEuVfqXZSLb97',
            alt: 'Member3 Photo',
        }
      },
    ],
    isFullWidth: 'No',
  },

  render: ({ title, subtitle, description, team_composition, isFullWidth }) => {
    return (
      <TeamSection
        title={title}
        subtitle={subtitle}
        description={description}
        team_composition={team_composition}
        isFullWidth={isFullWidth}
      />
    )
  },
}
