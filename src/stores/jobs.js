import { observable, action } from 'mobx'
import axios from 'axios'

class Jobs {

    /*id:integer
     publishDate:string
     jobName:string
     companyName:string
     companyLogo:string
     isPublished:boolean
     locationName:string
     daysLeft:integer*/

    @observable items = [
        {id: 1, publishDate: "2016-01-29", jobName: "job 1", companyName: "Company 1", companyLogo: "company logo",
            isPublished: true, locationName: "location 1", daysLeft: 5},
        {id: 2, publishDate: "2016-01-29", jobName: "job 2", companyName: "Company 2", companyLogo: "company logo",
            isPublished: true, locationName: "location 2", daysLeft: 5},
        {id: 3, publishDate: "2016-01-29", jobName: "job 3", companyName: "Company 3", companyLogo: "company logo",
            isPublished: true, locationName: "location 3", daysLeft: 5},
    ];

    async fetchData(pathname, id) {
        let {data} = await axios.get(`https://jsonplaceholder.typicode.com${pathname}`);
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

export default new Jobs();