import "./FileSelector.styles.css";

const FileSelector = (props) => {
  const { text, setFiles } = props;
  return (
    <div
      className="file-selector"
      onClick={() => document.getElementById("file-sector-input").click()}
    >
      <input
        type="file"
        accept="image/*"
        multiple
        hidden
        className="file-selector-input"
        id="file-sector-input"
        onChange={({ target: { files } }) => {
          files && setFiles(Array.from(files));
        }}
      />
      <span className="file-selector-text">{text}</span>
    </div>
  );
};

export default FileSelector;
