import React from "react";
import "../../pages/Contact/Index.css";

class ButtonInputForm extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: []
    };
  }

  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    this.setState({ files: [...this.state.files, ...filesArr] });
  }

  removeFile(f) {
    this.setState({ files: this.state.files.filter((x) => x !== f) });
  }

  render() {
    return (
      <div className="box-inputs">
        <div className="inputs">
          <label className="container-input-file">
            Faça upload do seu curriculo
          </label>
          <div className="input-form fullwidth form-input">
            {this.state.files.map((x) => (
              <div
                className="file-preview-form"
                onClick={this.removeFile.bind(this, x)}
              >
                <p>{x.name}</p>
              </div>
            ))}
            <label for="inputFile" className="btn-form">
              anexar
            </label>

            <div>
              <input
                id="inputFile"
                type="file"
                name="file"
                placeholder="Arraste seu curriculo"
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ButtonInputForm;
