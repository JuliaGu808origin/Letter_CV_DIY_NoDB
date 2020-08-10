import React from 'react';
import LetterPreviewContextRedux from './LetterPreviewContextRedux';
import LetterPreviewBtnRedux from './LetterPreviewBtnRedux';

class PreviewLetterRedux extends React.Component {
    render() {
        return (
            <div className="ui container">
                <LetterPreviewContextRedux />
                <LetterPreviewBtnRedux history={this.props.history} />
            </div>
        );
    }
}

export default PreviewLetterRedux;
