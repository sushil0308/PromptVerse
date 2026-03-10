import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "Testing and Iteration - PromptVerse",
  description: "Learn how to iterate on prompts through systematic testing.",
};

const tableOfContents = [
  { id: "methodology", title: "Methodology" },
  { id: "metrics", title: "Metrics" },
  { id: "workflow", title: "Workflow" },
];

export default function TestingPage() {
  return (
    <ArticleLayout
      title="Testing and Iteration"
      description="Understand how to refine prompts by observing model behavior and adjusting accordingly."
      readTime="3 min read"
      tableOfContents={tableOfContents}
      prevArticle={{ title: "Handling Edge Cases", href: "/learn/edge-cases" }}
      nextArticle={{ title: "Common Mistakes", href: "/learn/common-mistakes" }}
    >
      <Section id="methodology" title="Methodology">
        <p>
          Establish a baseline prompt, collect outputs, then tweak one variable
          at a time to see its effect. Use automated scripts if possible to
          batch-test many inputs.
        </p>
      </Section>
      <Section id="metrics" title="Metrics">
        <p>
          Track response quality, consistency, latency, and token usage. Define
          what success looks like before starting.
        </p>
      </Section>
      <Section id="workflow" title="Workflow">
        <p>
          Incorporate testing into your development cycle: write prompts, test
          them, review results, revise, and repeat until you reach acceptable
          performance.
        </p>
      </Section>
    </ArticleLayout>
  );
}
