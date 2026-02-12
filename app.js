/**
 * Pop-Up Video - Real-Time Term Detection for Shopify Calls
 * An onboarding tool for new Shopifolk
 */

// ============================================
// Category Definitions
// ============================================

const CATEGORIES = {
    shopify: {
        id: 'shopify',
        name: 'Shopify Terms',
        icon: '🟢',
        description: 'Shopify-specific jargon and abbreviations'
    },
    tech: {
        id: 'tech',
        name: 'Tech Jargon',
        icon: '💻',
        description: 'Programming languages, frameworks, and technical concepts'
    },
    ecommerce: {
        id: 'ecommerce',
        name: 'Ecommerce',
        icon: '🛒',
        description: 'Fundamental ecommerce terms and concepts'
    },
    leadership: {
        id: 'leadership',
        name: 'Leadership',
        icon: '👔',
        description: 'Shopify Executive Leadership Team'
    }
};

// ============================================
// Terms Dictionary with Categories
// ============================================

const TERMS = {
    // ==========================================
    // SHOPIFY-SPECIFIC TERMS
    // ==========================================
    "1P": { definition: "1st party (e.g. Shopify)", category: "shopify" },
    "3P": { definition: "3rd party (e.g. another company, or someone who doesn't work at Shopify)", category: "shopify" },
    "ADG": { definition: "App Design Guidelines", category: "shopify" },
    "Admin": { definition: "Place where store owners manage their stores", category: "shopify" },
    "Affiliate": { definition: "They earn 20% passing us customers", category: "shopify" },
    "AMA": { definition: "Ask Me Anything", category: "shopify" },
    "AOV": { definition: "Average Order Value", category: "shopify" },
    "ATC": { definition: "Air Traffic Controller", category: "shopify" },
    "ATL": { definition: "Above The Line", category: "shopify" },
    "ATO": { definition: "Account takeovers", category: "shopify" },
    "AUP": { definition: "Acceptable use policy", category: "shopify" },
    "BFCM": { definition: "Black Friday/Cyber Monday", category: "shopify" },
    "BFS": { definition: "Built for Shopify", category: "shopify" },
    "BHAG": { definition: "Big Hairy Audacious Goal", category: "shopify" },
    "Bootscale": { definition: "Things that boot really fast", category: "shopify" },
    "BOPIS": { definition: "Buy online, pickup in-store", category: "shopify" },
    "BTL": { definition: "Below The Line", category: "shopify" },
    "Buyers": { definition: "The people who buy stuff from our customers' (merchants') stores", category: "shopify" },
    "BIN": { definition: "Bank identification number - first four to six numbers on a payment card", category: "shopify" },
    "C1": { definition: "Checkout 1", category: "shopify" },
    "CAC": { definition: "Customer Acquisition Cost", category: "shopify" },
    "CDP": { definition: "Customer data platform (may specifically refer to Shopify's CDP aka Melody)", category: "shopify" },
    "Churn": { definition: "Merchants that cancel their Shopify plans", category: "shopify" },
    "Clients": { definition: "Clients are owned by affiliates; we don't call our customers clients", category: "shopify" },
    "CMRR": { definition: "Committed Monthly Recurring Revenue", category: "shopify" },
    "Codex": { definition: "A mutable, living, breathing collection of writing that captures our current understanding", category: "shopify" },
    "Context": { definition: "Sharing context at Shopify is one of the most powerful things we can do", category: "shopify" },
    "COS": { definition: "Container-optimized operating system", category: "shopify" },
    "CPM": { definition: "Checkouts per minute (ambiguous - see CSPM, PAPM, or OCPM)", category: "shopify" },
    "CPQ": { definition: "Configure, price quote software", category: "shopify" },
    "CSPM": { definition: "Checkouts STARTED per minute", category: "shopify" },
    "CUEC": { definition: "Complementary User Entity Controls", category: "shopify" },
    "Customers": { definition: "Our Merchant's clients (also known as Cardholders)", category: "shopify" },
    "CV2": { definition: "Card Verification Value", category: "shopify" },
    "CVV": { definition: "Card Verification Value", category: "shopify" },
    "D&B": { definition: "Diversity and Belonging", category: "shopify" },
    "DC": { definition: "Data Center", category: "shopify" },
    "DOD": { definition: "Definition of Done", category: "shopify" },
    "Draft Orders": { definition: "Merchant created orders on behalf of their customers", category: "shopify" },
    "Draw the owl": { definition: "Give you the tools you need - but the rest is up to you", category: "shopify" },
    "DTC": { definition: "Direct to consumer", category: "shopify" },
    "DXD": { definition: "Digital by Design", category: "shopify" },
    "EDG": { definition: "Event driven guidance", category: "shopify" },
    "EMEA": { definition: "Europe, Middle East, and Africa", category: "shopify" },
    "ESG": { definition: "Executive Sponsor Group", category: "shopify" },
    "FED": { definition: "Front End Developer", category: "shopify" },
    "FMS": { definition: "Shopify's Warehouse Management System", category: "shopify" },
    "FX": { definition: "Foreign Exchange", category: "shopify" },
    "GA": { definition: "General availability", category: "shopify" },
    "GP": { definition: "Gross Profit", category: "shopify" },
    "GMV": { definition: "Gross Merchandise Value", category: "shopify" },
    "GPV": { definition: "Gross Payments Volume", category: "shopify" },
    "GSD": { definition: "Get Shit Done (Shopify's internal model for how it works)", category: "shopify" },
    "GTM": { definition: "Go-to-Market", category: "shopify" },
    "HEC": { definition: "HTTP Event Collector", category: "shopify" },
    "HLL": { definition: "High Leverage Leadership", category: "shopify" },
    "HRBP": { definition: "Human Resources Business Partner", category: "shopify" },
    "HSTU": { definition: "Hierarchical Sequential Transducers", category: "shopify" },
    "IA": { definition: "Information Architecture", category: "shopify" },
    "IC": { definition: "Individual Contributor", category: "shopify" },
    "IMOC": { definition: "Incident Manager On Call", category: "shopify" },
    "Internal Dash": { definition: "The backend control panel of a shop with merchant information", category: "shopify" },
    "IRL": { definition: "In Real Life (also the name of an offline marketing team)", category: "shopify" },
    "JML": { definition: "Jean-Michel Lemieux, former CTO for Shopify (2015-2021)", category: "shopify" },
    "KYC": { definition: "Know Your Customer / Know Your Client", category: "shopify" },
    "L2C": { definition: "Lead to customer", category: "shopify" },
    "L2O": { definition: "Lead to order", category: "shopify" },
    "LOI": { definition: "Level of Impact", category: "shopify" },
    "LGTM": { definition: "Looks good to me", category: "shopify" },
    "Lightning Talks": { definition: "A quick 4-minute talk to discuss what you're working on", category: "shopify" },
    "LPM": { definition: "Local payment methods", category: "shopify" },
    "LTV": { definition: "Lifetime Value", category: "shopify" },
    "MAF": { definition: "Mark as Fulfill", category: "shopify" },
    "MDP": { definition: "Multiple Delivery Profiles / Shipping profiles", category: "shopify" },
    "Merchant Frustrations": { definition: "Feedback and feature requests (formerly Epic Want)", category: "shopify" },
    "Merchants": { definition: "Our customers - users of Shopify", category: "shopify" },
    "MMI": { definition: "Multi-managed Inventory", category: "shopify" },
    "MPA": { definition: "Multi-Party Authentication", category: "shopify" },
    "MRR": { definition: "Monthly Recurring Revenue", category: "shopify" },
    "MS": { definition: "Merchant Services", category: "shopify" },
    "MSM": { definition: "Merchant Success Managers", category: "shopify" },
    "MX80": { definition: "A universal routing platform", category: "shopify" },
    "NNM": { definition: "Net New Merchants", category: "shopify" },
    "O2O": { definition: "Online to offline", category: "shopify" },
    "OAP": { definition: "Outcome, Assumptions, Principles", category: "shopify" },
    "OCPM": { definition: "Orders CREATED per minute", category: "shopify" },
    "OFS": { definition: "One Financial Suite", category: "shopify" },
    "OSE": { definition: "Online Store Editor", category: "shopify" },
    "OSP": { definition: "Order status page", category: "shopify" },
    "PAPM": { definition: "Payments ATTEMPTED per minute", category: "shopify" },
    "Partner": { definition: "They work with Shopify as a developer, designer, affiliate, etc.", category: "shopify" },
    "PdM": { definition: "Product Management", category: "shopify" },
    "PDP": { definition: "Product Detail Page", category: "shopify" },
    "PG": { definition: "Persistent Guide", category: "shopify" },
    "PIM": { definition: "Product Information Management", category: "shopify" },
    "Ping": { definition: "To send a @ message in Slack", category: "shopify" },
    "PL": { definition: "Product Lines", category: "shopify" },
    "SL": { definition: "Service Lines", category: "shopify" },
    "PMM": { definition: "Product Marketing Manager", category: "shopify" },
    "POPJ": { definition: "Purchase Order Processing Job", category: "shopify" },
    "PPA": { definition: "Partner Program Agreement", category: "shopify" },
    "PPP": { definition: "Payments Partner Platform", category: "shopify" },
    "PSN": { definition: "Team that creates a networked Shopify using merchant feedback", category: "shopify" },
    "Q1": { definition: "First quarter", category: "shopify" },
    "Q2": { definition: "Second quarter", category: "shopify" },
    "Q3": { definition: "Third quarter", category: "shopify" },
    "Q4": { definition: "Fourth quarter", category: "shopify" },
    "RCA": { definition: "Root Cause Analysis", category: "shopify" },
    "RMA": { definition: "Return Merchandise Authorization", category: "shopify" },
    "ROAS": { definition: "Return on ad spend", category: "shopify" },
    "ROP": { definition: "Reorder points", category: "shopify" },
    "SDP": { definition: "Shopify's Data Platform", category: "shopify" },
    "Session Token": { definition: "Authenticate requests between client and app backend", category: "shopify" },
    "SFN": { definition: "Shopify Fulfillment Network", category: "shopify" },
    "SFR": { definition: "Storefront Renderer", category: "shopify" },
    "Ship it": { definition: "To finish off a task by getting shit done", category: "shopify" },
    "Shopifolk": { definition: "Shopify employee", category: "shopify" },
    "Shopify 2": { definition: "External name for Admin 2", category: "shopify" },
    "Shopify Spaces": { definition: "Globally located, local merchant community hubs", category: "shopify" },
    "SLT": { definition: "Senior Leadership Team", category: "shopify" },
    "SMB": { definition: "Small and Midsize Business", category: "shopify" },
    "SOT": { definition: "System of Truth", category: "shopify" },
    "SOW": { definition: "System of Work", category: "shopify" },
    "SP": { definition: "Shopify Payments", category: "shopify" },
    "SPI": { definition: "Shop Pay Installment (Shopify's Buy Now Pay Later product)", category: "shopify" },
    "SPIF": { definition: "Sales Program Incentive Funds", category: "shopify" },
    "SPIFF": { definition: "Sales Program Incentive Funds", category: "shopify" },
    "SQ": { definition: "Signup questionnaire", category: "shopify" },
    "SRM": { definition: "Support Response Manager", category: "shopify" },
    "SS": { definition: "Shopify Shipping OR ShipStation", category: "shopify" },
    "SA": { definition: "Support Advisor", category: "shopify" },
    "SSA": { definition: "Senior Support Advisor", category: "shopify" },
    "Table stakes": { definition: "Resources required to enter a product market", category: "shopify" },
    "TAM": { definition: "Total Addressable Market", category: "shopify" },
    "TMS": { definition: "Technical Merchant Support", category: "shopify" },
    "Tophat": { definition: "Testing and reviewing code workflow at Shopify", category: "shopify" },
    "Townhalls": { definition: "Weekly company-wide virtual gathering", category: "shopify" },
    "Trust Battery": { definition: "The level of trust we have for each other after an interaction", category: "shopify" },
    "Unicorn": { definition: "Giving praise and recognition publicly for a job well done", category: "shopify" },
    "Webscale": { definition: "Systems optimized for high performance at runtime", category: "shopify" },
    "WGLL": { definition: "What Good Looks Like", category: "shopify" },
    "Zendesk": { definition: "Our internal ticketing/email/CRM system", category: "shopify" },
    "Polaris": { definition: "Shopify's design system and component library for building merchant experiences", category: "shopify" },
    "Liquid": { definition: "Shopify's open-source template language for rendering dynamic content in themes", category: "shopify" },
    "Monolith": { definition: "Traditional architecture where entire application is a single, unified codebase (Shopify's 'Majestic Monolith')", category: "shopify" },

    // ==========================================
    // SHOPIFY EXECUTIVE LEADERSHIP
    // ==========================================
    "Tobi": { definition: "Tobi Lütke - CEO & Head of R&D", category: "leadership" },
    "Toby": { definition: "Tobi Lütke - CEO & Head of R&D", category: "leadership" },
    "Harley": { definition: "Harley Finkelstein - President", category: "leadership" },
    "Mikhail": { definition: "Mikhail Parakhin - Chief Technology Officer (CTO)", category: "leadership" },
    "Carl": { definition: "Carl Rivera - Chief Design Officer (CDO)", category: "leadership" },
    "Jess": { definition: "Jess Hertz - Chief Operating Officer (COO)", category: "leadership" },
    "Jeff": { definition: "Jeff Hoffmeister - Chief Financial Officer (CFO)", category: "leadership" },
    "Kate": { definition: "Kate Royer - Chief of Staff", category: "leadership" },
    "Archie": { definition: "Archie Abrams - VP, Product, Head of Growth", category: "leadership" },
    "Vanessa": { definition: "Vanessa Lee - VP, Product", category: "leadership" },

    // ==========================================
    // ECOMMERCE TERMS
    // ==========================================
    "3PL": { definition: "Third party logistics - The outsourcing of ecommerce logistics processes to a third party business, including inventory management, warehousing, and fulfillment", category: "ecommerce" },
    "AOV": { definition: "Average Order Value - Tracks the average dollar amount spent each time a customer places an order on a website or app", category: "ecommerce" },
    "B2B": { definition: "Business to Business - A business relationship in which businesses provide products or services to other businesses", category: "ecommerce" },
    "B2C": { definition: "Business to Consumer - A business relationship in which businesses provide products or services to individual consumers", category: "ecommerce" },
    "BOPIS": { definition: "Buy Online, Pickup In Store - A retail strategy allowing customers to purchase online and collect at a physical location", category: "ecommerce" },
    "Bounce rate": { definition: "The percentage of people who leave after viewing a single page", category: "ecommerce" },
    "C2C": { definition: "Customer to Customer - A business relationship that fosters commerce between private individuals", category: "ecommerce" },
    "C2B": { definition: "Consumer to Business - A business relationship in which a consumer or end user provides a product or service to an organization", category: "ecommerce" },
    "Cart abandonment": { definition: "When shoppers add items to their cart but abandon the web page before they check out", category: "ecommerce" },
    "Cart abandonment rate": { definition: "The ratio of shoppers who add items to their cart but abandon the web page before they check out", category: "ecommerce" },
    "Customer lifetime value": { definition: "The estimated total worth of a customer to a business over the entirety of their relationship", category: "ecommerce" },
    "CLV": { definition: "Customer Lifetime Value - The expected net profit a company can hope to gain from an individual customer over time", category: "ecommerce" },
    "CLTV": { definition: "Customer Lifetime Value - The expected net profit a company can hope to gain from an individual customer over time", category: "ecommerce" },
    "CRO": { definition: "Conversion Rate Optimization - The process of increasing the percentage of conversions from a website or mobile app", category: "ecommerce" },
    "CTR": { definition: "Click Through Rate - The ratio of users who click on a specific link to the number of total users who view a page, email, or advertisement", category: "ecommerce" },
    "Dropshipping": { definition: "A fulfillment method whereby the ecommerce store does not own the stock or inventory it sells, partnering with a third-party manufacturer who ships items once purchased", category: "ecommerce" },
    "Exit rate": { definition: "The percentage of people who leave after viewing the page", category: "ecommerce" },
    "Localization": { definition: "The process of adapting all content of an online business's website or app so that it resonates strongly with each individual market", category: "ecommerce" },
    "Order transparency": { definition: "A business responsibility to provide honest, transparent, and relevant product information, including where products come from and how they were manufactured", category: "ecommerce" },
    "PCI compliance": { definition: "Payment Card Industry Data Security Standard (PCI DSS) - Requirements to ensure companies that process credit card information maintain a secure environment", category: "ecommerce" },
    "PCI DSS": { definition: "Payment Card Industry Data Security Standard - Requirements to ensure companies that process credit card information maintain a secure environment", category: "ecommerce" },
    "POS": { definition: "Point of Sale - The hardware and software that enables merchants to make sales, accept payments, and check out customers", category: "ecommerce" },
    "Point of sale": { definition: "The hardware and software that enables merchants to make sales, accept payments, and check out customers", category: "ecommerce" },
    "Reverse logistics": { definition: "The return process of an order encompassing everything from a customer's decision to return the product to it arriving back at the warehouse", category: "ecommerce" },
    "SKU": { definition: "Stock Keeping Unit - A number that retailers use to differentiate products and track inventory levels, typically eight alphanumeric digits", category: "ecommerce" },
    "Social commerce": { definition: "The use of social media platforms like Facebook and Instagram to market and sell products and services", category: "ecommerce" },
    "Social proof": { definition: "Based on the theory that people will look to others and be influenced by their behaviour in order to copy them", category: "ecommerce" },
    "SSL": { definition: "Secure Sockets Layer - A digital certificate that authenticates the identity of a website and enables an encrypted connection", category: "ecommerce" },
    "Tokenization": { definition: "The process by which customer payment information is saved securely as a randomly generated alphanumeric code instead of actual credit card details", category: "ecommerce" },
    "UGC": { definition: "User Generated Content - Any form of content created and shared by users based on their experiences, opinions, ideas, or feedback", category: "ecommerce" },

    // ==========================================
    // PROGRAMMING LANGUAGES
    // ==========================================
    "JavaScript": { definition: "Front-end/Back-end - The primary language for web development, runs in browsers and on servers (Node.js)", category: "tech" },
    "TypeScript": { definition: "Front-end/Back-end - JavaScript with static typing, catches errors before runtime", category: "tech" },
    "Python": { definition: "Back-end/Data Science/AI - General-purpose language for web development, data analysis, and machine learning", category: "tech" },
    "Ruby": { definition: "Back-end - Dynamic language known for developer happiness, powers Ruby on Rails framework", category: "tech" },
    "Java": { definition: "Back-end/Enterprise - Statically-typed language for scalable, enterprise-grade applications and Android apps", category: "tech" },
    "Kotlin": { definition: "Mobile/Back-end - Modern language for Android development, interoperable with Java", category: "tech" },
    "Swift": { definition: "Mobile - Apple's language for iOS, macOS, watchOS, and tvOS development", category: "tech" },
    "Objective-C": { definition: "Mobile - Legacy Apple language for iOS/macOS, being replaced by Swift", category: "tech" },
    "Go": { definition: "Back-end/Infrastructure - Google's language for concurrent programming and microservices", category: "tech" },
    "Golang": { definition: "Back-end/Infrastructure - Google's language for concurrent programming and microservices", category: "tech" },
    "Rust": { definition: "Systems Programming - Memory-safe language for high-performance applications and WebAssembly", category: "tech" },
    "C++": { definition: "Systems Programming - High-performance language for game engines and operating systems", category: "tech" },
    "C#": { definition: "Back-end/Game Development - Microsoft's language for .NET framework and Unity game development", category: "tech" },
    "PHP": { definition: "Back-end - Server-side language that powers WordPress and many web applications", category: "tech" },
    "Scala": { definition: "Back-end/Data Engineering - Functional language on JVM, popular for big data (Spark)", category: "tech" },
    "Elixir": { definition: "Back-end - Functional language built on Erlang VM, known for scalability and real-time apps", category: "tech" },
    "Dart": { definition: "Mobile/Front-end - Google's language for Flutter cross-platform development", category: "tech" },
    "R": { definition: "Data Science/Statistics - Specialized language for statistical computing and data visualization", category: "tech" },
    "HTML": { definition: "Front-end Markup - The structure/skeleton of web pages", category: "tech" },
    "CSS": { definition: "Front-end Styling - Defines the visual appearance and layout of web pages", category: "tech" },
    "SCSS": { definition: "Front-end Styling - CSS preprocessor with variables, nesting, and mixins", category: "tech" },
    "Sass": { definition: "Front-end Styling - CSS preprocessor with variables, nesting, and mixins", category: "tech" },

    // ==========================================
    // FRONT-END FRAMEWORKS & LIBRARIES
    // ==========================================
    "React": { definition: "Front-end Framework - JavaScript library for building UIs with component-based architecture", category: "tech" },
    "Vue": { definition: "Front-end Framework - Progressive JavaScript framework known for gentle learning curve", category: "tech" },
    "Angular": { definition: "Front-end Framework - Google's comprehensive framework for single-page applications", category: "tech" },
    "Svelte": { definition: "Front-end Framework - Compiler-based framework shifting work from runtime to build time", category: "tech" },
    "Next.js": { definition: "Front-end Framework - React framework with server-side rendering and static site generation", category: "tech" },
    "Nuxt": { definition: "Front-end Framework - Vue framework with SSR capabilities", category: "tech" },
    "jQuery": { definition: "Front-end Library - Legacy JavaScript library for DOM manipulation", category: "tech" },
    "Bootstrap": { definition: "Front-end Framework - CSS framework for responsive design with pre-built components", category: "tech" },
    "Tailwind": { definition: "Front-end Framework - Utility-first CSS framework for rapid UI development", category: "tech" },
    "Tailwind CSS": { definition: "Front-end Framework - Utility-first CSS framework for rapid UI development", category: "tech" },
    "Material-UI": { definition: "Front-end Library - React component library implementing Google's Material Design", category: "tech" },
    "MUI": { definition: "Front-end Library - React component library implementing Google's Material Design", category: "tech" },
    "Chakra UI": { definition: "Front-end Library - React component library focused on accessibility", category: "tech" },
    "Redux": { definition: "State Management - Predictable state container for JavaScript apps", category: "tech" },
    "MobX": { definition: "State Management - Simple, scalable state management through reactive programming", category: "tech" },
    "Zustand": { definition: "State Management - Lightweight state management for React applications", category: "tech" },

    // ==========================================
    // BACK-END FRAMEWORKS & LIBRARIES
    // ==========================================
    "Ruby on Rails": { definition: "Back-end Framework - Full-stack web framework, Shopify's core framework", category: "tech" },
    "Rails": { definition: "Back-end Framework - Full-stack Ruby web framework, Shopify's core framework", category: "tech" },
    "Node.js": { definition: "Back-end Runtime - JavaScript runtime built on Chrome's V8 engine", category: "tech" },
    "Node": { definition: "Back-end Runtime - JavaScript runtime built on Chrome's V8 engine", category: "tech" },
    "Express": { definition: "Back-end Framework - Minimal and flexible Node.js web application framework", category: "tech" },
    "Express.js": { definition: "Back-end Framework - Minimal and flexible Node.js web application framework", category: "tech" },
    "Django": { definition: "Back-end Framework - High-level Python framework with 'batteries included' philosophy", category: "tech" },
    "Flask": { definition: "Back-end Framework - Lightweight Python framework for web applications and APIs", category: "tech" },
    "FastAPI": { definition: "Back-end Framework - Modern Python framework for APIs with automatic documentation", category: "tech" },
    "Spring Boot": { definition: "Back-end Framework - Java framework for production-ready applications", category: "tech" },
    "ASP.NET": { definition: "Back-end Framework - Microsoft's cross-platform framework for web apps and APIs", category: "tech" },
    "Laravel": { definition: "Back-end Framework - PHP framework with elegant syntax", category: "tech" },
    "Phoenix": { definition: "Back-end Framework - Elixir framework for scalable, real-time web applications", category: "tech" },
    "Sinatra": { definition: "Back-end Framework - Lightweight Ruby framework for simple web applications", category: "tech" },
    "Koa": { definition: "Back-end Framework - Next-generation Node.js framework by the creators of Express", category: "tech" },
    "NestJS": { definition: "Back-end Framework - Progressive Node.js framework with TypeScript support", category: "tech" },

    // ==========================================
    // MOBILE DEVELOPMENT
    // ==========================================
    "React Native": { definition: "Mobile Framework - JavaScript framework for building native iOS and Android apps", category: "tech" },
    "Flutter": { definition: "Mobile Framework - Google's UI toolkit for cross-platform apps from single codebase", category: "tech" },
    "SwiftUI": { definition: "Mobile Framework - Apple's declarative framework for iOS/macOS interfaces", category: "tech" },
    "Jetpack Compose": { definition: "Mobile Framework - Android's modern toolkit for building native UI with Kotlin", category: "tech" },
    "Ionic": { definition: "Mobile Framework - Hybrid mobile framework using web technologies", category: "tech" },
    "Xamarin": { definition: "Mobile Framework - Microsoft's cross-platform framework using C# and .NET", category: "tech" },
    "Cordova": { definition: "Mobile Framework - Framework for building mobile apps using HTML, CSS, and JavaScript", category: "tech" },
    "PhoneGap": { definition: "Mobile Framework - Framework for building mobile apps using HTML, CSS, and JavaScript", category: "tech" },

    // ==========================================
    // DATABASES & DATA STORAGE
    // ==========================================
    "PostgreSQL": { definition: "Relational Database - Open-source SQL database known for reliability and features", category: "tech" },
    "Postgres": { definition: "Relational Database - Open-source SQL database known for reliability and features", category: "tech" },
    "MySQL": { definition: "Relational Database - Popular open-source SQL database for web applications", category: "tech" },
    "MongoDB": { definition: "NoSQL Database - Document-oriented database storing data in JSON-like format", category: "tech" },
    "Mongo": { definition: "NoSQL Database - Document-oriented database storing data in JSON-like format", category: "tech" },
    "Redis": { definition: "In-Memory Database - Fast key-value store for caching and real-time analytics", category: "tech" },
    "Elasticsearch": { definition: "Search/Analytics Engine - Distributed search and analytics engine", category: "tech" },
    "Cassandra": { definition: "NoSQL Database - Wide-column store for large amounts of distributed data", category: "tech" },
    "DynamoDB": { definition: "NoSQL Database - AWS's fully managed NoSQL database service", category: "tech" },
    "Firestore": { definition: "NoSQL Database - Google's cloud-hosted NoSQL database for mobile and web", category: "tech" },
    "SQLite": { definition: "Relational Database - Lightweight, embedded database often used in mobile apps", category: "tech" },
    "MariaDB": { definition: "Relational Database - MySQL fork created by original MySQL developers", category: "tech" },
    "Oracle Database": { definition: "Relational Database - Enterprise-grade database for mission-critical applications", category: "tech" },
    "SQL Server": { definition: "Relational Database - Microsoft's relational database management system", category: "tech" },
    "Memcached": { definition: "In-Memory Cache - Distributed memory caching system", category: "tech" },
    "Neo4j": { definition: "Graph Database - Database for storing and querying graph structures", category: "tech" },
    "ClickHouse": { definition: "Columnar Database - Fast open-source columnar database for real-time analytics", category: "tech" },

    // ==========================================
    // CLOUD PLATFORMS & INFRASTRUCTURE
    // ==========================================
    "AWS": { definition: "Cloud Platform - Amazon Web Services, comprehensive cloud computing platform", category: "tech" },
    "GCP": { definition: "Cloud Platform - Google Cloud Platform suite of cloud computing services", category: "tech" },
    "Azure": { definition: "Cloud Platform - Microsoft's cloud computing platform and services", category: "tech" },
    "Docker": { definition: "Containerization - Platform for developing and running applications in containers", category: "tech" },
    "Kubernetes": { definition: "Container Orchestration - System for automating deployment and scaling of containers", category: "tech" },
    "K8s": { definition: "Container Orchestration - Kubernetes, system for automating container deployment", category: "tech" },
    "Terraform": { definition: "Infrastructure as Code - Tool for building and versioning infrastructure", category: "tech" },
    "Ansible": { definition: "Configuration Management - Automation tool for provisioning and configuration", category: "tech" },
    "Jenkins": { definition: "CI/CD - Open-source automation server for continuous integration", category: "tech" },
    "GitHub Actions": { definition: "CI/CD - GitHub's automation platform for building, testing, and deploying", category: "tech" },
    "CircleCI": { definition: "CI/CD - Cloud-based continuous integration and delivery platform", category: "tech" },
    "GitLab CI": { definition: "CI/CD - GitLab's built-in continuous integration and deployment", category: "tech" },
    "Heroku": { definition: "Platform as a Service - Cloud platform for deploying and managing applications", category: "tech" },
    "Vercel": { definition: "Hosting Platform - Cloud platform optimized for frontend frameworks", category: "tech" },
    "Netlify": { definition: "Hosting Platform - Platform for deploying modern web projects", category: "tech" },
    "CloudFlare": { definition: "CDN/Security - Content delivery network and DDoS protection service", category: "tech" },
    "Nginx": { definition: "Web Server/Load Balancer - High-performance web server and reverse proxy", category: "tech" },
    "Apache": { definition: "Web Server - Open-source HTTP server for web hosting", category: "tech" },
    "EC2": { definition: "Cloud Compute - AWS Elastic Compute Cloud for scalable virtual servers", category: "tech" },
    "GCE": { definition: "Cloud Compute - Google Compute Engine for virtual machines", category: "tech" },
    "GKE": { definition: "Cloud Kubernetes - Google Kubernetes Engine for managed Kubernetes", category: "tech" },

    // ==========================================
    // AI/ML FRAMEWORKS & TOOLS
    // ==========================================
    "TensorFlow": { definition: "Machine Learning Framework - Google's open-source ML and deep learning framework", category: "tech" },
    "PyTorch": { definition: "Machine Learning Framework - Facebook's deep learning framework", category: "tech" },
    "Keras": { definition: "Machine Learning Library - High-level neural networks API on TensorFlow", category: "tech" },
    "Scikit-learn": { definition: "Machine Learning Library - Python library for classical ML algorithms", category: "tech" },
    "Hugging Face": { definition: "AI Platform/Library - Platform and library for NLP and transformers", category: "tech" },
    "LangChain": { definition: "AI Framework - Framework for developing LLM-powered applications", category: "tech" },
    "OpenAI API": { definition: "AI Service - API for accessing GPT models (ChatGPT, GPT-4)", category: "tech" },
    "OpenAI": { definition: "AI Service - Company behind ChatGPT and GPT models", category: "tech" },
    "Anthropic": { definition: "AI Service - Company behind Claude AI models", category: "tech" },
    "Claude": { definition: "AI Service - Anthropic's conversational AI models", category: "tech" },
    "Gemini": { definition: "AI Service - Google's conversational AI and API", category: "tech" },
    "LlamaIndex": { definition: "AI Framework - Framework for connecting LLMs with external data", category: "tech" },
    "Pinecone": { definition: "Vector Database - Database optimized for storing vector embeddings", category: "tech" },
    "Weaviate": { definition: "Vector Database - Open-source vector database for AI applications", category: "tech" },
    "Chroma": { definition: "Vector Database - Open-source embedding database for AI apps", category: "tech" },
    "Weights & Biases": { definition: "MLOps Platform - Platform for tracking ML experiments", category: "tech" },
    "MLflow": { definition: "MLOps Platform - Open-source platform for managing ML lifecycle", category: "tech" },
    "Jupyter": { definition: "Development Environment - Interactive computing for data science and ML", category: "tech" },
    "Jupyter Notebook": { definition: "Development Environment - Interactive computing for data science and ML", category: "tech" },
    "Apache Spark": { definition: "Big Data Processing - Unified analytics engine for large-scale data", category: "tech" },
    "Spark": { definition: "Big Data Processing - Unified analytics engine for large-scale data", category: "tech" },
    "Pandas": { definition: "Data Analysis Library - Python library for data manipulation and analysis", category: "tech" },
    "NumPy": { definition: "Numerical Computing - Python library for numerical computing with arrays", category: "tech" },
    "Matplotlib": { definition: "Data Visualization - Python library for creating visualizations", category: "tech" },
    "Seaborn": { definition: "Data Visualization - Python library for statistical visualizations", category: "tech" },
    "Stable Diffusion": { definition: "AI Model - Open-source text-to-image generation model", category: "tech" },
    "CUDA": { definition: "Parallel Computing - NVIDIA's platform for GPU computing (critical for AI/ML)", category: "tech" },

    // ==========================================
    // AI-SPECIFIC TERMS & CONCEPTS
    // ==========================================
    "LLM": { definition: "Large Language Model - Neural networks trained on vast amounts of text (GPT-4, Claude)", category: "tech" },
    "NLP": { definition: "Natural Language Processing - AI focused on computer-human language interaction", category: "tech" },
    "Transformer": { definition: "AI Architecture - Neural network using self-attention (basis for modern LLMs)", category: "tech" },
    "Fine-tuning": { definition: "AI Training - Adapting a pre-trained model to a specific task or domain", category: "tech" },
    "Prompt Engineering": { definition: "AI Practice - Designing effective prompts to get desired LLM outputs", category: "tech" },
    "RAG": { definition: "Retrieval-Augmented Generation - Combining document retrieval with generation", category: "tech" },
    "Embeddings": { definition: "AI Concept - Numerical representations of text in vector space", category: "tech" },
    "Token": { definition: "AI Unit - Basic unit of text processed by language models (~4 characters)", category: "tech" },
    "Context Window": { definition: "AI Concept - Maximum amount of text an LLM can process at once", category: "tech" },
    "Hallucination": { definition: "AI Behavior - When AI generates plausible-sounding but incorrect information", category: "tech" },
    "RLHF": { definition: "AI Training - Reinforcement Learning from Human Feedback", category: "tech" },
    "MCP": { definition: "Model Context Protocol - Protocol for connecting AI assistants with external data", category: "tech" },
    "Cursor Rules": { definition: "AI Config - Configuration files defining how AI coding assistants behave", category: "tech" },
    "Copilot": { definition: "AI Tool - GitHub's AI pair programmer powered by OpenAI", category: "tech" },
    "ChatGPT": { definition: "AI Tool - OpenAI's conversational AI interface for GPT models", category: "tech" },
    "Claude Code": { definition: "AI Tool - Anthropic's AI coding assistant", category: "tech" },
    "Vibe Coding": { definition: "AI Practice - Using AI to rapidly prototype through conversation", category: "tech" },
    "Agentic AI": { definition: "AI Concept - AI systems that can take autonomous actions and decisions", category: "tech" },
    "Function Calling": { definition: "AI Feature - LLM capability to call external functions/APIs", category: "tech" },
    "Temperature": { definition: "AI Parameter - Controls randomness in AI outputs (higher = more creative)", category: "tech" },

    // ==========================================
    // DEVELOPER TOOLS & IDEs
    // ==========================================
    "IDE": { definition: "Development Tool - Integrated Development Environment combining editor, debugger, build tools", category: "tech" },
    "VS Code": { definition: "Code Editor - Microsoft's free, open-source code editor with extensions", category: "tech" },
    "Visual Studio Code": { definition: "Code Editor - Microsoft's free, open-source code editor", category: "tech" },
    "Cursor": { definition: "AI-Powered IDE - Code editor with built-in AI assistance for pair programming", category: "tech" },
    "IntelliJ": { definition: "IDE - JetBrains' IDE for Java, Kotlin, and JVM languages", category: "tech" },
    "IntelliJ IDEA": { definition: "IDE - JetBrains' IDE for Java, Kotlin, and JVM languages", category: "tech" },
    "PyCharm": { definition: "IDE - JetBrains' IDE specifically for Python development", category: "tech" },
    "Xcode": { definition: "IDE - Apple's IDE for iOS, macOS, watchOS, and tvOS development", category: "tech" },
    "Android Studio": { definition: "IDE - Google's official IDE for Android development", category: "tech" },
    "Vim": { definition: "Text Editor - Highly configurable text editor (steep learning curve)", category: "tech" },
    "Neovim": { definition: "Text Editor - Modern Vim fork with better extensibility", category: "tech" },
    "Emacs": { definition: "Text Editor - Extensible, customizable text editor", category: "tech" },
    "Sublime Text": { definition: "Text Editor - Lightweight, fast code editor with plugins", category: "tech" },
    "WebStorm": { definition: "IDE - JetBrains' IDE for JavaScript and TypeScript", category: "tech" },
    "Rider": { definition: "IDE - JetBrains' cross-platform .NET IDE", category: "tech" },
    "Git": { definition: "Version Control - Distributed version control for tracking code changes", category: "tech" },
    "GitHub": { definition: "Code Hosting Platform - Web-based platform for Git repositories", category: "tech" },
    "GitLab": { definition: "DevOps Platform - Complete DevOps platform with Git repository management", category: "tech" },
    "Bitbucket": { definition: "Code Hosting Platform - Atlassian's Git repository management", category: "tech" },
    "npm": { definition: "Package Manager - Node Package Manager for JavaScript", category: "tech" },
    "Yarn": { definition: "Package Manager - Fast JavaScript package manager alternative to npm", category: "tech" },
    "pip": { definition: "Package Manager - Package installer for Python", category: "tech" },
    "Homebrew": { definition: "Package Manager - Package manager for macOS and Linux", category: "tech" },
    "Postman": { definition: "API Testing Tool - Platform for designing, testing, and documenting APIs", category: "tech" },
    "Insomnia": { definition: "API Testing Tool - REST and GraphQL API testing tool", category: "tech" },
    "Figma": { definition: "Design Tool - Collaborative interface design tool for eng/design handoff", category: "tech" },
    "Storybook": { definition: "UI Development Tool - Tool for building UI components in isolation", category: "tech" },
    "Chrome DevTools": { definition: "Browser Tools - Web developer tools built into Chrome", category: "tech" },
    "DevTools": { definition: "Browser Tools - Web developer tools built into browsers", category: "tech" },

    // ==========================================
    // DEVOPS & MONITORING
    // ==========================================
    "Datadog": { definition: "Monitoring Platform - Cloud monitoring and analytics for infrastructure", category: "tech" },
    "New Relic": { definition: "Application Monitoring - Platform for monitoring application performance (APM)", category: "tech" },
    "Prometheus": { definition: "Monitoring System - Open-source monitoring and alerting toolkit", category: "tech" },
    "Grafana": { definition: "Visualization Platform - Open-source analytics and monitoring dashboards", category: "tech" },
    "Splunk": { definition: "Log Management - Platform for searching and analyzing machine-generated data", category: "tech" },
    "ELK Stack": { definition: "Log Management - Elasticsearch, Logstash, Kibana for log management", category: "tech" },
    "Sentry": { definition: "Error Tracking - Platform for monitoring and fixing crashes in real-time", category: "tech" },
    "PagerDuty": { definition: "Incident Management - Incident response platform for on-call management", category: "tech" },

    // ==========================================
    // API & COMMUNICATION PROTOCOLS
    // ==========================================
    "REST": { definition: "API Architecture - Architectural style for networked applications using HTTP", category: "tech" },
    "RESTful": { definition: "API Architecture - APIs following REST architectural principles", category: "tech" },
    "GraphQL": { definition: "Query Language - Query language allowing clients to request exactly what they need", category: "tech" },
    "gRPC": { definition: "RPC Framework - High-performance RPC framework using Protocol Buffers", category: "tech" },
    "WebSocket": { definition: "Communication Protocol - Protocol for full-duplex communication over TCP", category: "tech" },
    "WebSockets": { definition: "Communication Protocol - Protocol for full-duplex communication over TCP", category: "tech" },
    "SOAP": { definition: "Protocol - Structured messaging protocol for web services (legacy)", category: "tech" },
    "JSON": { definition: "Data Format - JavaScript Object Notation, lightweight data interchange format", category: "tech" },
    "XML": { definition: "Data Format - Markup language for encoding documents", category: "tech" },
    "Protocol Buffers": { definition: "Data Format - Google's language-neutral data serialization format", category: "tech" },
    "Protobuf": { definition: "Data Format - Google's language-neutral data serialization format", category: "tech" },
    "MQTT": { definition: "IoT Protocol - Lightweight messaging protocol for IoT and mobile", category: "tech" },
    "Kafka": { definition: "Streaming Platform - Distributed event streaming for high-throughput data pipelines", category: "tech" },
    "Apache Kafka": { definition: "Streaming Platform - Distributed event streaming platform", category: "tech" },

    // ==========================================
    // TESTING & QUALITY ASSURANCE
    // ==========================================
    "Jest": { definition: "Testing Framework - JavaScript testing framework with focus on simplicity", category: "tech" },
    "Mocha": { definition: "Testing Framework - JavaScript test framework for Node.js", category: "tech" },
    "Cypress": { definition: "Testing Tool - End-to-end testing framework for web applications", category: "tech" },
    "Selenium": { definition: "Testing Tool - Browser automation framework for testing web applications", category: "tech" },
    "JUnit": { definition: "Testing Framework - Unit testing framework for Java", category: "tech" },
    "PyTest": { definition: "Testing Framework - Testing framework for Python", category: "tech" },
    "RSpec": { definition: "Testing Framework - Behavior-driven development framework for Ruby", category: "tech" },
    "Enzyme": { definition: "Testing Utility - JavaScript testing utility for React components", category: "tech" },
    "React Testing Library": { definition: "Testing Library - Library for testing React components", category: "tech" },
    "Puppeteer": { definition: "Browser Automation - Node.js library for controlling Chrome/Chromium", category: "tech" },
    "TestNG": { definition: "Testing Framework - Testing framework for Java", category: "tech" },

    // ==========================================
    // ARCHITECTURE & DESIGN PATTERNS
    // ==========================================
    "Microservices": { definition: "Architecture - Apps built as collection of small, independent services", category: "tech" },
    "API Gateway": { definition: "Architecture Pattern - Single entry point for all API requests", category: "tech" },
    "SOA": { definition: "Architecture - Service-Oriented Architecture where services communicate over network", category: "tech" },
    "Event-Driven": { definition: "Architecture - Design where state changes trigger events for other services", category: "tech" },
    "MVC": { definition: "Design Pattern - Model-View-Controller architectural pattern", category: "tech" },
    "Serverless": { definition: "Architecture - Cloud computing where provider manages server allocation", category: "tech" },
    "Edge Computing": { definition: "Architecture - Computing paradigm bringing computation closer to data", category: "tech" },
    "CDN": { definition: "Infrastructure - Content Delivery Network for distributed content delivery", category: "tech" },
    "Load Balancer": { definition: "Infrastructure - Device distributing network traffic across servers", category: "tech" },
    "Message Queue": { definition: "Architecture Component - Queue for asynchronous communication (RabbitMQ, SQS)", category: "tech" },
    "Pub/Sub": { definition: "Design Pattern - Publish-Subscribe messaging pattern", category: "tech" },
    "CQRS": { definition: "Design Pattern - Command Query Responsibility Segregation", category: "tech" },
    "DDD": { definition: "Design Approach - Domain-Driven Design focusing on core business domain", category: "tech" },

    // ==========================================
    // SECURITY & AUTHENTICATION
    // ==========================================
    "OAuth": { definition: "Authentication Protocol - Open standard for access delegation and SSO", category: "tech" },
    "JWT": { definition: "Authentication - JSON Web Token for securely transmitting information", category: "tech" },
    "SSO": { definition: "Authentication - Single Sign-On allowing login with single credentials", category: "tech" },
    "2FA": { definition: "Security - Two-Factor Authentication requiring two verification factors", category: "tech" },
    "HTTPS": { definition: "Protocol - Secure HTTP using SSL/TLS encryption", category: "tech" },
    "SSL": { definition: "Security Protocol - Secure Socket Layer for secure communication", category: "tech" },
    "TLS": { definition: "Security Protocol - Transport Layer Security for secure communication", category: "tech" },
    "API Key": { definition: "Authentication - Simple token for identifying and authenticating API requests", category: "tech" },
    "CORS": { definition: "Security - Cross-Origin Resource Sharing for restricted resource requests", category: "tech" },
    "XSS": { definition: "Security Vulnerability - Cross-Site Scripting injection attack", category: "tech" },
    "SQL Injection": { definition: "Security Vulnerability - Attack injecting malicious SQL code", category: "tech" },
    "OWASP": { definition: "Security Organization - Open Web Application Security Project", category: "tech" },
    "Penetration Testing": { definition: "Security Practice - Simulated cyberattack to evaluate security", category: "tech" },
    "Bug Bounty": { definition: "Security Program - Reward program for reporting vulnerabilities", category: "tech" },
    "DDoS": { definition: "Security Attack - Distributed Denial of Service overwhelming system with traffic", category: "tech" },
    "VPN": { definition: "Security - Virtual Private Network, encrypted connection over public network", category: "tech" },
    "Firewall": { definition: "Security - Network security system monitoring and controlling traffic", category: "tech" },
    "OTP": { definition: "Security - One-time password for authentication", category: "tech" },
    "U2F": { definition: "Security - Universal 2nd Factor authentication", category: "tech" },

    // ==========================================
    // AGILE & PROJECT MANAGEMENT
    // ==========================================
    "Scrum": { definition: "Agile Framework - Framework for managing work with iterative progress", category: "tech" },
    "Kanban": { definition: "Agile Methodology - Visual system for managing work through a process", category: "tech" },
    "Sprint": { definition: "Agile Term - Time-boxed period (usually 2 weeks) for completing work", category: "tech" },
    "Standup": { definition: "Agile Ceremony - Brief daily meeting to synchronize team activities", category: "tech" },
    "Stand-up": { definition: "Agile Ceremony - Brief daily meeting to synchronize team activities", category: "tech" },
    "Retrospective": { definition: "Agile Ceremony - Meeting to reflect on what went well and improve", category: "tech" },
    "Retro": { definition: "Agile Ceremony - Meeting to reflect on what went well and improve", category: "tech" },
    "User Story": { definition: "Agile Concept - Informal description of feature from end-user perspective", category: "tech" },
    "Epic": { definition: "Agile Concept - Large body of work broken down into smaller stories", category: "tech" },
    "Backlog": { definition: "Agile Concept - Prioritized list of work for development team", category: "tech" },
    "JIRA": { definition: "Project Management Tool - Atlassian's issue tracking and project management", category: "tech" },
    "Linear": { definition: "Project Management Tool - Modern issue tracking tool popular with engineering", category: "tech" },
    "Asana": { definition: "Project Management Tool - Work management platform for organizing team work", category: "tech" },
    "Trello": { definition: "Project Management Tool - Visual collaboration tool using boards and cards", category: "tech" },
    "Notion": { definition: "Productivity Tool - All-in-one workspace for notes, docs, and project management", category: "tech" },

    // ==========================================
    // PERFORMANCE & OPTIMIZATION
    // ==========================================
    "Caching": { definition: "Performance Technique - Storing frequently accessed data in fast storage", category: "tech" },
    "Lazy Loading": { definition: "Performance Technique - Deferring loading of resources until needed", category: "tech" },
    "Code Splitting": { definition: "Performance Technique - Breaking code into smaller bundles on demand", category: "tech" },
    "Tree Shaking": { definition: "Performance Technique - Removing unused code from final bundle", category: "tech" },
    "Minification": { definition: "Performance Technique - Removing unnecessary characters from code", category: "tech" },
    "WASM": { definition: "Performance Technology - WebAssembly, binary format for near-native web performance", category: "tech" },
    "WebAssembly": { definition: "Performance Technology - Binary format for near-native web performance", category: "tech" },
    "Service Worker": { definition: "Performance/PWA - Script enabling offline functionality", category: "tech" },
    "PWA": { definition: "Web Technology - Progressive Web App delivering app-like experience", category: "tech" },

    // ==========================================
    // GENERAL TECHNICAL CONCEPTS
    // ==========================================
    "API": { definition: "Interface - Application Programming Interface for software communication", category: "tech" },
    "SDK": { definition: "Development Tool - Software Development Kit for building platform apps", category: "tech" },
    "CLI": { definition: "Interface - Command Line Interface for text-based interaction", category: "tech" },
    "GUI": { definition: "Interface - Graphical User Interface for visual interaction", category: "tech" },
    "CRUD": { definition: "Operations - Create, Read, Update, Delete - basic database operations", category: "tech" },
    "DRY": { definition: "Principle - Don't Repeat Yourself, reducing code repetition", category: "tech" },
    "SOLID": { definition: "Principles - Five design principles for object-oriented programming", category: "tech" },
    "Tech Debt": { definition: "Concept - Implied cost of rework from choosing easy over better solution", category: "tech" },
    "Refactoring": { definition: "Practice - Restructuring code without changing external behavior", category: "tech" },
    "Code Review": { definition: "Practice - Systematic examination of code by peers before merging", category: "tech" },
    "PR": { definition: "Git Workflow - Pull Request, proposed code changes for review", category: "tech" },
    "Pull Request": { definition: "Git Workflow - Proposed code changes submitted for review", category: "tech" },
    "Merge Conflict": { definition: "Git Issue - Conflicting changes when merging branches", category: "tech" },
    "Branch": { definition: "Git Concept - Parallel version of repository for isolated development", category: "tech" },
    "Repository": { definition: "Git Concept - Storage location for project code and history", category: "tech" },
    "Repo": { definition: "Git Concept - Storage location for project code and history", category: "tech" },
    "Commit": { definition: "Git Action - Saving changes to repository with descriptive message", category: "tech" },
    "CI": { definition: "DevOps Practice - Continuous Integration, automating code integration", category: "tech" },
    "CD": { definition: "DevOps Practice - Continuous Deployment, automating deployment", category: "tech" },
    "CI/CD": { definition: "DevOps Practice - Continuous Integration/Continuous Deployment", category: "tech" },
    "Staging": { definition: "Infrastructure - Pre-production environment for testing", category: "tech" },
    "Production": { definition: "Infrastructure - Live environment where end-users access the app", category: "tech" },
    "Prod": { definition: "Infrastructure - Production, live environment for end-users", category: "tech" },
    "Localhost": { definition: "Development - Computer serving as host for development (127.0.0.1)", category: "tech" },
    "Port": { definition: "Networking - Virtual endpoint for network communication (e.g., :3000, :8080)", category: "tech" },
    "Endpoint": { definition: "API - Specific URL where API can be accessed", category: "tech" },
    "Payload": { definition: "Data Transfer - Data sent with API request or response", category: "tech" },
    "Status Code": { definition: "HTTP - Code indicating result of HTTP request (200 OK, 404 Not Found)", category: "tech" },
    "Latency": { definition: "Performance - Time delay between request and response", category: "tech" },
    "Throughput": { definition: "Performance - Amount of data processed in given time period", category: "tech" },
    "Scalability": { definition: "Architecture - System's ability to handle growing amounts of work", category: "tech" },
    "High Availability": { definition: "Infrastructure - System design ensuring operational uptime", category: "tech" },
    "Fault Tolerance": { definition: "Infrastructure - System's ability to continue despite failures", category: "tech" },
    "Idempotency": { definition: "API Design - Operation producing same result regardless of repetition", category: "tech" },
    "Webhook": { definition: "Integration - User-defined HTTP callback triggered by events", category: "tech" },
    "Race Condition": { definition: "Bug - Situation where timing affects program behavior", category: "tech" },
    "Memory Leak": { definition: "Bug - Program not releasing memory it no longer needs", category: "tech" },
    "Debugging": { definition: "Practice - Process of finding and fixing bugs in code", category: "tech" },
    "Logging": { definition: "Practice - Recording application events for troubleshooting", category: "tech" },
    "Deployment": { definition: "Release - Process of making application available for use", category: "tech" },
    "Deploy": { definition: "Release - Process of making application available for use", category: "tech" },
    "Rollback": { definition: "Release - Reverting to previous version after problematic deployment", category: "tech" },
    "Feature Flag": { definition: "Development - Toggle enabling/disabling features without deployment", category: "tech" },
    "A/B Testing": { definition: "Product - Comparing two versions to determine which performs better", category: "tech" },
    "Blue-Green Deployment": { definition: "DevOps - Strategy using two identical production environments", category: "tech" },
    "Canary Deployment": { definition: "DevOps - Gradual rollout to subset of users before full deployment", category: "tech" },
    "SLA": { definition: "Operations - Service Level Agreement defining expected service level", category: "tech" },
    "Uptime": { definition: "Operations - Percentage of time system is operational", category: "tech" },
    "Downtime": { definition: "Operations - Period when system is unavailable", category: "tech" },
    "Incident": { definition: "Operations - Event disrupting normal service operation", category: "tech" },
    "Postmortem": { definition: "Operations - Analysis of incident after resolution", category: "tech" },
    "On-Call": { definition: "Operations - Being available to respond to production issues", category: "tech" },
    "Pager": { definition: "Operations - System for alerting on-call engineers about critical issues", category: "tech" },
    "SSH": { definition: "Protocol - Secure Shell for secure remote login", category: "tech" },
    "DNS": { definition: "Networking - Domain Name System mapping domain names to IP addresses", category: "tech" },
    "IP": { definition: "Networking - Internet Protocol address for network identification", category: "tech" },
    "TCP": { definition: "Networking - Transmission Control Protocol for reliable data transmission", category: "tech" },
    "Rate Limiting": { definition: "API/Security - Controlling rate of requests to prevent abuse", category: "tech" },
    "Throttling": { definition: "Performance - Deliberately slowing process to manage resources", category: "tech" },
    "Sharding": { definition: "Database - Partitioning database across multiple machines", category: "tech" },
    "Replication": { definition: "Database - Copying data across databases for redundancy", category: "tech" },
    "Migration": { definition: "Database - Moving data or updating schema", category: "tech" },
    "ORM": { definition: "Database - Object-Relational Mapping between code and database", category: "tech" },
    "Index": { definition: "Database - Data structure improving speed of data retrieval", category: "tech" },
    "Query": { definition: "Database - Request for data from database", category: "tech" },
    "Transaction": { definition: "Database - Sequence of operations as single unit", category: "tech" },
    "ACID": { definition: "Database - Properties for reliable transactions (Atomicity, Consistency, Isolation, Durability)", category: "tech" },
    "NoSQL": { definition: "Database Type - Non-relational databases (document, key-value, graph)", category: "tech" },
    "Schema": { definition: "Database - Structure defining organization of data", category: "tech" },
    "Normalization": { definition: "Database - Organizing data to reduce redundancy", category: "tech" },
    "Foreign Key": { definition: "Database - Field linking two tables together", category: "tech" },
    "Primary Key": { definition: "Database - Unique identifier for database record", category: "tech" },
    "Full-Stack": { definition: "Developer Type - Developer comfortable with front-end and back-end", category: "tech" },
    "DevOps Engineer": { definition: "Role - Engineer bridging development and operations", category: "tech" },
    "SRE": { definition: "Role - Site Reliability Engineer ensuring system reliability", category: "tech" },
    "QA": { definition: "Role - Quality Assurance, testing and ensuring software quality", category: "tech" },
    "SME": { definition: "Role - Subject Matter Expert with deep knowledge in specific area", category: "tech" },
    "Boilerplate": { definition: "Code - Reusable code sections with little alteration", category: "tech" },
    "Dependency": { definition: "Code - External code library that project relies on", category: "tech" },
    "Package": { definition: "Code - Bundled code that can be shared and reused", category: "tech" },
    "Module": { definition: "Code - Self-contained unit of code with specific functionality", category: "tech" },
    "Library": { definition: "Code - Collection of pre-written code for common tasks", category: "tech" },
    "Framework": { definition: "Code - Structured foundation providing reusable code and architecture", category: "tech" },
    "Abstraction": { definition: "Concept - Hiding complex implementation behind simple interface", category: "tech" },
    "Encapsulation": { definition: "Concept - Bundling data and methods operating on that data", category: "tech" },
    "Inheritance": { definition: "Concept - Mechanism where new class derives properties from existing", category: "tech" },
    "Polymorphism": { definition: "Concept - Ability to present same interface for different data types", category: "tech" },
    "Async": { definition: "Programming - Asynchronous code not waiting for operations to complete", category: "tech" },
    "Asynchronous": { definition: "Programming - Code execution not waiting for operations to complete", category: "tech" },
    "Synchronous": { definition: "Programming - Code execution waiting for operations before continuing", category: "tech" },
    "Sync": { definition: "Programming - Code execution waiting for operations before continuing", category: "tech" },
    "Callback": { definition: "Programming - Function passed as argument to be executed later", category: "tech" },
    "Promise": { definition: "Programming - Object representing eventual completion of async operation", category: "tech" },
    "Async/Await": { definition: "Programming - Syntax for working with asynchronous code", category: "tech" },
    "Lambda": { definition: "Programming - Anonymous function defined without name (also AWS serverless)", category: "tech" },
    "Closure": { definition: "Programming - Function having access to parent scope after parent completes", category: "tech" },
    "Recursion": { definition: "Programming - Function calling itself", category: "tech" },
    "Algorithm": { definition: "Programming - Step-by-step procedure for solving problem", category: "tech" },
    "Data Structure": { definition: "Programming - Organized format for storing data", category: "tech" },
    "Big O": { definition: "Computer Science - Mathematical notation describing algorithm complexity", category: "tech" },
    "Big O Notation": { definition: "Computer Science - Mathematical notation describing algorithm complexity", category: "tech" },
    "Stack": { definition: "Data Structure - Last-In-First-Out (LIFO) data structure", category: "tech" },
    "Queue": { definition: "Data Structure - First-In-First-Out (FIFO) data structure", category: "tech" },
    "Array": { definition: "Data Structure - Ordered collection of elements", category: "tech" },
    "Linked List": { definition: "Data Structure - Linear collection where elements point to next", category: "tech" },
    "Hash Table": { definition: "Data Structure - Data structure mapping keys to values", category: "tech" },
    "Tree": { definition: "Data Structure - Hierarchical structure with root and child nodes", category: "tech" },
    "Graph": { definition: "Data Structure - Collection of nodes connected by edges", category: "tech" },
    "Binary Search": { definition: "Algorithm - Efficient search algorithm for sorted arrays", category: "tech" },
    "Regex": { definition: "Programming - Regular Expression, pattern for matching text strings", category: "tech" },
    "Regular Expression": { definition: "Programming - Pattern for matching text strings", category: "tech" },
    "Compiler": { definition: "Tool - Program translating source code into machine code", category: "tech" },
    "Interpreter": { definition: "Tool - Program executing instructions without compilation", category: "tech" },
    "Runtime": { definition: "Execution - Environment where code executes", category: "tech" },
    "Build Process": { definition: "Development - Compiling and preparing code for deployment", category: "tech" },
    "Bundler": { definition: "Tool - Tool combining multiple files into single file (Webpack)", category: "tech" },
    "Webpack": { definition: "Tool - Module bundler for JavaScript applications", category: "tech" },
    "Linter": { definition: "Tool - Tool analyzing code for errors and style issues (ESLint)", category: "tech" },
    "ESLint": { definition: "Tool - Linter for JavaScript/TypeScript code quality", category: "tech" },
    "Formatter": { definition: "Tool - Tool automatically formatting code (Prettier)", category: "tech" },
    "Prettier": { definition: "Tool - Code formatter for consistent styling", category: "tech" },
    "Transpiler": { definition: "Tool - Tool converting code from one language to another (Babel)", category: "tech" },
    "Babel": { definition: "Tool - JavaScript transpiler for backward compatibility", category: "tech" },
    "Polyfill": { definition: "Code - Code providing modern functionality on older browsers", category: "tech" },
    "Syntax": { definition: "Programming - Rules defining structure of valid code", category: "tech" },
    "Semantic": { definition: "Programming - Meaning and logic of code", category: "tech" },
    "Type System": { definition: "Programming - System classifying variables by type", category: "tech" },
    "Static Typing": { definition: "Programming - Type checking at compile time (TypeScript, Java)", category: "tech" },
    "Dynamic Typing": { definition: "Programming - Type checking at runtime (JavaScript, Python)", category: "tech" },
    "Strongly Typed": { definition: "Programming - Strict type enforcement", category: "tech" },
    "Weakly Typed": { definition: "Programming - Loose type enforcement", category: "tech" },
    "Variable": { definition: "Programming - Named storage for data", category: "tech" },
    "Constant": { definition: "Programming - Variable with fixed value", category: "tech" },
    "Function": { definition: "Programming - Reusable block of code performing task", category: "tech" },
    "Method": { definition: "Programming - Function belonging to object or class", category: "tech" },
    "Class": { definition: "Programming - Blueprint for creating objects", category: "tech" },
    "Object": { definition: "Programming - Instance of class containing data and methods", category: "tech" },
    "Interface": { definition: "Programming - Contract defining methods class must implement", category: "tech" },
    "Namespace": { definition: "Programming - Container organizing code to avoid naming conflicts", category: "tech" },
    "Scope": { definition: "Programming - Region where variable is accessible", category: "tech" },
    "Hoisting": { definition: "JavaScript - Behavior moving declarations to top of scope", category: "tech" },
    "Event Loop": { definition: "JavaScript - Mechanism handling asynchronous operations", category: "tech" },
    "DOM": { definition: "Web - Document Object Model, programming interface for HTML", category: "tech" },
    "Virtual DOM": { definition: "Web - In-memory representation of real DOM for efficient updates", category: "tech" },
    "Shadow DOM": { definition: "Web - Encapsulated DOM tree attached to element", category: "tech" },
    "Component": { definition: "Front-end - Reusable, self-contained piece of UI", category: "tech" },
    "Props": { definition: "React - Properties passed to components", category: "tech" },
    "State": { definition: "Front-end - Data determining component behavior and rendering", category: "tech" },
    "Lifecycle Methods": { definition: "Front-end - Methods called at specific points in component lifecycle", category: "tech" },
    "Hooks": { definition: "React - Functions for using state and lifecycle in functional components", category: "tech" },
    "Routing": { definition: "Web - Navigation between different views/pages", category: "tech" },
    "SSR": { definition: "Web - Server-Side Rendering pages on server before sending to client", category: "tech" },
    "SSG": { definition: "Web - Static Site Generation at build time", category: "tech" },
    "CSR": { definition: "Web - Client-Side Rendering in browser with JavaScript", category: "tech" },
    "Hydration": { definition: "Web - Process of attaching event listeners to server-rendered HTML", category: "tech" },
    "SEO": { definition: "Web - Search Engine Optimization for visibility in search results", category: "tech" },
    "Responsive Design": { definition: "Web - Design adapting to different screen sizes", category: "tech" },
    "Mobile-First": { definition: "Design - Designing for mobile devices before desktop", category: "tech" },
    "Accessibility": { definition: "Web - Making web content usable by people with disabilities", category: "tech" },
    "a11y": { definition: "Web - Accessibility (a + 11 letters + y)", category: "tech" },
    "ARIA": { definition: "Accessibility - Attributes defining ways to make content accessible", category: "tech" },
    "WCAG": { definition: "Accessibility - Web Content Accessibility Guidelines", category: "tech" },
    "Breakpoint": { definition: "Design - Screen width where responsive design changes", category: "tech" },
    "Media Query": { definition: "CSS - Technique applying styles based on device characteristics", category: "tech" },
    "Flexbox": { definition: "CSS - Layout model for arranging elements in one dimension", category: "tech" },
    "Grid": { definition: "CSS - Layout system for two-dimensional layouts", category: "tech" },
    "CSS Grid": { definition: "CSS - Layout system for two-dimensional layouts", category: "tech" },
    "Z-index": { definition: "CSS - Property controlling stacking order of elements", category: "tech" },
    "BEM": { definition: "CSS - Block Element Modifier methodology for naming CSS classes", category: "tech" },
    "CSS-in-JS": { definition: "Styling - Writing CSS styles directly in JavaScript code", category: "tech" },
    "Markdown": { definition: "Markup - Text-to-HTML formatting language", category: "tech" },
    "TL;DR": { definition: "Abbreviation - Too Long; Didn't Read - executive summary", category: "tech" },
    "RFC": { definition: "Process - Request for Comments, proposal for review", category: "tech" },
    "TOS": { definition: "Legal - Terms of Service", category: "tech" },
    "ERP": { definition: "Enterprise - Enterprise Resource Planning software", category: "tech" },
    "SaaS": { definition: "Business Model - Software as a Service", category: "tech" },
    "MVP": { definition: "Product - Minimum Viable Product", category: "tech" },
    "UX": { definition: "Design - User Experience Design", category: "tech" },
    "DX": { definition: "Development - Developer Experience", category: "tech" },
    "SQL": { definition: "Database - Structured Query Language for relational databases", category: "tech" },
    "AI": { definition: "Technology - Artificial Intelligence, the next revolution of computing", category: "tech" },
    "Slack": { definition: "Communication - Team messaging and collaboration platform", category: "tech" },
    "SKU": { definition: "Inventory - Stock Keeping Unit for product identification", category: "tech" },
    "Sales": { definition: "Team - People who convert prospects into customers", category: "tech" },
    "Support": { definition: "Team - People who help with technical issues", category: "tech" }
};

