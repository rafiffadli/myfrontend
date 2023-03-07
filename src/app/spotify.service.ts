import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQC01UYr4T5rGWLmAnPLWvOqO2CDRq9kJWgN5Ym2fumDGvTjhdVYIFatAr1zo8unsjFVgxOL3dlADdzL8qlE_Ihg1tiAYEDFWH7gvJr9PgQPRWIaBn_VIlnoglxH2Jdqc3kWCCP8MEC6j5ISbQKOu0wUHPnY2NQJmvaJ5NZM"
      );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) : any{
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
