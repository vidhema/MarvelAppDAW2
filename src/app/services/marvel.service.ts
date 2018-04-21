import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Keys} from "../../assets/data/keys";
import 'rxjs/Rx';

@Injectable()
export class MarvelService {

    http:any;
    apikey:String;

    constructor(http:HttpClient, private Keys: Keys,){
        this.http=http;
        this.apikey = this.Keys.getApiKey();
    }
    getComics(){
        return this.http.get('https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-issueNumber&limit=10&offset=0&apikey='+this.apikey);
    }
    getHeroes(){
        return this.http.get('https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&apikey='+this.apikey);
    }
    getPageHeros(offset){
        return this.http.get('https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&offset='+offset+'&apikey='+this.apikey);
    }
    getPageComics(offset){
        return this.http.get('https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-issueNumber&limit=10&offset='+offset+'&apikey='+this.apikey)
    }
}
