import alt from './alt';
import actions from './actions';

class Store {
    constructor(){
        this.state = {
            info: {
                name: '',
                age: '',
                career: ''
            },
            about: '',
            contact: {
                address: '',
                phone: '',
                email: ''
            }
        }
    }
}

export default alt.createStore(Store, 'Store')