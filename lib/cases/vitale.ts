export type VitaleCase = {
  back: string;
  visit: string;
  readCase: string;
  category: string;
  headline: string;
  intro: string;
  facts: { label: string; value: string }[];
  index: string;
  placeholder: string;
  cover: string;
  identityApplication: string;
  designSystemImage: string;
  sections: {
    id: string;
    label: string;
    title: string;
    paragraphs: string[];
    images: string[];
  }[];
  identity: { label: string; value: string; detail: string }[];
  stack: { title: string; text: string }[];
  closing: string;
};

const pt: VitaleCase = {
  designSystemImage: "Design System da Vitale: cores, Sora e Manrope, busca, botões, validação, estado vazio, card de imóvel demonstrativo e estados de análise de anunciantes.",
  back: "Todos os projetos",
  visit: "Visitar o site",
  readCase: "Ver case",
  category: "Produto próprio · Branding · UX/UI · Full stack",
  headline: "Da ideia de uma marca a um produto em operação.",
  intro: "Na Vitale, conectei estratégia de negócio, branding, experiência e desenvolvimento para construir um portal imobiliário. Uma plataforma para quem procura um imóvel e para quem precisa anunciá-lo.",
  facts: [
    { label: "Meu papel", value: "Estratégia de produto, branding, UX/UI e desenvolvimento" },
    { label: "Produto", value: "Classificados imobiliários · Compra, aluguel e temporada" },
    { label: "Ponto de partida", value: "Espigão d’Oeste, Rondônia · Catálogo aberto ao Brasil" },
    { label: "Lançamento", value: "26 de outubro de 2026 · Em evolução" },
  ],
  index: "Neste case",
  placeholder: "Espaço reservado para imagem",
  cover: "Apresentação da Vitale em desktop e mobile",
  identityApplication: "Aplicação conceitual da identidade Vitale em livreto, cartões e folheto nas cores azul e verde-lima, gerada com IA.",
  sections: [
    {
      id: "contexto", label: "Contexto e pesquisa", title: "Pesquisa e definição do negócio",
      paragraphs: [
        "Com aquisição inicial em Espigão d’Oeste e planos de expansão, a Vitale começou pela **pesquisa de posicionamento**. Analisei QuintoAndar, OLX, Viva Real, Imovelweb e portais regionais. A pesquisa foi documental, com hipóteses ainda a validar com usuários.",
        "O modelo passou da captação centralizada de interessados para **contas de anunciantes** e destaques pagos opcionais. As decisões sobre autonomia, aprovação e publicação foram registradas no Business Model Canvas e no PRD e orientaram a arquitetura.",
      ],
      images: [],
    },
    {
      id: "marca", label: "Estratégia e identidade", title: "Posicionamento e identidade da marca",
      paragraphs: [
        "Defini públicos, **proposta de valor**, posicionamento e personalidade para atender interessados, proprietários, corretores e imobiliárias, sem restringir a marca a uma faixa de preço.",
        "Facilidade, clareza e atenção regional guiaram a linguagem simples e próxima. A identidade visual combinou azul, verde-lima, símbolo geométrico em V e as fontes Sora e Manrope.",
        "O **Brandbook** reuniu essas escolhas: azul na marca e nas ações, verde-lima como acento e superfícies claras para priorizar fotos e informações dos imóveis.",
      ],
      images: ["Logotipo oficial e construção do símbolo", "Aplicações da identidade e páginas do Brandbook"],
    },
    {
      id: "sistema", label: "Design System", title: "Da identidade ao Design System",
      paragraphs: [
        "Traduzi o Brandbook em **tokens e padrões próprios** para o site público e a administração. A nova identidade substituiu a referência visual inicial sem reescrever os fluxos de negócio.",
        "Mensagens e hierarquia visual distinguem rascunho, **revisão pendente** e conteúdo publicado, refletindo as regras do servidor.",
      ],
      images: ["Tokens, componentes e estados do Design System"],
    },
    {
      id: "engenharia", label: "Arquitetura e desenvolvimento", title: "Arquitetura e desenvolvimento",
      paragraphs: [
        "Documentação técnica, modelo de dados e matriz de permissões orientaram o desenvolvimento, dividido em milestones e ambientes separados de desenvolvimento, homologação e produção.",
        "As fotos são validadas, redimensionadas, convertidas para WebP e têm os metadados removidos antes do armazenamento privado no Cloudflare R2.",
        "O servidor confirma pagamentos com o provedor e concede cada destaque **uma única vez**. Os contatos são **salvos antes da notificação**, preservando a mensagem no painel se o e-mail falhar.",
      ],
      images: [],
    },
    {
      id: "resultado", label: "Entregas e aprendizados", title: "Lançamento, aprendizados e próximos passos",
      paragraphs: [
        "Publicada em domínio próprio em 26 de outubro de 2026, a Vitale seguiu evoluindo em identidade, navegação, imagens, notificações e blog, com jornadas e regras documentadas.",
        "Aprendi a tratar estados, permissões e falhas como parte da experiência: administração, preparo de imagens e confirmação de pagamentos afetam diretamente o uso.",
        "Os **resultados de negócio ainda serão medidos**: anúncios ativos, contatos, tempo de moderação e retorno dos destaques. Os próximos passos incluem testes com usuários e conclusão das validações operacionais pendentes.",
      ],
      images: [],
    },
  ],
  identity: [
    { label: "Cor principal", value: "#0125DB", detail: "Azul · Identidade e ação" },
    { label: "Cor de acento", value: "#A9F703", detail: "Verde-lima · Destaques pontuais" },
    { label: "Títulos", value: "Sora", detail: "Hierarquia e personalidade" },
    { label: "Texto e interface", value: "Manrope", detail: "Leitura, campos e navegação" },
  ],
  stack: [
    { title: "Next.js + TypeScript", text: "Interface, renderização e regras no servidor · Deploy na Vercel" },
    { title: "Supabase + PostgreSQL", text: "Autenticação, dados, políticas RLS e busca" },
    { title: "Cloudflare R2 + Sharp", text: "Fotos privadas, processamento e entrega de imagens" },
    { title: "Mercado Pago", text: "Checkout, confirmação e conciliação de destaques" },
    { title: "Resend", text: "E-mails transacionais e avisos após os eventos de publicação" },
    { title: "Contentful", text: "Conteúdo editorial do blog separado do núcleo transacional" },
  ],
  closing: "Conheça a Vitale em operação.",
};

