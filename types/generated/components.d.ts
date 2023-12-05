import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerHeroBannerSection extends Schema.Component {
  collectionName: 'components_banner_hero_banner_sections';
  info: {
    displayName: 'heroBannerSection';
    description: '';
  };
  attributes: {
    bannerTitle: Attribute.String;
    bannerSubText: Attribute.String;
    buttonText: Attribute.String;
    bannerImg: Attribute.Media;
    buttonSvgImg: Attribute.Media;
  };
}

export interface ChallengesWeSolveChallengesWeSolveCards
  extends Schema.Component {
  collectionName: 'components_challenges_we_solve_challenges_we_solve_cards';
  info: {
    displayName: 'challengesWeSolveCards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    logo: Attribute.String;
  };
}

export interface ChallengesWeSolveChallengesWeSolve extends Schema.Component {
  collectionName: 'components_challenges_we_solve_challenges_we_solves';
  info: {
    displayName: 'challengesWeSolve';
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    challengesWeSolveCards: Attribute.Component<
      'challenges-we-solve.challenges-we-solve-cards',
      true
    >;
  };
}

export interface CoditasInMediaCoditasInMediaCards extends Schema.Component {
  collectionName: 'components_coditas_in_media_coditas_in_media_cards';
  info: {
    displayName: 'coditasInMediaCards';
    description: '';
  };
  attributes: {
    idValue: Attribute.String;
    tag: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
    linkText: Attribute.String;
    isExternalLink: Attribute.Boolean & Attribute.DefaultTo<true>;
    image: Attribute.String;
  };
}

export interface CoditasInMediaCoditasInMedia extends Schema.Component {
  collectionName: 'components_coditas_in_media_coditas_in_medias';
  info: {
    displayName: 'Coditas-in-Media';
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    coditasInMediaCards: Attribute.Component<
      'coditas-in-media.coditas-in-media-cards',
      true
    >;
  };
}

export interface DigitallyTransformedDigitallyTransformedImages
  extends Schema.Component {
  collectionName: 'components_digitally_transformed_digitally_transformed_images';
  info: {
    displayName: 'digitallyTransformedImages';
    description: '';
  };
  attributes: {
    customLogoClass: Attribute.String;
    imageSrc: Attribute.Media;
  };
}

export interface DigitallyTransformedDigitallyTransformed
  extends Schema.Component {
  collectionName: 'components_digitally_transformed_digitally_transformeds';
  info: {
    displayName: 'digitallyTransformed';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    digitallyTransformedImages: Attribute.Component<
      'digitally-transformed.digitally-transformed-images',
      true
    >;
  };
}

export interface FormFormFields extends Schema.Component {
  collectionName: 'components_form_form_fields';
  info: {
    displayName: 'formFields';
    description: '';
  };
  attributes: {
    idValue: Attribute.String;
    numberOfColumns: Attribute.String;
    type: Attribute.String;
    label: Attribute.String;
    placeholder: Attribute.String;
    name: Attribute.String;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    maxLength: Attribute.BigInteger &
      Attribute.SetMinMax<{
        max: '1000';
      }> &
      Attribute.DefaultTo<'1000'>;
  };
}

export interface FormSideForm extends Schema.Component {
  collectionName: 'components_form_side_forms';
  info: {
    displayName: 'sideForm';
    description: '';
  };
  attributes: {
    formSideImage: Attribute.String;
    formTitle: Attribute.String;
    formDesc: Attribute.String;
    formContents: Attribute.JSON;
    formFields: Attribute.JSON;
    formFieldData: Attribute.Component<'form.form-fields', true>;
  };
}

export interface FullCaseStudyPageFullCaseStudy extends Schema.Component {
  collectionName: 'components_full_case_study_page_full_case_studies';
  info: {
    displayName: 'fullCaseStudy';
    description: '';
  };
  attributes: {
    overview: Attribute.String;
    overviewDescription: Attribute.String;
    businessChallenge: Attribute.String;
    businessDescriptionArray: Attribute.JSON;
    businessDescription: Attribute.Text;
    ourSolution: Attribute.String;
    ourSolutionDescription: Attribute.Text;
    ourSolutionArray: Attribute.JSON;
    technologies: Attribute.String;
    technologyList: Attribute.JSON;
    showBusinessDescriptionBackground: Attribute.Boolean &
      Attribute.DefaultTo<false>;
  };
}

