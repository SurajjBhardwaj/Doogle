const features = [
  {
    name: "One-to-One Video Calls",
    description:
      "Experience real-time, face-to-face communication with one-to-one video calls.",
  },
  {
    name: "Live Chat Functionality",
    description:
      " live chat feature ensures that you can engage in quick, real-time conversations with other developers.",
  },
  {
    name: "Screen Sharing Capabilities",
    description:
      "Elevate your collaborative coding sessions with screen sharing",
  },
  {
    name: "Resource Sharing",
    description:
      "From code snippets to documentation, our platform facilitates the exchange of knowledge in a structured and organized manner",
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-black text-purple-100 py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Coding Elevated
            </p>
            <p className="mt-6 text-lg leading-8">
              Explore Doogle's Robust Features for Seamless Collaboration and
              Effective Debugging
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">{feature.name}</dt>
                  <br />
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
