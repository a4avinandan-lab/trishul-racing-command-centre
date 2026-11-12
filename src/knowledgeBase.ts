export type KnowledgeEntry = {
  id: string;
  title: string;
  keywords: string[];
  answer: string;
  sources: { label: string; url: string }[];
};

const globalResources = 'https://www.stemracing.com/resources';
const globalDownloads = 'https://www.stemracing.com/downloads';
const indiaProgram = 'https://www.stemplify.com/stem-racing-india/';
const indiaSeason = 'https://www.stemplify.com/courses/stem-racing-india/';

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: 'stem-racing-overview', title: 'What is STEM Racing?',
    keywords: ['stem racing', 'f1 in schools', 'f1 schools', 'what is the competition', 'competition overview', 'competition format', 'judging categories', 'race event', 'miniature f1', 'compressed air car'],
    answer: 'STEM Racing (formerly known as F1 in Schools in India and many other places) is an educational engineering competition. Student teams plan a project, design and manufacture miniature Formula 1-style cars using CAD/CAM tools, test their ideas, present their work and race their cars. It combines science, technology, engineering, mathematics, teamwork, project management and enterprise. The exact event format and requirements depend on the country, class and season.',
    sources: [{ label: 'STEM Racing India – programme overview', url: indiaProgram }, { label: 'STEM Racing Global – official resources', url: globalResources }],
  },
  {
    id: 'india-pathway', title: 'STEM Racing India competition pathway',
    keywords: ['india', 'regional', 'regionals', 'national', 'world finals', 'qualify', 'team size', 'indian competition'],
    answer: 'STEM Racing India describes a pathway in which eligible teams compete at Regional level, leading teams can progress to the National competition, and top National teams may represent India at the World Finals. The programme information lists teams of 3–6 students for the competition. Always check the current season communication from STEM Racing India for the actual dates, eligibility, class, submission list and qualification places.',
    sources: [{ label: 'STEM Racing India – programme and competition pathway', url: indiaProgram }, { label: 'STEM Racing India – 2025–26 course page', url: indiaSeason }],
  },
  {
    id: 'aerodynamics', title: 'Aerodynamics',
    keywords: ['aerodynamics', 'aerodynamic', 'airflow', 'air flow', 'air resistance', 'streamline', 'wind tunnel', 'body shape'],
    answer: 'Aerodynamics is the study of how air moves around objects and how the air creates forces on them. For a STEM Racing car, the main aim is usually to reduce unnecessary aerodynamic drag while keeping the car stable and compliant with the rules. A smooth shape, careful transitions and a tidy surface can help airflow, but the best design must be tested rather than guessed. Compare designs using the same CFD setup or repeatable physical tests.',
    sources: [{ label: 'STEM Racing Global – software and learning resources', url: globalResources }],
  },
  {
    id: 'drag', title: 'Aerodynamic drag',
    keywords: ['drag', 'air drag', 'drag force', 'reduce drag', 'cd', 'drag coefficient'],
    answer: 'Drag is the force from the air that acts against a moving car. A simplified model is Fd = ½ρv²CdA, where ρ is air density, v is speed, Cd is drag coefficient and A is frontal area. This shows why speed, frontal area and shape matter. In a small racing car, do not optimise Cd alone: the product Cd × A and the complete legal design matter. Use comparable CFD or test data to decide whether a change actually helps.',
    sources: [{ label: 'STEM Racing Global – Autodesk and Ansys resources', url: globalResources }],
  },
  {
    id: 'lift-downforce', title: 'Lift and downforce',
    keywords: ['lift', 'downforce', 'negative lift', 'stability', 'vertical force'],
    answer: 'Lift is an aerodynamic force acting perpendicular to the oncoming airflow. If it acts upward, it can reduce the normal force on the wheels and may affect stability. Downforce acts downward and can increase tyre loading, but it may also add drag. For a STEM Racing car, follow the event regulations first; do not add wings or other features unless they are permitted. Use analysis and testing to understand the trade-off.',
    sources: [{ label: 'STEM Racing Global – current resources and regulations', url: globalResources }],
  },
  {
    id: 'cad-cam-cfd', title: 'CAD, CAM and CFD',
    keywords: ['cad', 'cam', 'cfd', 'difference between cad cam cfd', 'computer aided design', 'computer aided manufacturing', 'computational fluid dynamics'],
    answer: 'CAD (Computer-Aided Design) is used to create and edit the 3D model and engineering drawings. CAM (Computer-Aided Manufacturing) uses a model and manufacturing setup to plan machine toolpaths. CFD (Computational Fluid Dynamics) uses numerical methods to estimate how fluids such as air move around a design. In a STEM Racing workflow: create the model in CAD, analyse airflow with CFD, then plan approved manufacturing operations with CAM. Record the settings, assumptions and results so the work can be explained and repeated.',
    sources: [{ label: 'STEM Racing Global – software resources', url: globalResources }, { label: 'STEM Racing Global – downloads and manufacturing files', url: globalDownloads }],
  },
  {
    id: 'cnc', title: 'CNC manufacturing',
    keywords: ['cnc', 'computer numerical control', 'machining', 'toolpath', 'milling', 'manufacturing'],
    answer: 'CNC means Computer Numerical Control. A computer-controlled machine follows programmed toolpaths to remove material or perform another defined operation. In a STEM Racing project, CAM planning, correct machine setup, material approval, safe operation by trained supervisors, measurement and quality checks all matter. Keep evidence of the manufacturing strategy, toolpaths, inspection results and any changes. Follow your school workshop procedures and the current event rules; do not operate machinery without the responsible trained adult.',
    sources: [{ label: 'STEM Racing Global – manufacturing downloads', url: globalDownloads }, { label: 'STEM Racing Global – resources', url: globalResources }],
  },
  {
    id: '3d-printing', title: '3D printing',
    keywords: ['3d printing', '3d printer', 'additive manufacturing', 'stl', 'layer lines'],
    answer: '3D printing is an additive manufacturing process: a part is built by adding material in layers from a digital model. It is useful for prototypes, fixtures and permitted components. Print orientation, layer height, material, supports and post-processing can affect dimensions and surface finish. For competition parts, first confirm that the component and manufacturing method are allowed by the applicable regulations.',
    sources: [{ label: 'STEM Racing Global – downloads', url: globalDownloads }],
  },
  {
    id: 'assembly', title: 'Assembly and fit',
    keywords: ['assembly', 'assemble', 'assembling', 'fit', 'joint', 'alignment', 'components together', 'mechanical assembly'],
    answer: 'Assembly is the process of joining separate parts into a complete product. Good assembly depends on correct dimensions, compatible fits, alignment, clean contact surfaces and a repeatable sequence. For a small racing car, inspect that wheels and axles are aligned, parts are secure, nothing rubs unexpectedly and the finished car matches the approved design. Record checks and evidence. Do not modify safety-critical or regulated parts without checking the current rules and getting the responsible supervisor’s approval.',
    sources: [{ label: 'STEM Racing Global – downloads and scrutineering resources', url: globalDownloads }],
  },
  {
    id: 'tolerances', title: 'Tolerance and dimensional accuracy',
    keywords: ['tolerance', 'tolerances', 'dimension', 'dimensions', 'accuracy', 'precision', 'measurement', 'caliper'],
    answer: 'A tolerance is the permitted variation from a specified dimension. For example, a drawing might specify a nominal size and an allowed upper and lower limit. Accuracy describes closeness to the intended value; precision describes how consistent repeated measurements are. Use suitable measuring tools, note the measured value and compare it with the actual regulation or drawing limit. Never assume a dimension from an older season is still valid.',
    sources: [{ label: 'STEM Racing Global – 2026 downloads and scrutineering gauges', url: globalDownloads }],
  },
  {
    id: 'quality-control', title: 'Quality control and inspection',
    keywords: ['quality control', 'quality assurance', 'inspection', 'scrutineering', 'checklist', 'finish', 'surface finish'],
    answer: 'Quality control checks whether the finished product meets its drawings, specifications and applicable rules. A useful process is: define the requirement, measure or inspect the feature, record the result, compare it with the acceptance limit, and document any corrective action. For STEM Racing, check dimensions, finish, assembly, wheel alignment and the event-specific scrutineering requirements. The official downloads page provides class-specific gauges and model-block resources for the classes and seasons shown there.',
    sources: [{ label: 'STEM Racing Global – downloads and scrutineering gauges', url: globalDownloads }],
  },
  {
    id: 'testing-iteration', title: 'Testing and design iteration',
    keywords: ['testing', 'test', 'iteration', 'prototype', 'research and development', 'r and d', 'improve design', 'design process'],
    answer: 'A strong engineering process is iterative: identify a problem, research it, set a measurable objective, change one or a small number of variables, test under controlled conditions, analyse the results and decide what to do next. Keep earlier versions and record why each change was made. Use repeatable tests and avoid claiming that a design is faster or better unless the evidence supports it.',
    sources: [{ label: 'STEM Racing Global – resources and project management handbook', url: globalResources }, { label: 'STEM Racing India – programme overview', url: indiaProgram }],
  },
  {
    id: 'portfolio', title: 'Engineering portfolio',
    keywords: ['portfolio', 'engineering portfolio', 'design portfolio', 'documentation', 'evidence', 'judges'],
    answer: 'An engineering portfolio should make the team’s real design process easy to understand and verify. Depending on the class and season, useful evidence can include the design brief, research, concept selection, CAD development, drawings, analysis, CAM/CNC planning, manufacturing, assembly, testing, evaluation and justified improvements. Use the exact page limit, format and scoring criteria from the current Indian competition documents; global World Finals requirements may differ.',
    sources: [{ label: 'STEM Racing Global – official resources', url: globalResources }, { label: 'STEM Racing India – season course page', url: indiaSeason }],
  },
  {
    id: 'project-management', title: 'Project management',
    keywords: ['project management', 'gantt', 'schedule', 'timeline', 'risk', 'roles', 'responsibilities', 'teamwork', 'planning'],
    answer: 'Project management is how a team plans, organises, tracks and completes its work. Useful practices include clear roles, a realistic schedule, task owners, milestones, a budget, resource planning, risk tracking, regular progress reviews and evidence of decisions. A Gantt chart can show task timing and dependencies. The official STEM Racing resources page lists a 2026 Project Management Handbook developed with PMIEF.',
    sources: [{ label: 'STEM Racing Global – 2026 Project Management Handbook', url: globalResources }],
  },
  {
    id: 'enterprise-sponsorship', title: 'Enterprise, sponsorship and marketing',
    keywords: ['enterprise', 'sponsor', 'sponsorship', 'marketing', 'brand identity', 'social media', 'fundraising', 'budget'],
    answer: 'The enterprise side explains how the team operates as a project and communicates its identity. It can include brand strategy, audience research, social media planning, sponsor research and outreach, a clear value proposition, a realistic budget, tracking money and evidence of what the team actually delivered. Be truthful about sponsor commitments and results, and keep permission for logos and brand assets.',
    sources: [{ label: 'STEM Racing Global – official resources', url: globalResources }, { label: 'STEM Racing India – programme overview', url: indiaProgram }],
  },
  {
    id: 'pit-display-presentation', title: 'Pit display and presentation',
    keywords: ['pit display', 'verbal presentation', 'presentation', 'pitch', 'judging interview', 'judges', 'stand'],
    answer: 'A strong pit display should communicate the team identity and project story quickly, stay organised and support what the team says during judging. A clear verbal presentation usually has a simple structure: the challenge, the team’s approach, important design decisions, evidence and results, what was learned, and what comes next. Practise concise answers and make sure every team member understands the work rather than memorising claims.',
    sources: [{ label: 'STEM Racing Global – competition and resources', url: globalResources }, { label: 'STEM Racing India – season course page', url: indiaSeason }],
  },
  {
    id: 'official-rules', title: 'Which rules should we follow?',
    keywords: ['rules', 'regulations', 'legal', 'allowed', 'is it allowed', 'technical regulations', 'competition regulations', 'rulebook'],
    answer: 'Use the regulations issued for your exact event, country, class and season. Technical Regulations govern the car’s design and manufacture; Competition Regulations govern event procedures and judging. The STEM Racing Global resources page currently lists 2026 World Finals documents, but those are World Finals rules, not automatically the rules for STEM Racing India Regionals. For Trishul Racing, treat the current Indian Regional handbook and official organiser announcements as controlling. If a rule is unclear, ask the organiser or supervising teacher before making the design decision.',
    sources: [{ label: 'STEM Racing Global – 2026 resources and regulations', url: globalResources }, { label: 'STEM Racing India – season course page', url: indiaSeason }],
  },
  {
    id: 'ai-guidance', title: 'Using AI responsibly in STEM Racing',
    keywords: ['ai', 'artificial intelligence', 'chatgpt', 'use ai', 'ai policy', 'academic honesty'],
    answer: 'STEM Racing Global publishes AI guidance and says AI can be used to enhance work when use is transparent and responsible. Treat AI as a helper for explaining concepts, brainstorming, checking clarity and organising research—not as a substitute for the team’s own design decisions, measurements or understanding. Verify technical claims, disclose AI use as required by your event, and never present generated ideas or text as measured results or work the team did not perform.',
    sources: [{ label: 'STEM Racing Global – AI Guidance', url: globalResources }],
  },
  {
    id: 'newtons-laws', title: 'Newton’s laws of motion',
    keywords: ['newton', 'newtons laws', 'law of motion', 'force', 'inertia', 'acceleration'],
    answer: 'Newton’s first law says an object keeps its state of rest or uniform straight-line motion unless a resultant external force acts on it. The second law links resultant force, mass and acceleration: F = ma. The third law says interacting objects exert equal and opposite forces on each other. These ideas help explain a racing car’s acceleration, resistance and motion, although real car behaviour also depends on friction, airflow and the track.',
    sources: [{ label: 'General physics reference: OpenStax University Physics', url: 'https://openstax.org/details/books/university-physics-volume-1' }],
  },
  {
    id: 'friction-rolling-resistance', title: 'Friction and rolling resistance',
    keywords: ['friction', 'rolling resistance', 'wheel friction', 'tyre friction', 'resistance'],
    answer: 'Friction is a force that resists relative motion between surfaces in contact. Rolling resistance is the resistance that occurs as a wheel rolls, caused by deformation and other losses in the wheel and surface. For a small car, alignment, wheel condition and contact with surrounding parts can affect losses. Do not assume that removing all friction is desirable: some friction is needed for control and traction in many vehicles.',
    sources: [{ label: 'General physics reference: OpenStax University Physics', url: 'https://openstax.org/details/books/university-physics-volume-1' }],
  },
  {
    id: 'speed-velocity-acceleration', title: 'Speed, velocity and acceleration',
    keywords: ['speed', 'velocity', 'acceleration', 'distance', 'time', 'how fast'],
    answer: 'Average speed is distance divided by time. Velocity is speed in a particular direction. Acceleration is the rate at which velocity changes over time. For a race result, compare runs using the same distance and timing method, and keep reaction time separate from the time the car itself takes if the event measures them separately.',
    sources: [{ label: 'General physics reference: OpenStax University Physics', url: 'https://openstax.org/details/books/university-physics-volume-1' }],
  },
  {
    id: 'mass-centre-gravity', title: 'Mass and centre of gravity',
    keywords: ['mass', 'weight', 'centre of gravity', 'center of gravity', 'centre of mass', 'balance', 'stability'],
    answer: 'Mass measures how much matter an object contains; weight is the gravitational force acting on that mass. The centre of mass is the balance point of an object’s mass distribution. A lower centre of mass can often help stability, but the best arrangement depends on the car geometry, wheel contact and event rules. Do not change mass distribution without checking the current regulations and measuring the effect.',
    sources: [{ label: 'General physics reference: OpenStax University Physics', url: 'https://openstax.org/details/books/university-physics-volume-1' }],
  },
  {
    id: 'car-performance', title: 'How can we improve a STEM Racing car?',
    keywords: ['make car faster', 'faster car', 'improve car speed', 'car performance', 'fastest car', 'performance', 'optimise car', 'optimize car'],
    answer: 'Start with the current regulations and a measured baseline. Then identify one possible source of lost performance, such as aerodynamic drag, wheel or axle alignment, unwanted rubbing, inconsistent manufacturing or surface defects. Make a controlled change, keep other variables as constant as possible, repeat the test and record the result. Do not assume a change is faster because it looks better in CAD or CFD; compare repeatable measurements and keep the design compliant.',
    sources: [{ label: 'STEM Racing Global – resources', url: globalResources }, { label: 'STEM Racing Global – downloads and scrutineering resources', url: globalDownloads }],
  },
  {
    id: 'official-software', title: 'Recommended software and learning resources',
    keywords: ['software', 'autodesk', 'fusion', 'ansys', 'learn', 'resources', 'downloads', 'scrutineering gauges', 'model block'],
    answer: 'The official STEM Racing resources page points students towards Autodesk Fusion for CAD and Ansys for CFD, plus a Project Management Handbook and current event resources. The downloads page includes items such as decals, 3D design files, scrutineering gauges, model-block resources, PowerPack files and manufacturing tool data. Check that a download is intended for your class and season before using it.',
    sources: [{ label: 'STEM Racing Global – resources', url: globalResources }, { label: 'STEM Racing Global – downloads', url: globalDownloads }],
  },
];

const normalise = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').replace(/\s+/g, ' ').trim();

export function findKnowledgeAnswer(question: string): KnowledgeEntry | null {
  const q = normalise(question);
  const tokens = q.split(' ').filter(token => token.length > 2);
  let best: KnowledgeEntry | null = null;
  let bestScore = 0;
  for (const entry of knowledgeBase) {
    const title = normalise(entry.title);
    const keywords = entry.keywords.map(normalise);
    let score = 0;
    if (q.includes(title)) score += 5;
    for (const keyword of keywords) {
      if (keyword.includes(' ') ? q.includes(keyword) : tokens.includes(keyword)) score += (keyword === 'rules' || keyword === 'regulations') ? 5 : keyword.includes(' ') ? 4 : 2;
    }
    const answerTokens = new Set([...title.split(' '), ...keywords.flatMap(k => k.split(' '))]);
    score += tokens.filter(token => answerTokens.has(token)).length * 0.5;
    if (score > bestScore) { best = entry; bestScore = score; }
  }
  return bestScore >= 2 ? best : null;
}
