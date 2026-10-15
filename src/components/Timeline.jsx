import FadeIn from "./FadeIn";

function EntryHeading({ entry }) {
  return (
    <>
      <span className="entry-title">{entry.title}</span>
      <span className="entry-date">{entry.date}</span>
      <span className="entry-subtitle">{entry.subtitle}</span>
    </>
  );
}

export default function Timeline({ id, title, entries }) {
  return (
    <FadeIn
      as="section"
      className="section"
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="section-heading">
        <span className="section-number">03</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <ul className="timeline">
        {entries.map((entry) => (
          <li
            className="timeline-entry"
            key={`${entry.title}-${entry.subtitle}`}
          >
            {entry.logo && (
              <img
                className="entry-logo"
                src={entry.logo}
                alt=""
                width="48"
                height="48"
                loading="lazy"
              />
            )}
            {entry.description ? (
              <details className="entry-details" open>
                <summary className="entry-heading">
                  <EntryHeading entry={entry} />
                </summary>
                {Array.isArray(entry.description) ? (
                  <ul className="entry-bullets muted">
                    {entry.description.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="entry-description muted">{entry.description}</p>
                )}
              </details>
            ) : (
              <a
                className="entry-heading"
                href={entry.href || "#"}
                target={entry.href && entry.href !== "#" ? "_blank" : undefined}
                rel={
                  entry.href && entry.href !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <EntryHeading entry={entry} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
