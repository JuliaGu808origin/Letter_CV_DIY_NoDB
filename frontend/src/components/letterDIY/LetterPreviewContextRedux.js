import React from 'react';
import {connect} from 'react-redux';
import  styleClass from './mystyle.module.css';

class LetterPreviewContextRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = { letterTitle: "", letterText: [] }
    }

    componentDidMount() {
      if(this.props.previewLetter != null){
          const letterTitle = this.props.previewLetter.title;
          const letterText = this.props.previewLetter.context;
          let temp = letterText.replace(/\n|\r\n/g, '<br/>');
          let tempArr = temp.split('<br/>');
          this.setState({ letterTitle, letterText: tempArr });
        }else{
            const letterTitle = this.props.letter.title;
            const letterText = this.props.letter.context;
            let temp = letterText.replace(/\n|\r\n/g, '<br/>');
            let tempArr = temp.split('<br/>');
            this.setState({ letterTitle, letterText: tempArr });
      }
    }

    showLine() {
        const lins = this.state.letterText.map((each, index) => (<p key={index} >{each} &nbsp;</p>));

        return lins;
    }

    render() {
        return (
            <div className={styleClass.contextSize} >
                <div className="ui form" id="letterPreview" style={{ minHeight: "1000px" }}>
                    <div className="field">
                        <h1 style={{ marginTop: "10px", textAlign: "center" }}>Redux: {this.state.letterTitle}</h1>
                    </div>
                    <div className="field">
                        {this.showLine()}
                    </div>
                </div>
                <div className="ui container" style={{ margin: "10px" }} >
                    <hr />
                <div className="ui grid">
                    <div className="seven wide column">&copy; Copyright Julia Gu 2020, All rights reserved</div>
                    <div className="nine wide column" style={{ textAlign: "right" }}>
                        Source (public repo): &nbsp;&nbsp; https://github.com/JuliaGu808origin/Letter_CV_DIY_NoDB
                        </div>
                </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        letter: state.letter,
        previewLetter: state.previewLetter
    };
};

export default connect(mapStateToProps, null, null,  { forwardRef: true })(LetterPreviewContextRedux);
