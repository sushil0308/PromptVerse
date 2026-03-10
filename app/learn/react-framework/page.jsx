import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "ReAct Framework - PromptVerse",
  description: "Learn the ReAct framework combining reasoning and actions.",
};

const tableOfContents = [
  { id: "overview", title: "Overview" },
  { id: "components", title: "Key Components" },
  { id: "use-cases", title: "Use Cases" },
];

export default function ReActPage() {
  return (
    <ArticleLayout
      title="ReAct Framework"
      description="Discover how to interleave reasoning and actions to enable agentic behavior in language models."
      readTime="4 min read"
      tableOfContents={tableOfContents}
      prevArticle={{
        title: "Tree of Thoughts",
        href: "/learn/tree-of-thoughts",
      }}
      nextArticle={{
        title: "Writing Clear Instructions",
        href: "/learn/clear-instructions",
      }}
    >
      <Section id="overview" title="Overview">
        <p>
          ReAct combines reasoning (thoughts) and actions (tool usage, code
          execution, etc.) within a single prompt. It allows models to think
          step-by-step and then perform external actions as needed.
        </p>
      </Section>
      <Section id="components" title="Key Components">
        <p>
          A typical ReAct prompt alternates between <em>Thought:</em> and{" "}
          <em>Action:</em>
          lines, enabling the model to plan and then execute tasks such as API
          calls or database queries.
        </p>
      </Section>
      <Section id="use-cases" title="Use Cases">
        <p>
          Useful for building question-answering agents, retrieval-augmented
          systems, or any workflow where the model needs to gather information
          before producing a final answer.
        </p>
      </Section>
    </ArticleLayout>
  );
}
