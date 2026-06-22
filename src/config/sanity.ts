export const sanitySettings = {
  projectId: import.meta.env.SANITY_PROJECT_ID ?? import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "jdls3x4j",
  organizationId:
    import.meta.env.SANITY_ORGANIZATION_ID ?? import.meta.env.PUBLIC_SANITY_ORGANIZATION_ID ?? "oefjG3H6V",
  dataset: import.meta.env.SANITY_DATASET ?? import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: import.meta.env.SANITY_API_VERSION ?? "2025-06-22",
  token: import.meta.env.SANITY_API_READ_TOKEN,
  useCdn: !import.meta.env.SANITY_API_READ_TOKEN && (import.meta.env.SANITY_USE_CDN ?? "false") !== "false"
};

export const sanityEnabled = Boolean(sanitySettings.projectId && sanitySettings.dataset);
