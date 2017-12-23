Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :users

  resources :soups
  resources :clues, only: :create
end
