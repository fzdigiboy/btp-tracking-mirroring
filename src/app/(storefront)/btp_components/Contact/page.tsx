import Header from '../common_component/header'
import Footer from '../common_component/footer'
import ContactHeader from './component/ContactHeader'
import ContactForm from './component/ContactForm'
import ContactInfo from './component/ContactInfo'
import { TitleDescriptionProps } from '@/collections/Pages/editor/btp_blocks/title_description'

export default function Contact({ title, description, isFullWidth }: TitleDescriptionProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-grow p-4 sm:p-6 lg:p-8 px-4 md:px-8 lg:px-14">
          <div>
            <ContactHeader title={title} description={description} isFullWidth={isFullWidth} />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
