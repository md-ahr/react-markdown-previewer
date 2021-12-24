const Editor = ({ markup, editorExpand, handleChange }) => {
  	return (
		<>
			{!markup.isPreviewExpand && <div className={`card editor w-50 mx-auto ${markup.isEditorExpand ? 'full' : ''}`}>
				<div className="card-header d-flex justify-content-between align-items-center">
					<div className="card-title fw-bold mb-0">
						<i className="fab fa-free-code-camp"></i> Editor
					</div>
					<div className="mb-0" onClick={editorExpand}>
						<i className={`fas ${markup.isEditorExpand ? 'fa-expand-alt' : 'fa-arrows-alt'}`}></i>
					</div>
				</div>
				<div className="card-body">
					<textarea name="editor" rows="8" id="editor" value={markup.text} onChange={handleChange}></textarea>
				</div>
			</div>}
		</>
  	);
}

export default Editor;
