import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MARVEL_PUBLIC_KEY} from "../../assets/data/keys";
import {MARVEL_PRIVATE_KEY} from "../../assets/data/keys";
import md5 from 'md5';
import 'rxjs/Rx';

@Injectable()
export class MarvelService {

    http:any;
    publickey:String;
    privateKey:String;
    timestamp:String;

    constructor(http:HttpClient){
        this.http=http;
        this.publickey = MARVEL_PUBLIC_KEY;
        this.privateKey = MARVEL_PRIVATE_KEY;
    }
    setTimestamp(){
        this.timestamp =  new Date().getTime().toString();
    }
    getHash(){
        this.setTimestamp();
        return md5(this.timestamp+''+this.privateKey+''+this.publickey);
    }
    getComics(){
        let result = this.getHash();
        return this.http.get('https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-issueNumber&limit=10&offset=0&ts='+this.timestamp+'&apikey='+this.publickey+'&hash='+result);
    }
    getHeroes(){
        let result = this.getHash();
        return this.http.get('https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&ts='+this.timestamp+'&apikey='+this.publickey+'&hash='+result);
    }
    getPageHeros(offset){
        let result = this.getHash();
        return this.http.get('https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=10&offset='+offset+'&ts='+this.timestamp+'&apikey='+this.publickey+'&hash='+result);
    }
    getPageComics(offset){
        let result = this.getHash();
        return this.http.get('https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-issueNumber&limit=10&offset='+offset+'&ts='+this.timestamp+'&apikey='+this.publickey+'&hash='+result);
    }
    getHeroesByComicID(id){
        let result = this.getHash();
        return this.http.get('https://gateway.marvel.com:443/v1/public/comics/'+id+'/characters?ts='+this.timestamp+'&apikey='+this.publickey+'&hash='+result);
    }
    getComicsByHeroID(id){
        let result = this.getHash();
        return this.http.get('https://gateway.marvel.com:443/v1/public/characters/'+id+'/comics?hasDigitalIssue=true&limit=10&ts='+this.timestamp+'&apikey='+this.publickey+'&hash='+result)
    }
    getPageComicsByHero(id,offset){
        let result = this.getHash();
        return this.http.get('https://gateway.marvel.com:443/v1/public/characters/'+id+'/comics?hasDigitalIssue=true&limit=10&offset='+offset+'&ts='+this.timestamp+'&apikey='+this.publickey+'&hash='+result)
    }
}
