/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TADDY_API_KEY: string;
  readonly VITE_TADDY_USER_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
