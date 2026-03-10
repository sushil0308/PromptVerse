import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "Handling Edge Cases - PromptVerse",
  description:
    "Strategies for anticipating and managing uncommon or tricky inputs.",
};

const tableOfContents = [
  { id: "identify", title: "Identifying Edge Cases" },
  { id: "strategies", title: "Strategies" },
  { id: "testing", title: "Testing for Edge Cases" },
];

export default function EdgeCasesPage() {
  return (
    <ArticleLayout
      title="Handling Edge Cases"
      description="Learn how to recognize and mitigate scenarios that might confuse the model."
      readTime="3 min read"
      tableOfContents={tableOfContents}
      prevArticle={{
        title: "Writing Clear Instructions",
        href: "/learn/clear-instructions",
      }}
      nextArticle={{ title: "Testing and Iteration", href: "/learn/testing" }}
    >
      <Section id="identify" title="Identifying Edge Cases">
        <p>
          Look for unusual inputs, unexpected formats, or situations the model
          hasn’t seen often. Think about user typos, missing data, or
          contradictory instructions.
        </p>
      </Section>
      <Section id="strategies" title="Strategies">
        <p>
          Provide fallback instructions, validate inputs before sending them, or
          ask follow-up questions to clarify ambiguous information.
        </p>
      </Section>
      <Section id="testing" title="Testing for Edge Cases">
        <p>
          Create a suite of problematic prompts and run them through the model;
          adjust prompts based on the outputs you receive.
        </p>
      </Section>
    </ArticleLayout>
  );
}
