require '../services/core_utils.rb'

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
        #users = User.all
        #puts users
        user = User.find_by(email: params[:email])

        puts user.password_digest
        if user.password_digest.nil?
            puts "NIL"
        end
        #puts user.password_digest.empty?
        if user && !user.password_digest.nil? && user.authenticate(params[:password])
            payload = {user_id: user.id}
            token = encode(payload)
            UserMailer.with(user: user).welcome_email.deliver_now

            #format.html { redirect_to(user, notice: 'User was successfully created.') }
            #format.json { render json: user, status: :created, location: user }
            render :json => {user: user, token: token}
        else 
            render json: {error: "User not found"}
        end
    end

    def signup 
        puts login_params
        user = User.create(login_params)
        if user.save && user.valid?
            payload = {user_id: user.id}
            token = encode(payload)
            # Tell the UserMailer to send a welcome email after save
            
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

    def reset_password
        user = User.find_by(email: user_params[:email])
        if user

        else 
            render json: {error: "User not found"}
        end
    end
    private 
        def login_params
            params.permit(:user_name, :password, :email)
        end

        def user_params
            params.require(:user).permit(:user_name, :email, :password, :password_confirmation)
        end

end
