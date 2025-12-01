import MediaGallery from "@/app/(storefront)/btp_components/Testimonials/component/CustomMediaPlayer"
import { ComponentConfig } from "@measured/puck"
import ImagePickerField from '../components/ImagePickerField'

export interface MediaPlayerProps{
  emptyFile:string
  error:{
    title:string
    subTitle:string
  }
   images: Array<{
     image: string
   }>
  // TODO: A mettre dans chaque bloc
  isFullWidth: string
}

export const ImageGalleryBlock: ComponentConfig<MediaPlayerProps> = {
  label: 'Image Gallery',
  fields: {
    emptyFile: { type: 'text' },
    error: {
      type: 'object',
      label: 'Error',
      objectFields: {
        title: { type: 'text' },
        subTitle: { type: 'text' },
      },
    },
    images: {
      type: 'array',
      label: 'Images',
      arrayFields: {
      image: {
            type: 'custom',
            label: 'Image',
            render: ({ onChange, value }) => (
              <ImagePickerField
                label="Image"
                value={value as any}
                onChange={onChange as any}
                placeholder="Select a background image from your media library"
              />
            ),
          },
      },
    },
    isFullWidth: {
      type: 'radio',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ],
    },
  },
  defaultProps: {
    emptyFile: 'Aucun média à afficher',
    error: {
      title: 'Impossible de charger le média',
      subTitle: "Le fichier n'a pas pu être chargé. Vérifiez l'URL ou le format du fichier.",
    },
    images: [
      // {
      //   image: {
      //     url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA-WpptGbWx9_thOx8-C6UeQLqyDpcYsaNuUwM7djc4DeGtC-KHhFhZerFJk34lhV8-u8NLBUjh2Fx7HvE0aQpVlgNOXLwgG3yKrAuReKd0ZvXdGwUvjmor_lmX8ShOTfHQJGK0uAh5uvZm7JV-XENLX8kweHnx8GGI3M96IGh4KOWZh2Jo2cBPWSb1oUod3C61bRaaJcagyCwcX7rInYfqO-swwVRhAGv1RqCXAG44kR7TlCp6YXQqpeyIk1vD78lw-sKF_NflCQ_',
      //     alt: 'TogoBuild',
      //   },
      // },
      // {
      //   image: {
      //     url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0WZKIT9qubeLn9GxpTZ7a3kAjZ-et6V31n3J4gYFIaI-dF0nztbDt6sagFINMP0TJMAnfxcP4O_rV7YKoQitkXIliHHfpp1QHytr6nq8Q94rHqn-v6IOItB2_30zg8R85LE1bq37sN31exJb4QtW1pUVBjcEn21CK2mYGRJYHi2TavEg4c8hYHavSn6EL9RidkHKu_-NWQsRkzyXrqnNrK2WV9xJq3xnmLV5GY__kR3Hk4w2PMX-pxNHgA14x5V1UadGOjmEsHicA',
      //     alt: 'TogoBuild',
      //   },
      // },
    ],
    isFullWidth: 'No',
  },
  render: ({ emptyFile, error, images, isFullWidth }) => {
    const imgs = images?.map((m)=> m?.image)  || []
    return (
     <MediaGallery emptyFile={emptyFile} error={error} mediaUrls={imgs as any} isFullWidth={isFullWidth} />
    )
  },
}