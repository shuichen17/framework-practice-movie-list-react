class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBox: ''
    }
  }

  getQuery(event) {
    // console.log(event.target.value, 'getquery val')
    this.setState({
      searchBox: event.target.value
    }, function() {
      this.props.searchFunc(this.state.searchBox);
    // console.log(this.state.searchBox, 'searchbox state')
    });
  }

  render() {
    return (
      <div className="search">
        <form>
          <input className="searchBox" type="text" placeholder="Search for a movie" onChange={this.getQuery.bind(this)}/>
        </form>
      </div>
    );
  }
};

Search.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.Search = Search;
