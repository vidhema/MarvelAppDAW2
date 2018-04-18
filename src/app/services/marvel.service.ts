import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MarvelService {

    http:any;
    baseUrl:String;

    constructor(http:Http){
      this.http=http;
      this.baseUrl='https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&limit=30&offset=20&apikey=2cba093a456699c03567b3c1f775547f';
      console.log("hola")
    }



}


