interface SectionHeadingProps {
  title: string
  script?: string
  description?: string
}

export default function SectionHeading({
  title,
  script,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {script && <div className="section-heading__script">{script}</div>}
      {description && <p>{description}</p>}
    </div>
  )
}
