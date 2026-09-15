import { TimelineEvent } from "@/types/timeline";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "african-musical-traditions",
    year: 1600,
    title: "African Musical Traditions Across the Diaspora",
    description:
      "People forcibly brought from Africa to the Americas carried diverse musical knowledge and practices with them. Music was deeply connected to everyday life, work, worship, ceremony, storytelling, and community.",
    significance:
      "These traditions should not be treated as a single direct origin of hip-hop. Instead, practices including rhythmic complexity, communal music-making, improvisation, and call-and-response became part of evolving African American musical traditions that would shape many later genres.",
    era: "foundations",
    category: "culture",
    foundationTheme: "diaspora",
    themes: [
      "African diaspora",
      "rhythm",
      "oral tradition",
      "call and response",
      "community",
    ],
    location: "Africa and the Americas",
    sources: [
      {
        title: "African American Song",
        author: "Library of Congress",
        url: "https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ethnic/african-american-song/",
      },
    ],
  },

  {
    id: "music-under-slavery",
    year: 1700,
    title: "Music, Work, and Cultural Survival Under Slavery",
    description:
      "Enslaved African Americans developed and preserved musical practices within the violent conditions of slavery. Work songs, field hollers, religious gatherings, chants, movement, and communal performance became important forms of expression.",
    significance:
      "Music provided spaces for community, memory, religious expression, communication, and survival. Musical practices developed during slavery became important parts of later African American musical traditions.",
    era: "foundations",
    category: "history",
    foundationTheme: "diaspora",
    themes: [
      "slavery",
      "work songs",
      "field hollers",
      "cultural survival",
      "oral tradition",
    ],
    location: "United States",
    sources: [
      {
        title: "African American Song",
        author: "Library of Congress",
        url: "https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ethnic/african-american-song/",
      },
    ],
  },

  {
    id: "african-american-spirituals",
    year: 1750,
    title: "African American Spirituals Develop",
    description:
      "During slavery, African Americans developed spirituals by transforming Christian religious material through African American musical and cultural practices. Spirituals were transmitted primarily through oral performance.",
    significance:
      "Spirituals demonstrate how Black communities transformed imposed conditions into distinctive forms of cultural expression. Call-and-response, improvisation, rhythm, collective participation, and storytelling would remain important across later Black musical traditions.",
    era: "foundations",
    category: "culture",
    foundationTheme: "musical-traditions",
    themes: [
      "spirituals",
      "religion",
      "call and response",
      "oral tradition",
      "resistance",
    ],
    location: "American South",
    sources: [
      {
        title: "Spirituals",
        author: "Library of Congress",
        url: "https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ritual-and-worship/spirituals/",
      },
      {
        title: "African American Spirituals: Resources in the American Folklife Center",
        author: "Library of Congress",
        url: "https://guides.loc.gov/spirituals-folklife",
      },
    ],
  },

  {
    id: "emancipation-reconstruction",
    year: 1865,
    endYear: 1877,
    title: "Emancipation and Reconstruction",
    description:
      "The abolition of slavery transformed Black life in the United States. During Reconstruction, formerly enslaved people pursued citizenship, education, political participation, family reunification, land ownership, and the creation and expansion of independent community institutions.",
    significance:
      "Emancipation did not erase the cultural traditions developed during slavery. Black churches, schools, colleges, and other institutions became important spaces for preserving, transforming, and circulating African American culture and music.",
    era: "foundations",
    category: "history",
    foundationTheme: "politics",
    themes: [
      "emancipation",
      "Reconstruction",
      "Black institutions",
      "education",
      "freedom",
    ],
    location: "United States",
    sources: [
      {
        title: "Jim Crow & Reconstruction",
        author: "National Park Service",
        url: "https://www.nps.gov/subjects/africanamericanheritage/reconstruction.htm",
      },
      {
        title: "Homecoming: A Celebration of HBCUs and Their Legacies",
        author:
          "National Museum of African American History and Culture",
        url: "https://nmaahc.si.edu/explore/moments/homecoming-celebration-hbcus-and-their-legacies",
      },
    ],
  },

  {
    id: "fisk-jubilee-singers",
    year: 1871,
    title: "The Fisk Jubilee Singers Carry Spirituals to New Audiences",
    description:
      "The Fisk Jubilee Singers formed at Fisk University in 1871 and performed spirituals in the United States and abroad. Their performances helped preserve and introduce this musical tradition to audiences far beyond the communities where it originated.",
    significance:
      "Their history shows how Black musical traditions moved from community and oral settings into institutions, concert spaces, and international circulation after emancipation.",
    era: "foundations",
    category: "culture",
    foundationTheme: "musical-traditions",
    themes: [
      "spirituals",
      "HBCUs",
      "performance",
      "preservation",
      "Black education",
    ],
    location: "Nashville, Tennessee",
    artists: ["Fisk Jubilee Singers"],
    sources: [
      {
        title: "Spirituals",
        author: "Library of Congress",
        url: "https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ritual-and-worship/spirituals/",
      },
    ],
  },

  {
    id: "jim-crow-segregation",
    year: 1877,
    endYear: 1965,
    title: "Jim Crow and Racial Segregation",
    description:
      "Following Reconstruction, state laws, discriminatory institutions, disenfranchisement, and racial violence established and reinforced systems of segregation and white supremacy, particularly across the South.",
    significance:
      "Black cultural production developed within—and responded to—these conditions. Churches, neighborhoods, businesses, performance spaces, and other Black institutions supported community life and artistic expression despite systemic exclusion.",
    era: "foundations",
    category: "history",
    foundationTheme: "politics",
    themes: [
      "Jim Crow",
      "segregation",
      "racial violence",
      "Black institutions",
      "resistance",
    ],
    location: "United States",
    sources: [
      {
        title: "Jim Crow & Reconstruction",
        author: "National Park Service",
        url: "https://www.nps.gov/subjects/africanamericanheritage/reconstruction.htm",
      },
      {
        title: "Reconstruction and Repression, 1865–1900",
        author: "National Park Service",
        url: "https://www.nps.gov/subjects/civilrights/reconstructionandrepression.htm",
      },
    ],
  },

  {
    id: "blues-development",
    year: 1890,
    title: "The Blues Emerges",
    description:
      "Blues developed from African American musical traditions in the decades following emancipation, particularly in the South. The form centered Black experiences through expressive vocals, instrumental performance, improvisation, and storytelling.",
    significance:
      "Blues became foundational to numerous forms of American popular music. Its emphasis on personal testimony, social experience, improvisation, and distinctive approaches to rhythm and sound became part of a much larger Black musical genealogy that eventually included hip-hop.",
    era: "foundations",
    category: "culture",
    foundationTheme: "musical-traditions",
    themes: [
      "blues",
      "storytelling",
      "improvisation",
      "Black music",
      "American South",
    ],
    location: "American South",
    sources: [
      {
        title: "Celebrating Black Music Month",
        author:
          "National Museum of African American History and Culture",
        url: "https://nmaahc.si.edu/explore/stories/celebrating-black-music-month",
      },
    ],
  },

  {
    id: "great-migration",
    year: 1916,
    endYear: 1970,
    title: "The Great Migration Transforms Black Urban Culture",
    description:
      "Millions of African Americans left the South for cities in the North, Midwest, and West during the Great Migration, seeking greater economic opportunities and escaping many of the conditions created by Jim Crow.",
    significance:
      "Migration transformed American cities and Black cultural life. Blues, gospel, jazz, and other regional traditions traveled with migrating communities, encountered one another in urban centers, and developed new forms and audiences. These changing urban cultural networks are an important part of the broader history preceding hip-hop.",
    era: "foundations",
    category: "history",
    foundationTheme: "migration",
    themes: [
      "Great Migration",
      "urbanization",
      "Black cities",
      "blues",
      "gospel",
      "cultural exchange",
    ],
    location: "United States",
    sources: [
      {
        title: "Immigration and Migration",
        author: "Library of Congress",
        url: "https://www.loc.gov/collections/songs-of-america/articles-and-essays/historical-topics/immigration-and-migration/",
      },
      {
        title: "Voices of the Great Migration",
        author: "Library of Congress",
        url: "https://blogs.loc.gov/now-see-hear/2018/08/voices-of-the-great-migration/",
      },
    ],
  },

  /*
   * EARLY HIP-HOP
   * These existing entries keep our transition into the main timeline working.
   */

  {
    id: "cindy-campbell-kool-herc-1973",
    year: 1973,
    title: "Back-to-School Jam at 1520 Sedgwick Avenue",
    description:
      "Cindy Campbell organized a back-to-school party in the Bronx where her brother, DJ Kool Herc, provided the music.",
    significance:
      "The August 1973 party has become an important symbolic landmark in histories of hip-hop and highlights the role women played in hip-hop's early development.",
    era: "1970s",
    category: "culture",
    themes: ["DJing", "parties", "Bronx", "origins"],
    location: "Bronx, New York",
    artists: ["DJ Kool Herc", "Cindy Campbell"],
    womenInHipHop: true,
    sources: [],
  },

  {
    id: "rappers-delight-1979",
    year: 1979,
    title: "\"Rapper's Delight\" Is Released",
    description:
      "The Sugarhill Gang released \"Rapper's Delight,\" bringing recorded hip-hop to a much larger audience.",
    significance:
      "Its commercial success helped demonstrate that hip-hop could reach audiences beyond the communities and live performances where the culture had developed.",
    era: "1970s",
    category: "song",
    themes: ["recording", "commercialization"],
    artists: ["The Sugarhill Gang"],
    sources: [],
  },

  {
    id: "the-message-1982",
    year: 1982,
    title: "\"The Message\" Is Released",
    description:
      "Grandmaster Flash and the Furious Five released \"The Message.\"",
    significance:
      "The recording became an influential example of hip-hop addressing conditions of urban life and inequality.",
    era: "1980s",
    category: "song",
    themes: ["urban life", "social commentary"],
    location: "New York",
    artists: ["Grandmaster Flash and the Furious Five"],
    sources: [],
  },
  {
  id: "harlem-renaissance",
  year: 1918,
  endYear: 1937,
  title: "The Harlem Renaissance",
  description:
    "Harlem became a major center of Black artistic and intellectual life during the early twentieth century. Writers, musicians, visual artists, performers, and thinkers created work that explored Black identity, modern life, migration, racism, and cultural expression.",
  significance:
    "The Harlem Renaissance demonstrates the importance of Black urban communities as spaces for cultural innovation. Its connections between music, poetry, performance, identity, and social commentary form part of the broader history of Black expressive culture that preceded hip-hop.",
  era: "foundations",
  category: "culture",
  foundationTheme: "migration",
  themes: [
    "Harlem Renaissance",
    "Black arts",
    "poetry",
    "urban culture",
    "identity",
  ],
  location: "Harlem, New York",
  sources: [
    {
      title: "The Harlem Renaissance",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/harlem-renaissance",
    },
  ],
},

