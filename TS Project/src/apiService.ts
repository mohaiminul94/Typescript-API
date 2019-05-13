import * as request from 'request';
import { User } from './User';

export class apiService {
    
    getUserInfo(userName: string) {
        let options: any = {
            headers: {
                'User-Agent' : 'request'
            },
            json: true
        }
        request.get('https://api.github.com/users/'+ userName , options,  (error:any, response:any, body:any) => {
            let user= new User(body);
            console.log(user);
        })
    }

    getRepos() {

    }

} 