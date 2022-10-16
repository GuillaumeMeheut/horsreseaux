import showdown from 'showdown'

export default function Content({ content }) {
  const converter = new showdown.Converter(),
    newText = content,
    html = converter.makeHtml(newText)
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
