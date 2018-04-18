import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';

@Injectable()
export class MarvelService {

    http:any;
    baseUrl:String;
    Apikey:String;

    constructor(http:HttpClient){
        this.http=http;
        this.baseUrl='https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-issueNumber&limit=10&offset=0&apikey=2cba093a456699c03567b3c1f775547f';
    }
    getComics(){
        this.getApiKey()
            .then((response) => {
                response.subscribe(res => {
                    this.Apikey = res.marvelKey;
                })
            })
            .catch(error => console.log(error))
        return this.http.get(this.baseUrl);
    }

    getPage(offset){
        return this.http.get('https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-issueNumber&limit=10&offset='+offset+'&apikey='+this.Apikey)
    }
    async getApiKey() {
        return await this.http.get('assets/data/keys.json')

    }
}