const en: VitaleCase = {
  designSystemImage: "Vitale Design System: colours, Sora and Manrope, search, buttons, validation, empty state, demonstration property card and advertiser review states.",
  identityApplication: "AI-generated conceptual Vitale identity applications on a booklet, cards and brochure in blue and lime green.",
  back: "All projects", visit: "Visit website", readCase: "View case study",
  category: "Independent product · Branding · UX/UI · Full stack",
  headline: "From a brand idea to a working product.",
  intro: "For Vitale, I connected business strategy, branding, user experience and development to build a real estate portal. A platform for people looking for a property and those who need to advertise one.",
  facts: [
    { label: "My role", value: "Product strategy, branding, UX/UI and development" },
    { label: "Product", value: "Real estate classifieds · Sales, rentals and holiday lets" },
    { label: "Starting point", value: "Espigão d’Oeste, Rondônia · Listings open to Brazil" },
    { label: "Launch", value: "October 26, 2026 · Ongoing development" },
  ],
  index: "In this case study", placeholder: "Image placeholder", cover: "Vitale overview on desktop and mobile",
  sections: [
    { id: "contexto", label: "Context and research", title: "Research and business definition", paragraphs: [
        "With initial acquisition in Espigão d’Oeste and plans to expand, Vitale started with **positioning research**. I reviewed QuintoAndar, OLX, Viva Real, Imovelweb and regional portals. This was desk research, with hypotheses still to validate with users.",
        "The model shifted from centralised lead generation to **advertiser accounts** and optional paid promotion. Decisions on autonomy, approval and publication were recorded in the Business Model Canvas and PRD and shaped the architecture.",
      ], images: [] },
    { id: "marca", label: "Strategy and identity", title: "Brand positioning and identity", paragraphs: [
        "I defined audiences, **value proposition**, positioning and personality to serve seekers, owners, agents and agencies without limiting the brand to a price segment.",
        "Ease, clarity and regional awareness guided simple, approachable language. The visual identity combined blue, lime green, a geometric V symbol and Sora with Manrope.",
        "The **Brandbook** brought these choices together: blue for the brand and actions, lime as an accent, and light surfaces to prioritise property photos and information.",
      ], images: ["Official logo and symbol construction", "Identity applications and Brandbook pages"] },
    { id: "sistema", label: "Design System", title: "From identity to Design System", paragraphs: [
        "I translated the Brandbook into **dedicated tokens and patterns** for the public site and administration. The new identity replaced the initial visual reference without rewriting business flows.",
        "Messaging and visual hierarchy distinguish drafts, **pending revisions** and published content, reflecting server rules.",
      ], images: ["Design System tokens, components and states"] },
    { id: "engenharia", label: "Architecture and development", title: "Architecture and development", paragraphs: [
        "Technical documentation, the data model and permission matrix guided development, organised into milestones with separate development, staging and production environments.",
        "Photos are validated, resized, converted to WebP and stripped of metadata before private storage in Cloudflare R2.",
        "The server confirms payments with the provider and grants each promotion **only once**. Enquiries are **saved before notification**, preserving dashboard messages if email fails.",
      ], images: [] },
    { id: "resultado", label: "Deliverables and lessons", title: "Launch, lessons and next steps", paragraphs: [
        "Launched on its own domain on October 26, 2026, Vitale continued improving identity, navigation, images, notifications and the blog, with documented journeys and rules.",
        "I learned to treat states, permissions and failures as part of the experience: administration, image preparation and payment confirmation directly affect use.",
        "**Business results remain to be measured**: active listings, enquiries, moderation time and promotion returns. Next steps include user testing and completing outstanding operational checks.",
      ], images: [] },
  ],
  identity: [
    { label: "Primary colour", value: "#0125DB", detail: "Blue · Identity and action" },
    { label: "Accent colour", value: "#A9F703", detail: "Lime green · Selective highlights" },
    { label: "Headings", value: "Sora", detail: "Hierarchy and personality" },
    { label: "Text and interface", value: "Manrope", detail: "Reading, fields and navigation" },
  ],
  stack: [
    { title: "Next.js + TypeScript", text: "Interface, rendering and server rules · Vercel hosting" },
    { title: "Supabase + PostgreSQL", text: "Authentication, data, RLS policies and search" },
    { title: "Cloudflare R2 + Sharp", text: "Private photos, processing and image delivery" },
    { title: "Mercado Pago", text: "Checkout, confirmation and promotion reconciliation" },
    { title: "Resend", text: "Transactional emails and notifications after publication events" },
    { title: "Contentful", text: "Blog editorial content separated from transactional data" },
  ],
  closing: "Explore Vitale in operation.",
};

