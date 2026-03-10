import { ArticleLayout, Section } from "@/components/article-layout";

export const metadata = {
  title: "Common Mistakes - PromptVerse",
  description: "Avoid frequent errors when engineering prompts.",
};

const tableOfContents = [
  { id: "errors", title: "Frequent Errors" },
  { id: "fixes", title: "How to Fix Them" },
  { id: "resources", title: "Further Reading" },
];

export default function CommonMistakesPage() {
  return (
    <ArticleLayout
      title="Common Mistakes"
      description="Review typical pitfalls in prompt creation and how to correct them."
      readTime="3 min read"
      tableOfContents={tableOfContents}
      prevArticle={{ title: "Testing and Iteration", href: "/learn/testing" }}
      nextArticle={{ title: "", href: "/learn" }}
    >
      <Section id="errors" title="Frequent Errors">
        <p>
          Common mistakes include being too vague, overloading the prompt with
          unrelated instructions, and failing to specify output format.
        </p>
      </Section>
      <Section id="fixes" title="How to Fix Them">
        <p>
          Break complex requests into smaller pieces, provide explicit examples,
          and proofread prompts for clarity before sending them to the model.
        </p>
      </Section>
      <Section id="resources" title="Further Reading">
        <p>
          Refer back to earlier chapters on clear instructions, edge cases, and
          testing for more detailed guidance.
        </p>
      </Section>
    </ArticleLayout>
  );
}
