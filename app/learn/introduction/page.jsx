import {
  ArticleLayout,
  Section,
  CodeBlock,
  Callout,
} from "@/components/article-layout";

export const metadata = {
  title: "Introduction to Prompt Engineering - PromptVerse",
  description:
    "Learn the fundamentals of prompt engineering and how to effectively communicate with AI language models.",
};

const tableOfContents = [
  { id: "what-is-prompt-engineering", title: "What is Prompt Engineering?" },
  { id: "core-concepts", title: "Core Concepts" },
  { id: "your-first-prompt", title: "Your First Prompt" },
  { id: "references", title: "References" },
];

export default function IntroductionPage() {
  return (
    <ArticleLayout
      title="Introduction to Prompt Engineering"
      description="Discover the fundamentals of prompt engineering and learn how to craft effective prompts that unlock the full potential of AI language models."
      readTime="8 min read"
      tableOfContents={tableOfContents}
      nextArticle={{ title: "Why It Matters", href: "/learn/why-it-matters" }}
    >
      <Section
        id="what-is-prompt-engineering"
        title="What is Prompt Engineering?"
      >
        <p>
          Prompt engineering is the practice of designing and refining inputs
          (prompts) to effectively communicate with AI language models. It
          involves understanding how these models interpret instructions and
          crafting prompts that elicit accurate, relevant, and useful responses.
        </p>
        <p>
          Think of it as learning a new language - the language of AI
          communication. Just as you would learn grammar and vocabulary to
          communicate with people from different cultures, prompt engineering
          teaches you the patterns and structures that AI models respond to
          best.
        </p>
        <Callout type="info" title="Key Insight">
          Prompt engineering is not about tricking AI models. It is about clear
          communication and providing the right context for the model to
          understand your intent.
        </Callout>
      </Section>

      <Section id="core-concepts" title="Core Concepts">
        <p>
          Before diving into specific techniques, it is important to understand
          the fundamental concepts that underpin effective prompt engineering:
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          1. Context Window
        </h3>
        <p>
          The context window is the amount of text an AI model can process at
          once. Understanding this limitation helps you structure prompts that
          fit within these bounds while providing enough information for quality
          responses.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          2. Temperature and Creativity
        </h3>
        <p>
          Most AI models have a temperature parameter that controls response
          randomness. Lower temperatures produce more focused, deterministic
          outputs, while higher temperatures encourage creativity and variation.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          3. Token Limits
        </h3>
        <p>
          AI models process text in tokens (roughly 4 characters per token in
          English). Being aware of token limits helps you optimize prompt length
          and manage response sizes.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          4. System vs User Prompts
        </h3>
        <p>
          Many models distinguish between system prompts (which set behavior and
          context) and user prompts (which contain specific requests).
          Understanding this distinction is crucial for effective prompt design.
        </p>
      </Section>

      <Section id="your-first-prompt" title="Your First Prompt">
        <p>
          Let us start with a simple example that demonstrates the difference
          between a basic prompt and an engineered prompt:
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Basic Prompt
        </h3>
        <CodeBlock language="prompt" code="Write about dogs." />
        <p className="mt-4">
          This prompt is vague and will produce unpredictable results. The AI
          might write an essay, a poem, a list of facts, or something else
          entirely.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Engineered Prompt
        </h3>
        <CodeBlock
          language="prompt"
          code={`You are a veterinary expert writing for a pet owner audience.

Write a 200-word informative paragraph about the health benefits of regular exercise for dogs. Include:
- At least 3 specific health benefits
- Recommended exercise duration for adult dogs
- A practical tip for busy pet owners

Tone: Friendly and encouraging
Format: Single paragraph with clear, accessible language`}
        />

        <p className="mt-4">
          This engineered prompt provides clear context, specific requirements,
          format guidelines, and tone instructions. The result will be much more
          predictable and useful.
        </p>

        <Callout type="tip" title="Pro Tip">
          Start with your end goal in mind. What do you want the output to look
          like? Work backwards from there to determine what information the AI
          needs to produce that result.
        </Callout>
      </Section>

      <Section id="references" title="References">
        <p>
          For further reading on prompt engineering fundamentals, consider these
          resources:
        </p>
        <ul className="list-disc list-inside mt-4 flex flex-col gap-2">
          <li>OpenAI Prompt Engineering Guide</li>
          <li>Anthropic Claude Documentation</li>
          <li>Google AI Principles and Practices</li>
          <li>Academic papers on In-Context Learning</li>
        </ul>
      </Section>
    </ArticleLayout>
  );
}
