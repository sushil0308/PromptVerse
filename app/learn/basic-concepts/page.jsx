import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "Basic Concepts - PromptVerse",
  description:
    "A quick overview of the foundational ideas behind effective prompting.",
};

const tableOfContents = [
  { id: "context-window", title: "Context Window" },
  { id: "temperature", title: "Temperature" },
  { id: "tokens", title: "Tokens & Limits" },
];

export default function BasicConceptsPage() {
  return (
    <ArticleLayout
      title="Basic Concepts"
      description="Understand the underlying principles that influence how AI models interpret prompts."
      readTime="3 min read"
      tableOfContents={tableOfContents}
      prevArticle={{
        title: "Why Prompt Engineering Matters",
        href: "/learn/why-it-matters",
      }}
      nextArticle={{ title: "Zero-Shot Prompting", href: "/learn/zero-shot" }}
    >
      <Section id="context-window" title="Context Window">
        <p>
          AI models have a fixed context window (number of tokens they can
          process at once). Keeping prompts concise helps ensure the model sees
          all the relevant information.
        </p>
      </Section>
      <Section id="temperature" title="Temperature">
        <p>
          Temperature controls randomness in responses. Lower values yield
          consistent results, while higher values increase creativity at the
          cost of predictability.
        </p>
      </Section>
      <Section id="tokens" title="Tokens & Limits">
        <p>
          Text is processed in tokens. Be mindful of token limits when designing
          prompts and handling model outputs, especially in long conversations.
        </p>
      </Section>
    </ArticleLayout>
  );
}
