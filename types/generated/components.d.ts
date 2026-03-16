import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturesLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_features_lead_forms';
  info: {
    displayName: 'LeadForm';
    icon: 'alien';
  };
  attributes: {
    form: Schema.Attribute.Relation<'oneToOne', 'api::form.form'>;
  };
}

export interface FeaturesQuiz extends Struct.ComponentSchema {
  collectionName: 'components_features_quizzes';
  info: {
    displayName: 'Quiz';
    icon: 'alien';
  };
  attributes: {};
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'alien';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F'>;
  };
}

export interface SharedHowSystemLooksItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_system_looks_items';
  info: {
    displayName: 'HowSystemLooksItem';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u043E\u0437\u0434\u0430\u0451\u043C \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0436\u0438\u0437\u043D\u0435\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442. \u0418\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043C \u0441 Telegram Bot API. \u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u043C \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B'>;
    icon: Schema.Attribute.Component<'shared.media', false>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0412 \u0440\u0430\u0431\u043E\u0442\u0435'>;
    progressPercent: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<70>;
    timeframe: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0435\u0434\u0435\u043B\u044F 4-5'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 MVP'>;
  };
}

export interface SharedInput extends Struct.ComponentSchema {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'input';
    icon: 'alien';
  };
  attributes: {
    placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'@username \u0438\u043B\u0438 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430'>;
  };
}

