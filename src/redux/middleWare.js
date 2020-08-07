import { CREATE_POST } from "./types"
import { showAlert } from "./actions"

export function forbiddenWordsMiddleware({dispatch}){

    const forbidden = ['fuck', 'spam', 'php']
    return function (next){
        return function(action){
            if(action.type===CREATE_POST){
                const found = forbidden.filter(w=>action.payload.title.includes(w))
                if(found.length){
                    return dispatch(showAlert('Вы спамер!!!'))
                }
            }
            return next(action)
        }
    }
}