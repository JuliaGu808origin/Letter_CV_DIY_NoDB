import React from 'react';
import {previewLetterAction, cancelLetterAction} from '../reactRedux/actions';
import {connect} from 'react-redux';

class LetterCreateRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", context: "" }
    }

    componentDidMount() {
      if(this.props.previewLetter != null){
              const title = this.props.previewLetter.title;
              const context = this.props.previewLetter.context;
              this.setState({ title, context });
            }else{
                const title = this.props.letter.title;
                const context = this.props.letter.context;
                this.setState({ title, context });

      }
    }

    showPreview(){
        this.props.previewLetterAction(this.state);
        this.props.history.push('/PreviewLetter')
    }

    cancel(){
         this.props.cancelLetterAction();
        this.props.history.push('/')
    }

    handleChange = async (event) => {
        const value = event.target.value;
        const name = event.target.name;

        if(name === "title") this.setState({title: value});
        if(name === "context") this.setState({context: value});
      }
    render() {
        return (
            <div className="ui container">
                <div className="ui form">
                    <div className="field">
                        <label>Title</label>
                        <textarea rows="2" id="letterTitle" name="title"
                        defaultValue={this.state.title} 
                        onChange={this.handleChange} ></textarea>
                    </div>
                    <div className="field">
                        <label>Text</label>
                        <textarea style={{ minHeight: 300 }} id="letterText" name="context" 
                        defaultValue={this.state.context} 
                        onChange={this.handleChange} ></textarea>
                    </div>
                </div>
                    <div>
                        <button className="ui primary button" onClick={() => this.showPreview()}>Preview</button>
                        <button className="ui button" onClick={() => this.cancel()}>Cancel</button>
                    </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        letter: state.letter, 
        previewLetter: state.previewLetter, 
    };
};

export default connect(mapStateToProps, {previewLetterAction, cancelLetterAction})(LetterCreateRedux);