{
  id: "jazz-black-urban-culture",
  year: 1920,
  title: "Jazz Flourishes in Black Urban Communities",
  description:
    "Jazz expanded dramatically during the early twentieth century as Black musicians developed new approaches to rhythm, improvisation, performance, and musical interaction. Cities including New Orleans, Chicago, and New York became important centers of jazz culture.",
  significance:
    "Jazz established improvisation and musical reinterpretation as central features of Black American music. Its development also demonstrates how migration, urban communities, technology, and performance spaces could transform regional musical traditions into national cultural movements.",
  era: "foundations",
  category: "culture",
  foundationTheme: "musical-traditions",
  themes: [
    "jazz",
    "improvisation",
    "urban culture",
    "Black music",
    "performance",
  ],
  location: "United States",
  sources: [
    {
      title: "What Is Jazz?",
      author: "National Museum of American History",
      url: "https://americanhistory.si.edu/explore/exhibitions/jazz",
    },
  ],
},

{
  id: "gospel-music-development",
  year: 1930,
  title: "Gospel Music Expands",
  description:
    "African American gospel music developed from spirituals, hymns, blues, and Black church traditions. Performers and composers brought increasingly powerful vocal styles, rhythm, improvisation, and contemporary musical influences into religious music.",
  significance:
    "Gospel became a major influence on later soul, R&B, rock, and popular music. It also continued traditions of collective participation, expressive vocal performance, improvisation, and call-and-response.",
  era: "foundations",
  category: "culture",
  foundationTheme: "musical-traditions",
  themes: [
    "gospel",
    "Black church",
    "spirituals",
    "call and response",
    "vocal performance",
  ],
  location: "United States",
  sources: [
    {
      title: "African American Gospel",
      author: "Smithsonian Folkways",
      url: "https://folkways.si.edu/african-american-gospel/music/article/smithsonian",
    },
  ],
},

