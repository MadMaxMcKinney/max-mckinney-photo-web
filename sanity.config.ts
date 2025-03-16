"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted in the `/app/(sanity)/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";
import { BookImage } from "lucide-react";

export default defineConfig({
    basePath: "/studio",
    projectId,
    dataset,
    schema,
    plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion }), media()],
    title: "studio.photos.max",
    icon: BookImage,
});
