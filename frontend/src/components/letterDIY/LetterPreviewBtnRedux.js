import React from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import LetterPreviewContextRedux from './LetterPreviewContextRedux';
import {connect} from 'react-redux';

class LetterPreviewBtnRedux extends React.Component {

    back(){
        this.props.history.push('/CreateLetter');
    }

    render() {
        return (
            <div>
                {/* <button className="ui primary basic button" onClick={() => alert("save")}>Save</button>
                <button className="ui secondary basic button" onClick={() => alert("save as")}>Save As</button> */}
                <span>
                    <ReactToPrint content={() => this.componentRef}>
                        <PrintContextConsumer>
                            {({ handlePrint }) => (
                            <button className="ui negative basic button"onClick={handlePrint}>Print</button>
                            )}
                        </PrintContextConsumer>
                    </ReactToPrint>
                    <div style={{display: "none"}} >
                    <LetterPreviewContextRedux  ref={el => (this.componentRef = el)} style={{ pageBreakAfter: 'always' }} />
                    </div>
                </span>
                <button className="ui yellow basic button" onClick={() => this.back()}>Back</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        previewLetter: state.previewLetter
    };
};

export default connect(mapStateToProps)(LetterPreviewBtnRedux);