export interface SharedIntegrationProcessItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_integration_process_items';
  info: {
    displayName: 'IntegrationProcessItem';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0413\u043E\u0442\u043E\u0432\u0438\u043C \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0438 \u0441\u0445\u0435\u043C\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u0412\u044B \u0432\u0438\u0434\u0438\u0442\u0435 \u0438 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0434\u043E \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u043C\u044B \u043D\u0430\u043F\u0438\u0448\u0435\u043C \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u043A\u043E\u0434\u0430.'>;
    image: Schema.Attribute.Component<'shared.media', false>;
    step: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C, \u043A\u0430\u043A \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'alien';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/lead'>;
    primary: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    height: Schema.Attribute.Integer & Schema.Attribute.Required;
    width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SharedRobots extends Struct.ComponentSchema {
  collectionName: 'components_shared_robots';
  info: {
    displayName: 'robots';
  };
  attributes: {
    follow: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    index: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    indexifembedded: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    maxImagePreview: Schema.Attribute.Enumeration<
      ['large', 'none', 'standard']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'large'>;
    noarchive: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    nocache: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    noimageindex: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    nositelinkssearchbox: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    nosnippet: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    notranslate: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
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
    appleIcon: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.Required;
    applicationName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'northcode.ru'>;
    archives: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/archives'>;
    assets: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/assets'>;
    bookmarks: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/bookmarks'>;
    category: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0435\u0431-\u0441\u0438\u0441\u0442\u0435\u043C'>;
    classification: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 IT-\u0443\u0441\u043B\u0443\u0433\u0438'>;
    creator: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041E\u0440\u043B\u043E\u0432 \u0418\u043B\u044C\u044F \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432\u0438\u0447 (novailoveyou)'>;
    generator: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Next.js'>;
    icon: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.Required;
    manifest: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/manifest.webmanifest'>;
    metaAuthor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041E\u0440\u043B\u043E\u0432 \u0418\u043B\u044C\u044F \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432\u0438\u0447 (novailoveyou)'>;
    metadataBase: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C ERP, CRM, \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u0442\u0430\u043B\u044B \u0438 Telegram Mini Apps \u043F\u043E\u0434 \u043A\u043B\u044E\u0447. \u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 1\u0421, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u0442\u0435\u0445\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 24/7. \u0410\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044F \u041C\u0438\u043D\u0446\u0438\u0444\u0440\u044B \u0420\u0424. \u041F\u0435\u0440\u0432\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u2014 \u0447\u0435\u0440\u0435\u0437 2 \u043D\u0435\u0434\u0435\u043B\u0438.'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'NorthCode \u2014 \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0435\u0431-\u0441\u0438\u0441\u0442\u0435\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u043A\u0443\u043F\u0430\u044E\u0442\u0441\u044F'>;
    publisher: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Vercel'>;
    referrer: Schema.Attribute.Enumeration<
      [
        'no-referrer',
        'no-referrer-when-downgrade',
        'origin',
        'origin-when-cross-origin',
        'same-origin',
        'strict-origin',
        'strict-origin-when-cross-origin',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'origin-when-cross-origin'>;
    robots: Schema.Attribute.Component<'shared.robots', false> &
      Schema.Attribute.Required;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'TeamMember';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041C\u0438\u0433\u0440\u0430\u0446\u0438\u044F \u0441 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043D\u0430 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E ERP \u0437\u0430 3 \u043C\u0435\u0441\u044F\u0446\u0430. \u0411\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u041E\u0431\u0443\u0447\u0438\u043B\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E \u0443\u0436\u0435 \u0433\u043E\u0434. '>;
    image: Schema.Attribute.Component<'shared.media', false>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u0435\u0440\u0433\u0435\u0439 \u041B\u0435\u0431\u0435\u0434\u0435\u0432'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440, \u0442\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u0441\u0435\u0442\u044C'>;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u0440\u043E\u0435\u043A\u0442\u043E\u0432'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'70+'>;
  };
}

export interface SharedTestimonialWithMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_with_medias';
  info: {
    displayName: 'testimonialWithMedia';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041C\u044B \u043D\u0435 \u0434\u0435\u043B\u0430\u0435\u043C \u00AB\u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u0441\u0430\u0439\u0442\u00BB. \u041C\u044B \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C \u0446\u0438\u0444\u0440\u043E\u0432\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443: \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B, \u0440\u043E\u043B\u0438, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0443. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u2014 \u044D\u0442\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430, \u0430 \u043D\u0435 \u0432\u0438\u0442\u0440\u0438\u043D\u0430.'>;
    icon: Schema.Attribute.Component<'shared.media', false>;
    image: Schema.Attribute.Component<'shared.media', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0443, \u0430 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441'>;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'text';
    icon: 'alien';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WidgetsBlogArticle extends Struct.ComponentSchema {
  collectionName: 'components_widgets_blog_articles';
  info: {
    displayName: 'BlogArticle';
    icon: 'book';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface WidgetsBlogPosts extends Struct.ComponentSchema {
  collectionName: 'components_widgets_blog_posts';
  info: {
    displayName: 'BlogPosts';
    icon: 'book';
  };
  attributes: {
    blogArticles: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-article.blog-article'
    >;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0414\u0435\u043B\u0438\u043C\u0441\u044F \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438\u0437 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432: \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u043F\u043E\u0434\u0445\u043E\u0434\u044B, \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0438 \u043E\u043F\u044B\u0442'>;
  };
}

export interface WidgetsBusinessProblems extends Struct.ComponentSchema {
  collectionName: 'components_widgets_business_problems';
  info: {
    displayName: 'BusinessProblems';
    icon: 'rocket';
  };
  attributes: {
    graphValue: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<280>;
    testimonials: Schema.Attribute.Component<'shared.testimonial', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u0430\u0441\u0448\u0438\u0440\u044F\u0435\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432\u043D\u0443\u0442\u0440\u0438 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430. \u041E\u043F\u043B\u0430\u0442\u044B, \u0437\u0430\u043A\u0430\u0437\u044B, \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u2014 \u0432\u0441\u0451 \u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438'>;
    titleHighlight: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Telegram Mini Apps \u043F\u043E\u0434 \u043A\u043B\u044E\u0447'>;
  };
}

export interface WidgetsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_widgets_call_to_actions';
  info: {
    displayName: 'CallToAction';
    icon: 'alien';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    input: Schema.Attribute.Component<'shared.input', false> &
      Schema.Attribute.Required;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u2014 \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15-\u0438 \u043C\u0438\u043D\u0443\u0442'>;
    textAbove: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043E\u0442\u0432\u0435\u0442'>;
    textBelow: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u0442\u0430\u0442\u0443\u0441:'>;
    textBelowHighlight: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041E\u041D\u041B\u0410\u0419\u041D'>;
    textBelowSmall: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0417\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435'>;
    textHighlight: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435'>;
  };
}

export interface WidgetsCallToActionQuestion extends Struct.ComponentSchema {
  collectionName: 'components_widgets_call_to_action_questions';
  info: {
    displayName: 'CallToActionQuestion';
    icon: 'alien';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443, \u0438 \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15-\u0438 \u043C\u0438\u043D\u0443\u0442'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0413\u043E\u0442\u043E\u0432\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442?'>;
  };
}

export interface WidgetsCallToActionTestimonials
  extends Struct.ComponentSchema {
  collectionName: 'components_widgets_call_to_action_testimonials';
  info: {
    displayName: 'CallToActionTestimonials';
    icon: 'alien';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u0434\u043B\u044F \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0438. \u041C\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u0430\u0448\u0435\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0443 \u0440\u0430\u0441\u0442\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C\u0441\u044F.'>;
    testimonials: Schema.Attribute.Component<'shared.text', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0413\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442?'>;
  };
}

export interface WidgetsCertifiedItCompany extends Struct.ComponentSchema {
  collectionName: 'components_widgets_certified_it_companies';
  info: {
    displayName: 'CertifiedITCompany';
    icon: 'information';
  };
  attributes: {
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F IT \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C ISO 9126 \u00ABSoftware Engineering \u2014 Product Quality\u00BB \u0438 IEEE 829\u22121998 \u00ABStandard for Software Test Documentation\u00BB. \u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043F\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0443 ISO 9001:2015'>;
  };
}

export interface WidgetsConsent extends Struct.ComponentSchema {
  collectionName: 'components_widgets_consents';
  info: {
    displayName: 'Consent';
    icon: 'briefcase';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435'>;
  };
}

export interface WidgetsContact extends Struct.ComponentSchema {
  collectionName: 'components_widgets_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    contacts: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-contact.single-contact'
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B'>;
  };
}

export interface WidgetsFaQ extends Struct.ComponentSchema {
  collectionName: 'components_widgets_fa_qs';
  info: {
    displayName: 'FaQ';
    icon: 'alien';
  };
  attributes: {
    questions: Schema.Attribute.Relation<'oneToMany', 'api::question.question'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0447\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B'>;
  };
}

export interface WidgetsHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_widgets_home_heroes';
  info: {
    displayName: 'HomeHero';
    icon: 'house';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'ERP, Telegram Mini Apps, \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0440\u0442\u0430\u043B\u044B, CRM \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432'>;
    textAbove: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F IT \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0412\u0430\u0448 IT-\u043F\u0430\u0440\u0442\u043D\u0435\u0440 \u043E\u0442 \u0438\u0434\u0435\u0438 \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430.'>;
  };
}

export interface WidgetsHowAreWeDifferent extends Struct.ComponentSchema {
  collectionName: 'components_widgets_how_are_we_differents';
  info: {
    displayName: 'HowAreWeDifferent';
    icon: 'information';
  };
  attributes: {
    aboveTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430. \u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B.'>;
    testimonials: Schema.Attribute.Component<
      'shared.testimonial-with-media',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0427\u0435\u043C \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u043C\u0441\u044F \u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0445 \u0441\u0442\u0443\u0434\u0438\u0439'>;
  };
}

export interface WidgetsHowSystemLooks extends Struct.ComponentSchema {
  collectionName: 'components_widgets_how_system_looks';
  info: {
    displayName: 'HowSystemLooks';
    icon: 'rocket';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.how-system-looks-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041A\u0430\u043A \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0430'>;
  };
}

export interface WidgetsHowWeWork extends Struct.ComponentSchema {
  collectionName: 'components_widgets_how_we_works';
  info: {
    displayName: 'HowWeWork';
    icon: 'house';
  };
  attributes: {
    belowTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0440\u0430\u0431\u043E\u0442\u044B'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C'>;
    workSteps: Schema.Attribute.Relation<
      'oneToMany',
      'api::work-step.work-step'
    >;
  };
}

export interface WidgetsIntegrationProcess extends Struct.ComponentSchema {
  collectionName: 'components_widgets_integration_processes';
  info: {
    displayName: 'IntegrationProcess';
    icon: 'rocket';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.integration-process-item', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F'>;
  };
}

export interface WidgetsLeadFormSection extends Struct.ComponentSchema {
  collectionName: 'components_widgets_lead_form_sections';
  info: {
    displayName: 'LeadFormSection';
    icon: 'alien';
  };
  attributes: {
    form: Schema.Attribute.Relation<'oneToOne', 'api::form.form'>;
  };
}

export interface WidgetsMeetTheTeam extends Struct.ComponentSchema {
  collectionName: 'components_widgets_meet_the_teams';
  info: {
    displayName: 'MeetTheTeam';
    icon: 'information';
  };
  attributes: {
    teamMembers: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430'>;
  };
}

export interface WidgetsOurApproach extends Struct.ComponentSchema {
  collectionName: 'components_widgets_our_approaches';
  info: {
    displayName: 'OurApproach';
    icon: 'information';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
    testimonial: Schema.Attribute.Component<'shared.testimonial', false> &
      Schema.Attribute.Required;
    testimonials: Schema.Attribute.Component<'shared.testimonial', true>;
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432. \u0421\u0438\u0441\u0442\u0435\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u044F\u0442 \u0438\u0437\u043C\u0435\u0440\u0438\u043C\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0431\u0438\u0437\u043D\u0435\u0441\u0443.'>;
    textHighlight: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0430\u0448\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0446\u0438\u0444\u0440\u0430\u0445'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0448 \u043F\u043E\u0434\u0445\u043E\u0434'>;
  };
}

export interface WidgetsPrimaryHero extends Struct.ComponentSchema {
  collectionName: 'components_widgets_primary_heroes';
  info: {
    displayName: 'PrimaryHero';
    icon: 'alien';
  };
  attributes: {
    badgeTexts: Schema.Attribute.Component<'shared.text', true>;
    ctaButtons: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u043E\u0437\u0434\u0430\u0451\u043C ERP, CRM, AI-\u0430\u0433\u0435\u043D\u0442\u043E\u0432 \u0438 Telegram Mini Apps. \u0411\u0435\u0437 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434 \u0432\u0430\u0448\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B. \u0421 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435'>;
    microDetails: Schema.Attribute.Component<'shared.text', true>;
    size: Schema.Attribute.Enumeration<['default', 'long']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0440\u0435\u0448\u0430\u0435\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430'>;
  };
}

export interface WidgetsPrivacy extends Struct.ComponentSchema {
  collectionName: 'components_widgets_privacies';
  info: {
    displayName: 'Privacy';
    icon: 'briefcase';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445'>;
  };
}

export interface WidgetsProjects extends Struct.ComponentSchema {
  collectionName: 'components_widgets_projects';
  info: {
    displayName: 'Projects';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0441 \u0438\u0437\u043C\u0435\u0440\u0438\u043C\u044B\u043C\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438. \u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u043A\u0430\u043A \u0431\u0438\u0437\u043D\u0435\u0441 \u0440\u0435\u0448\u0430\u0435\u0442 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 ROI.'>;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041A\u0435\u0439\u0441\u044B'>;
  };
}

export interface WidgetsReviews extends Struct.ComponentSchema {
  collectionName: 'components_widgets_reviews';
  info: {
    displayName: 'Reviews';
    icon: 'alien';
  };
  attributes: {
    aboveTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041E\u0442\u0437\u044B\u0432\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432'>;
    belowTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0437\u044B\u0432\u044B \u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u0443\u0434\u0438\u0435\u0439'>;
    reviews: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043D\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B'>;
  };
}

export interface WidgetsSectionHeroAiAgents extends Struct.ComponentSchema {
  collectionName: 'components_widgets_section_hero_ai_agents';
  info: {
    displayName: 'SectionHeroAIAgents';
    icon: 'rocket';
  };
  attributes: {
    aboveTitleText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI-\u0430\u0433\u0435\u043D\u0442\u044B'>;
    buttons: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0437\u0430\u044F\u0432\u043E\u043A, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0439 \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430'>;
    image: Schema.Attribute.Component<'shared.media', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'AI-\u0430\u0433\u0435\u043D\u0442\u044B'>;
  };
}

export interface WidgetsSectionHeroCrmAutomation
  extends Struct.ComponentSchema {
  collectionName: 'components_widgets_section_hero_crm_automations';
  info: {
    displayName: 'SectionHeroCRMAutomation';
    icon: 'rocket';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CRM \u043F\u043E\u0434 \u0432\u0430\u0448\u0443 \u0432\u043E\u0440\u043E\u043D\u043A\u0443, \u0430 \u043D\u0435 \u043F\u043E\u0434 \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u043A\u043E\u0440\u043E\u0431\u043E\u0447\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439. \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0441\u0434\u0435\u043B\u043E\u043A, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0440\u0443\u0442\u0438\u043D\u044B, \u043E\u0442\u0447\u0451\u0442\u044B \u0434\u043B\u044F \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0430. \u041D\u0438 \u043E\u0434\u043D\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0442\u0441\u044F.'>;
    image: Schema.Attribute.Component<'shared.media', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CRM + \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0436'>;
  };
}

export interface WidgetsSectionHeroCustomErp extends Struct.ComponentSchema {
  collectionName: 'components_widgets_section_hero_custom_erps';
  info: {
    displayName: 'SectionHeroCustomERP';
    icon: 'rocket';
  };
  attributes: {
    aboveTitleText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0441\u044F \u043E\u0442 3-\u0435\u0445 \u043C\u0435\u0441\u044F\u0446\u0435\u0432. \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C'>;
    buttons: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C\u0438, \u0437\u0430\u043A\u0443\u043F\u043A\u0430\u043C\u0438, \u0441\u043A\u043B\u0430\u0434\u043E\u043C, \u0444\u0438\u043D\u0430\u043D\u0441\u0430\u043C\u0438 \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C \u0432 \u043E\u0434\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435. \u0417\u0430\u043C\u0435\u043D\u044F\u0435\u0442 Excel \u0438 \u0440\u0430\u0437\u0440\u043E\u0437\u043D\u0435\u043D\u043D\u044B\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B. \u0420\u0430\u0441\u0442\u0451\u0442 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0431\u0438\u0437\u043D\u0435\u0441\u043E\u043C. \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439. \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430 \u0432\u0441\u0435\u0445 \u0443\u0440\u043E\u0432\u043D\u044F\u0445'>;
    image: Schema.Attribute.Component<'shared.media', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0435 ERP'>;
  };
}

export interface WidgetsSectionHeroWebPlatforms extends Struct.ComponentSchema {
  collectionName: 'components_widgets_section_hero_web_platforms';
  info: {
    displayName: 'SectionHeroWebPlatforms';
    icon: 'rocket';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'B2B-\u0441\u0435\u0440\u0432\u0438\u0441\u044B, \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u044B, \u043F\u043E\u0440\u0442\u0430\u043B\u044B \u0441 \u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430\u043C\u0438 \u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0439 \u043B\u043E\u0433\u0438\u043A\u043E\u0439.\u041D\u0435 \u0432\u0438\u0437\u0438\u0442\u043A\u0438 \u2014 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438.\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 \u0443\u0447\u0451\u0442\u043D\u044B\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438, API, \u0440\u043E\u043B\u0438 \u0438 \u043F\u0440\u0430\u0432\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430.'>;
    image: Schema.Attribute.Component<'shared.media', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u0430\u0439\u0442\u044B \u0438 \u0412\u0435\u0431-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B'>;
  };
}

export interface WidgetsServiceHeroMessengerApps
  extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service_hero_messenger_apps';
  info: {
    displayName: 'ServiceHeroMessengerApps';
    icon: 'rocket';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Mini Apps \u0434\u043B\u044F Telegram, VK, \u041C\u0422\u0421 \u041C\u0430\u0440\u0443\u0441\u044F \u0431\u0435\u0437 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438. \u0414\u043E\u0441\u0442\u0443\u043F \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A.\u041A\u0430\u0442\u0430\u043B\u043E\u0433\u0438, \u0437\u0430\u043A\u0430\u0437\u044B, \u043B\u0438\u0447\u043D\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u044B, \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u2014 \u043A\u0430\u043A \u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.\u0412\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0443\u0436\u0435 \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430\u0445. \u0411\u0443\u0434\u044C\u0442\u0435 \u0442\u0430\u043C, \u0433\u0434\u0435 \u043E\u043D\u0438'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430\u0445'>;
  };
}

export interface WidgetsServiceHeroMobileApps extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service_hero_mobile_apps';
  info: {
    displayName: 'ServiceHeroMobileApps';
    icon: 'rocket';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F iOS \u0438 Android \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E.\u0420\u0430\u0431\u043E\u0442\u0430 \u043E\u0444\u043B\u0430\u0439\u043D, push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 \u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0438 GPS.\u041E\u0434\u043D\u0430 \u043A\u043E\u0434\u043E\u0432\u0430\u044F \u0431\u0430\u0437\u0430 \u2014 \u0434\u0432\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F'>;
  };
}

