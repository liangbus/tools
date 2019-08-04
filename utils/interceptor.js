import { ERROR_CODE_TOKEN_EXPIRED } from './normalization'
export default function httpRequest(url, options) {
 const _promise = new Promise((resolve, reject) => {
   const _xhr = new XMLHttpRequest()

   const httpStateHanler = function(res) {
    /**
     * 0	UNSENT, 1	OPENED, 2	HEADERS_RECEIVED, 3	LOADING, 4	DONE
     */
    if(this.readyState !== 4) {
      return false
    }
    if(this.status === 200) {
      resolve(this.response)
    } else {
      reject(new Error(this.statusText))
    }
   }

   _xhr.open('GET', url)
   _xhr.onreadystatechange = httpStateHanler
   _xhr.responseType = 'JSON'
   _xhr.setRequestHeader('Accept', 'application/json')
   _xhr.send(options)
 })
}
