import React, { Component } from "react";
import CloudUploadOutlined from "@material-ui/icons/CloudUploadOutlined";
import { Upload } from "antd";
import "./AntStylesheet.css";

import Warning from "../Warning";

const Dragger = Upload.Dragger;

class SelectDocument extends Component {
  state = {
    fileList: [],

    //Somente arquivos .PDF são aceitos
    fileType: true,

    //Warning
    warningMessage: "",
    openWarning: false,
    typeWarning: "info",
  };

  handleWarning = (message, type) => {
    this.setState({
      openWarning: true,
      warningMessage: message,
      typeWarning: type,
    });
  };

  onCloseWarning = () => {
    this.setState({
      openWarning: false,
    });
  };

  async handleChange(info) {
    if (this.state.fileType) {
      let fileListSlice = [...info.fileList];
      fileListSlice = fileListSlice.slice(-this.props.filesLimit);

      fileListSlice = fileListSlice.map((file) => {
        return file;
      });

      await this.setState({
        fileList: fileListSlice,
      });

      let fileListFinal = [];

      this.state.fileList.map((file) => {
        fileListFinal.push(file.originFileObj);
        return "";
      });
      this.props.onChange(fileListFinal);
    }
  }

  beforeUpload = (file) => {
    // const isPdf = file.type === "application/excel";
    // if (isPdf) {
    //   this.setState({
    //     fileType: true,
    //   });
    // } else {
    //   this.handleWarning("Somente arquivos de pdf são aceitos", "error");
    // }
    return true;
  };

  actionRequest({ file, onSuccess }) {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  }

  render() {
    const { title, subTitle, name } = this.props;

    return (
      <div>
        <Dragger
          accept=".pdf"
          name={name}
          multiple={true}
          customRequest={this.actionRequest}
          onChange={(info) => this.handleChange(info)}
          showRemoveIcon={true}
          fileList={this.state.fileList}
          style={{ height: 180, width: 250 }}
        >
          <center>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined
                color="primary"
                style={{ fontSize: 50 }}
              />
            </p>
            <p className="ant-upload-text" style={{ marginTop: "-8px" }}>
              {title}
            </p>
            <p className="ant-upload-hint" style={{ margin: "auto 4px" }}>
              {subTitle}
            </p>
          </center>
        </Dragger>

        <Warning
          message={this.state.warningMessage}
          open={this.state.openWarning}
          typeMessage={this.state.typeWarning}
          onClose={this.onCloseWarning}
        />
      </div>
    );
  }
}
export default SelectDocument;
