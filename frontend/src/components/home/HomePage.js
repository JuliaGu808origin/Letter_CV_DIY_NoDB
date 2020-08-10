import React from 'react';

class HomePage extends React.Component {

    render(){
        return (
            <div className="ui container">
                <div className="ui inverted segment">
                    <button className="ui inverted orange button" onClick={() => this.props.history.push('/CreateLetter')}>Create Letter</button>
                </div>
            </div>
        );
    }
}

export default HomePage;