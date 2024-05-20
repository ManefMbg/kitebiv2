import Search from './Search';
import {Component} from 'react';

class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchField: ''
    }
  }

  render(){
  return (
    <div>
        <Search/>
    </div>
  );
}
}

export default Books