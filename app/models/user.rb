class User < ApplicationRecord
  has_secure_password
validates :user_name, presence: true
validates :user_name, uniqueness: true
validates :user_name, length: { minimum: 4 }
validates :email, presence: true
validates :email, uniqueness: true
validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