// Create lowercase lookup map for efficient matching
const TERMS_LOWER = {};
Object.keys(TERMS).forEach(key => {
    TERMS_LOWER[key.toLowerCase()] = {
        original: key,
        definition: TERMS[key].definition,
        category: TERMS[key].category
    };
});

// ============================================
// Application State
// ============================================

const state = {
    isListening: false,
    recognition: null,
    detections: [],
    recentDetections: new Map(),
    totalDetections: 0,
    userName: null,
    selectedCategories: new Set(['shopify', 'tech', 'ecommerce', 'leadership']), // Default: all selected
    // Live Context mode
    mode: 'jargon', // 'jargon' or 'context'
    transcriptBuffer: '',
    contextTimer: null,
    contextCallInProgress: false,
    surfacedTopics: new Set(), // Avoid repeating the same topics
    openaiClient: null
};

// ============================================
// DOM Elements
// ============================================

const elements = {
    userGreeting: document.getElementById('userGreeting'),
    statusIndicator: document.getElementById('statusIndicator'),
    statusText: document.getElementById('statusText'),
    transcriptPreview: document.getElementById('transcriptPreview'),
    toggleBtn: document.getElementById('toggleBtn'),
    toggleIcon: document.getElementById('toggleIcon'),
    toggleText: document.getElementById('toggleText'),
    clearBtn: document.getElementById('clearBtn'),
    detectionFeed: document.getElementById('detectionFeed'),
    emptyState: document.getElementById('emptyState'),
    detectionCount: document.getElementById('detectionCount'),
    errorModal: document.getElementById('errorModal'),
    errorMessage: document.getElementById('errorMessage'),
    categoryChips: document.getElementById('categoryChips'),
    exportBtn: document.getElementById('exportBtn'),
    // Term detail modal elements
    termModal: document.getElementById('termModal'),
    termModalOverlay: document.getElementById('termModalOverlay'),
    termModalClose: document.getElementById('termModalClose'),
    termModalTerm: document.getElementById('termModalTerm'),
    termModalCategory: document.getElementById('termModalCategory'),
    termModalBrief: document.getElementById('termModalBrief'),
    termModalBody: document.getElementById('termModalBody'),
    // Test input modal elements
    testBtn: document.getElementById('testBtn'),
    testModal: document.getElementById('testModal'),
    testModalOverlay: document.getElementById('testModalOverlay'),
    testModalClose: document.getElementById('testModalClose'),
    testModalCancel: document.getElementById('testModalCancel'),
    testModalSubmit: document.getElementById('testModalSubmit'),
    testTextInput: document.getElementById('testTextInput'),
    // Mode toggle & context elements
    modeToggle: document.getElementById('modeToggle'),
    categorySelector: document.getElementById('categorySelector'),
    contextIndicator: document.getElementById('contextIndicator')
};

