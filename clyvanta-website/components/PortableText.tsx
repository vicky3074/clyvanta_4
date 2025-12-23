import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-white mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-white mb-5 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold text-white mb-4 mt-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold text-white mb-3 mt-5">{children}</h4>,
    normal: ({ children }) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 italic text-gray-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-400 hover:text-orange-300 underline"
      >
        {children}
      </a>
    ),
  },
}

export default function PortableText({ value }: { value: any }) {
  return <PortableTextReact value={value} components={components} />
}
