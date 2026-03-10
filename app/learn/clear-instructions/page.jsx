import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "Writing Clear Instructions - PromptVerse",
  description: "Best practices for crafting unambiguous, effective prompts.",
};

const tableOfContents = [
  { id: "why-clear", title: "Why Clear Instructions Matter" },
  { id: "tips", title: "Tips for Clarity" },
  { id: "examples", title: "Examples" },
];

export default function ClearInstructionsPage() {
  return (
    <ArticleLayout
      title="Writing Clear Instructions"
      description="Learn how to avoid ambiguity and guide the model with precise phrasing."
      readTime="3 min read"
      tableOfContents={tableOfContents}
      prevArticle={{ title: "ReAct Framework", href: "/learn/react-framework" }}
      nextArticle={{ title: "Handling Edge Cases", href: "/learn/edge-cases" }}
    >
      <Section id="why-clear" title="Why Clear Instructions Matter">
        <p>
          Ambiguity can lead models to make assumptions or generate irrelevant
          output. Clear instructions reduce guesswork and make results more
          predictable.
        </p>
      </Section>
      <Section id="tips" title="Tips for Clarity">
        <p>
          Use specific keywords, define output formats, limit scope, and provide
          context when necessary. Avoid vague terms like “nice” or “good”.
        </p>
      </Section>
      <Section id="examples" title="Examples">
        <p>
          Compare “Write about cats” vs. “List five health benefits of owning a
          cat, formatted as bullet points.” The latter is much clearer and
          easier for the model to follow.
        </p>
      </Section>
    </ArticleLayout>
  );
}
