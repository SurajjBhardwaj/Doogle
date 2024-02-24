const features = [
  {
    name: "One-to-One Video Calls",
    description:
      "Experience real-time, face-to-face communication with one-to-one video calls.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
  },
  {
    name: "Live Chat Functionality",
    description:
      " live chat feature ensures that you can engage in quick, real-time conversations with other developers.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-messages-square"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
  },
  {
    name: "Screen Sharing Capabilities",
    description:
      "Elevate your collaborative coding sessions with screen sharing",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-screen-share"><path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="m17 8 5-5"/><path d="M17 3h5v5"/></svg>
  },
  {
    name: "Resource Sharing",
    description:
      "From code snippets to documentation, our platform facilitates the exchange of knowledge in a structured and organized manner",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-input"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M2 15h10"/><path d="m9 18 3-3-3-3"/></svg>
  },
];

export default function Feature() {
  return (
    <div aria-label="Features" className="overflow-hidden bg-black text-purple-100 px-10 py-24 sm:py-32">
      <p className="ml-5 text-3xl font-bold tracking-tight sm:text-4xl">
        Coding Elevated
      </p>
      <div className="max-w-7xl px-6 lg:px-8 grid-cols-2 lg:pr-8 lg:pt-4">
        <p className="mt-6 text-lg leading-8">
          Explore Doogle's Robust Features for Seamless Collaboration and
          Effective Debugging
        </p>
        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none grid grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              {feature.icon}
              <dt className="inline font-semibold">{feature.name}</dt>
              <br />
              <dd className="inline opacity-60">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
