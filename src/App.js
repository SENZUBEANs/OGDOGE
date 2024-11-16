import React, { useState } from "react";
import { DollarSign, TrendingUp, Brain, Users, Star } from "lucide-react";
import "./styles.css";

const PHASES = {
  TITLE: "title",
  STORY: "story",
  ENDING: "ending",
};

const G = {
  scenes: {
    // Introduction Scene
    intro: {
      text: "Welcome to the Department of Government Efficiency (D.O.G.E). Your mission: optimize governance while balancing Elon’s innovation and Trump’s vision for 'winning'. Where do you start?",
      choices: [
        {
          text: "Analyze inefficiencies 🔍",
          next: "analyze",
          fx: { efficiency: 5 },
        },
        {
          text: "Host a public forum 🗣️",
          next: "public_forum",
          fx: { influence: 5 },
        },
        {
          text: "Unleash the Meme Army 🐸",
          next: "meme_army",
          fx: { memes: 10 },
        },
        {
          text: "Explore secret archives 📂",
          next: "secret_archives",
          fx: { innovation: 5 },
        },
      ],
    },

    // Path: Analyze Inefficiencies
    analyze: {
      text: "Your analysis reveals outdated systems and redundant processes. What do you do next?",
      choices: [
        {
          text: "Automate processes with AI 🤖",
          next: "ai_automation",
          fx: { efficiency: 10 },
        },
        {
          text: "Form a task force 🚨",
          next: "task_force",
          fx: { influence: 5, efficiency: 5 },
        },
        {
          text: "Blame it on bureaucracy 🗂️",
          next: "bureaucracy_blame",
          fx: { memes: 5 },
        },
      ],
    },

    // Option 1: Automate Processes with AI
    ai_automation: {
      text: "AI implementation improves efficiency, but it creates resistance among employees. What’s your next step?",
      choices: [
        {
          text: "Draft ethical AI guidelines 📜",
          next: "ethical_ai",
          fx: { influence: 10 },
        },
        {
          text: "Expand AI into other departments 🚀",
          next: "expand_ai",
          fx: { efficiency: 20 },
        },
        {
          text: "Create a public AI awareness campaign 📣",
          next: "ai_awareness",
          fx: { innovation: 10, influence: 5 },
        },
      ],
    },
    ethical_ai: {
      text: "Your ethical AI guidelines gain global recognition. What’s next?",
      choices: [
        {
          text: "Collaborate with international AI regulators 🌍",
          next: "global_ai",
          fx: { influence: 15, innovation: 10 },
        },
        {
          text: "Launch an AI innovation hub 🏢",
          next: "ai_hub",
          fx: { innovation: 15, efficiency: 10 },
        },
      ],
    },
    global_ai: {
      text: "Your collaboration shapes international AI standards, securing long-term global efficiency.",
      choices: [],
      ending: "AI Diplomat: You redefined the future of ethical AI globally.",
    },
    ai_hub: {
      text: "The innovation hub becomes a global leader in cutting-edge AI development.",
      choices: [],
      ending:
        "Tech Visionary: Your leadership inspired global AI advancements.",
    },
    expand_ai: {
      text: "Expanding AI boosts efficiency but sparks debates about automation’s impact on jobs. What’s next?",
      choices: [
        {
          text: "Introduce re-skilling programs for workers 👩‍🏫",
          next: "reskill_workers",
          fx: { influence: 10, efficiency: 5 },
        },
        {
          text: "Focus on AI-human collaboration 🤝",
          next: "ai_collaboration",
          fx: { innovation: 10 },
        },
      ],
    },
    reskill_workers: {
      text: "Re-skilling programs successfully integrate employees into new roles.",
      choices: [],
      ending:
        "Workforce Advocate: You ensured progress without leaving anyone behind.",
    },
    ai_collaboration: {
      text: "AI-human collaboration models become a benchmark for innovative governance.",
      choices: [],
      ending:
        "Collaboration Architect: You harmonized technology and humanity.",
    },
    ai_awareness: {
      text: "Your public awareness campaign gains widespread support. What do you focus on next?",
      choices: [
        {
          text: "Highlight AI’s role in environmental conservation 🌱",
          next: "ai_environment",
          fx: { innovation: 10 },
        },
        {
          text: "Showcase AI’s potential in healthcare 🏥",
          next: "ai_healthcare",
          fx: { innovation: 15 },
        },
      ],
    },
    ai_environment: {
      text: "AI-powered environmental solutions transform resource management globally.",
      choices: [],
      ending: "Eco-Tech Leader: You pioneered AI-driven sustainability.",
    },
    ai_healthcare: {
      text: "AI revolutionizes healthcare, saving countless lives.",
      choices: [],
      ending: "Health Innovator: You transformed public health with AI.",
    },

    // Option 2: Form a Task Force
    task_force: {
      text: "The task force uncovers widespread inefficiencies. What’s your next step?",
      choices: [
        {
          text: "Streamline resource allocation 📊",
          next: "streamline_resources",
          fx: { efficiency: 15 },
        },
        {
          text: "Collaborate with other government agencies 🤝",
          next: "collaborate_agencies",
          fx: { influence: 10, efficiency: 5 },
        },
        {
          text: "Seek public input on inefficiencies 📣",
          next: "public_input",
          fx: { influence: 15 },
        },
      ],
    },
    streamline_resources: {
      text: "Streamlining resource allocation improves efficiency across departments. What do you focus on next?",
      choices: [
        {
          text: "Integrate data-driven decision-making 📊",
          next: "data_driven",
          fx: { efficiency: 20, innovation: 10 },
        },
        {
          text: "Establish inter-departmental task forces 🚧",
          next: "inter_department",
          fx: { influence: 15 },
        },
      ],
    },
    data_driven: {
      text: "Data-driven decision-making transforms government operations.",
      choices: [],
      ending:
        "Data Strategist: You brought precision to public administration.",
    },
    inter_department: {
      text: "Collaboration between departments breaks silos and enhances productivity.",
      choices: [],
      ending: "Unity Pioneer: You united departments for seamless governance.",
    },
    collaborate_agencies: {
      text: "Inter-agency collaboration creates new opportunities. What do you prioritize?",
      choices: [
        {
          text: "Build a unified government portal 🌐",
          next: "government_portal",
          fx: { innovation: 15 },
        },
        {
          text: "Standardize processes across agencies 📋",
          next: "process_standardization",
          fx: { efficiency: 15 },
        },
      ],
    },
    government_portal: {
      text: "The unified portal provides citizens easy access to government services.",
      choices: [],
      ending: "Digital Pioneer: You made governance accessible for all.",
    },
    process_standardization: {
      text: "Standardized processes streamline operations nationwide.",
      choices: [],
      ending: "Process Champion: Your reforms set a gold standard.",
    },
    public_input: {
      text: "Public input reveals hidden inefficiencies and inspires innovative solutions. What’s next?",
      choices: [
        {
          text: "Crowdsource solutions for critical issues 💡",
          next: "crowdsource_solutions",
          fx: { influence: 10, innovation: 10 },
        },
        {
          text: "Hold public forums for real-time feedback 📣",
          next: "real_time_feedback",
          fx: { influence: 15 },
        },
      ],
    },
    crowdsource_solutions: {
      text: "Crowdsourced solutions bring fresh ideas to governance.",
      choices: [],
      ending:
        "Crowdsourcing Pioneer: You empowered citizens to solve problems.",
    },
    real_time_feedback: {
      text: "Real-time feedback drives continuous improvement in government services.",
      choices: [],
      ending: "Feedback Leader: You fostered transparency and adaptability.",
    },

    // Option 3: Blame it on Bureaucracy
    bureaucracy_blame: {
      text: "Your humorous blame campaign gains public attention, making governance issues relatable. What’s next?",
      choices: [
        {
          text: "Create a satirical bureaucracy task force 🎭",
          next: "satirical_task_force",
          fx: { memes: 15 },
        },
        {
          text: "Engage meme creators to amplify the message 🐸",
          next: "meme_creators",
          fx: { memes: 10, influence: 5 },
        },
        {
          text: "Turn the campaign into a public documentary 🎥",
          next: "public_documentary",
          fx: { influence: 15 },
        },
      ],
    },
    satirical_task_force: {
      text: "The satirical task force highlights absurd inefficiencies and inspires action.",
      choices: [],
      ending: "Humor Activist: You turned laughter into a catalyst for change.",
    },
    meme_creators: {
      text: "Meme creators turn the campaign into a viral sensation, driving reform.",
      choices: [],
      ending: "Meme Mobilizer: You redefined activism with creativity.",
    },
    public_documentary: {
      text: "The documentary educates citizens and ignites a wave of grassroots reform movements.",
      choices: [],
      ending: "Grassroots Hero: You empowered citizens to drive change.",
    },

    // Path: Host a Public Forum
    public_forum: {
      text: "The public eagerly shares ideas to improve governance. What’s next?",
      choices: [
        {
          text: "Form citizen advisory boards 👥",
          next: "advisory_boards",
          fx: { influence: 10 },
        },
        {
          text: "Launch transparency dashboards 📊",
          next: "transparency_dashboards",
          fx: { innovation: 10 },
        },
        {
          text: "Create meme-based reforms 🐸",
          next: "meme_reforms",
          fx: { memes: 10 },
        },
      ],
    },

    // Option 1: Form Citizen Advisory Boards
    advisory_boards: {
      text: "Citizen advisory boards are formed, providing new ideas and perspectives. What do you do next?",
      choices: [
        {
          text: "Adopt citizen-driven policies 📜",
          next: "citizen_policies",
          fx: { efficiency: 15 },
        },
        {
          text: "Expand advisory boards nationwide 🌍",
          next: "national_boards",
          fx: { influence: 15 },
        },
        {
          text: "Host a yearly advisory summit 🏛️",
          next: "advisory_summit",
          fx: { innovation: 10, influence: 10 },
        },
      ],
    },
    citizen_policies: {
      text: "Citizen-driven policies transform public trust and government efficiency. What’s next?",
      choices: [
        {
          text: "Create local-level advisory boards 🏡",
          next: "local_boards",
          fx: { influence: 10 },
        },
        {
          text: "Integrate policies with technology apps 📱",
          next: "policy_apps",
          fx: { innovation: 15 },
        },
      ],
    },
    local_boards: {
      text: "Local advisory boards foster a sense of community and engagement in governance.",
      choices: [],
      ending: "Community Builder: You brought governance closer to the people.",
    },
    policy_apps: {
      text: "Technology apps make citizen policies accessible and actionable.",
      choices: [],
      ending:
        "Policy Innovator: You combined technology and governance seamlessly.",
    },
    national_boards: {
      text: "Nationwide boards inspire public participation on an unprecedented scale.",
      choices: [],
      ending:
        "Visionary Leader: Your outreach united citizens across the country.",
    },
    advisory_summit: {
      text: "The annual summit becomes a hub for innovation and collaboration. What’s next?",
      choices: [
        {
          text: "Partner with international advisory groups 🤝",
          next: "global_partnership",
          fx: { influence: 15, innovation: 10 },
        },
        {
          text: "Use summit ideas to craft new legislation 📜",
          next: "summit_legislation",
          fx: { efficiency: 10 },
        },
      ],
    },
    global_partnership: {
      text: "Partnerships with global advisory groups spark international reforms.",
      choices: [],
      ending: "Global Reformer: You inspired collaboration beyond borders.",
    },
    summit_legislation: {
      text: "New legislation based on summit ideas revolutionizes governance.",
      choices: [],
      ending: "Lawmaker Visionary: You turned ideas into impactful laws.",
    },

    // Option 2: Launch Transparency Dashboards
    transparency_dashboards: {
      text: "Transparency dashboards provide real-time access to government data. What’s next?",
      choices: [
        {
          text: "Integrate dashboards with public apps 📱",
          next: "dashboard_apps",
          fx: { innovation: 15 },
        },
        {
          text: "Promote dashboards globally 🌍",
          next: "global_dashboards",
          fx: { influence: 15 },
        },
        {
          text: "Use dashboards to crowdsource problem-solving 💡",
          next: "crowdsource_dashboards",
          fx: { innovation: 10, influence: 10 },
        },
      ],
    },
    dashboard_apps: {
      text: "Apps make dashboards accessible to citizens, empowering them to hold the government accountable.",
      choices: [
        {
          text: "Develop AI features for the dashboards 🤖",
          next: "ai_dashboards",
          fx: { innovation: 15 },
        },
        {
          text: "Focus on rural areas for app adoption 🌾",
          next: "rural_apps",
          fx: { influence: 10 },
        },
      ],
    },
    ai_dashboards: {
      text: "AI-enhanced dashboards predict inefficiencies and provide actionable insights.",
      choices: [],
      ending: "Tech Pioneer: You brought predictive analytics to governance.",
    },
    rural_apps: {
      text: "Rural communities adopt apps, fostering inclusive governance.",
      choices: [],
      ending: "Rural Innovator: You made governance accessible to all.",
    },
    global_dashboards: {
      text: "Transparency dashboards inspire global reforms in accountability.",
      choices: [],
      ending: "Global Advocate: Your efforts redefined transparency worldwide.",
    },
    crowdsource_dashboards: {
      text: "Crowdsourcing through dashboards accelerates problem-solving. What’s next?",
      choices: [
        {
          text: "Expand crowdsourcing to global issues 🌍",
          next: "global_crowdsourcing",
          fx: { innovation: 15, influence: 10 },
        },
        {
          text: "Use crowdsourcing to innovate public services 🚀",
          next: "public_innovation",
          fx: { innovation: 15 },
        },
      ],
    },
    global_crowdsourcing: {
      text: "Global crowdsourcing addresses critical issues like climate change and poverty.",
      choices: [],
      ending:
        "Global Problem Solver: You turned governance into a collaborative force.",
    },
    public_innovation: {
      text: "Innovations in public services transform government efficiency and citizen satisfaction.",
      choices: [],
      ending:
        "Service Innovator: You revolutionized public services through collaboration.",
    },

    // Option 3: Create Meme-Based Reforms
    meme_reforms: {
      text: "Your meme-based reforms gain massive traction and public approval. What’s next?",
      choices: [
        {
          text: "Launch a public meme competition 🎉",
          next: "public_meme_competition",
          fx: { memes: 15 },
        },
        {
          text: "Develop meme-based educational campaigns 📚",
          next: "educational_memes",
          fx: { innovation: 10, memes: 5 },
        },
        {
          text: "Create a government meme department 🏢",
          next: "meme_department",
          fx: { memes: 15 },
        },
      ],
    },
    public_meme_competition: {
      text: "The meme competition inspires creativity and civic awareness. What do you do next?",
      choices: [
        {
          text: "Publish winning memes in a national anthology 📖",
          next: "meme_anthology",
          fx: { memes: 10 },
        },
        {
          text: "Use winning memes in public service campaigns 📣",
          next: "service_campaigns",
          fx: { influence: 10, memes: 10 },
        },
      ],
    },
    meme_anthology: {
      text: "The anthology becomes a bestseller, highlighting the power of humor.",
      choices: [],
      ending:
        "Cultural Icon: Your anthology brought humor and governance together.",
    },
    service_campaigns: {
      text: "Public service campaigns powered by memes create widespread engagement.",
      choices: [],
      ending:
        "Campaign Mastermind: You used memes to transform civic engagement.",
    },
    educational_memes: {
      text: "Educational campaigns using memes improve public understanding of governance.",
      choices: [
        {
          text: "Expand campaigns to schools 🎓",
          next: "school_memes",
          fx: { innovation: 10, influence: 10 },
        },
        {
          text: "Use memes to promote voter turnout 🗳️",
          next: "voter_memes",
          fx: { influence: 15 },
        },
      ],
    },
    school_memes: {
      text: "School programs powered by memes inspire a new generation of informed citizens.",
      choices: [],
      ending: "Meme Mentor: You educated the youth with humor and insight.",
    },
    voter_memes: {
      text: "Voter turnout surges, strengthening democracy through creativity.",
      choices: [],
      ending: "Democracy Defender: You inspired record voter engagement.",
    },
    meme_department: {
      text: "The meme department becomes a cultural hub for humor-driven reforms.",
      choices: [],
      ending:
        "Meme Minister: You institutionalized the power of memes in governance.",
    },

    // Path: Unleash the Meme Army
    meme_army: {
      text: "Your meme campaign gains massive traction, captivating audiences worldwide. What's next?",
      choices: [
        {
          text: "Collaborate with influencers 🌟",
          next: "influencer_collab",
          fx: { influence: 10, memes: 10 },
        },
        {
          text: "Create a Meme DAO 📜",
          next: "create_meme_dao",
          fx: { innovation: 10, memes: 15 },
        },
        {
          text: "Host a meme competition 🎉",
          next: "meme_competition",
          fx: { influence: 5, memes: 10 },
        },
      ],
    },

    // Option 1: Collaborate with Influencers
    influencer_collab: {
      text: "Influencers amplify your message, making your memes a cultural phenomenon. What’s next?",
      choices: [
        {
          text: "Turn memes into merchandise 🛍️",
          next: "meme_merch",
          fx: { influence: 10, memes: 10 },
        },
        {
          text: "Use memes to educate citizens 📚",
          next: "educational_memes",
          fx: { innovation: 10, memes: 5 },
        },
        {
          text: "Create meme-powered charity campaigns 💝",
          next: "meme_charity",
          fx: { influence: 15, memes: 10 },
        },
      ],
    },
    meme_merch: {
      text: "Merchandise profits fund public projects and spread the meme movement even further. What do you do next?",
      choices: [
        {
          text: "Invest profits into meme-based schools 🎓",
          next: "meme_schools",
          fx: { innovation: 15 },
        },
        {
          text: "Use profits to fund infrastructure upgrades 🏗️",
          next: "meme_infrastructure",
          fx: { efficiency: 15 },
        },
      ],
    },
    meme_schools: {
      text: "Meme-based schools teach humor and critical thinking to the next generation.",
      choices: [],
      ending:
        "Meme Mentor: You shaped a future where humor and knowledge go hand in hand.",
    },
    meme_infrastructure: {
      text: "Infrastructure upgrades funded by memes lead to better roads, faster internet, and happier citizens.",
      choices: [],
      ending:
        "Infrastructure Icon: You turned memes into a force for physical progress.",
    },
    educational_memes: {
      text: "Educational memes transform public understanding of complex policies. What's next?",
      choices: [
        {
          text: "Introduce meme-based civic courses 📖",
          next: "civic_courses",
          fx: { innovation: 10, influence: 10 },
        },
        {
          text: "Develop a meme-powered voting initiative 🗳️",
          next: "meme_voting",
          fx: { influence: 15 },
        },
      ],
    },
    civic_courses: {
      text: "Civic courses make education engaging and accessible to all.",
      choices: [],
      ending: "Civic Meme Innovator: You brought humor to civic education.",
    },
    meme_voting: {
      text: "Meme-powered voting drives record turnout and strengthens democracy.",
      choices: [],
      ending:
        "Democracy Defender: You revolutionized elections with creativity.",
    },
    meme_charity: {
      text: "Charity campaigns powered by memes raise unprecedented funds. What’s your next step?",
      choices: [
        {
          text: "Build global charity networks 🌍",
          next: "global_charity",
          fx: { influence: 20, innovation: 10 },
        },
        {
          text: "Develop tech to gamify charity campaigns 🎮",
          next: "gamify_charity",
          fx: { innovation: 15 },
        },
      ],
    },
    global_charity: {
      text: "Your charity networks improve lives worldwide, building bridges across nations.",
      choices: [],
      ending:
        "Global Humanitarian: You turned memes into a tool for global good.",
    },
    gamify_charity: {
      text: "Gamification of charity campaigns makes giving back fun and engaging.",
      choices: [],
      ending:
        "Charity Game Changer: You revolutionized philanthropy with innovation.",
    },

    // Option 2: Create a Meme DAO
    create_meme_dao: {
      text: "The Meme DAO gains massive support, enabling crowdfunding for reform projects. What's next?",
      choices: [
        {
          text: "Expand the DAO globally 🌍",
          next: "global_dao",
          fx: { influence: 20, innovation: 10 },
        },
        {
          text: "Use DAO funds for transparency dashboards 📊",
          next: "dashboard_funding",
          fx: { efficiency: 15 },
        },
        {
          text: "Partner DAO with tech companies 🤝",
          next: "tech_partnership",
          fx: { innovation: 20 },
        },
      ],
    },
    global_dao: {
      text: "The global DAO inspires international citizen-led reforms.",
      choices: [],
      ending: "Citizen Diplomat: You created a global movement for change.",
    },
    dashboard_funding: {
      text: "DAO funds improve transparency and public accountability.",
      choices: [],
      ending: "Transparency Titan: Your DAO transformed public trust.",
    },
    tech_partnership: {
      text: "Partnerships with tech companies revolutionize DAO efficiency.",
      choices: [],
      ending: "Tech Reformer: You pioneered citizen-tech collaboration.",
    },

    // Option 3: Host a Meme Competition
    meme_competition: {
      text: "The competition engages the public and sparks creativity. What’s next?",
      choices: [
        {
          text: "Publish winning memes in a national anthology 📖",
          next: "meme_anthology",
          fx: { memes: 10 },
        },
        {
          text: "Use winning memes in public service campaigns 📣",
          next: "service_campaigns",
          fx: { influence: 10, memes: 10 },
        },
        {
          text: "Turn winning memes into NFTs 🖼️",
          next: "nft_memes",
          fx: { innovation: 10, memes: 10 },
        },
      ],
    },
    meme_anthology: {
      text: "The anthology becomes a bestseller, immortalizing the power of humor.",
      choices: [],
      ending: "Cultural Icon: Your anthology brought humor to the masses.",
    },
    service_campaigns: {
      text: "Public service campaigns powered by memes drive engagement and awareness.",
      choices: [],
      ending:
        "Campaign Mastermind: You used memes to transform civic engagement.",
    },
    nft_memes: {
      text: "The NFT collection generates significant revenue for government projects.",
      choices: [],
      ending: "Digital Innovator: You blended art, technology, and reform.",
    },

    // Path: Explore Secret Archives
    secret_archives: {
      text: "You uncover classified documents revealing inefficiencies and hidden agendas. What’s your next move?",
      choices: [
        {
          text: "Expose the truth 🕵️‍♂️",
          next: "expose_truth",
          fx: { influence: 15, memes: 10 },
        },
        {
          text: "Use secrets for leverage 💼",
          next: "leverage_secrets",
          fx: { efficiency: 10, influence: 10 },
        },
        {
          text: "Destroy the archives 🔥",
          next: "destroy_archives",
          fx: { memes: 5 },
        },
      ],
    },

    // Option 1: Expose the Truth
    expose_truth: {
      text: "The truth shocks the nation, sparking protests and demands for change. What’s your next move?",
      choices: [
        {
          text: "Rally citizens for reforms 🗣️",
          next: "citizen_rally",
          fx: { influence: 15 },
        },
        {
          text: "Work with investigative journalists 📰",
          next: "journalist_collab",
          fx: { influence: 10, innovation: 5 },
        },
        {
          text: "Push for emergency government hearings 🏛️",
          next: "gov_hearings",
          fx: { influence: 20 },
        },
      ],
    },
    citizen_rally: {
      text: "Massive citizen rallies lead to legislative reforms and greater transparency. What’s your next step?",
      choices: [
        {
          text: "Create permanent citizen reform groups 🌟",
          next: "reform_groups",
          fx: { influence: 10, efficiency: 10 },
        },
        {
          text: "Push for direct democracy initiatives 🗳️",
          next: "direct_democracy",
          fx: { innovation: 10 },
        },
      ],
    },
    reform_groups: {
      text: "Citizen reform groups sustain momentum for change across the nation.",
      choices: [],
      ending:
        "People’s Advocate: You empowered the public to take control of governance.",
    },
    direct_democracy: {
      text: "Direct democracy initiatives give citizens a more active role in government decisions.",
      choices: [],
      ending:
        "Democracy Architect: You redefined governance by giving power to the people.",
    },
    journalist_collab: {
      text: "Investigative reports reveal deeper issues, accelerating systemic reforms. What’s next?",
      choices: [
        {
          text: "Focus on judicial reforms ⚖️",
          next: "judicial_reforms",
          fx: { efficiency: 10 },
        },
        {
          text: "Develop whistleblower protection laws 🛡️",
          next: "whistleblower_laws",
          fx: { influence: 15 },
        },
      ],
    },
    judicial_reforms: {
      text: "Judicial reforms enhance accountability and fairness in governance.",
      choices: [],
      ending: "Justice Champion: Your reforms restored trust in the system.",
    },
    whistleblower_laws: {
      text: "Whistleblower protections encourage more revelations, leading to continued improvements.",
      choices: [],
      ending:
        "Guardian of Truth: Your policies ensured transparency for the future.",
    },
    gov_hearings: {
      text: "Emergency hearings uncover corruption, resulting in high-profile resignations. What’s your next move?",
      choices: [
        {
          text: "Appoint new ethical leaders 🌟",
          next: "ethical_leaders",
          fx: { influence: 15 },
        },
        {
          text: "Pass anti-corruption legislation 📜",
          next: "anti_corruption",
          fx: { efficiency: 15 },
        },
      ],
    },
    ethical_leaders: {
      text: "New leaders bring a fresh perspective and earn public trust.",
      choices: [],
      ending: "Leadership Revitalizer: You redefined leadership in governance.",
    },
    anti_corruption: {
      text: "Anti-corruption laws create a cleaner, more efficient government.",
      choices: [],
      ending:
        "Corruption Fighter: Your efforts rooted out systemic inefficiencies.",
    },

    // Option 2: Use Secrets for Leverage
    leverage_secrets: {
      text: "Strategic use of secrets ensures quick policy changes in your favor. What’s next?",
      choices: [
        {
          text: "Secure funding for reforms 💰",
          next: "funding_reforms",
          fx: { efficiency: 15, influence: 10 },
        },
        {
          text: "Forge alliances with key figures 🤝",
          next: "key_alliances",
          fx: { influence: 10 },
        },
        {
          text: "Launch covert reform projects 🛠️",
          next: "covert_projects",
          fx: { efficiency: 10 },
        },
      ],
    },
    funding_reforms: {
      text: "Secured funding accelerates efficiency and innovation across departments. What’s next?",
      choices: [
        {
          text: "Establish oversight committees 📋",
          next: "oversight_committees",
          fx: { influence: 10 },
        },
        {
          text: "Modernize government infrastructure 🏗️",
          next: "modern_infra",
          fx: { efficiency: 15 },
        },
      ],
    },
    oversight_committees: {
      text: "Oversight committees ensure reforms are implemented effectively.",
      choices: [],
      ending:
        "Accountability Advocate: Your vigilance ensured long-term success.",
    },
    modern_infra: {
      text: "Modern infrastructure streamlines operations and improves efficiency.",
      choices: [],
      ending:
        "Efficiency Champion: Your efforts brought governance into the modern era.",
    },
    key_alliances: {
      text: "Key alliances with influential figures advance your reform agenda.",
      choices: [],
      ending: "Power Broker: You built alliances to drive meaningful change.",
    },
    covert_projects: {
      text: "Covert projects address inefficiencies without attracting public backlash.",
      choices: [],
      ending: "Stealth Reformer: You achieved success behind the scenes.",
    },

    // Option 3: Destroy the Archives
    destroy_archives: {
      text: "You destroy the archives, ensuring no one can misuse the sensitive information. What’s your next step?",
      choices: [
        {
          text: "Work quietly on reforms 🛠️",
          next: "quiet_reforms",
          fx: { efficiency: 10 },
        },
        {
          text: "Focus on restoring public trust 🤝",
          next: "restore_trust",
          fx: { influence: 10 },
        },
        {
          text: "Create a citizen watchdog group 👀",
          next: "watchdog_group",
          fx: { influence: 15 },
        },
      ],
    },
    quiet_reforms: {
      text: "Quiet but effective reforms eliminate inefficiencies without public uproar.",
      choices: [
        {
          text: "Increase automation in departments 🤖",
          next: "automation_reforms",
          fx: { efficiency: 15 },
        },
        {
          text: "Focus on rural areas for reform outreach 🌾",
          next: "rural_reforms",
          fx: { influence: 10 },
        },
      ],
    },
    automation_reforms: {
      text: "Automation reforms reduce bureaucracy and improve efficiency.",
      choices: [],
      ending:
        "Automation Advocate: You streamlined governance through technology.",
    },
    rural_reforms: {
      text: "Reforms bring modern governance to rural communities, empowering citizens.",
      choices: [],
      ending:
        "Rural Champion: You brought inclusive governance to underserved areas.",
    },
    restore_trust: {
      text: "Restoring trust brings renewed hope and support for the government. What’s your next focus?",
      choices: [
        {
          text: "Engage citizens in policy-making 📜",
          next: "citizen_engagement",
          fx: { influence: 10 },
        },
        {
          text: "Strengthen media transparency 📰",
          next: "media_transparency",
          fx: { influence: 15 },
        },
      ],
    },
    citizen_engagement: {
      text: "Citizens become active participants in policy-making, enhancing trust.",
      choices: [],
      ending:
        "Trust Builder: You empowered citizens to shape their government.",
    },
    media_transparency: {
      text: "Transparent media fosters accountability and public awareness.",
      choices: [],
      ending: "Media Ally: You ensured the free flow of truthful information.",
    },
    watchdog_group: {
      text: "The watchdog group monitors government actions, ensuring accountability.",
      choices: [],
      ending:
        "Sentinel of Integrity: Your efforts created a culture of vigilance.",
    },
  },
};