// ============================================
// Category Management
// ============================================

function getTermCountByCategory(categoryId) {
    return Object.values(TERMS).filter(t => t.category === categoryId).length;
}

function renderCategoryChips() {
    const container = elements.categoryChips;
    container.innerHTML = '';
    
    Object.values(CATEGORIES).forEach(category => {
        const count = getTermCountByCategory(category.id);
        const isSelected = state.selectedCategories.has(category.id);
        const chip = document.createElement('button');
        chip.className = `category-chip ${isSelected ? 'selected' : ''}`;
        chip.dataset.category = category.id;
        chip.innerHTML = `
            <span class="chip-status">${isSelected ? '✓' : '✕'}</span>
            <span class="chip-icon">${category.icon}</span>
            <span class="chip-name">${category.name}</span>
            <span class="chip-count">(${count})</span>
        `;
        chip.addEventListener('click', () => toggleCategory(category.id));
        container.appendChild(chip);
    });
}

function toggleCategory(categoryId) {
    if (state.selectedCategories.has(categoryId)) {
        // Don't allow deselecting if it's the last one
        if (state.selectedCategories.size > 1) {
            state.selectedCategories.delete(categoryId);
        } else {
            // Show warning or shake animation
            const chip = document.querySelector(`[data-category="${categoryId}"]`);
            chip.style.animation = 'shake 0.3s ease';
            setTimeout(() => chip.style.animation = '', 300);
            return;
        }
    } else {
        state.selectedCategories.add(categoryId);
    }
    
    // Update UI
    document.querySelectorAll('.category-chip').forEach(chip => {
        const id = chip.dataset.category;
        const isSelected = state.selectedCategories.has(id);
        chip.classList.toggle('selected', isSelected);
        chip.querySelector('.chip-status').textContent = isSelected ? '✓' : '✕';
    });
    
    // Save to localStorage
    localStorage.setItem('popupvideo_categories', JSON.stringify([...state.selectedCategories]));
}