export interface WidgetsServiceProducts extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service_products';
  info: {
    displayName: 'ServiceProducts';
    icon: 'rocket';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0421\u0438\u0441\u0442\u0435\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u043A\u0443\u043F\u0438\u043B\u0438\u0441\u044C \u0432 \u043F\u0435\u0440\u0432\u044B\u0435 \u043C\u0435\u0441\u044F\u0446\u044B \u0440\u0430\u0431\u043E\u0442\u044B. \u041E\u0442 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0433\u043E \u0443\u0447\u0451\u0442\u0430 \u0434\u043E AI-\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u2014 \u043A\u0430\u0436\u0434\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0440\u0435\u0448\u0430\u0435\u0442 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0430.'>;
    services: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-service.single-service'
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041A\u0435\u0439\u0441\u044B'>;
  };
}

export interface WidgetsServiceTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_widgets_service_testimonials';
  info: {
    displayName: 'ServiceTestimonials';
    icon: 'rocket';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<
      'shared.testimonial-with-media',
      true
    >;
  };
}

export interface WidgetsServices extends Struct.ComponentSchema {
  collectionName: 'components_widgets_services';
  info: {
    displayName: 'Services';
    icon: 'rocket';
  };
  attributes: {
    services: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-service.single-service'
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0423\u0441\u043B\u0443\u0433\u0438'>;
  };
}

