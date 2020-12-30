

def url_generator
    url = params[:url]
    domain = ""
    path = params[:path]
    
end

def url_parser
    url = params[:url]
end
class Base36
    @ALPHABET = "abcdefghijklmnopqrstuvexyz1234567890"
    @R_ALPHABET = {}
    @_BASE = @ALPHABET.length
    def initialize
        for i in 0...@_BASE
            @R_ALPHABET[@ALPHABET[i]] = i;
        end
    end

    def base36encode(base10num){
        base10num = params[:base10num]
        num= base10num
        r = []
        while num > 0 do
            num = Math.floor(num/@_BASE)
            rem = num%this._BASE
            r.append(@ALPHABET[rem])
        end
        return r.join("")
    end

    def base36decode
        r = 0
        str = params[:str]
        n = str.length
        idx = str.length - 1
        while idx != -1 do
            r += @R_ALPHABET[str[idx]] * (@_BASE ** (n - idx - 1))
            idx -= 1
        end
        return r;
    end
}