function loadSavedCategories() {
    const saved = localStorage.getItem('popupvideo_categories');
    if (saved) {
        try {
            const categories = JSON.parse(saved);
            if (Array.isArray(categories) && categories.length > 0) {
                state.selectedCategories = new Set(categories.filter(c => CATEGORIES[c]));
            }
        } catch (e) {
            console.error('Failed to load saved categories:', e);
        }
    }
}

// ============================================
// Mode Management
// ============================================

function initModeToggle() {
    // Load saved mode
    const savedMode = localStorage.getItem('popupvideo_mode');
    if (savedMode === 'context' || savedMode === 'jargon') {
        state.mode = savedMode;
    }

    // Set initial UI state
    applyModeUI(state.mode);

    // Attach click handlers to mode options
    const options = elements.modeToggle.querySelectorAll('.mode-option');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const newMode = opt.dataset.mode;
            if (newMode !== state.mode) {
                switchMode(newMode);
            }
        });
    });
}

function switchMode(newMode) {
    const oldMode = state.mode;
    state.mode = newMode;
    localStorage.setItem('popupvideo_mode', newMode);

    // Stop context timer if leaving context mode
    if (oldMode === 'context') {
        stopContextTimer();
    }

    // Clear transcript buffer on mode switch
    state.transcriptBuffer = '';

    // Start context timer if entering context mode and already listening
    if (newMode === 'context' && state.isListening) {
        startContextTimer();
    }

    applyModeUI(newMode);
}