{
  id: "rhythm-and-blues",
  year: 1940,
  title: "Rhythm and Blues Takes Shape",
  description:
    "During the 1940s, new forms of Black popular music combined elements of blues, jazz, gospel, and dance music. The term rhythm and blues came to describe a broad range of these increasingly popular styles.",
  significance:
    "R&B helped establish the musical and commercial landscape from which soul, funk, rock and roll, and eventually sampled hip-hop recordings would emerge. It also demonstrates the growing importance of recording technology and the music industry in circulating Black music.",
  era: "foundations",
  category: "industry",
  foundationTheme: "musical-traditions",
  themes: [
    "R&B",
    "recording",
    "Black popular music",
    "music industry",
    "dance music",
  ],
  location: "United States",
  sources: [
    {
      title: "Rhythm and Blues",
      author: "Smithsonian Institution",
      url: "https://nmaahc.si.edu/explore/initiatives/rhythm-blues",
    },
  ],
},

{
  id: "civil-rights-movement",
  year: 1954,
  endYear: 1968,
  title: "The Civil Rights Movement",
  description:
    "Black activists and organizations challenged segregation, disenfranchisement, racial violence, and other systems of discrimination through organizing, protest, litigation, direct action, and community activism.",
  significance:
    "Music became deeply connected to movement organizing and political expression. Freedom songs and other forms of Black music demonstrated how existing cultural traditions could be transformed to communicate collective identity, resistance, and demands for social change.",
  era: "foundations",
  category: "history",
  foundationTheme: "politics",
  themes: [
    "Civil Rights Movement",
    "activism",
    "freedom songs",
    "protest",
    "political expression",
  ],
  location: "United States",
  sources: [
    {
      title: "Music in the Civil Rights Movement",
      author: "Library of Congress",
      url: "https://www.loc.gov/collections/civil-rights-history-project/articles-and-essays/music-in-the-civil-rights-movement/",
    },
  ],
},

