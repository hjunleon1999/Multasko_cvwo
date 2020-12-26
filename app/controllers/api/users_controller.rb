class Api::UsersController < ApiController
    #skip_before_action :verify_authenticity_token
    def secret_key
        "anything" #a string of your choosing
    end
    
    def encode(payload)
        puts payload
        JWT.encode(payload, secret_key, 'HS256')
    end

    def decode(token)
        puts token
        decoded = JWT.decode(token, "anything", true, {algorithm: 'HS256'})[0]
        puts decoded
        return decoded
    end

    def login
        puts "params"
        puts params[:email]
        users = User.all
        puts users
        user = User.find_by(email: params[:email])

        puts user.password_digest
        if user.password_digest.nil?
            puts "NIL"
        end
        #puts user.password_digest.empty?
        if user && !user.password_digest.nil? && user.authenticate(params[:password])
            payload = {user_id: user.id}
            token = encode(payload)
            render :json => {user: user, token: token}
        else 
            render json: {error: "User not found"}
        end
    end

    def signup 
        puts login_params
        user = User.create(login_params)
        if user.valid?
            payload = {user_id: user.id}
            token = encode(payload)
            puts token
            render json: {user: user, jwt: token}
        else
            render json: {errors: user.errors.full_messages}, status: :not_acceptable
        end
    end

    

    def token_authenticate
        token = request.headers["Authenticate"]
        puts token
        user = User.find(decode(token)["user_id"])

        render json: user

    end

    private 
        def login_params
            params.permit(:user_name, :password, :email)
        end

        def user_params
            params.require(:user).permit(:user_name, :email, :password, :password_confirmation)
        end

end