export interface WidgetsTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_widgets_technologies';
  info: {
    displayName: 'Technologies';
    icon: 'alien';
  };
  attributes: {
    technologies: Schema.Attribute.Relation<
      'oneToMany',
      'api::technology.technology'
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438'>;
  };
}

export interface WidgetsTerms extends Struct.ComponentSchema {
  collectionName: 'components_widgets_terms';
  info: {
    displayName: 'Terms';
    icon: 'briefcase';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B'>;
  };
}

export interface WidgetsTrustedBy extends Struct.ComponentSchema {
  collectionName: 'components_widgets_trusted_bies';
  info: {
    displayName: 'TrustedBy';
    icon: 'alien';
  };
  attributes: {
    clients: Schema.Attribute.Relation<'oneToMany', 'api::client.client'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u043C \u0434\u043E\u0432\u0435\u0440\u044F\u044E\u0442'>;
  };
}

export interface WidgetsWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_widgets_who_we_ares';
  info: {
    displayName: 'WhoWeAre';
    icon: 'information';
  };
  attributes: {
    highlightText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F IT \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u041E\u041E\u041E \u041D\u041E\u0420\u0424\u041A\u041E\u0414'>;
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u0445\u0430\u043E\u0441 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0432 \u0441\u0442\u0440\u043E\u0439\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u044E\u0442 \u0432\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F, \u0443\u043C\u043D\u043E\u0436\u0430\u044E\u0442 \u043F\u0440\u0438\u0431\u044B\u043B\u044C \u0438 \u0434\u0430\u044E\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430\u0434 \u043A\u0430\u0436\u0434\u044B\u043C \u044D\u0442\u0430\u043F\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u2014 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0439 \u0437\u0430\u044F\u0432\u043A\u0438 \u0434\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0440\u0443\u0431\u043B\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0438'>;
  };
}

