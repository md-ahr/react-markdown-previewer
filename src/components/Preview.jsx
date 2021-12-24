import { marked, Renderer } from 'marked';

const Preview = ({ markup, previewExpand }) => {

	const renderer = new Renderer();

	renderer.link = function (href, title, text) {
	  return `<a target="_blank" href="${href}">${text}</a>`;
	};

	marked.setOptions({ breaks: true });

  	return (
		<>
			{!markup.isEditorExpand && <div className={`card preview w-75 mx-auto mt-4 ${markup.isPreviewExpand ? 'full' : ''}`}>
				<div className="card-header d-flex justify-content-between align-items-center">
					<div className="card-title fw-bold mb-0">
						<i className="fab fa-free-code-camp"></i> Preview
					</div>
					<div className="mb-0" onClick={previewExpand}>
					<i className={`fas ${markup.isPreviewExpand ? 'fa-expand-alt' : 'fa-arrows-alt'}`}></i>
					</div>
				</div>
				<div className="card-body">
					<div id="preview" className="preview-area" dangerouslySetInnerHTML={{__html: marked(markup.text, { renderer: renderer })}}></div>
				</div>
			</div>}
		</>
  	);
}

export default Preview;