export interface HeaderHeaderComponent extends Schema.Component {
  collectionName: 'components_header_header_components';
  info: {
    displayName: 'linkComponent';
    description: '';
  };
  attributes: {
    routeName: Attribute.String;
    routeLink: Attribute.String;
    subRoutes: Attribute.Component<'header.header', true>;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    subRouteName: Attribute.String;
    subRouteLink: Attribute.String;
    openInNewTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface HeadingSectionHeading extends Schema.Component {
  collectionName: 'components_heading_section_headings';
  info: {
    displayName: 'sectionHeading';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
  };
}

export interface HiringNowHiringNowCards extends Schema.Component {
  collectionName: 'components_hiring_now_hiring_now_cards';
  info: {
    displayName: 'hiringNowCards';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    count: Attribute.String;
  };
}

export interface HiringNowHiringNow extends Schema.Component {
  collectionName: 'components_hiring_now_hiring_nows';
  info: {
    displayName: 'hiringNow';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    hiringNowCards: Attribute.Component<'hiring-now.hiring-now-cards', true>;
  };
}

export interface HowWeWorkHowWeWorkCards extends Schema.Component {
  collectionName: 'components_how_we_work_how_we_work_cards';
  info: {
    displayName: 'howWeWorkCards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    logo: Attribute.String;
  };
}

export interface HowWeWorkHowWeWork extends Schema.Component {
  collectionName: 'components_how_we_work_how_we_works';
  info: {
    displayName: 'howWeWork';
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    howWeWorkCards: Attribute.Component<'how-we-work.how-we-work-cards', true>;
  };
}

export interface LeadershipLeadershipCards extends Schema.Component {
  collectionName: 'components_leadership_leadership_cards';
  info: {
    displayName: 'leadershipCards';
  };
  attributes: {
    imgSrc: Attribute.Media;
    name: Attribute.String;
    position: Attribute.String;
    about: Attribute.Text;
    desc: Attribute.Text;
  };
}

export interface LeadershipLeadershipSection extends Schema.Component {
  collectionName: 'components_leadership_leadership_sections';
  info: {
    displayName: 'leadership-section';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    leadershipCardsData: Attribute.Component<
      'leadership.leadership-cards',
      true
    >;
  };
}

export interface OpenPositionsOpenPositionList extends Schema.Component {
  collectionName: 'components_open_positions_open_position_lists';
  info: {
    displayName: 'openPositionList';
  };
  attributes: {
    idValue: Attribute.String;
    position: Attribute.String;
    redirectTo: Attribute.String;
  };
}

export interface OpenPositionsOpenPositions extends Schema.Component {
  collectionName: 'components_open_positions_open_positions';
  info: {
    displayName: 'openPositions';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    openPositionsList: Attribute.Component<
      'open-positions.open-position-list',
      true
    >;
  };
}

export interface OurClientsOurClientsImages extends Schema.Component {
  collectionName: 'components_our_clients_our_clients_images';
  info: {
    displayName: 'ourClientsImages';
    description: '';
  };
  attributes: {
    idValue: Attribute.String;
    customLogoClass: Attribute.String;
    imageSrc: Attribute.String;
  };
}

export interface OurClientsOurClients extends Schema.Component {
  collectionName: 'components_our_clients_our_clients';
  info: {
    displayName: 'ourClients';
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    ourClientsImagesList: Attribute.Component<
      'our-clients.our-clients-images',
      true
    >;
  };
}

export interface OurExpertiseOurExpertiseImagesList extends Schema.Component {
  collectionName: 'components_our_expertise_our_expertise_images_lists';
  info: {
    displayName: 'ourExpertiseImagesList';
    description: '';
  };
  attributes: {
    img: Attribute.String;
  };
}

export interface OurExpertiseOurExpertise extends Schema.Component {
  collectionName: 'components_our_expertise_our_expertises';
  info: {
    displayName: 'ourExpertise';
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    ourExpertiseImages: Attribute.Component<
      'our-expertise.our-expertise-images-list',
      true
    >;
  };
}

export interface OurOfficeOurOfficeAddress extends Schema.Component {
  collectionName: 'components_our_office_our_office_addresses';
  info: {
    displayName: 'ourOfficeAddress';
    description: '';
  };
  attributes: {
    location: Attribute.String;
    addresses: Attribute.JSON;
    flagIcon: Attribute.Media;
  };
}

export interface OurOfficeOurOffice extends Schema.Component {
  collectionName: 'components_our_office_our_offices';
  info: {
    displayName: 'ourOffice';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    ourOffice: Attribute.Component<'our-office.our-office-address', true>;
    map: Attribute.Media;
  };
}

export interface OurServiceCardsCards extends Schema.Component {
  collectionName: 'components_our_service_cards_cards';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    desc: Attribute.Text;
    modalData: Attribute.Component<'our-service-cards.modal-data'>;
    icon: Attribute.Media;
  };
}

export interface OurServiceCardsModalData extends Schema.Component {
  collectionName: 'components_our_service_cards_modal_data';
  info: {
    displayName: 'modalData';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    descList: Attribute.JSON;
    icon: Attribute.Media;
  };
}

export interface OurServiceCardsOurServicesSection extends Schema.Component {
  collectionName: 'components_our_service_cards_our_services_sections';
  info: {
    displayName: 'ourServicesSection';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    serviceCards: Attribute.Component<'our-service-cards.cards', true>;
    cardBtnText: Attribute.String;
  };
}

export interface TechnologiesTechnologies extends Schema.Component {
  collectionName: 'components_technologies_technologies';
  info: {
    displayName: 'technologies';
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    technologyImages: Attribute.Component<'technologies.technology-images'>;
  };
}

export interface TechnologiesTechnologyImages extends Schema.Component {
  collectionName: 'components_technologies_technology_images';
  info: {
    displayName: 'technologyImages';
  };
  attributes: {
    angular: Attribute.Media;
    react: Attribute.Media;
    aws: Attribute.Media;
    vue: Attribute.Media;
    java: Attribute.Media;
    dotNet: Attribute.Media;
    nodeJs: Attribute.Media;
    goLang: Attribute.Media;
    gCloud: Attribute.Media;
    azure: Attribute.Media;
    flutter: Attribute.Media;
    android: Attribute.Media;
    apple: Attribute.Media;
    tenMore: Attribute.Media;
  };
}

export interface TestimonyTestimonyData extends Schema.Component {
  collectionName: 'components_testimony_testimony_data';
  info: {
    displayName: 'testimonyData';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    designation: Attribute.String;
    testimony: Attribute.Text;
    profileImg: Attribute.String;
  };
}

export interface TestimonyTestimony extends Schema.Component {
  collectionName: 'components_testimony_testimonies';
  info: {
    displayName: 'testimony';
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    testimonies: Attribute.Component<'testimony.testimony-data', true>;
  };
}

export interface WeAreCertifiedWeAreCertifiedImages extends Schema.Component {
  collectionName: 'components_we_are_certified_we_are_certified_images';
  info: {
    displayName: 'weAreCertifiedImages';
  };
  attributes: {
    src: Attribute.Media;
  };
}

export interface WeAreCertifiedWeAreCertified extends Schema.Component {
  collectionName: 'components_we_are_certified_we_are_certifieds';
  info: {
    displayName: 'weAreCertified';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    images: Attribute.Component<
      'we-are-certified.we-are-certified-images',
      true
    >;
  };
}

export interface WhoAreWeWhoAreWeCards extends Schema.Component {
  collectionName: 'components_who_are_we_who_are_we_cards';
  info: {
    displayName: 'whoAreWeCards';
  };
  attributes: {
    icon: Attribute.Media;
    cardTitle: Attribute.String;
    cardDescription: Attribute.Text;
  };
}

export interface WhoAreWeWhoAreWe extends Schema.Component {
  collectionName: 'components_who_are_we_who_are_wes';
  info: {
    displayName: 'whoAreWe';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    whoAreWeCards: Attribute.Component<'who-are-we.who-are-we-cards', true>;
  };
}

export interface WhyChooseCoditasCards extends Schema.Component {
  collectionName: 'components_why_choose_coditas_cards';
  info: {
    displayName: 'cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    data: Attribute.Text;
    icon: Attribute.String;
  };
}

export interface WhyChooseCoditasWhyChooseCoditas extends Schema.Component {
  collectionName: 'components_why_choose_coditas_why_choose_coditas';
  info: {
    displayName: 'whyChooseCoditas';
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    whyChooseCoditasCards: Attribute.Component<
      'why-choose-coditas.cards',
      true
    >;
  };
}

export interface WhyJoinCoditasWhyJoinCoditasCards extends Schema.Component {
  collectionName: 'components_why_join_coditas_why_join_coditas_cards';
  info: {
    displayName: 'whyJoinCoditasCards';
    description: '';
  };
  attributes: {
    idValue: Attribute.String;
    cardTitle: Attribute.String;
    cardDescription: Attribute.Text;
    icon: Attribute.String;
  };
}

export interface WhyJoinCoditasWhyJoinCoditas extends Schema.Component {
  collectionName: 'components_why_join_coditas_why_join_coditas';
  info: {
    displayName: 'Why-Join-Coditas';
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    whyJoinCoditasCards: Attribute.Component<
      'why-join-coditas.why-join-coditas-cards',
      true
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.hero-banner-section': BannerHeroBannerSection;
      'challenges-we-solve.challenges-we-solve-cards': ChallengesWeSolveChallengesWeSolveCards;
      'challenges-we-solve.challenges-we-solve': ChallengesWeSolveChallengesWeSolve;
      'coditas-in-media.coditas-in-media-cards': CoditasInMediaCoditasInMediaCards;
      'coditas-in-media.coditas-in-media': CoditasInMediaCoditasInMedia;
      'digitally-transformed.digitally-transformed-images': DigitallyTransformedDigitallyTransformedImages;
      'digitally-transformed.digitally-transformed': DigitallyTransformedDigitallyTransformed;
      'form.form-fields': FormFormFields;
      'form.side-form': FormSideForm;
      'full-case-study-page.full-case-study': FullCaseStudyPageFullCaseStudy;
      'header.header-component': HeaderHeaderComponent;
      'header.header': HeaderHeader;
      'heading.section-heading': HeadingSectionHeading;
      'hiring-now.hiring-now-cards': HiringNowHiringNowCards;
      'hiring-now.hiring-now': HiringNowHiringNow;
      'how-we-work.how-we-work-cards': HowWeWorkHowWeWorkCards;
      'how-we-work.how-we-work': HowWeWorkHowWeWork;
      'leadership.leadership-cards': LeadershipLeadershipCards;
      'leadership.leadership-section': LeadershipLeadershipSection;
      'open-positions.open-position-list': OpenPositionsOpenPositionList;
      'open-positions.open-positions': OpenPositionsOpenPositions;
      'our-clients.our-clients-images': OurClientsOurClientsImages;
      'our-clients.our-clients': OurClientsOurClients;
      'our-expertise.our-expertise-images-list': OurExpertiseOurExpertiseImagesList;
      'our-expertise.our-expertise': OurExpertiseOurExpertise;
      'our-office.our-office-address': OurOfficeOurOfficeAddress;
      'our-office.our-office': OurOfficeOurOffice;
      'our-service-cards.cards': OurServiceCardsCards;
      'our-service-cards.modal-data': OurServiceCardsModalData;
      'our-service-cards.our-services-section': OurServiceCardsOurServicesSection;
      'technologies.technologies': TechnologiesTechnologies;
      'technologies.technology-images': TechnologiesTechnologyImages;
      'testimony.testimony-data': TestimonyTestimonyData;
      'testimony.testimony': TestimonyTestimony;
      'we-are-certified.we-are-certified-images': WeAreCertifiedWeAreCertifiedImages;
      'we-are-certified.we-are-certified': WeAreCertifiedWeAreCertified;
      'who-are-we.who-are-we-cards': WhoAreWeWhoAreWeCards;
      'who-are-we.who-are-we': WhoAreWeWhoAreWe;
      'why-choose-coditas.cards': WhyChooseCoditasCards;
      'why-choose-coditas.why-choose-coditas': WhyChooseCoditasWhyChooseCoditas;
      'why-join-coditas.why-join-coditas-cards': WhyJoinCoditasWhyJoinCoditasCards;
      'why-join-coditas.why-join-coditas': WhyJoinCoditasWhyJoinCoditas;
    }
  }
}
