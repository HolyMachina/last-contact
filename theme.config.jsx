import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Image from 'next/image'

export default {
  head(){
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://last-contact.net' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
  
    return (
      <>
        <title>{frontMatter.front_matter_title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://last-contact.net" />
        <meta name="title" content={frontMatter.front_matter_title} />
        <meta name="author" content={frontMatter.author} />
        <meta name="copyright" content="Josephine Troiani" />
        <meta name="description" content={frontMatter.description} />
        <meta property="og:url" content={url} />
        <meta name="og:title" content={frontMatter.front_matter_title} />
        <meta name="og:description" content={frontMatter.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="robots" content="follow, index" />
        <meta name="twitter:card" content="summary" />
        <meta name="application-name" content="Nextra"/>
        <meta name="generator" content="Next.js"/>
      </>
    )
  },

  docsRepositoryBase: 'https://github.com/HolyMachina/last-contact/tree/main',
  
  logo:(
    <>
      <Image width={60} height={60} src="/favicon.ico" alt="Last Contact Logo, Pink LC in a pink ring on black background."/>
      <span>Last Contact<br/>Fridays!</span>
    </>
    ),
  
  editLink: {component: null},
  
  feedback: {
    content: "Canon mistake or typographical error? Yell at Josie here. →"
  },
  
  sidebar: {defaultMenuCollapseLevel: 1, autoCollapse: true},

  search: {placeholder: "Search Last Contact..."},

  project: {
    link: null
  },

  chat: {
    link: null
  },

  color: {
    hue: 351,
    saturation: 100,
    lightness: {
      dark: 76,
      light: 32
     }
  },

  footer: {
    content: (
      <span>
        Hit me up on <a rel="me" href="https://cutie.city/@Josie"  target="_blank">Mastodon</a> or <a rel="nofollow"  href="https://www.linkedin.com/in/jotroian/"  target="_blank">LinkedIn</a>.<br />
        <a href="https://last-contact.net/">Last Contact</a> &#169; {new Date().getFullYear()} by <a href="https://last-contact.net/about/aboutjosie">Josephine Troiani</a> is licensed under <a rel="nofollow" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
        CC BY-SA 4.0</a><br /><Image width={88} height={31} src='https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg' alt="Official CC BY-SA press kit banner." rel="nofollow" />
      </span>
    )
  }
}