export interface WidgetsWhyWorkWithUs extends Struct.ComponentSchema {
  collectionName: 'components_widgets_why_work_withuses';
  info: {
    displayName: 'WhyWorkWithUs';
    icon: 'alien';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'shared.testimonial', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u043E\u0447\u0435\u043C\u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441 \u043D\u0430\u043C\u0438'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.lead-form': FeaturesLeadForm;
      'features.quiz': FeaturesQuiz;
      'shared.button': SharedButton;
      'shared.how-system-looks-item': SharedHowSystemLooksItem;
      'shared.input': SharedInput;
      'shared.integration-process-item': SharedIntegrationProcessItem;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.robots': SharedRobots;
      'shared.seo': SharedSeo;
      'shared.team-member': SharedTeamMember;
      'shared.testimonial': SharedTestimonial;
      'shared.testimonial-with-media': SharedTestimonialWithMedia;
      'shared.text': SharedText;
      'widgets.blog-article': WidgetsBlogArticle;
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
      'widgets.technologies': WidgetsTechnologies;
      'widgets.terms': WidgetsTerms;
      'widgets.trusted-by': WidgetsTrustedBy;
      'widgets.who-we-are': WidgetsWhoWeAre;
      'widgets.why-work-with-us': WidgetsWhyWorkWithUs;
    }
  }
}