const fr: VitaleCase = {
  designSystemImage: "Design System Vitale : couleurs, Sora et Manrope, recherche, boutons, validation, état vide, carte de bien de démonstration et états d’examen des annonceurs.",
  identityApplication: "Applications conceptuelles de l’identité Vitale sur un livret, des cartes et un dépliant bleu et vert citron, générées par IA.",
  back: "Tous les projets", visit: "Visiter le site", readCase: "Voir le cas d’étude",
  category: "Produit indépendant · Branding · UX/UI · Full stack",
  headline: "D’une idée de marque à un produit opérationnel.",
  intro: "Pour Vitale, j’ai réuni stratégie commerciale, branding, expérience utilisateur et développement pour créer un portail immobilier. Une plateforme pour les personnes qui cherchent un bien et celles qui souhaitent en publier un.",
  facts: [
    { label: "Mon rôle", value: "Stratégie produit, branding, UX/UI et développement" },
    { label: "Produit", value: "Annonces immobilières · Vente, location et séjour" },
    { label: "Point de départ", value: "Espigão d’Oeste, Rondônia · Catalogue ouvert au Brésil" },
    { label: "Lancement", value: "26 octobre 2026 · En évolution" },
  ],
  index: "Dans cette étude", placeholder: "Emplacement réservé à une image", cover: "Présentation de Vitale sur ordinateur et mobile",
  sections: [
    { id: "contexto", label: "Contexte et recherche", title: "Recherche et définition du projet", paragraphs: [
        "Avec une acquisition initiale à Espigão d’Oeste et des projets d’expansion, Vitale a commencé par une **recherche de positionnement**. J’ai étudié QuintoAndar, OLX, Viva Real, Imovelweb et des portails régionaux. Cette recherche documentaire formulait des hypothèses restant à valider avec les utilisateurs.",
        "Le modèle est passé de la collecte centralisée de contacts aux **comptes annonceurs** et à la mise en avant payante facultative. Les décisions d’autonomie, d’approbation et de publication, consignées dans le Business Model Canvas et le PRD, ont orienté l’architecture.",
      ], images: [] },
    { id: "marca", label: "Stratégie et identité", title: "Positionnement et identité de marque", paragraphs: [
        "J’ai défini publics, **proposition de valeur**, positionnement et personnalité pour répondre aux personnes en recherche, propriétaires, agents et agences, sans limiter la marque à une gamme de prix.",
        "Facilité, clarté et attention régionale ont guidé un langage simple et proche. L’identité visuelle associe bleu, vert citron, symbole géométrique en V et typographies Sora et Manrope.",
        "Le **Brandbook** réunit ces choix : bleu pour la marque et les actions, vert comme accent et surfaces claires pour privilégier photos et informations des biens.",
      ], images: ["Logo officiel et construction du symbole", "Applications de l’identité et pages du Brandbook"] },
    { id: "sistema", label: "Design System", title: "De l’identité au Design System", paragraphs: [
        "J’ai traduit le Brandbook en **tokens et modèles propres** au site public et à l’administration. La nouvelle identité remplace la référence visuelle initiale sans réécrire les parcours métier.",
        "Messages et hiérarchie visuelle distinguent brouillons, **révisions en attente** et contenu publié, en accord avec les règles du serveur.",
      ], images: ["Tokens, composants et états du Design System"] },
    { id: "engenharia", label: "Architecture et développement", title: "Architecture et développement", paragraphs: [
        "Documentation technique, modèle de données et matrice des droits ont guidé un développement par étapes, avec des environnements séparés de développement, de recette et de production.",
        "Les photos sont validées, redimensionnées, converties en WebP et débarrassées de leurs métadonnées avant stockage privé dans Cloudflare R2.",
        "Le serveur confirme les paiements auprès du prestataire et n’accorde chaque mise en avant **qu’une fois**. Les contacts sont **enregistrés avant notification** : un échec d’e-mail conserve le message dans le tableau de bord.",
      ], images: [] },
    { id: "resultado", label: "Livrables et enseignements", title: "Lancement, enseignements et prochaines étapes", paragraphs: [
        "Publié sur son propre domaine le 26 octobre 2026, Vitale a poursuivi ses évolutions d’identité, navigation, images, notifications et blog, avec parcours et règles documentés.",
        "J’ai appris à traiter états, permissions et échecs comme partie de l’expérience : administration, préparation des images et confirmation des paiements affectent directement l’usage.",
        "Les **résultats commerciaux restent à mesurer** : annonces actives, contacts, temps de modération et retour des mises en avant. Les prochaines étapes incluent les tests utilisateurs et les validations opérationnelles en attente.",
      ], images: [] },
  ],
  identity: [
    { label: "Couleur principale", value: "#0125DB", detail: "Bleu · Identité et action" },
    { label: "Couleur d’accent", value: "#A9F703", detail: "Vert citron · Touches visuelles" },
    { label: "Titres", value: "Sora", detail: "Hiérarchie et personnalité" },
    { label: "Texte et interface", value: "Manrope", detail: "Lecture, champs et navigation" },
  ],
  stack: [
    { title: "Next.js + TypeScript", text: "Interface, rendu et règles serveur · Hébergement Vercel" },
    { title: "Supabase + PostgreSQL", text: "Authentification, données, politiques RLS et recherche" },
    { title: "Cloudflare R2 + Sharp", text: "Photos privées, traitement et diffusion des images" },
    { title: "Mercado Pago", text: "Checkout, confirmation et rapprochement des mises en avant" },
    { title: "Resend", text: "E-mails transactionnels et avis après publication" },
    { title: "Contentful", text: "Contenu éditorial du blog séparé du cœur transactionnel" },
  ],
  closing: "Découvrez Vitale en fonctionnement.",
};

