import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
 
export const metadata = {
  title: {
    default: 'Last Contact, the hopepunk web novel!',
    template: '%s | Last Contact, the hopepunk web novel!'
  },
  generator: 'Next.js',
  applicationName: 'Nextra',
  authors: [{name: "Josephine Troiani"},{name: "Josie Troiani"}],
  openGraph: {
    siteName: 'Last Contact',
    image: '',
    locale: 'en_US',
    type: 'website'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

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
      <span><b>Last Contact</b><br />The hopepunk web novel!</span>
    </>
    }
    projectLink='https://lgbtqia.space/@holymachina'
    projectIcon={
      <svg width="24" height="24">
      <image width="24" height="24" href="/images/mastodon-logo.png" alt="Mastodon Logo" />
      </svg>
    }
    chatLink='https://discord.gg/kGT7FA7fWr'
    chatIcon={
      <svg width="24" height="24">
      <image width="24" height="24" href="/images/discord-icon.png" alt="Discord Logo" />
      </svg>
    }
  />
)

const footer = (
  <Footer>
    <span suppressHydrationWarning>
        Hit me up on <a rel="me" href="https://lgbtqia.space/@holymachina">Mastodon</a>, <a href="https://bsky.app/profile/lastcontact.space" rel="nofollow">Bluesky</a>, <a href="https://discord.gg/kGT7FA7fWr" rel="nofollow">Discord</a> or <a href="https://www.linkedin.com/in/jotroian" rel="nofollow">LinkedIn</a>.
      <br />
        <a href="https://last-contact.net/">Last Contact</a> &#169; {new Date().getFullYear()} by <a href="https://last-contact.net/about/aboutjosie">Josephine Troiani</a> is licensed under Creative Commons.
      <br />
        <a rel="nofollow" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0<Image width={80} height={15} src='/images/bysa-80x15.png' alt="Official CC BY-SA press kit banner." rel="nofollow" /></a>
      </span>
  </Footer>
)
 
export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{hue: 351, saturation: 100, lightness: {light: 32, dark: 76}}}>
        {
        /* Your additional tags should be passed as `children` of `<Head>` element */
        <meta name="rating" content="14 years" />
        }
      </Head>
      <body>
        <Layout
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
          navigation={false}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}