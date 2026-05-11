import throneImg1 from '../assets/cases/throne/img-1.png'
import throneImg2 from '../assets/cases/throne/img-2.png'
import throneImg3 from '../assets/cases/throne/img-3.png'
import throneImg4 from '../assets/cases/throne/img-4.png'
import throneImg5 from '../assets/cases/throne/img-5.png'
import throneImg6 from '../assets/cases/throne/img-6.png'
import throneImg7 from '../assets/cases/throne/img-7.png'
import throneVideo from '../assets/cases/throne/extension.mov'

import espheraImg1 from '../assets/cases/esphera/img-1.png'
import espheraImg2 from '../assets/cases/esphera/img-2.png'
import espheraImg3 from '../assets/cases/esphera/img-3.png'
import espheraImg4 from '../assets/cases/esphera/img-4.png'
import espheraImg5 from '../assets/cases/esphera/img-5.png'
import espheraVideo from '../assets/cases/esphera/video.mov'

import sosImg1 from '../assets/seedoils/img-1.png'
import sosImg2 from '../assets/seedoils/img-2.png'
import sosImg3 from '../assets/seedoils/img-3.png'
import sosImg4 from '../assets/seedoils/img-4.png'
import sosImg5 from '../assets/seedoils/img-5.png'

import unboundImg1 from '../assets/unbound/img-1.png'
import unboundImg2 from '../assets/unbound/img-2.png'
import unboundImg3 from '../assets/unbound/img-3.png'
import unboundImg4 from '../assets/unbound/img-4.png'
import unboundCheck from '../assets/unbound/check.svg'

import royoVideo  from '../assets/royo/video.mov'
import royoImg2   from '../assets/royo/img-2.png'
import royoImg3   from '../assets/royo/img-3.png'
import royoImg4   from '../assets/royo/img-4.png'
import royoImg5   from '../assets/royo/img-5.png'

import tmImg1 from '../assets/trucksmarter/img-1.png'
import tmImg2 from '../assets/trucksmarter/img-2.png'
import tmImg3 from '../assets/trucksmarter/img-3.png'
import tmImg4 from '../assets/trucksmarter/img-4.png'
import tmImg5 from '../assets/trucksmarter/img-5.png'

import petlyImg1 from '../assets/petly/img-1.png'
import petlyImg2 from '../assets/petly/img-2.png'
import petlyImg3 from '../assets/petly/img-3.png'
import petlyImg4 from '../assets/petly/img-4.png'
import petlyImg5 from '../assets/petly/img-5.png'

