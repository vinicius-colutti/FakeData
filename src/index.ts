import axios from "axios";

export class FakeDataRequester{
    
    baseUrl: string = "https://fakerapi.it/api/v1/"

    constructor(){
    }

    async getFakeImages(width: number = 130): Promise<any>{        
        var request = axios.get(this.baseUrl+"images?_width="+width)
        return  await request
                .then(result => { console.log(result); return result.data; })
                .catch(error => { console.error(error); throw error; });
    }

    async getFakePersons(locale: string = "en_US"){
        var request = axios.get(this.baseUrl+"persons?_locale="+locale)
        return  await request
                .then(result => { console.log(result); return result.data; })
                .catch(error => { console.error(error); throw error; });
    }

    async getFakeCompanies(quantity: number = 10){
        var request = axios.get(this.baseUrl+"companies?_quantity="+quantity)
        return  await request
                .then(result => { console.log(result); return result.data; })
                .catch(error => { console.error(error); throw error; });
    }
}
