class Api::AuthController < ApiController
    def secret_key
        "anything" #a string of your choosing
    end
    
    def encode(payload)
        JWT.encode(payload, secret_key, 'HS256')
    end

    def decode(token)
        JWT.decode(token, "anything", true, {algorithm: 'HS256'})[0]
     end

    def login
        user = User.find_by(email: params[:email])

        if user && user.authenticate(params[:password])
            payload = {user_id: user.id}
            token = encode(payload)
            render :json => {user: user, token: token}
        else 
            render json: {error: "User not found"}
        end
    end

    def token_authenticate
        token = request.headers["Authenticate"]
        user = User.find(decode(token)["user_id"])

        render json: user

    end

    

end
