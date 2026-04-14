"use client";

import { defineRegistry } from "@json-render/react";
import { shadcnComponents } from "@json-render/shadcn";
import { catalog } from "@/catalog/catalog";

export const registry = defineRegistry(catalog, {
  components: {
    ...shadcnComponents
  }
});
