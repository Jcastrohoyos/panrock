/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_GOOGLE_MAPS_EMBED_URL?: string;
  readonly REACT_APP_BUSINESS_ADDRESS?: string;
  readonly REACT_APP_BUSINESS_PHONE?: string;
  readonly REACT_APP_BUSINESS_PHONE_DISPLAY?: string;
  readonly REACT_APP_BUSINESS_PHONE_2?: string;
  readonly REACT_APP_BUSINESS_PHONE_2_DISPLAY?: string;
  readonly REACT_APP_BUSINESS_EMAIL?: string;
  readonly REACT_APP_BUSINESS_EMAIL_RESERVATIONS?: string;
  readonly REACT_APP_EMAILJS_SERVICE_ID?: string;
  readonly REACT_APP_EMAILJS_TEMPLATE_ID?: string;
  readonly REACT_APP_EMAILJS_PUBLIC_KEY?: string;
  readonly REACT_APP_RECAPTCHA_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
