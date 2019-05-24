import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : string[] = [];

  public add = (message:string):void => {
    this.messages.push(message);
  }

  constructor() { }

  clear = () : void =>  {
    this.messages = [];
  }
}
