class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :soups
  has_many :messages
  has_many :favorites

  validates :name, presence: true

  def author?(soup)
    self == soup.user ? true : false
  end
end