const nl: VitaleCase = {
  designSystemImage: "Vitale-designsysteem: kleuren, Sora en Manrope, zoeken, knoppen, validatie, lege status, demonstratiewoningkaart en beoordelingsstatussen van adverteerders.",
  identityApplication: "Met AI gemaakte conceptuele toepassingen van de Vitale-identiteit op een boekje, kaarten en een folder in blauw en limoengroen.",
  back: "Alle projecten", visit: "Website bezoeken", readCase: "Bekijk de case",
  category: "Eigen product · Branding · UX/UI · Full stack",
  headline: "Van een merkidee naar een werkend product.",
  intro: "Voor Vitale verbond ik bedrijfsstrategie, branding, gebruikerservaring en ontwikkeling om een vastgoedportaal te bouwen. Een platform voor wie een woning zoekt en wie vastgoed wil aanbieden.",
  facts: [
    { label: "Mijn rol", value: "Productstrategie, branding, UX/UI en ontwikkeling" },
    { label: "Product", value: "Vastgoedadvertenties · Koop, huur en vakantieverhuur" },
    { label: "Vertrekpunt", value: "Espigão d’Oeste, Rondônia · Aanbod uit heel Brazilië" },
    { label: "Lancering", value: "26 oktober 2026 · In doorontwikkeling" },
  ],
  index: "In deze case", placeholder: "Ruimte voor een afbeelding", cover: "Presentatie van Vitale op desktop en mobiel",
  sections: [
    { id: "contexto", label: "Context en onderzoek", title: "Onderzoek en bedrijfsmodel", paragraphs: [
        "Met eerste acquisitie in Espigão d’Oeste en uitbreidingsplannen begon Vitale met **positioneringsonderzoek**. Ik bestudeerde QuintoAndar, OLX, Viva Real, Imovelweb en regionale portalen. Dit bronnenonderzoek leverde hypothesen op die nog met gebruikers moesten worden gevalideerd.",
        "Het model verschoof van centrale contactwerving naar **adverteerdersaccounts** en optionele betaalde uitlichting. Beslissingen over zelfstandigheid, goedkeuring en publicatie werden vastgelegd in het Business Model Canvas en PRD en bepaalden de architectuur.",
      ], images: [] },
    { id: "marca", label: "Strategie en identiteit", title: "Merkpositionering en identiteit", paragraphs: [
        "Ik bepaalde doelgroepen, **waardepropositie**, positionering en persoonlijkheid voor woningzoekers, eigenaren, makelaars en kantoren, zonder het merk tot een prijsklasse te beperken.",
        "Gemak, duidelijkheid en regionale aandacht stuurden eenvoudige, toegankelijke taal. De visuele identiteit combineert blauw, limoengroen, een geometrisch V-symbool en Sora met Manrope.",
        "Het **brandbook** bundelt deze keuzes: blauw voor merk en acties, groen als accent en lichte oppervlakken om woningfoto’s en informatie voorrang te geven.",
      ], images: ["Officieel logo en opbouw van het symbool", "Toepassingen van de identiteit en pagina’s uit het brandbook"] },
    { id: "sistema", label: "Designsysteem", title: "Van identiteit naar designsysteem", paragraphs: [
        "Ik vertaalde het brandbook naar **eigen tokens en patronen** voor de openbare site en het beheer. De nieuwe identiteit verving de eerste visuele referentie zonder bedrijfsprocessen te herschrijven.",
        "Berichten en visuele hiërarchie onderscheiden concepten, **wachtende revisies** en gepubliceerde inhoud, aansluitend op de serverregels.",
      ], images: ["Tokens, componenten en statussen van het designsysteem"] },
    { id: "engenharia", label: "Architectuur en ontwikkeling", title: "Architectuur en ontwikkeling", paragraphs: [
        "Technische documentatie, het datamodel en de rechtenmatrix stuurden de ontwikkeling, verdeeld over mijlpalen en gescheiden ontwikkel-, test- en productieomgevingen.",
        "Foto’s worden gevalideerd, verkleind, omgezet naar WebP en ontdaan van metadata vóór privéopslag in Cloudflare R2.",
        "De server bevestigt betalingen bij de aanbieder en kent elke uitlichting **één keer** toe. Contacten worden **vóór de melding opgeslagen**, zodat het paneel het bericht behoudt als e-mail mislukt.",
      ], images: [] },
    { id: "resultado", label: "Resultaten en lessen", title: "Lancering, lessen en vervolgstappen", paragraphs: [
        "Vitale verscheen op 26 oktober 2026 op een eigen domein en bleef identiteit, navigatie, afbeeldingen, meldingen en blog verbeteren, met gedocumenteerde routes en regels.",
        "Ik leerde statussen, rechten en fouten als onderdeel van de ervaring te behandelen: beheer, beeldverwerking en betaalbevestiging beïnvloeden het gebruik rechtstreeks.",
        "**Bedrijfsresultaten moeten nog worden gemeten**: actieve advertenties, contacten, moderatietijd en opbrengst van uitlichting. Volgende stappen omvatten gebruikerstests en afronding van open operationele controles.",
      ], images: [] },
  ],
  identity: [
    { label: "Hoofdkleur", value: "#0125DB", detail: "Blauw · Identiteit en actie" },
    { label: "Accentkleur", value: "#A9F703", detail: "Limoengroen · Gerichte accenten" },
    { label: "Titels", value: "Sora", detail: "Hiërarchie en persoonlijkheid" },
    { label: "Tekst en interface", value: "Manrope", detail: "Lezen, velden en navigatie" },
  ],
  stack: [
    { title: "Next.js + TypeScript", text: "Interface, rendering en serverregels · Hosting op Vercel" },
    { title: "Supabase + PostgreSQL", text: "Authenticatie, data, RLS-regels en zoeken" },
    { title: "Cloudflare R2 + Sharp", text: "Privéfoto’s, verwerking en levering van afbeeldingen" },
    { title: "Mercado Pago", text: "Checkout, bevestiging en afstemming van uitlichting" },
    { title: "Resend", text: "Transactionele e-mails en meldingen na publicatie" },
    { title: "Contentful", text: "Redactionele bloginhoud los van het transactionele deel" },
  ],
  closing: "Ontdek Vitale in gebruik.",
};

export const vitaleCases: Record<string, VitaleCase> = { pt, en, fr, nl };
