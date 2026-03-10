import {
  ArticleLayout,
  Section,
  CodeBlock,
  Callout,
} from "@/components/article-layout";

export const metadata = {
  title: "Role Prompting - PromptVerse",
  description:
    "Learn how to use personas and roles to shape AI behavior and get expert-level responses.",
};

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "creating-roles", title: "Creating Effective Roles" },
  { id: "examples", title: "Practical Examples" },
  { id: "best-practices", title: "Best Practices" },
  { id: "references", title: "References" },
];

export default function RolePromptingPage() {
  return (
    <ArticleLayout
      title="Role Prompting"
      description="Discover how to leverage personas and expert roles to shape AI behavior and unlock domain-specific expertise."
      readTime="6 min read"
      tableOfContents={tableOfContents}
      prevArticle={{
        title: "Chain of Thought",
        href: "/learn/chain-of-thought",
      }}
      nextArticle={{ title: "Prompt Chaining", href: "/learn/prompt-chaining" }}
    >
      <Section id="introduction" title="Introduction">
        <p>
          Role prompting is a technique where you assign a specific persona or
          role to the AI model before asking it to perform a task. By framing
          the AI as an expert in a particular field, you can influence the
          style, depth, and perspective of its responses.
        </p>
        <p>
          This technique works because large language models have been trained
          on text from various expert domains. When you assign a role, you are
          essentially telling the model which part of its knowledge to draw from
          and what communication style to adopt.
        </p>
        <Callout type="info" title="Key Benefit">
          Role prompting helps the AI produce responses that are more focused,
          domain-appropriate, and aligned with professional standards in
          specific fields.
        </Callout>
      </Section>

      <Section id="creating-roles" title="Creating Effective Roles">
        <p>An effective role definition typically includes:</p>

        <ul className="list-disc list-inside mt-4 flex flex-col gap-2">
          <li>
            <strong>Title/Position:</strong> The specific role or job title
          </li>
          <li>
            <strong>Experience level:</strong> Years of experience or seniority
          </li>
          <li>
            <strong>Expertise areas:</strong> Specific knowledge domains
          </li>
          <li>
            <strong>Communication style:</strong> How they typically communicate
          </li>
          <li>
            <strong>Perspective:</strong> Their unique viewpoint or approach
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Basic Structure
        </h3>
        <CodeBlock
          language="prompt"
          code={`You are a [role] with [X years] of experience in [domain]. 
You specialize in [specific areas] and are known for your [qualities].
Your communication style is [style description].

[Your actual question or task]`}
        />
      </Section>

      <Section id="examples" title="Practical Examples">
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Technical Expert
        </h3>
        <CodeBlock
          language="prompt"
          code={`You are a senior software architect with 15 years of experience designing 
scalable distributed systems. You have worked at major tech companies and 
have deep expertise in microservices, cloud infrastructure, and system design.
You explain complex concepts clearly and always consider trade-offs.

A startup wants to build a real-time messaging application that could scale 
to millions of users. What architecture would you recommend, and why?`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Medical Professional
        </h3>
        <CodeBlock
          language="prompt"
          code={`You are a board-certified nutritionist with a PhD in nutritional science 
and 12 years of clinical experience. You take an evidence-based approach 
and always cite current research. You explain health concepts in accessible 
terms while being medically accurate.

Note: Always remind users to consult their healthcare provider for 
personalized medical advice.

What does current research say about intermittent fasting and metabolic health?`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Creative Writer
        </h3>
        <CodeBlock
          language="prompt"
          code={`You are an award-winning copywriter with 10 years of experience in 
advertising and brand storytelling. You have worked with Fortune 500 
companies and are known for creating compelling narratives that resonate 
emotionally while driving action. Your style is concise, evocative, and 
memorable.

Write three tagline options for a sustainable fashion brand that wants 
to appeal to environmentally conscious millennials.`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Educator
        </h3>
        <CodeBlock
          language="prompt"
          code={`You are a patient and encouraging high school physics teacher with 
20 years of experience. You excel at breaking down complex concepts 
into simple, relatable examples. You use analogies from everyday life 
and check for understanding frequently.

Explain the concept of gravitational waves to someone with no physics 
background.`}
        />

        <Callout type="tip" title="Pro Tip">
          Combine role prompting with other techniques like Chain of Thought for
          even better results. For example: &ldquo;As an expert, walk me through
          your reasoning step by step.&rdquo;
        </Callout>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Be Specific
        </h3>
        <p>
          Generic roles like &ldquo;expert&rdquo; are less effective than
          specific ones like &ldquo;cardiovascular surgeon with experience in
          minimally invasive procedures.&rdquo;
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Match Role to Task
        </h3>
        <p>
          Choose a role that naturally fits the task. A marketing expert role
          would not be ideal for explaining quantum physics, even if you specify
          it.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Include Behavioral Traits
        </h3>
        <p>
          Adding personality traits like &ldquo;patient,&rdquo;
          &ldquo;thorough,&rdquo; or &ldquo;skeptical&rdquo; helps shape how the
          AI approaches the task, not just what it knows.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          Set Appropriate Boundaries
        </h3>
        <p>
          For sensitive topics (medical, legal, financial), include reminders
          about professional consultation to ensure responsible responses.
        </p>

        <Callout type="warning" title="Important Note">
          Role prompting does not actually make the AI a real expert. It
          influences the style and framing of responses but does not guarantee
          accuracy. Always verify important information from authoritative
          sources.
        </Callout>
      </Section>

      <Section id="references" title="References">
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            Reynolds & McDonell (2021) - Prompt Programming for Large Language
            Models
          </li>
          <li>
            Zheng et al. (2023) - Take a Step Back: Evoking Reasoning via
            Abstraction
          </li>
          <li>OpenAI Best Practices for Prompt Engineering</li>
        </ul>
      </Section>
    </ArticleLayout>
  );
}
