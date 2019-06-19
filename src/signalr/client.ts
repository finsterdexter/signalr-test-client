import { Url } from "url";
import * as signalR from "@aspnet/signalr"

class Client {
	url: Url;
	connection: signalR.HubConnection;
	constructor(url: Url) {
		this.url = url;
	}

	connect() {

	}
}