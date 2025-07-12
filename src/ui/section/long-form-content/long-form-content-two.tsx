import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image"

// 📄 This LongFormContentOne component is styled using Tailwind Typography (`@tailwindcss/typography`).
// It provides elegant, readable styles for long-form content such as blog posts, documentation, and articles.
// For installation, customization and advanced styling options, refer to the official Tailwind Typography plugin documentation:
// 👉 https://tailwindcss.com/docs/typography-plugin

export default function LongFormContentTwo() {

  return (
    <section
      className="relative bg-background"
      id="long-form-content"
      aria-label="Long form content section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12">
        {/* Text Content */}
        <article className="
        prose dark:prose-invert max-w-none prose-neutral
        prose-img:w-full prose-img:aspect-video prose-img:object-cover prose-img:select-none prose-img:pointer-events-none prose-img:rounded-md
        prose-h1:text-4xl
        prose-h2:text-3xl
        prose-h3:text-2xl
        prose-h4:text-xl
        prose-h5:text-lg
        ">
          <h1>H1 Heading goes here</h1>
          <p>
            H1 titles are ignored in the table of contents. The table of contents links always start with H2.
          </p>

          <h2 id="heading-2">Heading 2</h2>
          <p>
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          </p>
          <p>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          </p>

          <h3 id="heading-3">Heading 3</h3>
          <p>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </p>
          <p>
            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
          </p>

          <h4 id="heading-4">Heading 4</h4>
          <p>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
          </p>
          <figure>
            <Image
              src="/image.svg"
              width={800}
              height={450}
              alt="Image Description"
            />
            <figcaption>Image caption goes here</figcaption>
          </figure>

          <h5 id="heading-5">Heading 5</h5>
          <p>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
          </p>
          <blockquote>
            <p>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.
            </p>
          </blockquote>

          <h6 id="heading-6">Heading 6</h6>
          <p>
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
          </p>
        </article>

        {/* Aside Newsletter Signup */}
        <div className="md:sticky top-8 p-4 h-fit md:w-xs border rounded-md">
          <div className="text-xl font-semibold">Subscribe to newsletter</div>
          <p className="mt-4">
            Subscribe to receive the latest blog posts to your inbox every week.
          </p>
          <form className="mt-4 gap-2"
            onSubmit={(e) => e.preventDefault()}>
            <Input
              className="flex-1 h-10"
              type="email"
              id="newsletter-email"
              placeholder="Your email"
              aria-label="Your email"
              required
            />
            <Button className="mt-4 w-full cursor-pointer" type="submit" size="lg">
              Subscribe
            </Button>
          </form>
          <div className="mt-4 text-xs text-muted-foreground">
            By clicking Subscribe you&apos;re confirming that you agree with our <a className="underline hover:underline-offset-2" href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </section>
  );
}