{
  id: "jamaican-sound-system-culture",
  year: 1950,
  title: "Jamaican Sound-System Culture Develops",
  description:
    "Mobile sound systems became central to Jamaican popular music and nightlife. DJs and selectors played records through powerful speaker systems at community dances, while performers developed practices of speaking or 'toasting' over recorded music.",
  significance:
    "Jamaican sound-system culture is particularly important to hip-hop history because DJ Kool Herc grew up in Jamaica before moving to the Bronx. The culture of powerful sound systems, DJs, parties, and performing over records provides an important transnational context for his later approach to DJing.",
  era: "foundations",
  category: "culture",
  foundationTheme: "sound-system",
  themes: [
    "Jamaica",
    "sound systems",
    "DJ culture",
    "toasting",
    "Caribbean diaspora",
  ],
  location: "Jamaica",
  sources: [
    {
      title: "Jamaican Sound Systems",
      author: "Smithsonian",
      url: "https://folkways.si.edu/",
    },
  ],
},

{
  id: "soul-music",
  year: 1950,
  endYear: 1969,
  title: "Soul Music Emerges",
  description:
    "Soul music developed through the interaction of gospel, rhythm and blues, and other Black musical traditions. Artists brought the emotional intensity and vocal techniques of Black church music into popular recordings.",
  significance:
    "Soul became closely connected to Black identity during the Civil Rights era and created recordings that later became part of hip-hop's musical vocabulary through DJing and sampling.",
  era: "foundations",
  category: "culture",
  foundationTheme: "musical-traditions",
  themes: [
    "soul",
    "R&B",
    "gospel",
    "Black identity",
    "sampling",
  ],
  location: "United States",
  sources: [
    {
      title: "Musical Crossroads",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/exhibitions/musical-crossroads",
    },
  ],
},