const initialState = {
  phase: PHASES.TITLE,
  scene: "intro",
  stats: { efficiency: 0, influence: 0, innovation: 0, memes: 0 },
  path: [],
  ending: null,
};

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-4 text-center w-full">
      <p>
        Made with <span className="text-red-500">❤</span> by the OG D.O.G.E.
        Community
      </p>
      <p>OG Doge CA: A5WzrfzWa4kjgEjSXCbnsn1xy5Aanuq3TCZJL1dhpump</p>
    </footer>
  );
}

function App() {
  const [state, setState] = useState(initialState);

  const handleChoice = (choice) => {
    const nextScene = G.scenes[choice.next];
    if (!nextScene) return;

    const newStats = { ...state.stats };
    Object.keys(choice.fx || {}).forEach((key) => {
      newStats[key] += choice.fx[key];
    });

    const isEnding = !nextScene.choices || nextScene.choices.length === 0;

    setState((prev) => ({
      ...prev,
      scene: choice.next,
      stats: newStats,
      path: [...prev.path, choice.next],
      phase: isEnding ? PHASES.ENDING : PHASES.STORY,
      ending: isEnding ? nextScene.ending : null,
    }));
  };

  const resetGame = () => setState(initialState);

  return (
    <div className="bg-gradient-custom min-h-screen flex flex-col justify-between">
      {/* Stats Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-md flex justify-around text-sm md:text-base">
        <div className="flex items-center space-x-1">
          <TrendingUp size={16} />{" "}
          <span>Efficiency: {state.stats.efficiency}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users size={16} /> <span>Influence: {state.stats.influence}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Brain size={16} /> <span>Innovation: {state.stats.innovation}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star size={16} /> <span>Memes: {state.stats.memes}</span>
        </div>
      </div>

      {/* Game Content */}
      <div className="p-8 bg-gray-800 rounded shadow-lg text-center w-11/12 md:w-3/4 mt-16 mx-auto">
        {state.phase === PHASES.TITLE ? (
          <>
            <h1 className="text-4xl font-bold">D.O.G.E</h1>
            <p className="mt-4 text-lg">Department Of Government Efficiency</p>
            <button
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded"
              onClick={() => setState({ ...state, phase: PHASES.STORY })}
            >
              Start
            </button>
          </>
        ) : state.phase === PHASES.ENDING ? (
          <>
            <h1 className="text-3xl font-bold">Ending</h1>
            <p className="mt-4">{G.scenes[state.scene].text}</p>
            <p className="mt-4 text-lg font-semibold">{state.ending}</p>
            <button
              className="mt-6 px-6 py-2 bg-green-500 text-white rounded"
              onClick={resetGame}
            >
              Replay
            </button>
          </>
        ) : (
          <>
            <p className="text-lg mb-6">{G.scenes[state.scene].text}</p>
            {G.scenes[state.scene].choices.map((choice, i) => (
              <button
                key={i}
                className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-left text-white rounded mb-2 transition-colors"
                onClick={() => handleChoice(choice)}
              >
                {choice.text}
              </button>
            ))}
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;