function applyModeUI(mode) {
    // Update toggle active states
    const options = elements.modeToggle.querySelectorAll('.mode-option');
    options.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.mode === mode);
    });

    // Slide the pill
    elements.modeToggle.classList.toggle('context-active', mode === 'context');

    // Show/hide category selector vs context indicator
    if (mode === 'context') {
        elements.categorySelector.style.display = 'none';
        elements.contextIndicator.style.display = 'block';
    } else {
        elements.categorySelector.style.display = 'block';
        elements.contextIndicator.style.display = 'none';
    }
}

// ============================================
// Live Context - LLM Integration
// ============================================

const CONTEXT_INTERVAL_MS = 10000; // 10 seconds
const MIN_BUFFER_LENGTH = 20; // Minimum characters before calling LLM

async function initOpenAIClient() {
    try {
        const OpenAI = (await import('https://cdn.jsdelivr.net/npm/openai/+esm')).default;
        state.openaiClient = new OpenAI({
            baseURL: `${window.location.origin}/api/ai`,
            apiKey: 'not-needed',
            dangerouslyAllowBrowser: true
        });
        console.log('OpenAI client initialized for Live Context mode');
    } catch (err) {
        console.error('Failed to initialize OpenAI client:', err);
    }
}

function startContextTimer() {
    if (state.contextTimer) return; // Already running
    state.contextTimer = setInterval(() => {
        if (state.mode === 'context' && state.isListening && !state.contextCallInProgress) {
            processTranscriptBuffer();
        }
    }, CONTEXT_INTERVAL_MS);
    console.log('Context timer started');
}

