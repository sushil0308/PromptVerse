import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "Self-Consistency - PromptVerse",
  description:
    "Understand the self-consistency technique for improving model reasoning.",
};

const tableOfContents = [
  { id: "what-is", title: "What is Self-Consistency?" },
  { id: "how-it-helps", title: "How It Helps" },
  { id: "example", title: "Example" },
];

export default function SelfConsistencyPage() {
  return (
    <ArticleLayout
      title="Self-Consistency"
      description="Learn how sampling multiple reasoning paths and aggregating answers can boost reliability."
      readTime="4 min read"
      tableOfContents={tableOfContents}
      prevArticle={{ title: "Prompt Chaining", href: "/learn/prompt-chaining" }}
      nextArticle={{
        title: "Tree of Thoughts",
        href: "/learn/tree-of-thoughts",
      }}
    >
      <Section id="what-is" title="What is Self-Consistency?">
        <p>
          Self-consistency involves running a model several times to generate
          different reasoning paths and then selecting the most common final
          answer. This reduces dependence on a single chain-of-thought and often
          yields more accurate responses.
        </p>
      </Section>
      <Section id="how-it-helps" title="How It Helps">
        <p>
          By considering multiple reasoning trajectories, you can mitigate
          occasional mistakes, hallucinations, or stray logic that might occur
          in a single pass.
        </p>
      </Section>
      <Section id="example" title="Example">
        <p>
          For a math problem, generate ten chains of thought and tally the final
          numerical answer. If eight runs produce “42” and two produce “24”,
          choose “42” as the self-consistent result.
        </p>
      </Section>
    </ArticleLayout>
  );
}
