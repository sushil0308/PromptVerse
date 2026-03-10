import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "Tree of Thoughts - PromptVerse",
  description:
    "Explore the tree-of-thoughts framework for branching reasoning.",
};

const tableOfContents = [
  { id: "concept", title: "Concept" },
  { id: "benefits", title: "Benefits" },
  { id: "simple-example", title: "Simple Example" },
];

export default function TreeOfThoughtsPage() {
  return (
    <ArticleLayout
      title="Tree of Thoughts"
      description="Discover how to branch your model’s reasoning into a tree structure for better exploration."
      readTime="4 min read"
      tableOfContents={tableOfContents}
      prevArticle={{
        title: "Self-Consistency",
        href: "/learn/self-consistency",
      }}
      nextArticle={{ title: "ReAct Framework", href: "/learn/react-framework" }}
    >
      <Section id="concept" title="Concept">
        <p>
          The tree-of-thoughts approach expands possible reasoning paths into a
          tree rather than a single chain. At each step, multiple continuations
          are considered, and the most promising branches are explored further.
        </p>
      </Section>
      <Section id="benefits" title="Benefits">
        <p>
          This method allows partial evaluation of different strategies,
          improving performance on problems requiring creative or multi-step
          reasoning.
        </p>
      </Section>
      <Section id="simple-example" title="Simple Example">
        <p>
          For a puzzle, the model might first propose several intermediate
          moves, then branch from the most plausible ones rather than committing
          to a single solution path.
        </p>
      </Section>
    </ArticleLayout>
  );
}