function stopContextTimer() {
    if (state.contextTimer) {
        clearInterval(state.contextTimer);
        state.contextTimer = null;
        console.log('Context timer stopped');
    }
}

async function processTranscriptBuffer() {
    const buffer = state.transcriptBuffer.trim();
    console.log(`[Context] Buffer check — length: ${buffer.length}, min: ${MIN_BUFFER_LENGTH}`);
    if (buffer.length < MIN_BUFFER_LENGTH) {
        console.log('[Context] Buffer too short, skipping');
        return;
    }

    console.log(`[Context] Processing buffer: "${buffer.substring(0, 80)}..."`);

    // Clear the buffer immediately so new speech accumulates fresh
    state.transcriptBuffer = '';
    state.contextCallInProgress = true;

    // Show loading indicator
    const loader = showContextLoading();

    try {
        await callLLMForContext(buffer);
        console.log('[Context] LLM call completed successfully');
    } catch (err) {
        console.error('[Context] LLM call FAILED:', err);
        // On error, show a nothing-notable card so the user sees feedback
        showNothingNotableCard();
    } finally {
        state.contextCallInProgress = false;
        removeContextLoading(loader);
    }
}

function showContextLoading() {
    const loader = document.createElement('div');
    loader.className = 'detection-card context-card context-loading';
    loader.id = 'context-loader';
    loader.innerHTML = `
        <div class="card-header">
            <span class="abbreviation">✨ Analyzing...</span>
        </div>
        <div class="loading-dots">
            <span></span><span></span><span></span>
        </div>
    `;

    hideEmptyState();
    if (elements.detectionFeed.firstChild) {
        elements.detectionFeed.insertBefore(loader, elements.detectionFeed.firstChild);
    } else {
        elements.detectionFeed.appendChild(loader);
    }
    return loader;
}

function removeContextLoading(loader) {
    if (loader && loader.parentNode) {
        loader.classList.add('fading-out');
        setTimeout(() => loader.remove(), 300);
    }
}

function isNothingNotable(text) {
    const cleaned = text.trim().toUpperCase().replace(/[^A-Z_]/g, '');
    return cleaned === 'NOTHING_NOTABLE' || cleaned === 'NOTHINGNOTABLE';
}

