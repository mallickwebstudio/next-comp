npm run generate-component-map
npm run generate-category-screenshot -- 
npm run generate-public-code -- 

<!-- Category up-until created -->
navbar hero feature faq testimonial cta footer header pricing logo team career gallery contact blog-header blog-post-header blog-section portfolio-header portfolio-section



# step-1 (Setup)
-> Create section folder
-> Create category folder
-> Create category files.tsx

# Step-2 (Development)
-> Run "npm run generate-component-map" (this will generate files in component-map.ts)
-> Update "database.ts" based on the folder/files created.
-> Compose/write code in category files.tsx you've created in step-1.
-> Preview that files in "preview?block=[file-name]"
-> Preview dark theme in "preview?block=[file-name]&theme=dark"

# step-3 (Push)
-> Run "npm run generate-category-screenshot [category-one-name] [category-two-name]"
-> Run "npm run generate-category-screenshot dark [category-one-name] [category-two-name]" for dark mode SS


<!-- SCRIPT USAGE of generate-category-screenshot -->
1. npm run generate-category-screenshot
    -> Captures all blocks in light mode.

2. npm run generate-category-screenshot -- navbar hero 
    -> Captures all blocks under the navbar and hero categories in light mode.

3. npm run generate-category-screenshot -- dark
    -> Captures all blocks in dark mode.

4. npm run generate-category-screenshot -- navbar hero dark
    -> Captures all blocks under the navbar and hero categories in dark mode.

5. npm run generate-category-screenshot -- block=hero-one
    -> Captures only the hero-one block in light mode.

6. npm run generate-category-screenshot -- block=hero-one dark
    -> Captures only the hero-one block in dark mode.

<!-- SCRIPT USAGE of generate-component-map -->
1. npm run generate-component-map
    -> Generate/Update @/lib/component-map.ts based on files located in @/ui/...

<!-- SCRIPT USAGE of generate-public-code -->
1. npm run generate-public-code
    -> Generate/Update code form @/ui/... to public/ui/

2. npm run generate-public-code -- navbar hero
    -> Generate/Update code of navbar and hero category form @/ui/... to public/ui/

<!-- SCRIPT USAGE of generate/update - database -->
1. npm run generate-database
    -> Generate/Update code form @/ui/... to @/lib/database.ts