export const cases = {
  esphera: {
    slug: 'esphera',
    title: 'Esphera Capital',
    industry: 'Fintech — Wealth Management',
    role: ['Product Designer'],
    tools: ['Figma', 'After Effects', 'Artlist'],
    timeline: ['8 Months'],
    description: [
      { text: 'Esphera Capital', href: 'https://espheracapital.com' },
      { text: ' is a wealth management firm that provides clients with a unified view of their investments and supports long-term financial growth.' },
    ],
    context: [
      'I worked as a Senior Product Designer, leading the design of a new digital platform as the company moved away from third-party tools to build their own product.',
      'The shift aimed to give them full control over the experience, better reflect their brand, and create a more cohesive way for clients to interact with their portfolios.',
    ],
    ctaLabel: 'Download Esphera',
    ctaHref: 'https://apps.apple.com/co/app/esphera-capital/id6755967305',
    sections: [
      { videoBlock: true, videoSrc: espheraVideo },
      {
        title: 'The problem',
        body: [
          'Esphera Capital had a strong brand identity but no product of their own — their clients were managed through a third-party platform that was generic, hard to customize, and disconnected from the Esphera experience. The decision to build their own platform meant starting the product from zero: no screens, no design system, no established patterns — just a brand manual and a complex financial domain to translate into a cohesive, trustworthy experience across web and mobile.',
        ],
      },
      { imageBlock: true, imageSrc: espheraImg1, imageBg: 'transparent' },
      { imageBlock: true, imageSrc: espheraImg2, imageBg: 'transparent' },
      {
        title: 'My process',
        blocks: [
          {
            body: [
              [
                { text: 'One of the defining constraints of this project was working without detailed requirements. ' },
                { text: 'As the sole designer on a product being defined in real time, I had to create structure where there wasn\'t any', bold: true },
                { text: ' — mapping the full scope.' },
              ],
              [
                { text: 'Before touching UI, I mapped the full user flows for both audiences — end clients and advisors — to understand where the product could break down. ' },
                { text: 'The biggest risk wasn\'t aesthetics: it was deriving portfolio data', bold: true },
                { text: ' — including performance, allocation, historical performance, multi-account management, and collapsing the experience on mobile.' },
              ],
              [
                { text: 'I built the design system in parallel with the first product screens, not after.', bold: true },
                { text: ' That forced component and token decisions to be grounded in real use cases from day one — avoiding the typical "redesign everything" cycle. I worked in short review cycles with the development team, testing feasibility early and reducing rework in later stages.' },
              ],
              [
                { text: 'The result was 11 core sections — Overview, Balance, Performance, Asset Allocation, Banks, Geographic Exposure, Activity, Transfer Request, External Accounts, Reports, and Settings — each with nested flows and sub-sections, ' },
                { text: 'fully adapted to mobile, tablet, and desktop across every screen.', bold: true },
              ],
            ],
          },
        ],
        callout: 'Key decisions',
        checkList: [
          [
            { text: 'Client tiers (Bronze → Platinum)', bold: true },
            { text: ' — Without a sense of progression, all clients — regardless of portfolio size — feel the same experience, diluting perceived value. The tier system introduced hierarchy into the experience and created an impact engagement incentive, aligned with Esphera\'s premium positioning.' },
          ],
          [
            { text: 'Dark mode as a first-class feature', bold: true },
            { text: ' — In wealth management, high-net-worth users expect a premium product. I designed both themes simultaneously from the first screen — not as a toggle added at the end, but as a constraint that made every component intentional across both contexts.' },
          ],
          [
            { text: 'Admin panel with controlled complexity', bold: true },
            { text: ' — The admin panel needed to handle client, account, and permission management without overwhelming users. I chose a progressive information architecture — surfacing only what\'s needed at each level — rather than exposing full complexity upfront.' },
          ],
        ],
      },
      { imageBlock: true, imageSrc: espheraImg3, imageBg: 'transparent' },
      { imageBlock: true, imageSrc: espheraImg4, imageBg: 'transparent' },
      {
        title: 'Results',
        checkList: [
          '11 core sections with full nested flows, each adapted to 3 breakpoints (mobile, tablet, desktop) — delivered as part of the core product scope.',
          'Platform launched to 7 markets — mobile, tablet, and web admin — built on a scalable design system the team continues to grow.',
          'Dark mode and the tier system differentiated the product in a market where most competitors offer neither.',
          'Stakeholders aligned on this product direction without a formal plan — navigating that ambiguity and earning the team\'s collective trust was one of the most demanding and rewarding parts of the project.',
          'Delivered the full launch package beyond product screens: App Store and Play Store visual assets, and the platform launch video.',
          'Live in the App Store & Play Store since launch!',
        ],
      },
      { imageBlock: true, imageSrc: espheraImg5, imageBg: 'transparent' },
      {
        title: 'What I learned',
        body: [
          [
            { text: 'Translating an existing brand into a product from zero forces you to make hundreds of decisions that the brand guidelines don\'t answer. ' },
            { text: 'I learned that a design system isn\'t just about documentation', bold: true },
            { text: ' — it\'s the set of decisions you make early enough that they don\'t become problems later.' },
          ],
          [
            { text: 'Products don\'t fail on execution', bold: true },
            { text: ' — they fail when no one makes the structural decisions early enough. Building the design system in parallel with the product, and mapping all flows before touching UI, were the two calls that kept this project from unraveling.' },
          ],
        ],
      },
    ],
  },
  throne: {
    slug: 'throne',
    title: 'Throne & Listful',
    industry: 'Consumer & Creator Platforms',
    role: ['Product Designer', 'Branding', 'Visual Designer'],
    tools: ['Figma', 'After Effects', 'Webflow'],
    timeline: ['9 Months'],
    description: [
      [
        { text: 'Throne and Listful are two independent products under the same company, each addressing different aspects of the gifting and shopping experience. Throne is a gifting platform with ' },
        { text: '1M+ users', bold: true },
        { text: ', enabling creators to receive gifts from their audience while protecting sensitive information such as shipping addresses.' },
      ],
      [
        { text: 'Listful is a separate product focused on collaborative and AI-powered wishlist creation, helping users discover and organize products.' },
      ],
    ],
    context: [
      [
        { text: 'I worked as a Senior Product Designer on Throne and Listful, two independent platforms under the same company, collaborating closely with ' },
        { text: 'Eike Drescher', bold: true },
        { text: ', who led the full redesign of both products.' },
      ],
    ],
    ctaLabel: 'Download Throne',
    ctaHref: 'https://apps.apple.com/us/app/throne-wishlist-for-creators/id6449217258',
    ctaSecondaryLabel: 'Download Listful',
    ctaSecondaryHref: 'https://apps.apple.com/us/app/listful-wishlist-shopping/id6505107527',
    sections: [
      { imageBlock: true, imageSrc: throneImg2, imageBg: 'transparent' },
      {
        title: 'The problem',
        body: [
          'Throne and Listful are two complementary products under the same company — one built for creator communities, the other for everyday shoppers and gift discovery. Both were live and growing, but the design team was lean: one lead designer setting product direction, and a development team that needed everything documented, specced, and ready to build without gaps.',
          'The challenge wasn\'t designing a single feature — it was keeping two products moving in parallel without quality dropping on either side.',
        ],
      },
      { imageBlock: true, imageSrc: throneImg1, imageBg: 'transparent' },
      { imageBlock: true, imageSrc: throneImg5, imageBg: 'transparent' },
      { imageBlock: true, imageSrc: throneImg6, imageBg: 'transparent' },
      {
        title: 'My role',
        body: [
          'I worked as the generalist layer of the design team alongside Elke, the lead designer. The dynamic was genuinely collaborative — weekly syncs, constant communication in Slack, and a working relationship where I could question direction, not just execution. That kind of fluid communication extended across every area I touched: marketing, development, and product worked as one connected loop rather than separate handoffs.',
          'In practice, my scope covered four areas simultaneously:',
        ],
        checkList: [
          [
            { text: 'Product support on Throne', bold: true },
            { text: ' — Collaborated closely with the lead designer, owning the handoff to development and mapping every edge case that wasn\'t accounted for in the main flows — the states, errors, empty states, and corner cases that break products in production if no one catches them.' },
          ],
          [
            { text: 'Owned key flows end-to-end', bold: true },
            { text: ' — Proposed and led the redesign of the Profile, Cart & Checkout, Settings, and Navigation structure on Throne — identifying friction points, defining the improved flows, and seeing them through to implementation.' },
          ],
          [
            { text: 'Design QA', bold: true },
            { text: ' — Verified Figma specs against implemented screens alongside the development team — closing the gap between designed and developed product, and ensuring quality at the last mile of the process.' },
          ],
          [
            { text: 'AI & Discovery (Listful)', bold: true },
            { text: ' — Supported AI-generated guides and product discovery flows.' },
          ],
          [
            { text: 'Design systems across both products', bold: true },
            { text: ' — Built and maintained the component library used by both Throne and Listful, keeping it updated as the products evolved and ensuring the development team had a reliable, documented source of truth.' },
          ],
          [
            { text: 'Side designer for the marketing team', bold: true },
            { text: ' — Handled all design requests from marketing across both products — social posts, banners, campaign assets, flyers, and motion — while keeping visual consistency with the product and brand.' },
          ],
          [
            { text: 'Brand continuity', bold: true },
            { text: ' — Worked alongside recurring logo and identity updates on both products, integrating changes across all surfaces without disrupting what was already in production.' },
          ],
        ],
      },
      { imageBlock: true, imageSrc: throneImg4, imageBg: 'transparent' },
      {
        title: 'What made it complex',
        body: [
          'Both products ran in parallel on the same timeline. A system change in Throne had implications for Listful. A marketing campaign had to align with whatever was live in the product. An identity update meant updating components, screens, and assets simultaneously. Managing that surface area — while staying closely synced with every team involved — was the core challenge.',
        ],
      },
      { imageBlock: true, imageSrc: throneImg7, imageBg: 'transparent' },
      {
        title: 'Results',
        checkList: [
          'Two products maintained at production quality simultaneously across product and marketing.',
          'Design QA process established with the development team, reducing implementation gaps between Figma specs and shipped product.',
          'Development team had a consistently documented component library, reducing back-and-forth and implementation errors on edge cases.',
          'Marketing team had dedicated design support without pulling the product team away from core work.',
          'Profile, settings, and navigation redesign on Throne shipped as proposed improvements to core UX flows.',
        ],
      },
      { imageBlock: true, imageSrc: throneImg3, imageBg: 'transparent' },
      { videoBlock: true, videoSrc: throneVideo, videoAuto: true },
      {
        title: 'What I learned',
        body: [
          'Working across two products simultaneously in a fast-paced environment taught me to think in systems before individual screens — when a decision affects five surfaces instead of one, you stop optimizing locally and start designing for coherence. Tight timelines and evolving priorities required moving fluidly between systems thinking, refining existing ones, and catching the edge cases where product quality is actually won or lost.',
          'Collaborating closely with Elke was one of the most valuable parts of this experience — contributing to a genuinely collaborative dynamic where an experienced designer added both depth and perspective to my process, and pushed me to be more deliberate about every decision I brought to the table.',
          'Overall, this strengthened my ability to design within ambiguity, deliver under pressure, and contribute meaningfully across product design, systems thinking, and visual execution.',
        ],
      },
    ],
  },
  sos: {
    slug: 'sos',
    title: 'Seed Oils Scout',
    industry: 'Health & Wellness',
    role: ['Product Designer', 'Visual Designer'],
    tools: ['Figma', 'Jitter'],
    timeline: ['6 Months'],
    description: [
      { text: 'Seed Oils Scout', href: 'https://www.seedoilscout.com' },
      { text: ' is a consumer-focused platform designed to help users make informed decisions about nutrition and seed oil consumption through accessible, easy-to-understand information.' },
    ],
    context: [
      'I worked directly with the product owner and a developer to improve a product that struggled to convert and retain users, largely due to a 22-step onboarding flow with high drop-off rates.',
      'Beyond onboarding, the experience lacked clarity and balance — users were required to provide significant input before receiving meaningful value, and key features felt fragmented or difficult to navigate.',
      'The opportunity was to rethink the product holistically: simplifying access, clarifying value, and creating a more engaging and cohesive experience.',
    ],
    ctaLabel: 'Download Seed Oils',
    ctaHref: 'https://apps.apple.com/us/app/seed-oil-scout-healthy-dining/id1627514527',
    sections: [
      { imageBlock: true, imageSrc: sosImg1 },
      {
        title: 'Process',
        body: [
          'Working within a small, focused team allowed for fast iteration and direct impact on product decisions.',
          'I approached the product end-to-end — not just onboarding — identifying friction points across flows and rethinking how different parts of the experience connected.',
          'This involved redefining journeys, simplifying complex interactions, and continuously validating ideas together to ensure both usability and feasibility.',
        ],
      },
      { imageBlock: true, imageSrc: sosImg2, imageBg: '#EBF4EB', imageFit: 'contain' },
      { imageBlock: true, imageSrc: sosImg3 },
      {
        title: 'Understanding ingredients instantly',
        body: [
          'I designed a grocery scan flow that allows users to analyze ingredients through a simple photo, turning a complex decision into an immediate, accessible insight.',
          'The experience translates raw ingredient data into clear categories — recommended, ok, caution, or avoid — helping users quickly understand product quality without needing prior knowledge.',
        ],
      },
      { imageBlock: true, imageSrc: sosImg4 },
      {
        title: 'Designing for conversion',
        body: [
          'I improved key moments across the product to reduce friction and make the experience more intuitive and engaging.',
          'This included redesigning entry points like paywall and login to better communicate value, as well as introducing a mission-based system to encourage ongoing engagement through rewards and progression.',
          'I also simplified complex interactions, such as consolidating advanced filters into a single flexible sheet, and redesigned reporting flows to support both quick and detailed input — lowering the barrier for user contribution.',
          'Additionally, I refined map interactions, improving pin previews and key actions to support faster and more confident exploration.',
        ],
      },
      { imageBlock: true, imageSrc: sosImg5 },
      {
        title: 'Outcome',
        body: [
          'The redesign resulted in a more accessible and engaging experience, reducing friction across key flows and improving how users interact with the product.',
          'By simplifying onboarding and expanding improvements across the platform, the experience became more cohesive, intuitive, and aligned with user expectations.',
          'The work also helped establish a stronger foundation for future growth and iteration.',
        ],
      },
    ],
  },
  unbound: {
    slug: 'unbound',
    title: 'Unbound',
    industry: 'Finance',
    role: ['Product Designer', 'Visual Designer'],
    tools: ['Figma', 'Gemini'],
    timeline: ['9 Months'],
    theme: 'green',
    checkIcon: unboundCheck,
    description: 'Unbound is a financial platform focused on helping users manage and resolve their debt through flexible, self-service solutions, making the process more accessible, transparent, and less stressful.',
    context: [
      'Unbound aimed to transform the debt collection experience into something more empowering and user-friendly, combining self-service tools with optional human support.',
      'I joined the project to contribute to a full product redesign, with the goal of improving conversion rates and increasing user engagement. Despite offering valuable solutions, the platform faced challenges around usability, clarity, and user retention, requiring a complete rethink of the experience.',
    ],
    sections: [
      { imageBlock: true, imageSrc: unboundImg1 },
      {
        title: 'Process',
        body: [
          'The starting point was a deep dive into the existing experience, identifying friction points that were impacting both conversion and user engagement.',
          'From there, I focused on redesigning key moments in the journey — especially around debt management and payment flows — simplifying complex interactions and making next steps clearer and more actionable.',
          'I also restructured the information architecture to better communicate value, helping users understand their options and feel more in control of their progress.',
          'Throughout the process, I collaborated across teams to ensure the solutions were feasible, aligned with business goals, and delivered a more intuitive and trustworthy experience.',
        ],
        steps: [
          { number: '1', title: 'Research &\nUnderstanding', body: 'A UX audit and review of platform analytics helped identify core friction points and improvement opportunities.' },
          { number: '2', title: 'Ideation &\nDefinition', body: 'Strategic flow redesigns and a gamification strategy were defined to create a more engaging experience.' },
          { number: '3', title: 'Prototyping &\nValidation', body: 'Ideas were translated into a more modern UI, exploring animations to bring the experience to life.' },
          { number: '4', title: 'Implementation &\nLearning', body: 'A new design system was built from scratch, with clear development documentation and guidelines.' },
        ],
      },
      { imageBlock: true, imageSrc: unboundImg2, imageBg: '#FFFFFF', imageFit: 'contain' },
      {
        title: 'Decisions based on analytics',
        body: [
          'We leveraged client analytics on platform usage to analyze how users interacted with the product. Using AI tools, we were able to uncover behavioral patterns, identify friction points, and accelerate the insight-gathering process to inform design decisions.',
        ],
        checkList: [
          'Identified drop-off instances',
          'Mapped behavior trends to refine navigation and content hierarchy.',
          'Accelerated insights through automated analysis.',
        ],
      },
      { imageBlock: true, imageSrc: unboundImg3, imageBg: '#F4F5F7' },
      {
        title: 'Screen redesigns',
        body: [
          'After a deep analysis of the design in place and the shared analytics of the platform, we focused on creating new user flows with less friction and a clearer outcome that helped users stay motivated and in track with their payment plan.',
        ],
        checkList: [
          'Overall UI refresh',
          'Gamification and custom animations',
          'Clear paths to action in all sections',
        ],
      },
      { imageBlock: true, imageSrc: unboundImg4 },
      {
        title: 'Design System',
        body: [
          'Due to the magnitude of the redesign, a new design system was created from scratch, following best practices and allowing for future iteration. We acquired a base illustration library and expanded it by leveraging AI to generate new, cohesive visuals aligned with the refreshed identity.',
        ],
        checkList: [
          'Tokenized system',
          'Scalable construction (Atoms/Molecules/Organisms)',
          'AI-assisted illustration expansion and system organization',
        ],
      },
      {
        title: 'Outcome',
        body: [
          'The redesign resulted in a clearer, more intuitive product experience, reducing friction across key user journeys and improving overall usability.',
          'By simplifying flows and better communicating value, the platform was able to create a more engaging experience, supporting higher conversion rates and stronger user retention.',
          'It was especially meaningful to contribute to a product focused on making financial processes less stressful and more empowering for users.',
        ],
      },
    ],
  },
  royo: {
    slug: 'royo',
    title: 'Royo',
    industry: 'Education',
    role: ['Product Designer'],
    tools: ['Runware', 'Figma', 'Tactic'],
    timeline: ['6 Months'],
    description: [
      { text: 'Royo', href: 'https://www.royo.ai' },
      { text: ' is an educational platform designed to support schools and institutions through digital tools that improve accessibility, usability, and overall learning experiences.' },
    ],
    context: [
      'Royo had already developed a functional MVP and was testing it with select institutions when they partnered with Qubika. As the new school year approached, the focus shifted toward preparing the product for a full launch.',
      'This involved rethinking sign-up flows to meet regulatory requirements, defining a scalable business model, and improving the overall user experience to deliver a more polished, market-ready product.',
      'I contributed as a Product Designer, supporting the development and refinement of key features while ensuring the experience was intuitive, consistent, and aligned with both user and business needs.',
    ],
    ctaLabel: 'Visit Royo',
    ctaHref: '#',
    sections: [
      { videoBlock: true, videoSrc: royoVideo },
      {
        title: 'Process',
        callout: 'How we built the new features?',
        body: [
          'I worked closely with product and development teams to understand the existing MVP, identify usability issues, and define opportunities for improvement.',
          'A key focus was redesigning sign-up and onboarding flows to meet regulatory requirements while keeping the experience simple and user-friendly.',
          'At the same time, I collaborated on the definition and design of features that would support a scalable business model, ensuring the product could grow sustainably while maintaining a consistent user experience.',
          'Throughout the process, I balanced user needs, business goals, and technical constraints to deliver solutions that were both practical and effective.',
        ],
        steps: [
          { number: '1', title: 'Research & Understanding', body: 'Led user interviews and competitor research with the Product Manager to identify posible solutions to the identified flows.' },
          { number: '2', title: 'Ideation &\nDefinition', body: 'Mapped user flows and edge cases for each new feature, defining key steps and structure for each screen.' },
          { number: '3', title: 'Prototyping & Validation', body: 'Created iterative high fidelity wireframes in Figma, quickly testing them with stakeholders.' },
          { number: '4', title: 'Implementation & Learning', body: 'Updated and enhanced the existing design system to ensure visual consistency and scalability.' },
        ],
      },
      { imageBlock: true, imageSrc: royoImg2 },
      {
        title: 'Pricing and subscriptions',
        body: [
          'Once the business model was defined, we created a pricing page for the website and a subscription flow within the platform that clearly communicated user status, reducing friction and ensuring a smoother experience throughout the school year.',
        ],
        checkList: [
          'AI copy iterations to find the right tone and accuracy',
          'Competitors benchmark for showcasing pricing efficiently',
          'Flexible conversion flows',
        ],
      },
      { imageBlock: true, imageSrc: royoImg3 },
      {
        title: 'Compliant AI experience',
        body: [
          'We focused on making sure the new and existing features provided an AI experience that feels intuitive, safe, and engaging for young learners. The goal was to balance educational value with playfulness, while ensuring full compliance with child protection and privacy standards.',
        ],
        checkList: [
          'Age-appropriate conversational flows and tone',
          'Ensured compliance with child safety guidelines.',
        ],
      },
      { imageBlock: true, imageSrc: royoImg4 },
      {
        title: 'Mobile optimization',
        body: [
          "Since children needed to practice reading at home and not all might have access to tablets, we designed a mobile-friendly version of the student experience that preserved all core functionality while maintaining the platform's engaging and seamless experience.",
        ],
        checkList: [
          'Researched AI tools with voice interaction for mobile apps',
          'Optimized element distribution for small screens',
          'Creation of scalable components',
        ],
      },
      { imageBlock: true, imageSrc: royoImg5 },
      {
        title: 'Outcome',
        body: [
          'The improvements led to a more polished and cohesive product experience, better aligned with the needs of both institutions and end users.',
          'By simplifying key flows and supporting the definition of scalable features, the platform was better prepared for launch, with a stronger foundation for growth and long-term adoption.',
          'It was especially meaningful to contribute to a product focused on improving reading development for children, supporting students, teachers and parents through a more accessible and thoughtful experience.',
        ],
      },
    ],
  },
  petly: {
    slug: 'petly',
    title: 'Petly',
    industry: 'Pet Care',
    role: ['Visual Designer', 'Product Designer'],
    tools: ['Procreate', 'Illustrator', 'Figma'],
    timeline: ['Jul 2024', 'Jan 2024'],
    description: 'Petly is a modern veterinary care platform that combines in-person services with digital experiences to make pet care more accessible, transparent, and user-friendly for pet owners.',
    context: [
      'I contributed to Petly as a Visual & Product Designer, supporting the development of new features while also creating visual assets to enhance the overall experience.',
      'My work included designing illustrations for key product features such as dental grading and body condition scoring, helping translate complex veterinary information into clear and approachable visuals. I also created illustrations for empty states, improving usability and guiding users through different scenarios within the app.',
      'In addition, I worked on mobile preview screens for iOS and Android, as well as visual support for landing pages, ensuring consistency across product and marketing touchpoints.',
    ],
    ctaLabel: 'Visit Petly',
    ctaHref: 'https://petfolk.com/',
    sections: [
      { imageBlock: true, imageSrc: petlyImg1, imageBg: 'transparent' },
      { imageBlock: true, imageSrc: petlyImg2, imageBg: 'transparent' },
      {
        title: 'Process',
        body: [
          'I started by understanding the product, its users, and the role visuals played in communicating health-related information.',
          'I worked closely with the product and development team to understand technical constraints and ensure the designs were feasible and aligned with the overall product direction. At the same time, I collaborated directly with veterinarians to validate the illustrations, making sure they were not only visually clear but also medically accurate and trustworthy for users.',
          'Alongside this, I designed assets aligned with the existing visual language, focusing on simplifying complex concepts and making them easy to understand within the product experience.',
        ],
      },
      { imageBlock: true, imageSrc: petlyImg3, imageBg: 'transparent' },
      { imageBlock: true, imageSrc: petlyImg4, imageBg: 'transparent' },
      { imageBlock: true, imageSrc: petlyImg5, imageBg: 'transparent' },
      {
        title: 'Outcome',
        body: [
          'The visual assets helped make complex veterinary concepts more accessible and easier to understand for users, improving how people navigate the product.',
          'At the same time, maintaining consistency across illustrations, product screens, and marketing materials contributed to a more cohesive and polished experience, supporting both usability and brand perception.',
        ],
      },
    ],
  },
  tm: {
    slug: 'tm',
    title: 'TM',
    industry: 'Sports',
    role: ['Product Designer'],
    tools: ['Figma'],
    timeline: [],
    description: '',
    context: [],
    ctaLabel: 'View Case Study',
    ctaHref: '#',
    sections: [],
  },
  trucksmarter: {
    slug: 'trucksmarter',
    title: 'Trucksmarter',
    industry: 'Logistics & Mobility Platform',
    role: ['Visual Designer', 'Illustrator'],
    tools: ['Procreate', 'Illustrator', 'Figma'],
    timeline: ['Jan 2023'],
    description: [
      { text: 'TruckSmarter', href: 'https://www.trucksmarter.com' },
      { text: ' is a digital platform designed for truck drivers to manage fuel, access loads, and streamline their day-to-day operations in one place.' },
    ],
    context: [
      'I worked on TruckSmarter creating custom illustrations and icons to elevate both the product experience and marketing website. The goal was to align visual assets with the brand\'s personality — bold, resilient, empowering, genuine, and playful — while improving how users understand key features and benefits.',
      'These visual elements were designed to simplify complex concepts within the transportation space, acting as a bridge between product functionality and user comprehension. By integrating them across different touchpoints, the experience became more cohesive, approachable, and easier to navigate.',
    ],
    ctaLabel: 'Visit Trucksmarter',
    ctaHref: 'https://www.trucksmarter.com/',
    sections: [
      { imageBlock: true, imageSrc: tmImg1 },
      { imageBlock: true, imageSrc: tmImg2 },
      {
        title: 'Process',
        body: [
          'I started by understanding the existing illustration style and how it was being used across the product and marketing website.',
          'From there, I focused on expanding the current visual system by creating new illustrations and icons that aligned with the established direction. The goal was to maintain consistency while covering new use cases and product needs.',
          'I worked closely with the team to ensure the assets supported key features and communicated information clearly, making sure they could be easily integrated across different touchpoints.',
        ],
      },
      { imageBlock: true, imageSrc: tmImg3 },
      { imageBlock: true, imageSrc: tmImg4 },
      { imageBlock: true, imageSrc: tmImg5 },
      {
        title: 'Outcome',
        body: [
          'The expanded set of illustrations and iconography helped create a more consistent and cohesive experience across product and marketing.',
          'By extending the existing visual language, the product was able to communicate features and benefits more clearly, making complex concepts easier to understand while reinforcing the brand\'s personality.',
        ],
      },
    ],
  },
}
