import "./SectionTitle.css";

function SectionTitle({title}) {
  return (
    <div className="sectionTitle">
      <h2 className="sectionTitle__text">{title}</h2>
    </div>
  );
}

export default SectionTitle;
