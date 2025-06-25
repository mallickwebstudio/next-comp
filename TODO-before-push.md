<!-- Run to generate components for import in @/lib/componentMap.ts -->
npm run generate:component:map

<!-- Run to to take SS of categories updated -->
npm run generate:category:screenshot -- category-one category-two category-three

<!-- E.x npm run generate:category:screenshot -- navbars heros -->
<!-- Add "dark" key to generate dark mode screenshot -->
<!-- E.x npm run generate:category:screenshot -- navbars heros dark -->
<!-- Category up-until created -->
navbars heros features faqs testimonials ctas footers


<!-- COPY/PASTE to @/lib/database.ts -->
<!-- add sections that are upgraded in this -->
Home page <RegenerateData />