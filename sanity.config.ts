import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export const sanityProject = {
  projectId: "jdls3x4j",
  organizationId: "oefjG3H6V",
  dataset: "production"
};

export default defineConfig({
  name: "art-clinic-panama",
  title: "Art Clinic Panama",
  projectId: sanityProject.projectId,
  dataset: sanityProject.dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
});
