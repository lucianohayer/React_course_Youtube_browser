import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';



class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    try {
      const response = await youtube.get('/search', {
        params: { q: term }
      });
      this.setState({ videos: response.data && response.data.items ? response.data.items : [] });

    } catch (err) {
      console.error('Error fetching yuotube videos ...')
      this.setState({ videos: [] });
    }
  };
  
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={ this.onTermSubmit } />
        <VideoList videos={ this.state.videos }/>
      </div>
    );
  };
}

export default App;