async function callLLMForContext(transcript) {
    if (!state.openaiClient) {
        console.error('[Context] OpenAI client not initialized!');
        throw new Error('OpenAI client not ready');
    }

    console.log('[Context] Sending to LLM...');

    const topicsList = state.surfacedTopics.size > 0
        ? `\n\nTopics already covered (do NOT repeat these): ${[...state.surfacedTopics].join(', ')}`
        : '';

    const systemPrompt = `You are a live context assistant for video calls. Given a conversation snippet, identify any specific places, cities, universities, companies, people, technologies, or notable topics mentioned.

For each notable topic found, provide 1-2 short, interesting facts that would be fun or useful to know in real time. Keep each fact to one sentence.

Format your response as a series of topics, each starting with the topic name in bold like **Topic Name**, followed by the facts as bullet points using "• ".

If the conversation snippet contains nothing notable or specific enough to comment on, respond with exactly: NOTHING_NOTABLE

Important rules:
- Only surface genuinely interesting, specific facts — not generic definitions
- Focus on things like: current weather/climate of places, fun facts about universities, notable recent events about companies, interesting trivia about people or technologies
- Keep it concise and conversational
- Maximum 3 topics per response${topicsList}`;

    const messages = [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Here's what was just said in the conversation:\n\n"${transcript}"` }
    ];

    let stream;
    try {
        stream = await state.openaiClient.chat.completions.create({
            model: 'gpt-4o',
            messages: messages,
            temperature: 0.8,
            max_tokens: 500,
            stream: true
        });
        console.log('[Context] Stream created successfully');
    } catch (err) {
        console.error('[Context] Failed to create stream:', err);
        throw err;
    }

    let fullResponse = '';
    let cardElement = null;
    let definitionElement = null;
    let chunkCount = 0;

    try {
        for await (const chunk of stream) {
            chunkCount++;
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
                fullResponse += content;

                if (chunkCount <= 3) {
                    console.log(`[Context] Chunk ${chunkCount}: "${content}" (total so far: ${fullResponse.length} chars)`);
                }

                // Check early if the LLM says nothing notable
                if (isNothingNotable(fullResponse)) {
                    console.log('[Context] Detected NOTHING_NOTABLE during streaming');
                    if (cardElement) cardElement.remove();
                    showNothingNotableCard();
                    return;
                }

                // Don't create a card until we're sure it's real content
                if (fullResponse.length < 20) continue;

                // Create the card on first substantial content
                if (!cardElement) {
                    console.log('[Context] Creating context card');
                    const result = createContextCard(fullResponse);
                    cardElement = result.card;
                    definitionElement = result.definition;
                } else {
                    definitionElement.innerHTML = formatContextResponse(fullResponse) + '<span class="streaming-cursor"></span>';
                }
            }
        }
    } catch (err) {
        console.error(`[Context] Stream reading failed after ${chunkCount} chunks:`, err);
        throw err;
    }

    console.log(`[Context] Stream complete — ${chunkCount} chunks, ${fullResponse.length} chars`);
    console.log(`[Context] Full response: "${fullResponse.substring(0, 200)}..."`);

    // Final update — remove cursor
    if (isNothingNotable(fullResponse)) {
        console.log('[Context] Final check: NOTHING_NOTABLE');
        if (cardElement) cardElement.remove();
        showNothingNotableCard();
    } else if (definitionElement) {
        console.log('[Context] Final update: rendering complete response');
        definitionElement.innerHTML = formatContextResponse(fullResponse);

        const topicMatches = fullResponse.match(/\*\*(.+?)\*\*/g);
        if (topicMatches) {
            topicMatches.forEach(t => {
                state.surfacedTopics.add(t.replace(/\*\*/g, '').trim());
            });
        }
    } else if (fullResponse.trim().length > 0) {
        console.log('[Context] Short response — creating card now');
        const result = createContextCard(fullResponse);
        result.definition.innerHTML = formatContextResponse(fullResponse);
    } else {
        console.log('[Context] Empty response');
        showNothingNotableCard();
    }
}

function showNothingNotableCard() {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const card = document.createElement('div');
    card.className = 'detection-card context-card nothing-notable';
    card.id = `detection-ctx-empty-${Date.now()}`;
    card.innerHTML = `
        <div class="card-header">
            <span class="abbreviation nothing-notable-text">😴 Nothing interesting as of now</span>
            <span class="timestamp">${timestamp}</span>
        </div>
    `;

    hideEmptyState();
    if (elements.detectionFeed.firstChild) {
        elements.detectionFeed.insertBefore(card, elements.detectionFeed.firstChild);
    } else {
        elements.detectionFeed.appendChild(card);
    }
}

function createContextCard(initialContent) {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const card = document.createElement('div');
    card.className = 'detection-card context-card';
    card.id = `detection-ctx-${Date.now()}`;
    card.innerHTML = `
        <div class="card-header">
            <span class="abbreviation">✨ Live Context</span>
            <span class="timestamp">🧠 ${timestamp}</span>
        </div>
        <p class="definition">${formatContextResponse(initialContent)}<span class="streaming-cursor"></span></p>
    `;

    const definitionEl = card.querySelector('.definition');

    // Insert at top of feed
    hideEmptyState();
    if (elements.detectionFeed.firstChild) {
        elements.detectionFeed.insertBefore(card, elements.detectionFeed.firstChild);
    } else {
        elements.detectionFeed.appendChild(card);
    }

    state.totalDetections++;
    updateDetectionCount();

    return { card, definition: definitionEl };
}

function formatContextResponse(text) {
    // Convert **bold** to <strong>
    let formatted = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Convert bullet points
    formatted = formatted.replace(/^• /gm, '<span style="margin-right:4px;">•</span>');
    // Convert newlines to breaks
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
}

// ============================================
// Quick API Integration
// ============================================

async function initQuickAPI() {
    try {
        if (typeof Quick !== 'undefined' && Quick.identity) {
            const identity = await Quick.identity();
            if (identity && identity.name) {
                const firstName = identity.name.split(' ')[0];
                state.userName = firstName;
                elements.userGreeting.querySelector('.greeting-text').textContent = `Hi, ${firstName}!`;
            }
        } else {
            elements.userGreeting.querySelector('.greeting-text').textContent = 'Welcome!';
        }
    } catch (error) {
        console.log('Quick API not available, using fallback greeting');
        elements.userGreeting.querySelector('.greeting-text').textContent = 'Welcome!';
    }
}

// ============================================
// Speech Recognition Setup
// ============================================

function checkSpeechRecognitionSupport() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        showError('Your browser doesn\'t support the Web Speech API. Please use Google Chrome or Microsoft Edge for the best experience.');
        updateStatus('Browser not supported', 'error');
        return false;
    }
    
    return true;
}

function initSpeechRecognition() {
    if (!checkSpeechRecognitionSupport()) {
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    state.recognition = new SpeechRecognition();
    
    state.recognition.continuous = true;
    state.recognition.interimResults = true;
    state.recognition.lang = 'en-US';
    state.recognition.maxAlternatives = 1;
    
    state.recognition.onstart = handleRecognitionStart;
    state.recognition.onend = handleRecognitionEnd;
    state.recognition.onresult = handleRecognitionResult;
    state.recognition.onerror = handleRecognitionError;
    
    elements.toggleBtn.disabled = false;
    updateStatus('Ready', 'ready');
}

function handleRecognitionStart() {
    state.isListening = true;
    updateStatus('Listening...', 'listening');
    updateToggleButton(true);

    // Start context timer if in context mode
    if (state.mode === 'context') {
        startContextTimer();
    }
}

function handleRecognitionEnd() {
    if (state.isListening) {
        try {
            state.recognition.start();
        } catch (e) {
            // Recognition might already be started
        }
    } else {
        updateStatus('Paused', 'paused');
        updateToggleButton(false);
    }
}

function handleRecognitionResult(event) {
    const results = event.results;
    
    for (let i = event.resultIndex; i < results.length; i++) {
        const transcript = results[i][0].transcript;
        updateTranscriptPreview(transcript);
        
        if (results[i].isFinal) {
            // Always accumulate transcript for context mode
            state.transcriptBuffer += transcript + ' ';

            // Only run jargon detection in jargon mode
            if (state.mode === 'jargon') {
                detectTerms(transcript);
            }
        }
    }
}

function handleRecognitionError(event) {
    console.error('Speech recognition error:', event.error);
    
    switch (event.error) {
        case 'not-allowed':
            showError('Microphone access was denied. Please click the camera/microphone icon in your browser\'s address bar and allow access, then refresh the page.');
            state.isListening = false;
            updateToggleButton(false);
            updateStatus('Microphone denied', 'error');
            break;
        case 'no-speech':
            break;
        case 'network':
            updateStatus('Network error', 'error');
            break;
        default:
            updateStatus('Error occurred', 'error');
    }
}

// ============================================
// Term Detection
// ============================================

function detectTerms(transcript) {
    const words = transcript.toLowerCase();
    const now = Date.now();
    const DUPLICATE_THRESHOLD = Infinity; // Never show duplicate terms
    
    for (const [lowerKey, data] of Object.entries(TERMS_LOWER)) {
        // Skip if category not selected
        if (!state.selectedCategories.has(data.category)) {
            continue;
        }
        
        const regex = new RegExp(`\\b${escapeRegex(lowerKey)}\\b`, 'i');
        
        if (regex.test(words)) {
            const lastDetected = state.recentDetections.get(lowerKey);
            if (lastDetected && (now - lastDetected) < DUPLICATE_THRESHOLD) {
                continue;
            }
            
            addDetection(data.original, data.definition, data.category);
            state.recentDetections.set(lowerKey, now);
        }
    }
    
    for (const [key, timestamp] of state.recentDetections) {
        if (now - timestamp > DUPLICATE_THRESHOLD) {
            state.recentDetections.delete(key);
        }
    }
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================
// Detection Display
// ============================================

function addDetection(term, definition, category) {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const categoryInfo = CATEGORIES[category];
    
    const detection = {
        id: Date.now(),
        term,
        definition,
        category,
        categoryIcon: categoryInfo?.icon || '📝',
        categoryName: categoryInfo?.name || category,
        timestamp
    };
    
    state.detections.unshift(detection);
    state.totalDetections++;
    
    // No limit - keep all detections for the call duration
    renderDetection(detection);
    updateDetectionCount();
    hideEmptyState();
}

function renderDetection(detection) {
    const card = document.createElement('div');
    card.className = 'detection-card';
    card.id = `detection-${detection.id}`;
    card.innerHTML = `
        <div class="card-header">
            <span class="abbreviation">${escapeHtml(detection.term)}</span>
            <span class="timestamp">${detection.categoryIcon} ${detection.timestamp}</span>
        </div>
        <p class="definition">${escapeHtml(detection.definition)}</p>
    `;

    // Add click handler to open detailed modal
    card.addEventListener('click', () => openTermModal(detection));

    if (elements.detectionFeed.firstChild) {
        elements.detectionFeed.insertBefore(card, elements.detectionFeed.firstChild);
    } else {
        elements.detectionFeed.appendChild(card);
    }
}

function removeDetectionCard(id) {
    const card = document.getElementById(`detection-${id}`);
    if (card) {
        card.classList.add('fading-out');
        setTimeout(() => card.remove(), 300);
    }
}

function clearAllDetections() {
    const cards = elements.detectionFeed.querySelectorAll('.detection-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fading-out');
            setTimeout(() => card.remove(), 300);
        }, index * 50);
    });
    
    setTimeout(() => {
        state.detections = [];
        state.recentDetections.clear();
        state.transcriptBuffer = '';
        state.surfacedTopics.clear();
        showEmptyState();
    }, cards.length * 50 + 300);
}

function hideEmptyState() {
    if (elements.emptyState) {
        elements.emptyState.style.display = 'none';
    }
}

function showEmptyState() {
    if (elements.emptyState) {
        elements.emptyState.style.display = 'flex';
    }
}

// ============================================
// UI Updates
// ============================================

function updateStatus(text, statusClass) {
    elements.statusText.textContent = text;
    elements.statusIndicator.className = 'status-indicator';
    if (statusClass) {
        elements.statusIndicator.classList.add(statusClass);
    }
}

function updateToggleButton(isListening) {
    if (isListening) {
        elements.toggleIcon.textContent = '⏸';
        elements.toggleText.textContent = 'Pause';
        elements.toggleBtn.classList.add('active');
    } else {
        elements.toggleIcon.textContent = '▶';
        elements.toggleText.textContent = 'Start Listening';
        elements.toggleBtn.classList.remove('active');
    }
}

function updateTranscriptPreview(text) {
    elements.transcriptPreview.textContent = `"${text}"`;
    elements.transcriptPreview.classList.add('visible');
    
    clearTimeout(state.transcriptTimeout);
    state.transcriptTimeout = setTimeout(() => {
        elements.transcriptPreview.classList.remove('visible');
    }, 3000);
}

function updateDetectionCount() {
    elements.detectionCount.textContent = state.totalDetections;
}

function showError(message) {
    elements.errorMessage.textContent = message;
    elements.errorModal.hidden = false;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatMarkdown(text) {
    if (!text) return '';

    let html = text;

    // Escape HTML first (but we'll add our own tags)
    html = html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Convert **bold** to <strong>
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Convert `code` to <code>
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Split into lines for list processing
    const lines = html.split('\n');
    let result = [];
    let listStack = []; // Track nested list depth [{type: 'ul'/'ol', indent: 0}]

    function closeListsToLevel(targetIndent) {
        while (listStack.length > 0 && listStack[listStack.length - 1].indent >= targetIndent) {
            const closed = listStack.pop();
            result.push(closed.type === 'ol' ? '</ol>' : '</ul>');
        }
    }

    function closeAllLists() {
        while (listStack.length > 0) {
            const closed = listStack.pop();
            result.push(closed.type === 'ol' ? '</ol>' : '</ul>');
        }
    }

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Measure leading whitespace for indentation
        const leadingSpaces = line.match(/^(\s*)/)[1].length;
        const trimmedLine = line.trim();

        // Check for numbered list (1. 2. 3.)
        const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.*)$/);
        // Check for bullet list (- or *)
        const bulletMatch = trimmedLine.match(/^[-*]\s+(.*)$/);

        if (numberedMatch) {
            const content = numberedMatch[2];
            const currentIndent = leadingSpaces;

            // Close deeper lists if we're at a shallower level
            closeListsToLevel(currentIndent + 1);

            // Open new list if needed
            if (listStack.length === 0 || listStack[listStack.length - 1].indent < currentIndent) {
                result.push('<ol>');
                listStack.push({ type: 'ol', indent: currentIndent });
            }
            result.push(`<li>${content}</li>`);
        } else if (bulletMatch) {
            const content = bulletMatch[1];
            const currentIndent = leadingSpaces;

            // Close deeper lists if we're at a shallower level
            closeListsToLevel(currentIndent + 1);

            // Open new list if needed
            if (listStack.length === 0 || listStack[listStack.length - 1].indent < currentIndent) {
                result.push('<ul>');
                listStack.push({ type: 'ul', indent: currentIndent });
            }
            result.push(`<li>${content}</li>`);
        } else {
            // Close all lists when we hit non-list content
            if (trimmedLine !== '') {
                closeAllLists();
            }

            // Handle headers (### or ## or lines ending with :)
            if (trimmedLine.match(/^#{1,3}\s+/)) {
                const headerContent = trimmedLine.replace(/^#{1,3}\s+/, '');
                result.push(`<h3>${headerContent}</h3>`);
            } else if (trimmedLine.match(/^.+:$/) && trimmedLine.length < 50) {
                // Short lines ending in colon are likely headers
                result.push(`<h3>${trimmedLine}</h3>`);
            } else if (trimmedLine === '') {
                // Empty line - paragraph break
                result.push('<br>');
            } else {
                result.push(`<p>${trimmedLine}</p>`);
            }
        }
    }

    // Close any remaining open lists
    closeAllLists();

    return result.join('');
}

