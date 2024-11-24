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
    link: 'https://cutie.city/@Josie',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
        <linearGradient id="SVGID_1__JP7JIPAexYpx_gr1" x1="36.775" x2="8.928" y1="8.325" y2="36.171" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60affe"></stop><stop offset=".033" stop-color="#6ab4fe"></stop><stop offset=".197" stop-color="#97cbfe"></stop><stop offset=".362" stop-color="#bddeff"></stop><stop offset=".525" stop-color="#daecff"></stop><stop offset=".687" stop-color="#eef7ff"></stop><stop offset=".846" stop-color="#fbfdff"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><path fill="url(#SVGID_1__JP7JIPAexYpx_gr1)" d="M40.075,27.582c-0.494,2.539-4.421,5.319-8.932,5.857c-2.352,0.281-4.668,0.539-7.137,0.425	c-4.039-0.185-7.225-0.964-7.225-0.964c0,0.393,0.024,0.767,0.073,1.118c0.525,3.986,3.952,4.224,7.198,4.336	c2.014,0.069,3.892-0.252,5.041-0.51c0.605-0.136,1.181,0.313,1.209,0.932l0.048,1.05c0.019,0.427-0.228,0.816-0.625,0.974	c-0.951,0.379-2.911,1.009-5.718,1.165c-2.251,0.124-5.047-0.057-8.302-0.918c-7.061-1.869-8.276-9.396-8.461-17.033	c-0.057-2.268-0.022-4.406-0.022-6.194c0-7.809,5.117-10.099,5.117-10.099c2.58-1.185,7.007-1.683,11.61-1.721h0.113	c4.602,0.038,9.032,0.536,11.612,1.721c0,0,5.117,2.289,5.117,10.099C40.789,17.819,40.853,23.581,40.075,27.582"></path><path fill="none" stroke="#2e9bfe" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.242,24.013c-0.057-2.268-0.022-4.406-0.022-6.194c0-7.809,5.117-10.099,5.117-10.099	c2.58-1.185,7.007-1.683,11.61-1.721h0.113c4.602,0.038,9.032,0.536,11.612,1.721c0,0,5.117,2.289,5.117,10.099	c0,0,0.064,5.762-0.714,9.762"></path><path fill="none" stroke="#2e9bfe" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M35.069,32.373c-1.197,0.52-2.533,0.9-3.925,1.066c-2.352,0.281-4.668,0.539-7.137,0.425	c-4.039-0.185-7.225-0.964-7.225-0.964c0,0.393,0.024,0.767,0.073,1.118c0.525,3.986,3.952,4.224,7.198,4.336	c2.014,0.069,3.892-0.252,5.041-0.51c0.605-0.136,1.181,0.313,1.209,0.932l0.048,1.05c0.019,0.427-0.228,0.816-0.625,0.974	c-0.951,0.379-2.911,1.009-5.718,1.165c-2.251,0.124-5.047-0.057-8.302-0.918c-5.567-1.474-7.5-6.464-8.16-12.253"></path><path fill="#2e9bfe" d="M34.753,18.425v9.456h-3.746v-9.178c0-1.935-0.814-2.917-2.442-2.917c-1.8,0-2.703,1.165-2.703,3.468v5.024	h-3.724v-5.024c0-2.303-0.902-3.468-2.703-3.468c-1.628,0-2.442,0.982-2.442,2.917v9.178h-3.746v-9.456	c0-1.933,0.492-3.468,1.48-4.605c1.019-1.136,2.354-1.719,4.011-1.719c1.917,0,3.369,0.737,4.329,2.211L24,15.877l0.933-1.564	c0.96-1.474,2.411-2.211,4.329-2.211c1.657,0,2.992,0.582,4.011,1.719C34.261,14.957,34.753,16.493,34.753,18.425"></path>
        </svg>
    )
  },

  chat: {
    link: 'https://www.linkedin.com/in/jotroian/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
      <linearGradient id="SVGID_1__GIpl4LX6E2xe_gr1" x1="39.328" x2="8.672" y1="8.672" y2="39.328" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60e8fe"></stop><stop offset=".033" stop-color="#6ae9fe"></stop><stop offset=".197" stop-color="#97f0fe"></stop><stop offset=".362" stop-color="#bdf5ff"></stop><stop offset=".525" stop-color="#dafaff"></stop><stop offset=".687" stop-color="#eefdff"></stop><stop offset=".846" stop-color="#fbfeff"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><path fill="url(#SVGID_1__GIpl4LX6E2xe_gr1)" d="M36.5,40.5h-25c-2.209,0-4-1.791-4-4v-25c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v25	C40.5,38.709,38.709,40.5,36.5,40.5z"></path><path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M40.5,31.723V36.5c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V24.915"></path><path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.5,19.213V11.5c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14"></path><circle cx="15.5" cy="15.5" r="2.5" fill="#10cfe3"></circle><path fill="#10cfe3" d="M17,35h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v13C18,34.553,17.553,35,17,35z"></path><path fill="#10cfe3" d="M29,20c-1.538,0-2.937,0.586-4,1.541V21c0-0.553-0.447-1-1-1h-3c-0.553,0-1,0.447-1,1v13c0,0.553,0.447,1,1,1	h3c0.553,0,1-0.447,1-1v-7.5c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5V34c0,0.553,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-8	C35,22.691,32.309,20,29,20z"></path>
      </svg>
    )
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