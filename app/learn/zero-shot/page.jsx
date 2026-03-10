import {
  ArticleLayout,
  Section,
  CodeBlock,
  Callout,
} from "@/components/article-layout";

export const metadata = {
  title: "Zero-Shot Prompting - PromptVerse",
  description:
    "Learn how to craft effective zero-shot prompts that work without providing examples.",
};

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "how-it-works", title: "How It Works" },
  { id: "examples", title: "Practical Examples" },
  { id: "best-practices", title: "Best Practices" },
  { id: "references", title: "References" },
];

export default function ZeroShotPage() {
  return (
    <ArticleLayout
      title="Zero-Shot Prompting"
      description="Master the art of zero-shot prompting - getting AI to perform tasks without providing any examples in your prompt."
      readTime="6 min read"
      tableOfContents={tableOfContents}
      prevArticle={{ title: "Basic Concepts", href: "/learn/basic-concepts" }}
      nextArticle={{ title: "Few-Shot Prompting", href: "/learn/few-shot" }}
    >
      <Section id="introduction" title="Introduction">
        <p>
          Zero-shot prompting is a technique where you ask an AI model to
          perform a task without providing any examples of how to do it. The
          model relies entirely on its pre-trained knowledge and your
          instructions to complete the task.
        </p>
        <p>
          This is the most straightforward form of prompting and is remarkably
          effective for many common tasks. Modern large language models have
          been trained on vast amounts of data, giving them the ability to
          understand and execute a wide variety of instructions without explicit
          examples.
        </p>
        <Callout type="info" title="When to Use Zero-Shot">
          Zero-shot prompting works best for well-defined tasks that the model
          likely encountered during training, such as translation,
          summarization, classification, and question answering.
        </Callout>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          In zero-shot prompting, you provide the model with a clear task
          description and any necessary context. The model then applies its
          learned knowledge to generate an appropriate response. The key
          elements of an effective zero-shot prompt include:
        </p>

        <ul className="list-disc list-inside mt-4 flex flex-col gap-2">
          <li>
            <strong>Clear task definition:</strong> Explicitly state what you
            want the model to do
          </li>
          <li>
            <strong>Relevant context:</strong> Provide any background
            information needed
          </li>
          <li>
            <strong>Output format:</strong> Specify how you want the response
            structured
          </li>
          <li>
            <strong>Constraints:</strong> Define any limitations or requirements
          </li>
        </ul>
      </Section>

      <Section id="examples" title="Practical Examples">
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Text Classification
        </h3>
        <CodeBlock
          language="prompt"
          code={`Classify the following customer review as either "positive", "negative", or "neutral".

Review: "The product arrived on time and works exactly as described. Very satisfied with my purchase!"

Classification:`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Translation
        </h3>
        <CodeBlock
          language="prompt"
          code={`Translate the following English text to French:

"The quick brown fox jumps over the lazy dog."

French translation:`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Summarization
        </h3>
        <CodeBlock
          language="prompt"
          code={`Summarize the following article in 2-3 sentences:

[Article text here]

Summary:`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Sentiment Analysis
        </h3>
        <CodeBlock
          language="prompt"
          code={`Analyze the sentiment of this tweet and provide a sentiment score from 1 (very negative) to 5 (very positive):

Tweet: "Just had the worst customer service experience of my life. Never shopping there again!"

Sentiment Analysis:`}
        />
      </Section>

      <Section id="best-practices" title="Best Practices">
        <p>
          To maximize the effectiveness of your zero-shot prompts, follow these
          guidelines:
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Be Specific
        </h3>
        <p>
          Vague instructions lead to vague results. Instead of saying "analyze
          this text," specify exactly what kind of analysis you want: sentiment,
          key themes, factual accuracy, or something else.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Define the Output Format
        </h3>
        <p>
          Tell the model exactly how you want the response structured. Do you
          want bullet points, a paragraph, JSON format, or a specific template?
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Provide Constraints
        </h3>
        <p>
          Set boundaries for the response: word limits, specific aspects to
          focus on, things to avoid, or particular perspectives to consider.
        </p>

        <Callout type="warning" title="Limitations">
          Zero-shot prompting may not work well for highly specialized tasks,
          domain-specific terminology, or tasks that require a very specific
          output format that the model has not seen before.
        </Callout>
      </Section>

      <Section id="references" title="References">
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>Brown et al. (2020) - Language Models are Few-Shot Learners</li>
          <li>
            Wei et al. (2022) - Emergent Abilities of Large Language Models
          </li>
          <li>OpenAI Documentation on Prompt Design</li>
        </ul>
      </Section>
    </ArticleLayout>
  );
}
