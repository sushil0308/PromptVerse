import {
  ArticleLayout,
  Section,
  CodeBlock,
  Callout,
} from "@/components/article-layout";

export const metadata = {
  title: "Few-Shot Prompting - PromptVerse",
  description:
    "Learn how to use examples to guide AI models toward desired outputs with few-shot prompting.",
};

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "anatomy", title: "Anatomy of Few-Shot Prompts" },
  { id: "examples", title: "Practical Examples" },
  { id: "selecting-examples", title: "Selecting Good Examples" },
  { id: "references", title: "References" },
];

export default function FewShotPage() {
  return (
    <ArticleLayout
      title="Few-Shot Prompting"
      description="Master few-shot prompting by learning how to use carefully chosen examples to guide AI models toward your desired output format and quality."
      readTime="7 min read"
      tableOfContents={tableOfContents}
      prevArticle={{ title: "Zero-Shot Prompting", href: "/learn/zero-shot" }}
      nextArticle={{
        title: "Chain of Thought",
        href: "/learn/chain-of-thought",
      }}
    >
      <Section id="introduction" title="Introduction">
        <p>
          Few-shot prompting is a technique where you provide the AI model with
          a small number of examples (typically 2-5) demonstrating the task you
          want it to perform. These examples serve as templates that guide the
          model toward producing outputs that match your desired format, style,
          and quality.
        </p>
        <p>
          This technique bridges the gap between zero-shot prompting (no
          examples) and fine-tuning (training on large datasets). It is
          particularly effective when you need consistent formatting,
          specialized terminology, or outputs that follow a specific pattern.
        </p>
        <Callout type="info" title="Key Advantage">
          Few-shot prompting allows you to demonstrate exactly what you want
          without needing to explain every detail in words. Sometimes showing is
          more effective than telling.
        </Callout>
      </Section>

      <Section id="anatomy" title="Anatomy of Few-Shot Prompts">
        <p>
          A well-structured few-shot prompt typically contains these components:
        </p>

        <ul className="list-disc list-inside mt-4 flex flex-col gap-2">
          <li>
            <strong>Task description:</strong> A brief explanation of what you
            want done
          </li>
          <li>
            <strong>Examples:</strong> 2-5 input-output pairs demonstrating the
            task
          </li>
          <li>
            <strong>Separator:</strong> Clear markers between examples and the
            actual query
          </li>
          <li>
            <strong>Query:</strong> The actual input you want processed
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Basic Structure
        </h3>
        <CodeBlock
          language="prompt"
          code={`[Task Description]

Example 1:
Input: [example input 1]
Output: [example output 1]

Example 2:
Input: [example input 2]
Output: [example output 2]

Now process:
Input: [your actual input]
Output:`}
        />
      </Section>

      <Section id="examples" title="Practical Examples">
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Custom Classification
        </h3>
        <CodeBlock
          language="prompt"
          code={`Classify the following support tickets by department.

Ticket: "My invoice shows the wrong amount"
Department: Billing

Ticket: "I can't log into my account"  
Department: Technical Support

Ticket: "I want to upgrade my subscription"
Department: Sales

Ticket: "The mobile app keeps crashing"
Department:`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Structured Data Extraction
        </h3>
        <CodeBlock
          language="prompt"
          code={`Extract product information from the following descriptions.

Description: "Apple iPhone 15 Pro, 256GB storage, Natural Titanium color, $999"
Product: iPhone 15 Pro
Storage: 256GB
Color: Natural Titanium
Price: $999

Description: "Samsung Galaxy S24 Ultra, 512GB, Titanium Gray, $1299"
Product: Galaxy S24 Ultra
Storage: 512GB
Color: Titanium Gray
Price: $1299

Description: "Google Pixel 8 Pro, 128GB storage, Obsidian black, $899"
Product:`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Style Transfer
        </h3>
        <CodeBlock
          language="prompt"
          code={`Rewrite the following sentences in a more professional tone.

Casual: "Hey, just checking if you got my email?"
Professional: "I wanted to follow up on my previous correspondence."

Casual: "Can you do this ASAP? It's super urgent!"
Professional: "Could you please prioritize this matter at your earliest convenience?"

Casual: "That idea is totally awesome!"
Professional:`}
        />
      </Section>

      <Section id="selecting-examples" title="Selecting Good Examples">
        <p>
          The quality of your examples significantly impacts the quality of
          results. Follow these guidelines when choosing examples:
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Diversity
        </h3>
        <p>
          Choose examples that cover different scenarios and edge cases. If all
          your examples are too similar, the model may not generalize well to
          different inputs.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Representativeness
        </h3>
        <p>
          Your examples should be representative of the actual inputs you
          expect. Unusual or overly complex examples may confuse the model.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Correctness
        </h3>
        <p>
          Double-check that your examples are correct. The model will learn from
          mistakes in your examples just as readily as from correct patterns.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Consistency
        </h3>
        <p>
          Ensure all examples follow the same format and style. Inconsistencies
          in your examples will lead to inconsistent outputs.
        </p>

        <Callout type="tip" title="Pro Tip">
          Start with 3 examples and adjust based on results. More examples are
          not always better - they take up context space and can sometimes
          introduce noise.
        </Callout>
      </Section>

      <Section id="references" title="References">
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>Brown et al. (2020) - Language Models are Few-Shot Learners</li>
          <li>
            Liu et al. (2021) - What Makes Good In-Context Examples for GPT-3?
          </li>
          <li>Min et al. (2022) - Rethinking the Role of Demonstrations</li>
        </ul>
      </Section>
    </ArticleLayout>
  );
}
