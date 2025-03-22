import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
 
export const metadata = {
  title: {
    default: 'Last Contact, the sci-fi political space opera',
    template: '%s | Last Contact'
  },
  openGraph: {
    url: 'https://last-contact.net',
    siteName: 'Last Contact',
    locale: 'en_US',
    type: 'website'
  }
}
 
const banner = <Banner storageKey="nextra4"></Banner>

const search = (
  <Search
    placeholder='Search Last Contact...'
  />
)

const navbar = (
  <Navbar
    logo={
    <>
      <Image width={60} height={60} src="/images/lclogo.jpg" alt="Last Contact Logo, Pink LC in a pink ring on black background."/>
      <span><b>Last Contact</b><br />Fridays!</span>
    </>
    }
    projectLink='https://cutie.city/@Josie'
    projectIcon={
      <svg width="24" height="24">
      <image width="24" height="24" href="/images/mastodon-logo.png" alt="Mastodon Logo" />
      </svg>
    }
    chatLink='https://bsky.app/profile/last-contact.net'
    chatIcon={
      <svg width="24" height="24">
      <image width="24" height="24" href="/images/bluesky-logo.png" alt="LinkedIn Logo" />
      </svg>
    }
  />
)

const footer = <Footer>
  <span>
      Hit me up on <a rel="me" href="https:// cutie.city/@Josie">Mastodon</a>, <a href="https://bsky.app/profile/last-contact.net" rel="nofollow">Bluesky</a>, or <a href="https://www.linkedin.com/in/jotroian" rel="nofollow">LinkedIn</a>.
    <br />
      <a href="https://last-contact.net/">Last Contact</a> &#169; {new Date().getFullYear()} by <a href="https://last-contact.net/about/aboutjosie">Josephine Troiani</a> is licensed under Creative Commons.
    <br />
      <a rel="nofollow" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0<Image width={80} height={15} src='/images/bysa-80x15.png' alt="Official CC BY-SA press kit banner." rel="nofollow" /></a>
    </span>
</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en_US"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      color={{
        hue: 351,
        saturation: 100,
        lightness: {
          light: 32,
          dark: 76
        }
      }}
    
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>

      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          search={search}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/HolyMachina/last-contact/tree/main"
          editLink={null}
          feedback={
            {
              content:"Canon mistake or typographical error? Yell at Josie here."
            }
          }
          sidebar={
            {
              defaultMenuCollapseLevel: 1,
              autoCollapse: true
            }
          }
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}