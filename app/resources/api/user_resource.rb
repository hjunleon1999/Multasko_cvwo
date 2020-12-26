class Api::UserResource < JSONAPI::Resource
  attributes :user_name, :email
end