{
  id: "black-power-movement",
  year: 1966,
  endYear: 1975,
  title: "Black Power and Black Cultural Nationalism",
  description:
    "Black Power movements emphasized self-determination, racial pride, community control, political power, and new expressions of Black identity. Artists increasingly connected cultural production with questions of liberation and political consciousness.",
  significance:
    "The period strengthened connections between Black culture, identity, politics, and artistic expression. These ideas would continue to appear throughout hip-hop as artists debated race, inequality, policing, community, capitalism, and Black identity.",
  era: "foundations",
  category: "history",
  foundationTheme: "politics",
  themes: [
    "Black Power",
    "Black identity",
    "politics",
    "cultural nationalism",
    "resistance",
  ],
  location: "United States",
  sources: [
    {
      title: "Black Power",
      author: "National Archives",
      url: "https://www.archives.gov/research/african-americans/black-power",
    },
  ],
},

{
  id: "funk-breaks",
  year: 1965,
  title: "Funk Centers Rhythm and the Break",
  description:
    "Funk developed around strong rhythmic grooves, syncopated bass lines, drums, and repeated musical patterns. Performers including James Brown placed increasing emphasis on rhythm and extended instrumental sections.",
  significance:
    "Funk recordings became extraordinarily important to early hip-hop DJs. DJs would later isolate and extend percussion-heavy sections known as breaks, allowing dancers more time to move to the most rhythmically intense sections of records.",
  era: "foundations",
  category: "culture",
  foundationTheme: "musical-traditions",
  themes: [
    "funk",
    "breaks",
    "rhythm",
    "DJing",
    "sampling",
  ],
  location: "United States",
  artists: ["James Brown"],
  sources: [
    {
      title: "Musical Crossroads",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/exhibitions/musical-crossroads",
    },
  ],
},

{
  id: "spoken-word-black-arts",
  year: 1965,
  endYear: 1975,
  title: "Black Arts and Spoken-Word Traditions",
  description:
    "Poets and musicians associated with the Black Arts era combined spoken language, rhythm, music, political critique, and Black cultural expression. Artists including Amiri Baraka, Nikki Giovanni, Gil Scott-Heron, and the Last Poets explored the possibilities of poetry as performance.",
  significance:
    "These artists were not simply 'early rappers,' but their rhythmic spoken-word performances demonstrate an important contemporary tradition connecting poetry, music, Black politics, storytelling, and performance before recorded hip-hop.",
  era: "foundations",
  category: "culture",
  foundationTheme: "politics",
  themes: [
    "spoken word",
    "Black Arts Movement",
    "poetry",
    "politics",
    "performance",
  ],
  location: "United States",
  artists: [
    "Amiri Baraka",
    "Nikki Giovanni",
    "Gil Scott-Heron",
    "The Last Poets",
  ],
  sources: [
    {
      title: "The Black Arts Movement",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/",
    },
  ],
},

