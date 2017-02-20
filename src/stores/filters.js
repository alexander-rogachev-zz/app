import { observable, action } from 'mobx'
import axios from 'axios'

class Filters {

    /*id:integer
     publishDate:string
     jobName:string
     companyName:string
     companyLogo:string
     isPublished:boolean
     locationName:string
     daysLeft:integer*/

    @observable items = [];

    async fetchData() {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        let {data} = await axios.get(`http://192.168.0.178:8090/v1/filter/locations`, config);
        console.log(data);
        data.length > 0 ? this.setData(data) : this.setSingle(data)
    }

    @action setData(data) {
        this.items = data
    }

    @action setSingle(data) {
        this.item = data
    }

    @action clearItems() {
        this.items = [];
        this.item = {}
    }
}

export default new Filters();