import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "Why Prompt Engineering Matters - PromptVerse",
  description:
    "Understand the importance of prompt engineering and how it impacts AI outcomes.",
};

const tableOfContents = [
  { id: "overview", title: "Overview" },
  { id: "real-world-impact", title: "Real-world Impact" },
  { id: "getting-started", title: "Getting Started" },
];

export default function WhyItMattersPage() {
  return (
    <ArticleLayout
      title="Why Prompt Engineering Matters"
      description="Learn why investing time in crafting good prompts leads to better AI results and more reliable applications."
      readTime="4 min read"
      tableOfContents={tableOfContents}
      prevArticle={{
        title: "Introduction to Prompt Engineering",
        href: "/learn/introduction",
      }}
      nextArticle={{ title: "Basic Concepts", href: "/learn/basic-concepts" }}
    >
      <Section id="overview" title="Overview">
        <p>
          Prompt engineering is a critical skill for anyone working with large
          language models. The way you phrase a question or instruction can
          dramatically affect the quality, relevance, and safety of the model's
          response.
        </p>
      </Section>

      <Section id="real-world-impact" title="Real‑world Impact">
        <p>
          In production systems, poorly engineered prompts can lead to
          hallucinations, incorrect outputs, or unintended behavior.
          Well-crafted prompts help reduce errors, save compute costs, and
          improve user satisfaction.
        </p>
      </Section>

      <Section id="getting-started" title="Getting Started">
        <p>
          Begin by understanding the basics of prompt structure and then
          experiment with small changes to see how the model's output evolves.
          The following chapters will walk you through practical techniques.
        </p>
      </Section>
    </ArticleLayout>
  );
}
