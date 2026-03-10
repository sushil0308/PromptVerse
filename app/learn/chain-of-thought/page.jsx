import {
  ArticleLayout,
  Section,
  CodeBlock,
  Callout,
} from "@/components/article-layout";

export const metadata = {
  title: "Chain of Thought Prompting - PromptVerse",
  description:
    "Learn how chain of thought prompting improves AI reasoning by breaking down complex problems into steps.",
};

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "why-it-works", title: "Why It Works" },
  { id: "techniques", title: "Techniques" },
  { id: "examples", title: "Practical Examples" },
  { id: "references", title: "References" },
];

export default function ChainOfThoughtPage() {
  return (
    <ArticleLayout
      title="Chain of Thought Prompting"
      description="Discover how to improve AI reasoning and accuracy by guiding models through step-by-step thinking processes."
      readTime="8 min read"
      tableOfContents={tableOfContents}
      prevArticle={{ title: "Few-Shot Prompting", href: "/learn/few-shot" }}
      nextArticle={{ title: "Role Prompting", href: "/learn/role-prompting" }}
    >
      <Section id="introduction" title="Introduction">
        <p>
          Chain of Thought (CoT) prompting is a technique that encourages AI
          models to break down complex problems into intermediate reasoning
          steps before arriving at a final answer. Instead of jumping directly
          to a conclusion, the model explains its thinking process step by step.
        </p>
        <p>
          This approach dramatically improves performance on tasks requiring
          logical reasoning, mathematical problem-solving, and multi-step
          analysis. It essentially mimics how humans solve complex problems - by
          thinking through each step rather than jumping to conclusions.
        </p>
        <Callout type="info" title="Research Finding">
          Studies have shown that Chain of Thought prompting can improve
          accuracy on complex reasoning tasks by 10-40% compared to standard
          prompting approaches.
        </Callout>
      </Section>

      <Section id="why-it-works" title="Why It Works">
        <p>Chain of Thought prompting is effective for several reasons:</p>

        <ul className="list-disc list-inside mt-4 flex flex-col gap-2">
          <li>
            <strong>Reduced cognitive load:</strong> Breaking problems into
            steps makes each step easier to handle
          </li>
          <li>
            <strong>Error detection:</strong> When reasoning is explicit, errors
            become visible and can be caught
          </li>
          <li>
            <strong>Knowledge activation:</strong> Each step can activate
            relevant knowledge in the model
          </li>
          <li>
            <strong>Improved accuracy:</strong> Sequential reasoning leads to
            more reliable conclusions
          </li>
        </ul>

        <p className="mt-4">
          Think of it like showing your work in a math class. When you write out
          each step, you are more likely to catch mistakes and arrive at the
          correct answer.
        </p>
      </Section>

      <Section id="techniques" title="Techniques">
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          1. Zero-Shot Chain of Thought
        </h3>
        <p>
          The simplest approach: just add a phrase like &ldquo;Let&apos;s think
          step by step&rdquo; to your prompt.
        </p>
        <CodeBlock
          language="prompt"
          code={`Question: If a store has 15 apples and sells 8, then receives a shipment of 12 more, how many apples does the store have?

Let's think step by step.`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          2. Few-Shot Chain of Thought
        </h3>
        <p>
          Provide examples that demonstrate the step-by-step reasoning process.
        </p>
        <CodeBlock
          language="prompt"
          code={`Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?

A: Let me work through this:
1. Roger starts with 5 tennis balls
2. He buys 2 cans with 3 balls each
3. That's 2 × 3 = 6 new balls
4. Total: 5 + 6 = 11 tennis balls

The answer is 11.

Q: The cafeteria had 23 apples. If they used 20 to make lunch and bought 6 more, how many apples do they have?

A:`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          3. Structured Chain of Thought
        </h3>
        <p>Define explicit steps or a framework for reasoning.</p>
        <CodeBlock
          language="prompt"
          code={`Analyze this business decision using the following framework:

1. SITUATION: What is the current state?
2. PROBLEM: What needs to be solved?
3. OPTIONS: What are the possible approaches?
4. ANALYSIS: Evaluate each option
5. RECOMMENDATION: What should be done and why?

Decision to analyze: Should we expand into the European market this year?`}
        />
      </Section>

      <Section id="examples" title="Practical Examples">
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Logical Reasoning
        </h3>
        <CodeBlock
          language="prompt"
          code={`Problem: In a room, there are 4 people. Each person shakes hands with every other person exactly once. How many handshakes occur in total?

Let's reason through this step by step:

Step 1: Identify what we need to find
We need to count unique pairs of people who shake hands.

Step 2: Think about it systematically
- Person 1 shakes hands with persons 2, 3, and 4 (3 handshakes)
- Person 2 has already shaken with 1, so shakes with 3 and 4 (2 more)
- Person 3 has already shaken with 1 and 2, so shakes with 4 (1 more)
- Person 4 has already shaken with everyone (0 more)

Step 3: Calculate the total
3 + 2 + 1 + 0 = 6 handshakes

The answer is 6 handshakes.`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Code Debugging
        </h3>
        <CodeBlock
          language="prompt"
          code={`Debug this code by thinking through it step by step:

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

Step 1: Understand what the function should do
Find the maximum value in an array.

Step 2: Trace through with a test case
Array: [-5, -2, -10]
- max starts at 0
- -5 > 0? No, max stays 0
- -2 > 0? No, max stays 0
- -10 > 0? No, max stays 0
- Returns 0

Step 3: Identify the bug
The function returns 0 for an array of negative numbers, which is incorrect.

Step 4: Fix
Initialize max to arr[0] or -Infinity instead of 0.`}
        />

        <Callout type="tip" title="Pro Tip">
          Chain of Thought is especially powerful when combined with
          self-verification. Ask the model to check its reasoning after
          completing the steps.
        </Callout>
      </Section>

      <Section id="references" title="References">
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            Wei et al. (2022) - Chain-of-Thought Prompting Elicits Reasoning in
            Large Language Models
          </li>
          <li>
            Kojima et al. (2022) - Large Language Models are Zero-Shot Reasoners
          </li>
          <li>
            Wang et al. (2023) - Self-Consistency Improves Chain of Thought
            Reasoning
          </li>
        </ul>
      </Section>
    </ArticleLayout>
  );
}
