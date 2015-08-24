import alt from './alt';
import actions from './actions';

class HelloStore {
    constructor(){
        this.state = {
            name: ''
        }
    }
}

export default alt.createStore(HelloStore, 'HelloStore')