{
  id: "bronx-postindustrial-crisis",
  year: 1960,
  endYear: 1975,
  title: "The Bronx Faces Disinvestment and Urban Crisis",
  description:
    "During the mid-twentieth century, sections of the Bronx experienced major economic and demographic changes shaped by deindustrialization, housing discrimination, disinvestment, urban renewal, infrastructure projects, and population displacement.",
  significance:
    "Hip-hop emerged within these conditions, but it should not be understood simply as a product of urban decline. Young people created new forms of music, dance, visual art, fashion, and community from the resources and spaces available to them.",
  era: "foundations",
  category: "history",
  foundationTheme: "bronx",
  themes: [
    "Bronx",
    "deindustrialization",
    "disinvestment",
    "urban renewal",
    "youth culture",
  ],
  location: "Bronx, New York",
  sources: [
    {
      title: "Hip-Hop in the Bronx",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "block-party-culture",
  year: 1970,
  title: "Block Parties Create New Cultural Spaces",
  description:
    "Young people in the Bronx organized parties in community rooms, parks, streets, and other neighborhood spaces. DJs assembled sound systems and played records while dancers, MCs, and audiences participated in increasingly distinctive forms of performance.",
  significance:
    "The party became one of the central social spaces in which the elements associated with hip-hop could interact. DJing, MCing, breaking, fashion, visual culture, competition, and community participation developed alongside one another rather than as isolated inventions.",
  era: "foundations",
  category: "culture",
  foundationTheme: "bronx",
  themes: [
    "block parties",
    "Bronx",
    "DJing",
    "MCing",
    "breaking",
    "community",
  ],
  location: "Bronx, New York",
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},
{
  id: "cindy-campbell-kool-herc-1973",
  year: 1973,
  title: "Cindy Campbell and DJ Kool Herc's Back-to-School Jam",
  description:
    "On August 11, 1973, Cindy Campbell organized a back-to-school party in the recreation room of 1520 Sedgwick Avenue in the Bronx. Her brother Clive Campbell, known as DJ Kool Herc, provided the music.",
  significance:
    "The party has become a symbolic landmark in hip-hop history. It also highlights Cindy Campbell's role as an organizer and reminds us that women participated in hip-hop's history from its earliest years.",
  era: "1970s",
  category: "culture",
  themes: [
    "Bronx",
    "block parties",
    "DJing",
    "community",
    "origins",
  ],
  location: "Bronx, New York",
  artists: ["DJ Kool Herc", "Cindy Campbell"],
  womenInHipHop: true,
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "kool-herc-merry-go-round",
  year: 1973,
  title: "DJ Kool Herc Extends the Break",
  description:
    "DJ Kool Herc became known for focusing on the instrumental break sections of funk and soul records. Using two turntables, he could move between breaks and extend the sections dancers responded to most strongly.",
  significance:
    "Extending the break transformed recorded music into material that could be reorganized live by the DJ. The technique helped establish the DJ as a creative performer rather than simply someone playing records.",
  era: "1970s",
  category: "technology",
  themes: [
    "DJing",
    "breakbeats",
    "turntables",
    "Merry-Go-Round",
    "innovation",
  ],
  location: "Bronx, New York",
  artists: ["DJ Kool Herc"],
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "breaking-emerges",
  year: 1973,
  title: "Breaking Develops Around the Break",
  description:
    "Dancers at early hip-hop parties developed increasingly competitive and expressive styles of movement during the break sections selected and extended by DJs. These dancers became known as b-boys and b-girls.",
  significance:
    "Breaking demonstrates that hip-hop developed as more than a musical genre. Dance, competition, physical expression, style, and interaction between DJs and audiences were central to the culture from its early development.",
  era: "1970s",
  category: "culture",
  themes: [
    "breaking",
    "b-boys",
    "b-girls",
    "dance",
    "breakbeats",
  ],
  location: "New York City",
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "mcing-early-parties",
  year: 1974,
  title: "MCing Expands at Hip-Hop Parties",
  description:
    "MCs increasingly accompanied DJs at parties, using microphones to energize crowds, introduce performers, make announcements, rhyme, joke, boast, and interact with audiences.",
  significance:
    "What began partly as crowd interaction developed into increasingly elaborate rhythmic rhyming and verbal performance. The MC would eventually move from supporting the DJ to becoming one of hip-hop's most visible performers.",
  era: "1970s",
  category: "culture",
  themes: [
    "MCing",
    "rapping",
    "oral performance",
    "parties",
    "rhyming",
  ],
  location: "Bronx, New York",
  artists: ["Coke La Rock"],
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "grandmaster-flash-dj-techniques",
  year: 1975,
  title: "Grandmaster Flash Advances Turntable Technique",
  description:
    "Grandmaster Flash developed highly precise methods for locating, repeating, and manipulating sections of records using turntables and a mixer.",
  significance:
    "Flash's techniques expanded the creative possibilities of DJing. The turntable increasingly functioned as an instrument that allowed existing recordings to be rearranged into new live compositions.",
  era: "1970s",
  category: "technology",
  themes: [
    "DJing",
    "turntablism",
    "mixing",
    "breakbeats",
    "technology",
  ],
  location: "Bronx, New York",
  artists: ["Grandmaster Flash"],
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "graffiti-hip-hop-culture",
  year: 1975,
  title: "Graffiti and Hip-Hop Youth Culture Intersect",
  description:
    "Graffiti writing had already developed across New York City as young artists placed names, tags, and increasingly elaborate pieces on walls, buildings, and subway trains. Graffiti writers and participants in the emerging hip-hop scene often occupied overlapping social spaces.",
  significance:
    "Graffiti became strongly associated with hip-hop culture, particularly as journalists and cultural institutions later grouped DJing, MCing, breaking, and graffiti together. Its history also demonstrates hip-hop's broader relationship to visual expression, public space, identity, and visibility.",
  era: "1970s",
  category: "culture",
  themes: [
    "graffiti",
    "visual art",
    "public space",
    "New York",
    "youth culture",
  ],
  location: "New York City",
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "afrika-bambaataa-zulu-nation",
  year: 1977,
  title: "Afrika Bambaataa and the Universal Zulu Nation",
  description:
    "Afrika Bambaataa became an influential DJ and community figure in the Bronx and helped develop the organization that became known as the Universal Zulu Nation.",
  significance:
    "Bambaataa's work connected hip-hop with ideas about community organization, knowledge, competition, identity, and alternatives to neighborhood violence. It helped establish hip-hop as a broader culture rather than simply a style of music.",
  era: "1970s",
  category: "culture",
  themes: [
    "Zulu Nation",
    "community",
    "Bronx",
    "DJing",
    "organization",
  ],
  location: "Bronx, New York",
  artists: ["Afrika Bambaataa"],
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "sugar-hill-records",
  year: 1979,
  title: "Sylvia Robinson Helps Launch Sugar Hill Records",
  description:
    "Musician and producer Sylvia Robinson co-founded Sugar Hill Records and recognized the commercial potential of the emerging hip-hop sound.",
  significance:
    "Sugar Hill Records played a major role in moving hip-hop from live parties into the recording industry. Robinson's role also demonstrates that women were important not only as performers but as producers and executives in hip-hop's early commercial development.",
  era: "1970s",
  category: "industry",
  themes: [
    "record industry",
    "commercialization",
    "production",
    "women",
    "Sugar Hill Records",
  ],
  location: "Englewood, New Jersey",
  artists: ["Sylvia Robinson"],
  womenInHipHop: true,
  sources: [
    {
      title: "Sylvia Robinson",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/",
    },
  ],
},

{
  id: "rappers-delight-1979",
  year: 1979,
  title: "\"Rapper's Delight\" Becomes a Commercial Breakthrough",
  description:
    "The Sugarhill Gang released \"Rapper's Delight\" in 1979. The recording brought rap to audiences far beyond the live party scenes where hip-hop had developed.",
  significance:
    "The record demonstrated hip-hop's commercial potential and helped transform a culture centered on live performance into a recorded musical industry. That transition also created new debates about authenticity, ownership, and commercialization.",
  era: "1970s",
  category: "song",
  themes: [
    "recording",
    "commercialization",
    "rap",
    "music industry",
  ],
  location: "New York metropolitan area",
  artists: ["The Sugarhill Gang"],
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "the-sequence",
  year: 1979,
  title: "The Sequence Records for Sugar Hill",
  description:
    "The Sequence, a rap group consisting of Angie Stone, Cheryl 'The Pearl' Cook, and Gwendolyn 'Blondie' Chisolm, became one of the earliest all-women rap groups to release records.",
  significance:
    "The Sequence challenges narratives that position women as late arrivals to recorded hip-hop. Women participated in rap during the genre's earliest transition into the commercial recording industry.",
  era: "1970s",
  category: "artist",
  themes: [
    "women",
    "rap groups",
    "Sugar Hill Records",
    "recording",
  ],
  location: "South Carolina / New York",
  artists: ["The Sequence", "Angie Stone"],
  womenInHipHop: true,
  sources: [
    {
      title: "The Sequence",
      author: "Smithsonian National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/",
    },
  ],
},

{
  id: "funky-four-plus-one",
  year: 1980,
  title: "Funky 4 + 1 Highlights Women in Early Hip-Hop",
  description:
    "Funky 4 + 1 became an important early hip-hop group featuring Sha-Rock alongside male MCs. Sha-Rock was one of the pioneering women MCs in the emerging culture.",
  significance:
    "Sha-Rock's presence complicates histories of hip-hop that treat women as later participants. Women were performing and developing MC styles during hip-hop's formative years.",
  era: "1980s",
  category: "artist",
  themes: [
    "women",
    "MCing",
    "early hip-hop",
    "Bronx",
  ],
  location: "Bronx, New York",
  artists: ["Funky 4 + 1", "Sha-Rock"],
  womenInHipHop: true,
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "funky-four-snl",
  year: 1981,
  title: "Funky 4 + 1 Performs on Saturday Night Live",
  description:
    "Funky 4 + 1 appeared on Saturday Night Live in 1981 after being introduced by host Debbie Harry of Blondie.",
  significance:
    "The appearance brought an early hip-hop group—and pioneering woman MC Sha-Rock—onto national television at a time when hip-hop was still unfamiliar to much of the United States.",
  era: "1980s",
  category: "industry",
  themes: [
    "television",
    "mainstream media",
    "women",
    "commercialization",
  ],
  location: "New York City",
  artists: ["Funky 4 + 1", "Sha-Rock"],
  womenInHipHop: true,
  sources: [
    {
      title: "Hip-Hop History",
      author: "National Museum of African American History and Culture",
      url: "https://nmaahc.si.edu/explore/stories/hip-hop-history",
    },
  ],
},

{
  id: "the-message-1982",
  year: 1982,
  title: "\"The Message\" Changes the Possibilities of Recorded Rap",
  description:
    "Grandmaster Flash and the Furious Five released \"The Message,\" a recording centered on the pressures and conditions of urban life.",
  significance:
    "The song demonstrated the potential for commercially recorded hip-hop to engage explicitly with poverty, inequality, frustration, and urban conditions. Social commentary would become an important tradition within later hip-hop.",
  era: "1980s",
  category: "song",
  themes: [
    "social commentary",
    "urban life",
    "inequality",
    "recording",
  ],
  location: "New York City",
  artists: ["Grandmaster Flash and the Furious Five", "Melle Mel"],
  sources: [
    {
      title: "The Message",
      author: "Library of Congress",
      url: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/TheMessage.pdf",
    },
  ],
},

{
  id: "planet-rock-1982",
  year: 1982,
  title: "\"Planet Rock\" Pushes Hip-Hop Toward Electronic Sound",
  description:
    "Afrika Bambaataa and the Soulsonic Force released \"Planet Rock,\" combining hip-hop with electronic sounds and drum-machine-driven production.",
  significance:
    "The recording demonstrated that hip-hop production could move beyond funk breaks and creatively absorb electronic music and new technologies. Its sound became influential in hip-hop, electro, dance music, and later electronic genres.",
  era: "1980s",
  category: "song",
  themes: [
    "electronic music",
    "drum machines",
    "technology",
    "electro",
    "production",
  ],
  location: "New York City",
  artists: ["Afrika Bambaataa", "Soulsonic Force"],
  sources: [
    {
      title: "Planet Rock",
      author: "Library of Congress",
      url: "https://www.loc.gov/",
    },
  ],
},
];