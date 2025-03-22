export default {
  index: {
    title: 'Home',
    type: 'page',
  },
  lastcontact: {
    title: "Last Contact", 
    type: "menu",
    items: {
      prologue: {
        title: "Act 00 - Prologue", 
        href:"/lastcontact/prologue"
      },
      thepact: {
        title: "Act 01 - The Pact", 
        href:"/lastcontact/thepact"
      },
      factions: {
        title: "Act 02 - Factions", 
        href:"/lastcontact/factions"
      },
      compendium: {
        title: "The Compendium", 
        href:"/lastcontact/compendium"
      }
    }
  },
  theblog: {
    title: "The Blog", 
    type: "menu",
    items: {
      worldevents: {
        title: 'World Events',
        href:"/theblog/worldevents"
      },
      // politics: {
      //   title: 'Politics',
      //   href:"/theblog/politics"
      // },
      translife: {
        title: 'Transgender Life',
        href:"/theblog/translife"
      },
      // technology: {
      //   title: 'Technology',
      //   href:"/theblog/technology"
      // },
      sitenews: {
        title: 'Site News',
        href:"/theblog/sitenews"
      }
    }
  },
  about: {
    title: "About", 
    type: "menu",
    items: {
      josie: {
        title: "About Josie", 
        href:"/about/josie"
      },
      privacy: {
        title: "Privacy Policy", 
        href:"/about/privacy"
      },
      license: {
        title: "Licenses & Terms", 
        href:"/about/license"
      }
    }
  }
}