// ============================================
// Term Detail Modal
// ============================================

let openaiClient = null;

async function initOpenAI() {
    if (openaiClient) return openaiClient;

    try {
        console.log('Initializing OpenAI client...');
        const OpenAI = (await import('https://cdn.jsdelivr.net/npm/openai/+esm')).default;
        console.log('OpenAI module loaded successfully');
        openaiClient = new OpenAI({
            baseURL: `${window.location.origin}/api/ai`,
            apiKey: 'not-needed',
            dangerouslyAllowBrowser: true
        });
        console.log('OpenAI client created with baseURL:', `${window.location.origin}/api/ai`);
        return openaiClient;
    } catch (error) {
        console.error('Failed to initialize OpenAI client:', error);
        return null;
    }
}

function closeTermModal() {
    elements.termModal.hidden = true;
}

async function openTermModal(detection) {
    // Show modal immediately with basic info
    elements.termModal.hidden = false;
    elements.termModalTerm.textContent = detection.term;
    elements.termModalCategory.textContent = `${detection.categoryIcon} ${detection.categoryName}`;
    elements.termModalBrief.textContent = detection.definition;

    // Show loading state
    elements.termModalBody.innerHTML = `
        <div class="term-modal-loading">
            <div class="loading-spinner"></div>
            <span>Generating detailed explanation...</span>
        </div>
    `;

    // Build context-aware prompt based on category
    let contextPrompt = '';
    if (detection.category === 'leadership') {
        contextPrompt = `This is a person in Shopify's leadership. Provide:
1. A brief overview of their role and responsibilities
2. Their area of focus at Shopify
3. Why knowing about them matters for new employees

Keep it professional and concise.`;
    } else if (detection.category === 'shopify') {
        contextPrompt = `This is Shopify-specific terminology. Provide:
1. A clear, detailed explanation
2. How it's used at Shopify specifically
3. A practical example of when you'd encounter this

Be helpful for someone new to Shopify.`;
    } else if (detection.category === 'ecommerce') {
        contextPrompt = `This is an ecommerce term. Provide:
1. A comprehensive explanation
2. Why it matters for online commerce
3. How Shopify merchants would use or encounter this

Keep it practical and relevant.`;
    } else {
        contextPrompt = `This is a technical term. Provide:
1. A clear technical explanation
2. Why it's important in software/tech
3. A simple example or analogy

Make it accessible but accurate.`;
    }

    try {
        const client = await initOpenAI();
        if (!client) {
            console.error('OpenAI client failed to initialize');
            elements.termModalBody.innerHTML = `
                <p>Unable to load AI-powered explanations. Here's what we know:</p>
                <p><strong>${escapeHtml(detection.term)}</strong>: ${escapeHtml(detection.definition)}</p>
            `;
            return;
        }

        console.log('Making API request for term:', detection.term);
        const stream = await client.chat.completions.create({
            model: 'gpt-5.1',
            messages: [
                {
                    role: 'system',
                    content: `You are a helpful assistant explaining terms to new Shopify employees. Be concise and practical.

Format rules:
- Use short section headers ending with a colon (e.g., "What it means:")
- Use numbered lists (1. 2. 3.) for steps or ordered items
- Use bullet points (-) for unordered items
- Use **bold** for key terms
- Keep total response under 150 words
- No introductory phrases like "Sure!" or "Great question!"`
                },
                {
                    role: 'user',
                    content: `Explain the term "${detection.term}" (basic definition: ${detection.definition}).

${contextPrompt}`
                }
            ],
            temperature: 0.7,
            stream: true
        });

        // Clear loading and stream response
        elements.termModalBody.innerHTML = '';
        let fullResponse = '';

        for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
                fullResponse += content;
                elements.termModalBody.innerHTML = formatMarkdown(fullResponse);
            }
        }
    } catch (error) {
        console.error('Failed to fetch AI explanation:', error);
        console.error('Error details:', {
            message: error.message,
            status: error.status,
            code: error.code,
            type: error.type
        });
        const errorMsg = error.message || 'Unknown error';
        elements.termModalBody.innerHTML = `
            <p style="color: var(--text-muted); margin-bottom: 1rem;">
                Unable to generate detailed explanation.
                ${errorMsg.includes('fetch') || errorMsg.includes('network') || errorMsg.includes('Failed')
                    ? '<br><small>Make sure you\'re running via <code>quick serve</code>.</small>'
                    : `<br><small>Error: ${escapeHtml(errorMsg)}</small>`}
            </p>
            <p><strong>${escapeHtml(detection.term)}</strong>: ${escapeHtml(detection.definition)}</p>
        `;
    }
}

// ============================================
// Test Input Modal
// ============================================

function openTestModal() {
    elements.testModal.hidden = false;
    elements.testTextInput.value = '';
    elements.testTextInput.focus();
}

function closeTestModal() {
    elements.testModal.hidden = true;
    elements.testTextInput.value = '';
}

function processTestInput() {
    const text = elements.testTextInput.value.trim();
    if (!text) return;

    // Run term detection on the pasted text
    detectTerms(text);

    // Update transcript preview to show what was processed
    updateTranscriptPreview(text.substring(0, 100) + (text.length > 100 ? '...' : ''));

    // Close the modal
    closeTestModal();
}

// ============================================
// Event Handlers
// ============================================

function toggleListening() {
    if (state.isListening) {
        stopListening();
    } else {
        startListening();
    }
}

async function startListening() {
    if (!state.recognition) {
        showError('Speech recognition is not available. Please use Google Chrome or Microsoft Edge.');
        return;
    }
    
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        state.isListening = true;
        state.recognition.start();
    } catch (error) {
        console.error('Microphone error:', error);
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
            showError('Microphone access was denied. Please click the camera/microphone icon in your browser\'s address bar and allow access, then refresh the page.');
        } else if (error.name === 'NotFoundError') {
            showError('No microphone found. Please connect a microphone and refresh the page.');
        } else if (error.name === 'NotReadableError') {
            showError('Your microphone is busy or unavailable. Please close other apps using the microphone and try again.');
        } else {
            showError('Failed to access microphone: ' + error.message);
        }
        state.isListening = false;
        updateStatus('Microphone error', 'error');
    }
}

function stopListening() {
    state.isListening = false;
    stopContextTimer();
    if (state.recognition) {
        state.recognition.stop();
    }
}

// ============================================
// Export to PDF
// ============================================

function exportToPDF() {
    if (state.detections.length === 0) {
        alert('No terms to export yet. Start listening to detect some terms first!');
        return;
    }
    
    // Group detections by category
    const grouped = {};
    state.detections.forEach(d => {
        if (!grouped[d.category]) {
            grouped[d.category] = [];
        }
        grouped[d.category].push(d);
    });
    
    // Get current date/time for the report
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    const timeStr = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    // Build HTML content for PDF
    let termsHTML = '';
    
    Object.keys(grouped).forEach(categoryId => {
        const category = CATEGORIES[categoryId];
        const terms = grouped[categoryId];
        
        termsHTML += `
            <div class="category-section">
                <h2>${category.icon} ${category.name}</h2>
                <table>
                    <thead>
                        <tr>
                            <th style="width: 25%">Term</th>
                            <th style="width: 60%">Definition</th>
                            <th style="width: 15%">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${terms.map(t => `
                            <tr>
                                <td><strong>${escapeHtml(t.term)}</strong></td>
                                <td>${escapeHtml(t.definition)}</td>
                                <td>${t.timestamp}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    });
    
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pop-Up Video - Terms Export</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.5;
            color: #1a1a1a;
            padding: 40px;
            max-width: 900px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #008060;
        }
        
        .header h1 {
            font-size: 28px;
            color: #008060;
            margin-bottom: 8px;
        }
        
        .header .subtitle {
            color: #666;
            font-size: 14px;
        }
        
        .stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 15px;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: #008060;
        }
        
        .stat-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
        }
        
        .category-section {
            margin-bottom: 30px;
        }
        
        .category-section h2 {
            font-size: 18px;
            color: #1a1a1a;
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid #e1e3e5;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        
        th {
            text-align: left;
            padding: 10px 12px;
            background: #f6f6f7;
            font-weight: 600;
            color: #1a1a1a;
            border-bottom: 2px solid #e1e3e5;
        }
        
        td {
            padding: 10px 12px;
            border-bottom: 1px solid #e1e3e5;
            vertical-align: top;
        }
        
        tr:hover {
            background: #fafafa;
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e1e3e5;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
        
        @media print {
            body {
                padding: 20px;
            }
            
            .no-print {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎬 Pop-Up Video</h1>
        <p class="subtitle">${dateStr} at ${timeStr}</p>
        <div class="stats">
            <div class="stat">
                <div class="stat-value">${state.detections.length}</div>
                <div class="stat-label">Terms Detected</div>
            </div>
            <div class="stat">
                <div class="stat-value">${Object.keys(grouped).length}</div>
                <div class="stat-label">Categories</div>
            </div>
        </div>
    </div>
    
    ${termsHTML}
    
    <div class="footer">
        <p>Generated by Pop-Up Video • popup-video.quick.shopify.io</p>
    </div>
    
    <script>
        // Auto-trigger print dialog
        window.onload = function() {
            window.print();
        };
    </script>
</body>
</html>
    `;
    
    // Open in new window for printing/saving as PDF
    const printWindow = window.open('', '_blank');
    printWindow.document.write(html);
    printWindow.document.close();
}

// ============================================
// Initialization
// ============================================

function init() {
    // Load saved category preferences
    loadSavedCategories();
    
    // Render category chips
    renderCategoryChips();
    
    // Initialize mode toggle
    initModeToggle();
    
    // Initialize Quick API for user info
    initQuickAPI();
    
    // Initialize speech recognition
    initSpeechRecognition();
    
    // Initialize OpenAI client for Live Context mode (async, non-blocking)
    initOpenAIClient();
    
    // Set up event listeners
    elements.toggleBtn.addEventListener('click', toggleListening);
    elements.clearBtn.addEventListener('click', clearAllDetections);
    elements.exportBtn.addEventListener('click', exportToPDF);

    // Term modal event listeners
    elements.termModalClose.addEventListener('click', closeTermModal);
    elements.termModalOverlay.addEventListener('click', closeTermModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !elements.termModal.hidden) {
            closeTermModal();
        }
    });

    // Test mode toggle
    const testToggleBtn = document.getElementById('testToggleBtn');
    const testWrapper = document.getElementById('testInputWrapper');
    testToggleBtn.addEventListener('click', () => {
        const isVisible = testWrapper.style.display !== 'none';
        testWrapper.style.display = isVisible ? 'none' : 'block';
        testToggleBtn.classList.toggle('active', !isVisible);
    });

    // Test input - simulates speech for testing
    const testForm = document.getElementById('testInputForm');
    const testInput = document.getElementById('testInput');
    testForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = testInput.value.trim();
        if (!text) return;
        
        console.log(`[Test Input] Simulating speech: "${text}"`);
        updateTranscriptPreview(text);
        
        if (state.mode === 'jargon') {
            detectTerms(text);
        } else {
            // In context mode, add to buffer and immediately process
            state.transcriptBuffer += text + ' ';
            processTranscriptBuffer();
        }
        
        testInput.value = '';
    });

    // Add shake animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-4px); }
            75% { transform: translateX(4px); }
        }
    `;
    document.head.appendChild(style);
    
    console.log('Pop-Up Video initialized! 🎬');
    console.log(`Loaded ${Object.keys(TERMS).length} terms across ${Object.keys(CATEGORIES).length} categories.`);
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
