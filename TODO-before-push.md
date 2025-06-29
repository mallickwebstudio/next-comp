<!-- Run to generate components for import in @/lib/componentMap.ts -->
npm run generate:component:map

<!-- Run to to take SS of categories updated -->
npm run generate:category:screenshot -- category-one category-two category-three

<!-- E.x npm run generate:category:screenshot -- navbar hero -->
<!-- Add "dark" key to generate dark mode screenshot -->
<!-- E.x npm run generate:category:screenshot -- navbar hero dark -->
<!-- Category up-until created -->
navbar hero feature faq testimonial cta footer header pricing
logo team career gallery contact blog-header blog-post-header blog-section portfolio-header portfolio-section

<!-- COPY/PASTE to @/lib/database.ts -->
<!-- add sections that are upgraded in this -->
Home page <RegenerateData />