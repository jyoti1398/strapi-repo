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
    typistText: Attribute.Component<'banner.typist-text'>;
  };
}

export interface BannerTypistText extends Schema.Component {
  collectionName: 'components_banner_typist_texts';
  info: {
    displayName: 'typistText';
  };
  attributes: {
    digitalEngineering: Attribute.String;
    cleanCoding: Attribute.String;
    designThinking: Attribute.String;
    dataScience: Attribute.String;
    qualityTesting: Attribute.String;
    generativeAI: Attribute.String;
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
    logo: Attribute.Media;
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
    tag: Attribute.String & Attribute.DefaultTo<'null'>;
    description: Attribute.Text;
    link: Attribute.String;
    linkText: Attribute.String & Attribute.DefaultTo<'Read now'>;
    isExternalLink: Attribute.Boolean & Attribute.DefaultTo<true>;
    image: Attribute.Media;
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

export interface CommonSvgsCommonSvgsData extends Schema.Component {
  collectionName: 'components_common_svgs_common_svgs_data';
  info: {
    displayName: 'commonSvgsData';
  };
  attributes: {
    label: Attribute.String;
    value: Attribute.Media;
  };
}

export interface CommonSvgsCommonSvgs extends Schema.Component {
  collectionName: 'components_common_svgs_common_svgs';
  info: {
    displayName: 'commonSvgs';
    description: '';
  };
  attributes: {
    svgs: Attribute.Component<'common-svgs.common-svgs-data', true>;
  };
}

export interface ComplianceComplianceData extends Schema.Component {
  collectionName: 'components_compliance_compliance_data';
  info: {
    displayName: 'complianceData';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComplianceCompliance extends Schema.Component {
  collectionName: 'components_compliance_compliances';
  info: {
    displayName: 'compliance';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    compliance: Attribute.Component<'compliance.compliance-data', true>;
  };
}

export interface ContactUsFormContactUsForm extends Schema.Component {
  collectionName: 'components_contact_us_form_contact_us_forms';
  info: {
    displayName: 'contactUsForm';
  };
  attributes: {
    name: Attribute.String;
    namePlaceholder: Attribute.String;
    mobile: Attribute.String;
    mobilePlaceholder: Attribute.String;
    email: Attribute.String;
    emailPlaceholder: Attribute.String;
    enquiry: Attribute.String;
    enquiryPlaceholder: Attribute.String;
    message: Attribute.String;
    messageplaceholder: Attribute.String;
  };
}

export interface DevopsBannerLogosDevopsBannerLogoImg extends Schema.Component {
  collectionName: 'components_devops_banner_logos_devops_banner_logo_imgs';
  info: {
    displayName: 'devopsBannerLogoImg';
    description: '';
  };
  attributes: {
    altText: Attribute.String;
    imgSrc: Attribute.Media;
  };
}

export interface DevopsBannerLogosDevopsBannerLogos extends Schema.Component {
  collectionName: 'components_devops_banner_logos_devops_banner_logos';
  info: {
    displayName: 'devopsBannerLogos';
  };
  attributes: {
    title: Attribute.String;
    devopsBannerLogos: Attribute.Component<
      'devops-banner-logos.devops-banner-logo-img',
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

export interface FormContentsFormContents extends Schema.Component {
  collectionName: 'components_form_contents_form_contents';
  info: {
    displayName: 'formContents';
    description: '';
  };
  attributes: {
    submit: Attribute.String & Attribute.DefaultTo<'Submit'>;
    captcha: Attribute.String & Attribute.DefaultTo<'I\u2019m not a robot'>;
    disabledCheckbox: Attribute.Media;
    enabledCheckbox: Attribute.Media;
    step1: Attribute.String & Attribute.DefaultTo<'Basic Details'>;
    step2: Attribute.String & Attribute.DefaultTo<'Work Details'>;
    nextBtn: Attribute.String & Attribute.DefaultTo<'Next'>;
    backBtn: Attribute.String & Attribute.DefaultTo<'Back'>;
  };
}

export interface FormFormFields extends Schema.Component {
  collectionName: 'components_form_form_fields';
  info: {
    displayName: 'formFields';
    description: '';
  };
  attributes: {
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
    options: Attribute.JSON;
  };
}

export interface FormSideForm extends Schema.Component {
  collectionName: 'components_form_side_forms';
  info: {
    displayName: 'sideForm';
    description: '';
  };
  attributes: {
    formTitle: Attribute.String;
    formDesc: Attribute.String;
    formFieldData: Attribute.Component<'form.form-fields', true>;
    formSideImage: Attribute.Media;
    contents: Attribute.Component<'form-contents.form-contents'>;
  };
}

export interface FullCaseStudyPageBreadcrumbs extends Schema.Component {
  collectionName: 'components_full_case_study_page_breadcrumbs';
  info: {
    displayName: 'breadcrumbs';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface FullCaseStudyPageDescriptionList extends Schema.Component {
  collectionName: 'components_full_case_study_page_description_lists';
  info: {
    displayName: 'descriptionList';
    description: '';
  };
  attributes: {
    desc: Attribute.Text;
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
    businessDescription: Attribute.Text;
    ourSolution: Attribute.String;
    ourSolutionDescription: Attribute.Text;
    technologies: Attribute.String;
    showBusinessDescriptionBackground: Attribute.Boolean &
      Attribute.DefaultTo<false>;
    businessDescriptionArr: Attribute.Component<
      'full-case-study-page.description-list',
      true
    >;
    ourSolutionAr: Attribute.Component<
      'full-case-study-page.description-list',
      true
    >;
    technologyListArr: Attribute.Component<
      'full-case-study-page.description-list',
      true
    >;
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
    logo: Attribute.Media;
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

export interface JobDescriptionBreadcrumbLabels extends Schema.Component {
  collectionName: 'components_job_description_breadcrumb_labels';
  info: {
    displayName: 'breadcrumbLabels';
  };
  attributes: {
    careers: Attribute.String;
    openPosition: Attribute.String;
    bussinessFunc: Attribute.String;
  };
}

export interface JobDescriptionJobDescData extends Schema.Component {
  collectionName: 'components_job_description_job_desc_data';
  info: {
    displayName: 'jobDescData';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.String;
    img: Attribute.Media;
  };
}

export interface JobDescriptionJobDescPage extends Schema.Component {
  collectionName: 'components_job_description_job_desc_pages';
  info: {
    displayName: 'jobDescPage';
    description: '';
  };
  attributes: {
    jobDescriptionLabels: Attribute.Component<'job-description.job-description-labels'>;
    jobDescriptionIcons: Attribute.Component<'job-description.job-description-icons'>;
    breadcrumbLabels: Attribute.Component<'job-description.breadcrumb-labels'>;
    routes: Attribute.Component<'job-description.routes'>;
    supportingText: Attribute.Component<'job-description.supporting-text'>;
  };
}

export interface JobDescriptionJobDescriptionIcons extends Schema.Component {
  collectionName: 'components_job_description_job_description_icons';
  info: {
    displayName: 'jobDescriptionIcons';
  };
  attributes: {
    location: Attribute.Media;
    jobType: Attribute.Media;
    jobDepartment: Attribute.Media;
    experience: Attribute.Media;
  };
}

export interface JobDescriptionJobDescriptionLabels extends Schema.Component {
  collectionName: 'components_job_description_job_description_labels';
  info: {
    displayName: 'jobDescriptionLabels';
  };
  attributes: {
    jDContainerTitle: Attribute.String;
    rolesAndResponsibilitiesTitle: Attribute.String;
    minExperienceTitle: Attribute.String;
    technicalSkillsTitle: Attribute.String;
    youShouldHaveTitle: Attribute.String;
    locationTitle: Attribute.String;
    jobTypeTitle: Attribute.String;
    departmentTitle: Attribute.String;
    applyNow: Attribute.String;
  };
}

export interface JobDescriptionJobDescription extends Schema.Component {
  collectionName: 'components_job_description_job_descriptions';
  info: {
    displayName: 'jobDescription';
    description: '';
  };
  attributes: {
    jobDescriptionBanner: Attribute.Media;
  };
}

export interface JobDescriptionRoutes extends Schema.Component {
  collectionName: 'components_job_description_routes';
  info: {
    displayName: 'routes';
  };
  attributes: {
    careeers: Attribute.String;
    domain: Attribute.String;
    openings: Attribute.String;
    formRoute: Attribute.String;
    jobDescription: Attribute.String;
  };
}

export interface JobDescriptionSupportingText extends Schema.Component {
  collectionName: 'components_job_description_supporting_texts';
  info: {
    displayName: 'supportingText';
  };
  attributes: {
    hiringText: Attribute.String;
    opening: Attribute.String;
    openings: Attribute.String;
    viewOpenings: Attribute.String;
    search: Attribute.String;
    applyForPosition: Attribute.String;
    applyDirectly: Attribute.String;
    viewDetails: Attribute.String;
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

export interface LifeAtCoditasDescList extends Schema.Component {
  collectionName: 'components_life_at_coditas_desc_lists';
  info: {
    displayName: 'descList';
  };
  attributes: {
    desc: Attribute.Text;
  };
}

export interface LifeAtCoditasLifeAtCoditas extends Schema.Component {
  collectionName: 'components_life_at_coditas_life_at_coditas';
  info: {
    displayName: 'lifeAtCoditas';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    coverImg: Attribute.Media;
    descList: Attribute.Component<'life-at-coditas.desc-list', true>;
  };
}

export interface MappedSvgMappedDataSvg extends Schema.Component {
  collectionName: 'components_mapped_svg_mapped_data_svgs';
  info: {
    displayName: 'mappedDataSvg';
  };
  attributes: {
    label: Attribute.String;
    value: Attribute.String;
  };
}

export interface MappedSvgMappedSvg extends Schema.Component {
  collectionName: 'components_mapped_svg_mapped_svgs';
  info: {
    displayName: 'mappedSvg';
    description: '';
  };
  attributes: {
    mappedData: Attribute.Component<'mapped-svg.mapped-data-svg', true>;
  };
}

export interface NoResultsFoundNoResultsFound extends Schema.Component {
  collectionName: 'components_no_results_found_no_results_founds';
  info: {
    displayName: 'noResultsFound';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    emptyPage: Attribute.Media;
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
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    openPositionsList: Attribute.Component<
      'open-positions.open-position-list',
      true
    >;
    openPositions: Attribute.Media;
  };
}

export interface OurClientsOurClientsImages extends Schema.Component {
  collectionName: 'components_our_clients_our_clients_images';
  info: {
    displayName: 'ourClientsImages';
    description: '';
  };
  attributes: {
    customLogoClass: Attribute.String;
    imageSrc: Attribute.Media;
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
    img: Attribute.Media;
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
    link: Attribute.String & Attribute.DefaultTo<'/'>;
    desc: Attribute.Text;
    modalData: Attribute.Component<'our-service-cards.modal-data'>;
    icon: Attribute.Media;
    showBullets: Attribute.Boolean & Attribute.DefaultTo<false>;
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
    descLists: Attribute.Component<'why-join-coditas.desc-list', true>;
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

export interface OurWorkOurWorkCard extends Schema.Component {
  collectionName: 'components_our_work_our_work_cards';
  info: {
    displayName: 'ourWorkCard';
  };
  attributes: {
    amount: Attribute.String;
    title: Attribute.String;
    desc: Attribute.String;
    routeTo: Attribute.String;
    arrowSvg: Attribute.Media;
  };
}

export interface OurWorkOurWork extends Schema.Component {
  collectionName: 'components_our_work_our_works';
  info: {
    displayName: 'ourWork';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    ourWorkCards: Attribute.Component<'our-work.our-work-card'>;
  };
}

export interface PrivacyPolicyList extends Schema.Component {
  collectionName: 'components_privacy_policy_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    desc: Attribute.Text;
  };
}

export interface PrivacyPolicyPrivacyPolicyData extends Schema.Component {
  collectionName: 'components_privacy_policy_privacy_policy_data';
  info: {
    displayName: 'privacyPolicyData';
    description: '';
  };
  attributes: {
    privacyPolicy: Attribute.Component<'privacy-policy.privacy-policy', true>;
  };
}

export interface PrivacyPolicyPrivacyPolicy extends Schema.Component {
  collectionName: 'components_privacy_policy_privacy_policies';
  info: {
    displayName: 'privacyPolicy';
  };
  attributes: {
    title: Attribute.String;
    descriptions: Attribute.Component<'privacy-policy.list', true>;
    listItems: Attribute.Component<'privacy-policy.list', true>;
  };
}

export interface StepperFormStepperFormData extends Schema.Component {
  collectionName: 'components_stepper_form_stepper_form_data';
  info: {
    displayName: 'stepperFormData';
    description: '';
  };
  attributes: {
    type: Attribute.String & Attribute.DefaultTo<'text'>;
    label: Attribute.String;
    placeholder: Attribute.String;
    name: Attribute.String;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface StepperFormStepperForm extends Schema.Component {
  collectionName: 'components_stepper_form_stepper_forms';
  info: {
    displayName: 'stepperForm';
    description: '';
  };
  attributes: {
    stepperFormField: Attribute.Component<
      'stepper-form.stepper-form-data',
      true
    >;
    title: Attribute.String;
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
    profileImg: Attribute.Media;
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
    description: '';
  };
  attributes: {
    badge: Attribute.Media;
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

export interface WhoAreWeDescriptionList extends Schema.Component {
  collectionName: 'components_who_are_we_description_lists';
  info: {
    displayName: 'descriptionList';
  };
  attributes: {
    desc: Attribute.Text;
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
    description: '';
  };
  attributes: {
    headerDetails: Attribute.Component<'heading.section-heading'>;
    whoAreWeCards: Attribute.Component<'who-are-we.who-are-we-cards', true>;
    descList: Attribute.Component<'who-are-we.description-list', true>;
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
    icon: Attribute.Media;
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

export interface WhyJoinCoditasDescList extends Schema.Component {
  collectionName: 'components_why_join_coditas_desc_lists';
  info: {
    displayName: 'descList';
  };
  attributes: {
    desc: Attribute.Text;
  };
}

export interface WhyJoinCoditasWhyJoinCoditasCards extends Schema.Component {
  collectionName: 'components_why_join_coditas_why_join_coditas_cards';
  info: {
    displayName: 'whyJoinCoditasCards';
    description: '';
  };
  attributes: {
    cardTitle: Attribute.String;
    cardDescription: Attribute.Text;
    icon: Attribute.Media;
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
    descList: Attribute.Component<'why-join-coditas.desc-list', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.hero-banner-section': BannerHeroBannerSection;
      'banner.typist-text': BannerTypistText;
      'challenges-we-solve.challenges-we-solve-cards': ChallengesWeSolveChallengesWeSolveCards;
      'challenges-we-solve.challenges-we-solve': ChallengesWeSolveChallengesWeSolve;
      'coditas-in-media.coditas-in-media-cards': CoditasInMediaCoditasInMediaCards;
      'coditas-in-media.coditas-in-media': CoditasInMediaCoditasInMedia;
      'common-svgs.common-svgs-data': CommonSvgsCommonSvgsData;
      'common-svgs.common-svgs': CommonSvgsCommonSvgs;
      'compliance.compliance-data': ComplianceComplianceData;
      'compliance.compliance': ComplianceCompliance;
      'contact-us-form.contact-us-form': ContactUsFormContactUsForm;
      'devops-banner-logos.devops-banner-logo-img': DevopsBannerLogosDevopsBannerLogoImg;
      'devops-banner-logos.devops-banner-logos': DevopsBannerLogosDevopsBannerLogos;
      'digitally-transformed.digitally-transformed-images': DigitallyTransformedDigitallyTransformedImages;
      'digitally-transformed.digitally-transformed': DigitallyTransformedDigitallyTransformed;
      'form-contents.form-contents': FormContentsFormContents;
      'form.form-fields': FormFormFields;
      'form.side-form': FormSideForm;
      'full-case-study-page.breadcrumbs': FullCaseStudyPageBreadcrumbs;
      'full-case-study-page.description-list': FullCaseStudyPageDescriptionList;
      'full-case-study-page.full-case-study': FullCaseStudyPageFullCaseStudy;
      'header.header-component': HeaderHeaderComponent;
      'header.header': HeaderHeader;
      'heading.section-heading': HeadingSectionHeading;
      'hiring-now.hiring-now-cards': HiringNowHiringNowCards;
      'hiring-now.hiring-now': HiringNowHiringNow;
      'how-we-work.how-we-work-cards': HowWeWorkHowWeWorkCards;
      'how-we-work.how-we-work': HowWeWorkHowWeWork;
      'job-description.breadcrumb-labels': JobDescriptionBreadcrumbLabels;
      'job-description.job-desc-data': JobDescriptionJobDescData;
      'job-description.job-desc-page': JobDescriptionJobDescPage;
      'job-description.job-description-icons': JobDescriptionJobDescriptionIcons;
      'job-description.job-description-labels': JobDescriptionJobDescriptionLabels;
      'job-description.job-description': JobDescriptionJobDescription;
      'job-description.routes': JobDescriptionRoutes;
      'job-description.supporting-text': JobDescriptionSupportingText;
      'leadership.leadership-cards': LeadershipLeadershipCards;
      'leadership.leadership-section': LeadershipLeadershipSection;
      'life-at-coditas.desc-list': LifeAtCoditasDescList;
      'life-at-coditas.life-at-coditas': LifeAtCoditasLifeAtCoditas;
      'mapped-svg.mapped-data-svg': MappedSvgMappedDataSvg;
      'mapped-svg.mapped-svg': MappedSvgMappedSvg;
      'no-results-found.no-results-found': NoResultsFoundNoResultsFound;
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
      'our-work.our-work-card': OurWorkOurWorkCard;
      'our-work.our-work': OurWorkOurWork;
      'privacy-policy.list': PrivacyPolicyList;
      'privacy-policy.privacy-policy-data': PrivacyPolicyPrivacyPolicyData;
      'privacy-policy.privacy-policy': PrivacyPolicyPrivacyPolicy;
      'stepper-form.stepper-form-data': StepperFormStepperFormData;
      'stepper-form.stepper-form': StepperFormStepperForm;
      'technologies.technologies': TechnologiesTechnologies;
      'technologies.technology-images': TechnologiesTechnologyImages;
      'testimony.testimony-data': TestimonyTestimonyData;
      'testimony.testimony': TestimonyTestimony;
      'we-are-certified.we-are-certified-images': WeAreCertifiedWeAreCertifiedImages;
      'we-are-certified.we-are-certified': WeAreCertifiedWeAreCertified;
      'who-are-we.description-list': WhoAreWeDescriptionList;
      'who-are-we.who-are-we-cards': WhoAreWeWhoAreWeCards;
      'who-are-we.who-are-we': WhoAreWeWhoAreWe;
      'why-choose-coditas.cards': WhyChooseCoditasCards;
      'why-choose-coditas.why-choose-coditas': WhyChooseCoditasWhyChooseCoditas;
      'why-join-coditas.desc-list': WhyJoinCoditasDescList;
      'why-join-coditas.why-join-coditas-cards': WhyJoinCoditasWhyJoinCoditasCards;
      'why-join-coditas.why-join-coditas': WhyJoinCoditasWhyJoinCoditas;
    }
  }
}
