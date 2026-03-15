import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturesLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_features_lead_forms';
  info: {
    displayName: 'LeadForm';
    icon: 'alien';
  };
  attributes: {};
}

export interface FeaturesQuiz extends Struct.ComponentSchema {
  collectionName: 'components_features_quizzes';
  info: {
    displayName: 'Quiz';
    icon: 'alien';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface WidgetsBlogArticle extends Struct.ComponentSchema {
  collectionName: 'components_widgets_blog_articles';
  info: {
    displayName: 'BlogArticle';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsBlogArticlesDirectory extends Struct.ComponentSchema {
  collectionName: 'components_widgets_blog_articles_directories';
  info: {
    displayName: 'BlogArticlesDirectory';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsBlogHero extends Struct.ComponentSchema {
  collectionName: 'components_widgets_blog_heroes';
  info: {
    displayName: 'BlogHero';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsBlogPosts extends Struct.ComponentSchema {
  collectionName: 'components_widgets_blog_posts';
  info: {
    displayName: 'BlogPosts';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsBusinessProblems extends Struct.ComponentSchema {
  collectionName: 'components_widgets_business_problems';
  info: {
    displayName: 'BusinessProblems';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_widgets_call_to_actions';
  info: {
    displayName: 'CallToAction';
  };
  attributes: {};
}

export interface WidgetsCallToActionQuestion extends Struct.ComponentSchema {
  collectionName: 'components_widgets_call_to_action_questions';
  info: {
    displayName: 'CallToActionQuestion';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsCallToActionTestimonials
  extends Struct.ComponentSchema {
  collectionName: 'components_widgets_call_to_action_testimonials';
  info: {
    displayName: 'CallToActionTestimonials';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsCertifiedItCompany extends Struct.ComponentSchema {
  collectionName: 'components_widgets_certified_it_companies';
  info: {
    displayName: 'CertifiedITCompany';
  };
  attributes: {};
}

export interface WidgetsConsent extends Struct.ComponentSchema {
  collectionName: 'components_widgets_consents';
  info: {
    displayName: 'Consent';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsContact extends Struct.ComponentSchema {
  collectionName: 'components_widgets_contacts';
  info: {
    displayName: 'Contact';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsFaQ extends Struct.ComponentSchema {
  collectionName: 'components_widgets_fa_qs';
  info: {
    displayName: 'FaQ';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_heroes';
  info: {
    displayName: 'HomeHero';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsHowAreWeDifferent extends Struct.ComponentSchema {
  collectionName: 'components_widgets_how_are_we_differents';
  info: {
    displayName: 'HowAreWeDifferent';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsHowSystemLooks extends Struct.ComponentSchema {
  collectionName: 'components_widgets_how_system_looks';
  info: {
    displayName: 'HowSystemLooks';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsHowWeWork extends Struct.ComponentSchema {
  collectionName: 'components_widgets_how_we_works';
  info: {
    displayName: 'HowWeWork';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsIntegrationProcess extends Struct.ComponentSchema {
  collectionName: 'components_widgets_integration_processes';
  info: {
    displayName: 'IntegrationProcess';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsLeadFormSection extends Struct.ComponentSchema {
  collectionName: 'components_widgets_lead_form_sections';
  info: {
    displayName: 'LeadFormSection';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsMeetTheTeam extends Struct.ComponentSchema {
  collectionName: 'components_widgets_meet_the_teams';
  info: {
    displayName: 'MeetTheTeam';
  };
  attributes: {};
}

export interface WidgetsMoreServices extends Struct.ComponentSchema {
  collectionName: 'components_widgets_more_services';
  info: {
    displayName: 'MoreServices';
  };
  attributes: {};
}

export interface WidgetsOurApproach extends Struct.ComponentSchema {
  collectionName: 'components_widgets_our_approaches';
  info: {
    displayName: 'OurApproach';
  };
  attributes: {};
}

export interface WidgetsPrimaryHero extends Struct.ComponentSchema {
  collectionName: 'components_widgets_primary_heroes';
  info: {
    displayName: 'PrimaryHero';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u043E\u0437\u0434\u0430\u0451\u043C ERP, CRM, AI-\u0430\u0433\u0435\u043D\u0442\u043E\u0432 \u0438 Telegram Mini Apps. \u0411\u0435\u0437 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434 \u0432\u0430\u0448\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B. \u0421 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0440\u0435\u0448\u0430\u0435\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430'>;
  };
}

export interface WidgetsPrivacy extends Struct.ComponentSchema {
  collectionName: 'components_widgets_privacies';
  info: {
    displayName: 'Privacy';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsProjects extends Struct.ComponentSchema {
  collectionName: 'components_widgets_projects';
  info: {
    displayName: 'Projects';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsReviews extends Struct.ComponentSchema {
  collectionName: 'components_widgets_reviews';
  info: {
    displayName: 'Reviews';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsSectionHeroAiAgents extends Struct.ComponentSchema {
  collectionName: 'components_widgets_section_hero_ai_agents';
  info: {
    displayName: 'SectionHeroAIAgents';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsSectionHeroCrmAutomation
  extends Struct.ComponentSchema {
  collectionName: 'components_widgets_section_hero_crm_automations';
  info: {
    displayName: 'SectionHeroCRMAutomation';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsSectionHeroCustomErp extends Struct.ComponentSchema {
  collectionName: 'components_widgets_section_hero_custom_erps';
  info: {
    displayName: 'SectionHeroCustomERP';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsSectionHeroWebPlatforms extends Struct.ComponentSchema {
  collectionName: 'components_widgets_section_hero_web_platforms';
  info: {
    displayName: 'SectionHeroWebPlatforms';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsServiceHeroMessengerApps
  extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service_hero_messenger_apps';
  info: {
    displayName: 'ServiceHeroMessengerApps';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsServiceHeroMobileApps extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service_hero_mobile_apps';
  info: {
    displayName: 'ServiceHeroMobileApps';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsServiceProducts extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service_products';
  info: {
    displayName: 'ServiceProducts';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsServiceTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service_testimonials';
  info: {
    displayName: 'ServiceTestimonials';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsServices extends Struct.ComponentSchema {
  collectionName: 'components_widgets_services';
  info: {
    displayName: 'Services';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsServicesDirectory extends Struct.ComponentSchema {
  collectionName: 'components_widgets_services_directories';
  info: {
    displayName: 'ServicesDirectory';
  };
  attributes: {};
}

export interface WidgetsTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_widgets_technologies';
  info: {
    displayName: 'Technologies';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsTerms extends Struct.ComponentSchema {
  collectionName: 'components_widgets_terms';
  info: {
    displayName: 'Terms';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsTrustedBy extends Struct.ComponentSchema {
  collectionName: 'components_widgets_trusted_bies';
  info: {
    displayName: 'TrustedBy';
    icon: 'alien';
  };
  attributes: {};
}

export interface WidgetsWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_widgets_who_we_ares';
  info: {
    displayName: 'WhoWeAre';
  };
  attributes: {};
}

export interface WidgetsWhyWorkWithUs extends Struct.ComponentSchema {
  collectionName: 'components_widgets_why_work_withuses';
  info: {
    displayName: 'WhyWorkWithUs';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.lead-form': FeaturesLeadForm;
      'features.quiz': FeaturesQuiz;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'widgets.blog-article': WidgetsBlogArticle;
      'widgets.blog-articles-directory': WidgetsBlogArticlesDirectory;
      'widgets.blog-hero': WidgetsBlogHero;
      'widgets.blog-posts': WidgetsBlogPosts;
      'widgets.business-problems': WidgetsBusinessProblems;
      'widgets.call-to-action': WidgetsCallToAction;
      'widgets.call-to-action-question': WidgetsCallToActionQuestion;
      'widgets.call-to-action-testimonials': WidgetsCallToActionTestimonials;
      'widgets.certified-it-company': WidgetsCertifiedItCompany;
      'widgets.consent': WidgetsConsent;
      'widgets.contact': WidgetsContact;
      'widgets.fa-q': WidgetsFaQ;
      'widgets.home-hero': WidgetsHomeHero;
      'widgets.how-are-we-different': WidgetsHowAreWeDifferent;
      'widgets.how-system-looks': WidgetsHowSystemLooks;
      'widgets.how-we-work': WidgetsHowWeWork;
      'widgets.integration-process': WidgetsIntegrationProcess;
      'widgets.lead-form-section': WidgetsLeadFormSection;
      'widgets.meet-the-team': WidgetsMeetTheTeam;
      'widgets.more-services': WidgetsMoreServices;
      'widgets.our-approach': WidgetsOurApproach;
      'widgets.primary-hero': WidgetsPrimaryHero;
      'widgets.privacy': WidgetsPrivacy;
      'widgets.projects': WidgetsProjects;
      'widgets.reviews': WidgetsReviews;
      'widgets.section-hero-ai-agents': WidgetsSectionHeroAiAgents;
      'widgets.section-hero-crm-automation': WidgetsSectionHeroCrmAutomation;
      'widgets.section-hero-custom-erp': WidgetsSectionHeroCustomErp;
      'widgets.section-hero-web-platforms': WidgetsSectionHeroWebPlatforms;
      'widgets.service-hero-messenger-apps': WidgetsServiceHeroMessengerApps;
      'widgets.service-hero-mobile-apps': WidgetsServiceHeroMobileApps;
      'widgets.service-products': WidgetsServiceProducts;
      'widgets.service-testimonials': WidgetsServiceTestimonials;
      'widgets.services': WidgetsServices;
      'widgets.services-directory': WidgetsServicesDirectory;
      'widgets.technologies': WidgetsTechnologies;
      'widgets.terms': WidgetsTerms;
      'widgets.trusted-by': WidgetsTrustedBy;
      'widgets.who-we-are': WidgetsWhoWeAre;
      'widgets.why-work-with-us': WidgetsWhyWorkWithUs;
    }
  }
}
