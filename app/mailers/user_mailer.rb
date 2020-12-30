class UserMailer < ApplicationMailer
  #default from: 'notifications@example.com'

  def welcome_email
    @user = params[:user]
    @url  = 'http://example.com/login'
    mail(to: @user.email,
         subject: 'Welcome to My Awesome Site') do |format|
      format.html { render 'forgot_password' }
      format.text { render plain: 'forgot_password' }
    end
  end
end

