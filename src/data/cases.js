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
import royoCheck  from '../assets/royo/check.svg'
import royoImg2   from '../assets/royo/img-2.png'
import royoImg3   from '../assets/royo/img-3.png'
import royoImg4   from '../assets/royo/img-4.png'
import royoImg5   from '../assets/royo/img-5.png'

import tmImg1 from '../assets/trucksmarter/img-1.png'
import tmImg2 from '../assets/trucksmarter/img-2.png'
import tmImg3 from '../assets/trucksmarter/img-3.png'
import tmImg4 from '../assets/trucksmarter/img-4.png'
import tmImg5 from '../assets/trucksmarter/img-5.png'
import trucksmarterCheck from '../assets/trucksmarter/check.svg'

import petlyImg1 from '../assets/petly/img-1.png'
import petlyImg2 from '../assets/petly/img-2.png'
import petlyImg3 from '../assets/petly/img-3.png'
import petlyImg4 from '../assets/petly/img-4.png'
import petlyImg5 from '../assets/petly/img-5.png'
import petlyCheck from '../assets/petly/check.svg'

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
          'In practice, my scope covered several areas simultaneously:',
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
            { text: 'Sole designer for the marketing team', bold: true },
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
        title: 'My role and process',
        body: [
          'I worked as the sole designer embedded in a three-person team alongside a developer and the product owner. The working dynamic was intentionally lean — briefs were design-led, and I had full latitude to define the problem, propose the solution, and drive it to implementation.',
          'That kind of ownership meant I wasn\'t just executing requests — I was making product decisions on every ticket, then validating them collaboratively before handing off to dev.',
          'I approached the product end-to-end: mapping friction points across all key flows, identifying where users were losing confidence or dropping off, and rethinking how different parts of the experience connected before touching any UI.',
        ],
      },
      { imageBlock: true, imageSrc: sosImg2, imageBg: '#EBF4EB', imageFit: 'contain' },
      {
        title: 'Understanding ingredients instantly',
        body: [
          'I designed a grocery scan flow that allows users to analyze ingredients through a simple photo, turning a complex decision into an immediate, accessible insight.',
          'The experience translates raw ingredient data into clear categories — recommended, ok, caution, or avoid — helping users quickly understand product quality without needing prior knowledge.',
        ],
      },
      { imageBlock: true, imageSrc: sosImg3 },
      {
        title: 'Key decisions',
        checkList: [
          [{ text: 'Onboarding redesign', bold: true }, { text: ' — Reduced the flow from 22 to 13 steps by cutting every input that wasn\'t essential to delivering first value. The principle was simple: don\'t ask until the product has earned the right to ask. Within the first week of the redesign going live, the owner reported a measurable lift in conversion — an early signal that simplifying access to value had an immediate impact on user behavior.' }],
          [{ text: 'Grocery scan flow', bold: true }, { text: ' — Only a single scan screen existed. I designed the complete flow around it — from capture to results — translating raw ingredient data into clear, actionable categories (recommended, ok, caution, avoid) so users could make decisions instantly without needing prior nutritional knowledge.' }],
          [{ text: 'Paywall redesign', bold: true }, { text: ' — Took full ownership of rethinking how the product communicated its value at the conversion moment. Redesigned the entry point to lead with what users get, not what they\'re being asked to pay — reordering the value proposition to match where users were in their understanding of the product.' }],
          [{ text: 'Filters and reporting', bold: true }, { text: ' — Consolidated complex filtering into a single flexible sheet, and redesigned the reporting flow to support both quick and detailed input — lowering the barrier for user contribution without removing depth for power users.' }],
          [{ text: 'Map interactions', bold: true }, { text: ' — Refined pin previews and key actions to support faster, more confident exploration of the product\'s core discovery feature.' }],
        ],
      },
      { imageBlock: true, imageSrc: sosImg4 },
      {
        title: 'Results',
        checkList: [
          'Onboarding reduced from 22 to 13 steps with conversion lift reported in the first week post-launch.',
          'Grocery scan evolved from a single screen to a complete, self-contained flow.',
          'Paywall, filters, reporting, and map interactions redesigned across the product — improving cohesion and reducing friction at every key touchpoint.',
          'Full design-to-dev handoff managed end-to-end, working directly with a single developer throughout.',
        ],
      },
      { imageBlock: true, imageSrc: sosImg5 },
      {
        title: 'What I learned',
        body: [
          'Working with minimal briefs and full design latitude is one of the most honest tests of product thinking. The quality of your output depends entirely on how well you can frame the problem before you solve it — and I learned to treat every ambiguous request as a design problem in itself.',
          'By focusing not just on onboarding but on the experience as a whole, the product became more cohesive, intuitive, and aligned with user expectations. The work also helped establish a stronger foundation for future growth and iteration — something that mattered especially in a context where we were an external team, and the product needed to keep moving long after our involvement ended.',
          'The best way to earn trust in a small, fast-moving team is to consistently bring back more than what was asked for.',
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
    timeline: ['12 Months'],
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
        title: 'The Problem',
        body: [
          'Unbound had a trust problem. Mixpanel analytics revealed that users were dropping off not because the product lacked value — but because the experience wasn\'t communicating credibility. Visual noise, competing CTAs, absent information hierarchy, and unclear paths to action were eroding user confidence before they ever reached a key decision point.',
          'The goal was a full product redesign: rebuild the experience from the ground up to feel transparent, empowering, and trustworthy — while making every key action obvious and accessible.',
        ],
      },
      {
        title: 'My process',
        body: [
          'I started with a UX audit mapping exactly where users were losing confidence and abandoning flows. The analytics confirmed what the audit surfaced: the product was creating anxiety instead of reducing it, which is the opposite of what a debt management tool needs to do.',
          'From there I owned the full redesign end-to-end as sole designer: information architecture, user flows, UI, gamification strategy, design system, and illustration direction — all proposed, defined, and executed by me, validated in collaboration with the client and development team at each stage.',
        ],
        steps: [
          { number: '1', title: 'Research &\nUnderstanding', body: 'By a UX audit, the review of platform analytics we were able to identify core friction points and improvement opportunities.' },
          { number: '2', title: 'Ideation &\nDefinition', body: 'We brainstormed and defined strategic flows redesigns and a gamification strategy that created a more engaging experience.' },
          { number: '3', title: 'Prototyping &\nValidation', body: 'We translated the ideas into a more modern, UI and explored with animations to bring the experience to life.' },
          { number: '4', title: 'Implementation &\nLearning', body: 'We built a new design system from scratch, with clear development documentation and guidelines.' },
        ],
      },
      { imageBlock: true, imageSrc: unboundImg2, imageBg: '#FFFFFF', imageFit: 'contain' },
      {
        title: 'Key decisions',
        checkList: [
          [{ text: 'Trust as the design principle', bold: true }, { text: 'Every decision — hierarchy, color, copy tone, interaction patterns — was evaluated against one question: ' }, { text: 'does this make the user feel more in control, or less?', bold: true }, { text: ' Eliminating competing CTAs and establishing a clear information hierarchy were the two structural fixes that had the most immediate impact on legibility.' }],
          [{ text: 'Gamification system', bold: true }, { text: 'Proposed and designed a progression-based system to keep users motivated through what is inherently a stressful process — debt repayment. The goal was to make progress visible and rewarding at every step, turning a passive experience into one with a sense of momentum.' }],
          [{ text: 'Design system from scratch', bold: true }, { text: 'Built a fully tokenized, scalable system ' }, { text: '(atoms → molecules → organisms)', bold: true }, { text: ' that gave the development team a reliable foundation and made future iteration significantly faster. Also expanded the illustration library ' }, { text: 'using Gemini to generate new visuals cohesive with the refreshed identity', bold: true }, { text: ' — keeping the system consistent without the cost of custom illustration for every new asset.' }],
          [{ text: 'AI-assisted insight acceleration', bold: true }, { text: 'Used Gemini alongside Mixpanel data to identify behavioral patterns faster, compressing the insight-gathering phase and allowing more time for design iteration.' }],
        ],
      },
      { imageBlock: true, imageSrc: unboundImg3 },
      {
        title: 'Results',
        checkList: [
          'Full product redesign delivered in 9 months — flows, UI, gamification, and design system',
          'The quality of the work directly led to multiple additional SOWs from the client: a separate accessibility engagement for their web and platform, continued work on the gamification system, and a web redesign project handled by another team — all stemming from the same initial engagement',
          'The platform went from feeling untrustworthy and unclear to a cohesive, credible experience aligned with Unbound\'s mission of making debt resolution less stressful',
        ],
      },
      { imageBlock: true, imageSrc: unboundImg4 },
      {
        title: 'What I learned',
        body: [
          [{ text: 'Designing for trust in a high-stakes context taught me that ' }, { text: 'clarity is a form of empathy', bold: true }, { text: '. Every unnecessary element, every competing action, every unclear label is a small tax on the user\'s confidence — and removing that tax was the core design job here.' }],
          [{ text: 'By simplifying flows and better communicating value, the platform became more engaging and more aligned with what Unbound set out to do: ' }, { text: 'make financial processes less stressful and more empowering for the people going through them', bold: true }, { text: '. It was especially meaningful to contribute to a product with that kind of purpose.' }],
          [{ text: 'I also learned that the best signal of successful work in a consulting context isn\'t what the client says at the end of a project — ' }, { text: 'it\'s whether they come back', bold: true }, { text: '.' }],
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
    checkIcon: royoCheck,
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
        title: 'The problem',
        body: [
          'Royo had a functional MVP already being tested with select institutions — but with a new school year approaching, "functional" wasn\'t enough.',
          'The product needed to be launch-ready: compliant with child safety regulations, equipped with a monetization model, optimized for mobile, and polished enough to convert institutions that were evaluating it for real classroom use.',
          'The challenge was doing all of that without breaking what was already working.',
        ],
        steps: [
          { number: '1', title: 'Research &\nUnderstanding', body: 'Led user interviews and competitor research with the Product Manager to identify possible solutions to the identified flows.' },
          { number: '2', title: 'Ideation &\nDefinition', body: 'Mapped user flows and edge cases for each new feature, defining key steps and structure for each screen.' },
          { number: '3', title: 'Prototyping &\nValidation', body: 'Created iterative high fidelity wireframes in Figma, quickly testing them with stakeholders.' },
          { number: '4', title: 'Implementation &\nLearning', body: 'Updated and enhanced the existing design system to ensure visual consistency and scalability.' },
        ],
      },
      {
        title: 'The problem',
        body: [
          'I worked alongside a PM development teams to understand the existing MVP, conducting user interviews with teachers to understand where the existing experience created friction and where the product needed to grow. Two interviews sounds like a small sample — but in an institutional context where teachers are the primary gatekeepers of student adoption, their perspective was the most direct signal available.',
          'From there I mapped flows and edge cases for every new feature, updated and extended the existing design system for consistency and scalability, and used Runware for AI-assisted image generation to maintain visual quality without slowing down iteration.',
        ],
      },
      { imageBlock: true, imageSrc: royoImg2 },
      {
        title: 'Key decisions',
        body: [
          'Once the business model was defined, we created a pricing page for the website and a subscription flow within the platform that clearly communicated user status, reducing friction and ensuring a smoother experience throughout the school year.',
        ],
        checkList: [
          [{ text: 'Unified free trial across all plans', bold: true }, { text: 'The original pricing model allowed users to start a free trial on any plan — which meant someone could trial the most expensive tier and then downgrade, creating a conversion problem. I ' }, { text: 'proposed and defined a single free trial entry point regardless of plan', bold: true }, { text: ', simplifying the decision and reducing drop-off at the conversion moment. The pricing page is live with this model.' }],
          [{ text: 'Compliant sign-up flow', bold: true }, { text: 'Redesigned the sign-up and onboarding to meet child safety requirements — security codes, strong password enforcement, a clear three-step structure — while keeping the experience simple enough for young learners and their parents to complete without friction.' }],
          [{ text: 'AI experience for children', bold: true }, { text: 'Designed conversational flows and interaction patterns appropriate for young learners — balancing educational engagement with the tone and safety guardrails the audience required.' }],
          [{ text: 'Mobile optimization', bold: true }, { text: 'Since not all students have access to tablets at home, I designed a fully optimized mobile version of the student experience — researching voice interaction tools for mobile AI, redistributing elements for small screens, and building scalable components that preserved the core experience across devices.' }],
        ],
      },
      { imageBlock: true, imageSrc: royoImg3 },
      { imageBlock: true, imageSrc: royoImg4 },
      {
        title: 'Results',
        checkList: [
          'Product launched on schedule ahead of the new school year',
          'Pricing page live with the unified free trial model',
          'After the design engagement ended, the client continued working exclusively with the Qubika development team — a signal that the design foundation was solid enough to build on without further design support',
        ],
      },
      { imageBlock: true, imageSrc: royoImg5 },
      {
        title: 'What I learned',
        body: [
          'Designing for children in an institutional context means every decision has two audiences: the student who uses it, and the teacher or parent who has to trust it enough to allow it. That double accountability shapes everything — from tone of voice to how safety features are surfaced — and it pushed me to think more carefully about how trust is built at different levels of a product, not just at the user level.',
          'It was especially meaningful to contribute to a product focused on reading development — the kind of foundational skill that shapes everything that comes after it.',
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
    timeline: ['6 Months'],
    description: 'Petly is a modern veterinary care platform that combines in-person services with digital experiences to make pet care more accessible, transparent, and user-friendly for pet owners.',
    context: [
      'I contributed to Petly as a Visual & Product Designer, supporting the development of new features while also creating visual assets to enhance the overall experience.',
      'My work included designing illustrations for key product features such as dental grading and body condition scoring, helping translate complex veterinary information into clear and approachable visuals. I also created illustrations for empty states, improving usability and guiding users through different scenarios within the app.',
      'In addition, I worked on mobile preview screens for iOS and Android, as well as visual support for landing pages, ensuring consistency across product and marketing touchpoints.',
    ],
    checkIcon: petlyCheck,
    sections: [
      { imageBlock: true, imageSrc: petlyImg2, imageBg: 'transparent' },
      {
        title: 'The problem',
        body: [
          'Petly needed to communicate complex veterinary health assessments — dental grading and body condition scoring — directly to pet owners through a digital product. The challenge wasn\'t just visual: it was translating clinical information into illustrations accurate enough to be trusted by veterinarians, and clear enough to be understood by someone with no medical background.',
        ],
      },
      {
        imageBlock: true, imageSrc: petlyImg3, imageBg: 'transparent',
        title: 'My role & process',
        body: [
          'I worked alongside another product designer, covering her during leave periods and contributing visual and product design across the platform. My primary focus was the illustration system — creating assets from scratch that had to meet two standards simultaneously: medical accuracy and visual accessibility.',
          'I started by understanding the clinical criteria behind each assessment — what dental grades actually represent in terms of gum and tooth health, and how body condition scoring maps to visible physical indicators in animals. Without that foundation, the illustrations would have been decorative rather than functional.',
          'I worked through 4 rounds of veterinary validation — 2 for dental grading, 2 for body condition scoring — iterating based on direct feedback from veterinary professionals. The most significant iteration was on the gum representation in the dental grading series: the initial versions didn\'t clearly convey the progression of gum deterioration across grades, so I reworked the gingival detail until the visual degradation was legible and clinically precise.',
          'Each illustration was created in Procreate, vectorized in Illustrator, and delivered as final assets in Figma — maintaining consistency with the existing product visual language throughout.',
        ],
      },
      { imageBlock: true, imageSrc: petlyImg1, imageBg: 'transparent' },
      {
        title: 'What I designed',
        checkList: [
          [{ text: 'Dental grading illustrations', bold: true }, { text: ' Full series created from scratch, showing the progression of oral health deterioration across grades — validated by veterinarians for medical accuracy.' }],
          [{ text: 'Body condition scoring illustrations', bold: true }, { text: ' Visual scale helping pet owners assess their animal\'s physical condition, also validated through multiple rounds with veterinary professionals.' }],
          [{ text: 'Empty states', bold: true }, { text: ' Designed to guide users through different app scenarios, maintaining tone and visual consistency across the product.' }],
          [{ text: 'Mobile preview screens', bold: true }, { text: ' iOS and Android assets for App Store and Play Store presence' }],
          [{ text: 'Visual support', bold: true }, { text: ' Ensuring consistency between product and marketing touch points.' }],
        ],
      },
      { imageBlock: true, imageSrc: petlyImg4, imageBg: 'transparent' },
      { imageBlock: true, imageSrc: petlyImg5, imageBg: 'transparent' },
      {
        title: 'What I learned',
        body: [
          [
            { text: 'Illustrating for a clinical context taught me that visual design can carry real epistemic weight — ' },
            { text: 'these weren\'t decorative assets, they were the interface between a veterinary assessment and a pet owner\'s understanding of their animal\'s health.', bold: true },
            { text: ' Getting the gum deterioration progression right across dental grades wasn\'t an aesthetic problem, it was a communication problem with medical stakes. That raised my standard for what "clear enough" actually means.' },
          ],
          'The visual assets helped make complex veterinary concepts more accessible and easier to understand, improving overall clarity within the product. At the same time, maintaining consistency across illustrations, product screens, and marketing materials contributed to a more cohesive and polished experience — supporting both usability and the kind of brand perception that makes users trust a health product enough to act on it.',
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
    timeline: ['2 Months'],
    description: [
      { text: 'TruckSmarter', href: 'https://www.trucksmarter.com' },
      { text: ' is a digital platform designed for truck drivers to manage fuel, access loads, and streamline their day-to-day operations in one place.' },
    ],
    context: [
      'I worked on TruckSmarter creating custom illustrations and icons to elevate both the product experience and marketing website. The goal was to align visual assets with the brand\'s personality — bold, resilient, empowering, genuine, and playful — while improving how users understand key features and benefits.',
      'These visual elements were designed to simplify complex concepts within the transportation space, acting as a bridge between product functionality and user comprehension. By integrating them across different touchpoints, the experience became more cohesive, approachable, and easier to navigate.',
    ],
    checkIcon: trucksmarterCheck,
    ctaLabel: 'Visit Trucksmarter',
    ctaHref: 'https://www.trucksmarter.com/',
    sections: [
      { imageBlock: true, imageSrc: tmImg1 },
      { imageBlock: true, imageSrc: tmImg2 },
      {
        title: 'The problem',
        body: [
          'TruckSmarter needed to expand their visual asset library to cover new product features and marketing needs — without drifting from an established illustration style that was already core to their brand identity. The challenge was matching an established visual language well enough that the new assets felt like a natural extension of the existing system.',
        ],
      },
      { imageBlock: true, imageSrc: tmImg3 },
      {
        title: 'My process',
        body: [
          [
            { text: 'I started by studying the existing illustration system in depth — understanding the style rules, stroke weights, color usage, and the personality behind the work before creating a single new asset. ' },
            { text: 'TruckSmarter\'s brand has a specific character: bold, resilient, and genuinely playful', bold: true },
            { text: ' — and every illustration had to carry that without me imposing my own aesthetic over it.' },
          ],
          'I worked directly with the design owner and their web/product designer, aligning on priorities and ensuring each asset addressed a specific feature or communication need before moving to execution.',
          'For the iconography, I worked within a custom grid provided by the client — ensuring every icon was proportionally consistent with their existing set, not just visually similar.',
        ],
      },
      { imageBlock: true, imageSrc: tmImg4 },
      {
        title: 'What I delivered',
        checkList: [
          [{ text: '24 illustrations', bold: true }, { text: ' Covering new product features and web assets — all created within the established style, extending the system without breaking it' }],
          [{ text: '25 custom icons', bold: true }, { text: ' Built to the client\'s proportional grid, consistent with the existing iconography across product and marketing touchpoints' }],
          [{ text: 'Full delivery in two months, integrated across product and marketing surfaces', bold: true }],
        ],
      },
      { imageBlock: true, imageSrc: tmImg5 },
      {
        title: 'What I learned',
        body: [
          'Matching someone else\'s illustration style at production quality is a specific skill — it requires setting aside your own aesthetic instincts and fully inhabiting a visual language that isn\'t yours. The discipline of working within a client-defined grid for the icons, and studying the existing illustrations before drawing a single new one, taught me that consistency is a form of craft, not a constraint on it.',
        ],
      },
    ],
  },
}
