import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "Prompt Chaining - PromptVerse",
  description:
    "Explore the technique of prompt chaining to break complex tasks into smaller steps.",
};

const tableOfContents = [
  { id: "what-is", title: "What is Prompt Chaining?" },
  { id: "advantages", title: "Advantages" },
  { id: "example-chain", title: "Example Chain" },
];

export default function PromptChainingPage() {
  return (
    <ArticleLayout
      title="Prompt Chaining"
      description="Learn how to connect multiple prompts sequentially to tackle complex problems with AI models."
      readTime="5 min read"
      tableOfContents={tableOfContents}
      prevArticle={{ title: "Role Prompting", href: "/learn/role-prompting" }}
      nextArticle={{
        title: "Self-Consistency",
        href: "/learn/self-consistency",
      }}
    >
      <Section id="what-is" title="What is Prompt Chaining?">
        <p>
          Prompt chaining is a method where you feed the output of one prompt
          into the next, allowing you to decompose a large task into manageable
          steps. Each step's response guides the subsequent prompt, creating a
          chain of reasoning.
        </p>
      </Section>

      <Section id="advantages" title="Advantages">
        <p>
          This technique can improve accuracy on multi-part problems, enable
          intermediate verification, and make debugging easier since you can
          inspect each step individually.
        </p>
      </Section>

      <Section id="example-chain" title="Example Chain">
        <p>
          Suppose you want the model to plan a week's worth of meals. You might
          first ask it to generate a list of dietary preferences, then use that
          list to create recipes for each day, and finally compile a shopping
          list. Each prompt in the chain builds on the previous output.
        </p>
      </Section>
    </ArticleLayout>
  );
}
