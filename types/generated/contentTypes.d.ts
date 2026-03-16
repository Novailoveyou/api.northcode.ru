import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutAbout extends Struct.SingleTypeSchema {
  collectionName: 'abouts';
  info: {
    displayName: 'About';
    pluralName: 'abouts';
    singularName: 'about';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::about.about'>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.primary-hero',
        'widgets.who-we-are',
        'widgets.meet-the-team',
        'widgets.our-approach',
        'widgets.why-work-with-us',
        'widgets.trusted-by',
        'widgets.technologies',
        'widgets.services',
        'widgets.reviews',
        'widgets.projects',
        'widgets.lead-form-section',
        'widgets.how-we-work',
        'widgets.how-are-we-different',
        'widgets.fa-q',
        'widgets.certified-it-company',
        'widgets.call-to-action',
        'widgets.call-to-action-testimonials',
        'widgets.call-to-action-question',
        'widgets.terms',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.privacy',
        'widgets.lead-form-section-w-ith-enter-submit',
        'widgets.integration-process',
        'widgets.how-system-looks',
        'widgets.home-hero',
        'widgets.contact',
        'widgets.consent',
        'widgets.business-problems',
        'widgets.blog-posts',
        'widgets.blog-article',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogArticleCategoryBlogArticleCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'blog_article_categories';
  info: {
    displayName: 'BlogArticleCategory';
    pluralName: 'blog-article-categories';
    singularName: 'blog-article-category';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    blogArticles: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-article.blog-article'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-article-category.blog-article-category'
    >;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogArticleBlogArticle extends Struct.CollectionTypeSchema {
  collectionName: 'blog_articles';
  info: {
    displayName: 'BlogArticle';
    pluralName: 'blog-articles';
    singularName: 'blog-article';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    category: Schema.Attribute.Relation<
      'manyToOne',
      'api::blog-article-category.blog-article-category'
    >;
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0412\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u043C\u0435\u0436\u0434\u0443 \u043C\u043E\u043D\u043E\u043B\u0438\u0442\u043E\u043C, \u043C\u0438\u043A\u0440\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043B\u0435\u0441\u043E\u043C \u0434\u043B\u044F ERP-\u0441\u0438\u0441\u0442\u0435\u043C\u044B. \u041F\u043B\u044E\u0441\u044B \u0438 \u043C\u0438\u043D\u0443\u0441\u044B \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430 \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u0435\u0439\u0441\u043E\u0432'>;
    image: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-article.blog-article'
    >;
    publishedAt: Schema.Attribute.DateTime;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<5>;
    readTimeMin: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<8>;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.call-to-action',
        'widgets.call-to-action-testimonials',
        'widgets.call-to-action-question',
        'widgets.lead-form-section',
        'widgets.blog-article',
        'widgets.why-work-with-us',
        'widgets.who-we-are',
        'widgets.trusted-by',
        'widgets.terms',
        'widgets.technologies',
        'widgets.services',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.reviews',
        'widgets.projects',
        'widgets.privacy',
        'widgets.primary-hero',
        'widgets.our-approach',
        'widgets.meet-the-team',
        'widgets.integration-process',
        'widgets.how-we-work',
        'widgets.how-system-looks',
        'widgets.how-are-we-different',
        'widgets.home-hero',
        'widgets.fa-q',
        'widgets.contact',
        'widgets.consent',
        'widgets.certified-it-company',
        'widgets.business-problems',
        'widgets.blog-posts',
        'widgets.lead-form-section-w-ith-enter-submit',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Schema.Attribute.UID<'title'> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    views: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface ApiBlogBlog extends Struct.SingleTypeSchema {
  collectionName: 'blogs';
  info: {
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.blog-posts',
        'widgets.lead-form-section',
        'widgets.call-to-action-testimonials',
        'widgets.call-to-action-question',
        'widgets.call-to-action',
        'widgets.why-work-with-us',
        'widgets.who-we-are',
        'widgets.trusted-by',
        'widgets.terms',
        'widgets.technologies',
        'widgets.services',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.reviews',
        'widgets.projects',
        'widgets.privacy',
        'widgets.primary-hero',
        'widgets.our-approach',
        'widgets.meet-the-team',
        'widgets.integration-process',
        'widgets.how-we-work',
        'widgets.how-system-looks',
        'widgets.how-are-we-different',
        'widgets.home-hero',
        'widgets.fa-q',
        'widgets.contact',
        'widgets.consent',
        'widgets.certified-it-company',
        'widgets.business-problems',
        'widgets.blog-article',
        'widgets.lead-form-section-w-ith-enter-submit',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiClientClient extends Struct.CollectionTypeSchema {
  collectionName: 'clients';
  info: {
    displayName: 'Client';
    pluralName: 'clients';
    singularName: 'client';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::client.client'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041A\u043B\u0438\u0435\u043D\u0442'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactContact extends Struct.SingleTypeSchema {
  collectionName: 'contacts';
  info: {
    displayName: 'Contact';
    pluralName: 'contacts';
    singularName: 'contact';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact.contact'
    >;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.contact',
        'widgets.primary-hero',
        'widgets.lead-form-section',
        'widgets.call-to-action-question',
        'widgets.call-to-action-testimonials',
        'widgets.call-to-action',
        'widgets.why-work-with-us',
        'widgets.who-we-are',
        'widgets.trusted-by',
        'widgets.terms',
        'widgets.technologies',
        'widgets.services',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.reviews',
        'widgets.projects',
        'widgets.privacy',
        'widgets.our-approach',
        'widgets.meet-the-team',
        'widgets.integration-process',
        'widgets.how-we-work',
        'widgets.how-system-looks',
        'widgets.how-are-we-different',
        'widgets.home-hero',
        'widgets.fa-q',
        'widgets.consent',
        'widgets.certified-it-company',
        'widgets.business-problems',
        'widgets.blog-posts',
        'widgets.blog-article',
        'widgets.lead-form-section-w-ith-enter-submit',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFormForm extends Struct.CollectionTypeSchema {
  collectionName: 'forms';
  info: {
    displayName: 'Form';
    pluralName: 'forms';
    singularName: 'form';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    budgetInput: Schema.Attribute.Component<'shared.input', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contacts: Schema.Attribute.Component<
      'shared.testimonial-with-media',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15-\u0438 \u043C\u0438\u043D\u0443\u0442. \u041E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0435\u043C \u0441\u0440\u043E\u043A\u0438. \u041F\u0435\u0440\u0432\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E'>;
    descriptionInput: Schema.Attribute.Component<'shared.input', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    emailInput: Schema.Attribute.Component<'shared.input', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::form.form'>;
    nameInput: Schema.Attribute.Component<'shared.input', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    phoneNumberInput: Schema.Attribute.Component<'shared.input', false> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    testimonials: Schema.Attribute.Component<'shared.testimonial', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0441\u0432\u043E\u0451\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeHome extends Struct.SingleTypeSchema {
  collectionName: 'homes';
  info: {
    displayName: 'Home';
    pluralName: 'homes';
    singularName: 'home';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::home.home'>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.home-hero',
        'widgets.projects',
        'widgets.services',
        'widgets.how-are-we-different',
        'widgets.how-we-work',
        'widgets.call-to-action-question',
        'widgets.technologies',
        'widgets.reviews',
        'widgets.trusted-by',
        'widgets.fa-q',
        'widgets.lead-form-section',
        'widgets.why-work-with-us',
        'widgets.who-we-are',
        'widgets.our-approach',
        'widgets.meet-the-team',
        'widgets.call-to-action',
        'widgets.certified-it-company',
        'widgets.call-to-action-testimonials',
        'widgets.terms',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.privacy',
        'widgets.primary-hero',
        'widgets.integration-process',
        'widgets.how-system-looks',
        'widgets.contact',
        'widgets.consent',
        'widgets.business-problems',
        'widgets.blog-posts',
        'widgets.blog-article',
        'widgets.lead-form-section-w-ith-enter-submit',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLeadLead extends Struct.SingleTypeSchema {
  collectionName: 'leads';
  info: {
    displayName: 'Lead';
    pluralName: 'leads';
    singularName: 'lead';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::lead.lead'>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<['features.lead-form']> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLegalConsentLegalConsent extends Struct.SingleTypeSchema {
  collectionName: 'legal_consents';
  info: {
    displayName: 'LegalConsent';
    pluralName: 'legal-consents';
    singularName: 'legal-consent';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::legal-consent.legal-consent'
    >;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.consent',
        'widgets.why-work-with-us',
        'widgets.who-we-are',
        'widgets.trusted-by',
        'widgets.terms',
        'widgets.technologies',
        'widgets.services',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.reviews',
        'widgets.projects',
        'widgets.privacy',
        'widgets.primary-hero',
        'widgets.our-approach',
        'widgets.meet-the-team',
        'widgets.lead-form-section',
        'widgets.integration-process',
        'widgets.how-we-work',
        'widgets.how-system-looks',
        'widgets.how-are-we-different',
        'widgets.home-hero',
        'widgets.fa-q',
        'widgets.contact',
        'widgets.certified-it-company',
        'widgets.call-to-action',
        'widgets.call-to-action-testimonials',
        'widgets.call-to-action-question',
        'widgets.business-problems',
        'widgets.blog-posts',
        'widgets.blog-article',
        'widgets.lead-form-section-w-ith-enter-submit',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLegalPrivacyLegalPrivacy extends Struct.SingleTypeSchema {
  collectionName: 'legal_privacies';
  info: {
    displayName: 'LegalPrivacy';
    pluralName: 'legal-privacies';
    singularName: 'legal-privacy';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::legal-privacy.legal-privacy'
    >;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.privacy',
        'widgets.why-work-with-us',
        'widgets.who-we-are',
        'widgets.trusted-by',
        'widgets.terms',
        'widgets.technologies',
        'widgets.services',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.reviews',
        'widgets.projects',
        'widgets.primary-hero',
        'widgets.our-approach',
        'widgets.meet-the-team',
        'widgets.lead-form-section',
        'widgets.integration-process',
        'widgets.how-we-work',
        'widgets.how-system-looks',
        'widgets.how-are-we-different',
        'widgets.home-hero',
        'widgets.fa-q',
        'widgets.contact',
        'widgets.consent',
        'widgets.certified-it-company',
        'widgets.call-to-action',
        'widgets.call-to-action-testimonials',
        'widgets.call-to-action-question',
        'widgets.business-problems',
        'widgets.blog-posts',
        'widgets.blog-article',
        'widgets.lead-form-section-w-ith-enter-submit',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLegalTermLegalTerm extends Struct.SingleTypeSchema {
  collectionName: 'legal_terms';
  info: {
    displayName: 'LegalTerm';
    pluralName: 'legal-terms';
    singularName: 'legal-term';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::legal-term.legal-term'
    >;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.terms',
        'widgets.why-work-with-us',
        'widgets.who-we-are',
        'widgets.trusted-by',
        'widgets.technologies',
        'widgets.services',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.reviews',
        'widgets.projects',
        'widgets.privacy',
        'widgets.primary-hero',
        'widgets.our-approach',
        'widgets.meet-the-team',
        'widgets.lead-form-section',
        'widgets.integration-process',
        'widgets.how-we-work',
        'widgets.how-system-looks',
        'widgets.how-are-we-different',
        'widgets.home-hero',
        'widgets.fa-q',
        'widgets.contact',
        'widgets.consent',
        'widgets.certified-it-company',
        'widgets.call-to-action',
        'widgets.call-to-action-testimonials',
        'widgets.call-to-action-question',
        'widgets.business-problems',
        'widgets.blog-posts',
        'widgets.blog-article',
        'widgets.lead-form-section-w-ith-enter-submit',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProjectProject extends Struct.CollectionTypeSchema {
  collectionName: 'projects';
  info: {
    displayName: 'Project';
    pluralName: 'projects';
    singularName: 'project';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0417\u0430\u043C\u0435\u043D\u0438\u043B\u0438 5 \u0440\u0430\u0437\u0440\u043E\u0437\u043D\u0435\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0435\u0434\u0438\u043D\u043E\u0439 ERP. \u0421\u043E\u043A\u0440\u0430\u0442\u0438\u043B\u0438 \u0432\u0440\u0435\u043C\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043D\u0430 60%. \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0432\u0438\u0434\u0438\u0442 \u0432\u0441\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u0443 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438.'>;
    image: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    images: Schema.Attribute.Component<'shared.media', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    link: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::project.project'
    >;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'ERP \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQuestionQuestion extends Struct.CollectionTypeSchema {
  collectionName: 'questions';
  info: {
    displayName: 'Question';
    pluralName: 'questions';
    singularName: 'question';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    answer: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0421\u0440\u043E\u043A\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0437\u0430\u0432\u0438\u0441\u044F\u0442 \u043E\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u041B\u0435\u043D\u0434\u0438\u043D\u0433 \u0438\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0441\u0430\u0439\u0442 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 2-4 \u043D\u0435\u0434\u0435\u043B\u0438, \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u0440\u0442\u0430\u043B \u2014 1-3 \u043C\u0435\u0441\u044F\u0446\u0430, \u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 CRM \u0438\u043B\u0438 ERP-\u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043D\u044F\u0442\u044C \u043E\u0442 3 \u0434\u043E 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432. \u041C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0435\u043C \u0441\u0440\u043E\u043A\u0438 \u043D\u0430 \u044D\u0442\u0430\u043F\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u0434\u0435\u0434\u043B\u0430\u0439\u043D\u043E\u0432.'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::question.question'
    >;
    publishedAt: Schema.Attribute.DateTime;
    question: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041A\u0430\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430?'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQuizQuiz extends Struct.SingleTypeSchema {
  collectionName: 'quizzes';
  info: {
    displayName: 'Quiz';
    pluralName: 'quizzes';
    singularName: 'quiz';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::quiz.quiz'>;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<['features.quiz']> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReviewReview extends Struct.CollectionTypeSchema {
  collectionName: 'reviews';
  info: {
    displayName: 'Review';
    pluralName: 'reviews';
    singularName: 'review';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041E\u043B\u044C\u0433\u0430 \u041F\u0435\u0442\u0440\u043E\u0432\u0430'>;
    position: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440'>;
    publishedAt: Schema.Attribute.DateTime;
    review: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0420\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u043D\u0430\u0434 \u0441\u043B\u043E\u0436\u043D\u044B\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u2014 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430. \u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u043A\u0430\u0437\u0430\u043B\u0430 \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C, \u0432\u0441\u0451 \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u043B\u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u043E, \u0441\u0440\u043E\u043A\u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u043B\u0438. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E!'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiServiceService extends Struct.SingleTypeSchema {
  collectionName: 'services';
  info: {
    displayName: 'Service';
    pluralName: 'services';
    singularName: 'service';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::service.service'
    >;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.services',
        'widgets.call-to-action',
        'widgets.call-to-action-testimonials',
        'widgets.call-to-action-question',
        'widgets.lead-form-section',
        'widgets.primary-hero',
        'widgets.why-work-with-us',
        'widgets.who-we-are',
        'widgets.trusted-by',
        'widgets.terms',
        'widgets.technologies',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.reviews',
        'widgets.projects',
        'widgets.privacy',
        'widgets.our-approach',
        'widgets.meet-the-team',
        'widgets.integration-process',
        'widgets.how-we-work',
        'widgets.how-system-looks',
        'widgets.how-are-we-different',
        'widgets.home-hero',
        'widgets.fa-q',
        'widgets.contact',
        'widgets.consent',
        'widgets.certified-it-company',
        'widgets.business-problems',
        'widgets.blog-posts',
        'widgets.blog-article',
        'widgets.lead-form-section-w-ith-enter-submit',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSingleContactSingleContact
  extends Struct.CollectionTypeSchema {
  collectionName: 'single_contacts';
  info: {
    displayName: 'SingleContact';
    pluralName: 'single-contacts';
    singularName: 'single-contact';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041E\u043D\u043B\u0430\u0439\u043D'>;
    icon: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Telegram'>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-contact.single-contact'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'@northcode_ru'>;
  };
}

export interface ApiSingleServiceSingleService
  extends Struct.CollectionTypeSchema {
  collectionName: 'single_services';
  info: {
    displayName: 'SingleService';
    pluralName: 'single-services';
    singularName: 'single-service';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Component<'shared.text', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    icon: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-service.single-service'
    >;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'widgets.service-hero-mobile-apps',
        'widgets.service-hero-messenger-apps',
        'widgets.section-hero-web-platforms',
        'widgets.section-hero-custom-erp',
        'widgets.section-hero-crm-automation',
        'widgets.section-hero-ai-agents',
        'widgets.service-testimonials',
        'widgets.service-products',
        'widgets.business-problems',
        'widgets.how-system-looks',
        'widgets.call-to-action-question',
        'widgets.call-to-action-testimonials',
        'widgets.call-to-action',
        'widgets.lead-form-section',
        'widgets.integration-process',
        'widgets.trusted-by',
        'widgets.reviews',
        'widgets.fa-q',
        'widgets.why-work-with-us',
        'widgets.who-we-are',
        'widgets.terms',
        'widgets.technologies',
        'widgets.services',
        'widgets.projects',
        'widgets.privacy',
        'widgets.primary-hero',
        'widgets.our-approach',
        'widgets.meet-the-team',
        'widgets.how-we-work',
        'widgets.how-are-we-different',
        'widgets.home-hero',
        'widgets.contact',
        'widgets.consent',
        'widgets.certified-it-company',
        'widgets.blog-posts',
        'widgets.blog-article',
        'widgets.lead-form-section-w-ith-enter-submit',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Schema.Attribute.UID<'title'> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTeamMemberTeamMember extends Struct.CollectionTypeSchema {
  collectionName: 'team_members';
  info: {
    displayName: 'TeamMember';
    pluralName: 'team-members';
    singularName: 'team-member';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0438 CRM \u0437\u0430 2 \u043C\u0435\u0441\u044F\u0446\u0430 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u043F\u043E\u043B\u0443\u0433\u043E\u0434\u0430. \u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 1\u0421 \u043F\u0440\u043E\u0448\u043B\u0430 \u0431\u0435\u0437 \u043F\u0440\u043E\u0441\u0442\u043E\u0435\u0432. \u0422\u0435\u0445\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15-\u0438 \u043C\u0438\u043D\u0443\u0442.'>;
    image: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0421\u043E\u043A\u043E\u043B\u043E\u0432'>;
    position: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'IT-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTechnologyTechnology extends Struct.CollectionTypeSchema {
  collectionName: 'technologies';
  info: {
    displayName: 'Technology';
    pluralName: 'technologies';
    singularName: 'technology';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::technology.technology'
    >;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'HTML'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWorkStepWorkStep extends Struct.CollectionTypeSchema {
  collectionName: 'work_steps';
  info: {
    displayName: 'WorkStep';
    pluralName: 'work-steps';
    singularName: 'work-step';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    belowTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0413\u043B\u0443\u0431\u043E\u043A\u043E\u0435 \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0432 \u0432\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0418\u0437\u0443\u0447\u0430\u0435\u043C \u0431\u0438\u0437\u043D\u0435\u0441-\u0446\u0435\u043B\u0438, \u0446\u0435\u043B\u0435\u0432\u0443\u044E \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044E \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F. \u0424\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u043C \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u0443\u044E \u0434\u043E\u0440\u043E\u0436\u043D\u0443\u044E \u043A\u0430\u0440\u0442\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C\u0438 \u044D\u0442\u0430\u043F\u0430\u043C\u0438 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438.'>;
    duration: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'1-2 \u043D\u0435\u0434\u0435\u043B\u0438'>;
    image: Schema.Attribute.Component<'shared.media', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::work-step.work-step'
    >;
    publishedAt: Schema.Attribute.DateTime;
    testimonials: Schema.Attribute.Component<'shared.text', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about.about': ApiAboutAbout;
      'api::blog-article-category.blog-article-category': ApiBlogArticleCategoryBlogArticleCategory;
      'api::blog-article.blog-article': ApiBlogArticleBlogArticle;
      'api::blog.blog': ApiBlogBlog;
      'api::client.client': ApiClientClient;
      'api::contact.contact': ApiContactContact;
      'api::form.form': ApiFormForm;
      'api::home.home': ApiHomeHome;
      'api::lead.lead': ApiLeadLead;
      'api::legal-consent.legal-consent': ApiLegalConsentLegalConsent;
      'api::legal-privacy.legal-privacy': ApiLegalPrivacyLegalPrivacy;
      'api::legal-term.legal-term': ApiLegalTermLegalTerm;
      'api::project.project': ApiProjectProject;
      'api::question.question': ApiQuestionQuestion;
      'api::quiz.quiz': ApiQuizQuiz;
      'api::review.review': ApiReviewReview;
      'api::service.service': ApiServiceService;
      'api::single-contact.single-contact': ApiSingleContactSingleContact;
      'api::single-service.single-service': ApiSingleServiceSingleService;
      'api::team-member.team-member': ApiTeamMemberTeamMember;
      'api::technology.technology': ApiTechnologyTechnology;
      'api::work-step.work-step': ApiWorkStepWorkStep;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
