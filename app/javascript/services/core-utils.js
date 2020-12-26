export function setUser(user){
    console.log(user)
}

export class base36{
    ALPHABET = "abcdefghijklmnopqrstuvexyz1234567890"
    R_ALPHABET = {}
    _BASE = this.ALPHABET.length
    constructor(){
        for(let i = 0; i < this._BASE; i += 1){
            this.R_ALPHABET[this.ALPHABET[i]] = i;
        }
    }

    base36encode(base10num){
        let num= base10num
        let r = []
        while (num > 0){
            num = Math.floor(num/this._BASE)
            let rem = num%this._BASE
            r.push(this.ALPHABET[rem])
        }
        return r.join("")
    }

    base36decode(str){
        let r = 0
        let n = str.length
        let idx = str.length - 1
        while (idx != -1){
            r += this.R_ALPHABET[str[idx]] * (this._BASE ** (n - idx - 1))
            idx -= 1
        }
        return r;
    }   
}



export function handleInputChange(event) {
    const target = event.target;
    //console.log(target)
    const dataAttrs = target.dataset
    if ("id" in dataAttrs){
      const value = target.value//target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name
      this.setState({
        [name]: value
      });
    }
  }