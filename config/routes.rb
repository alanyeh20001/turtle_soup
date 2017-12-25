Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :users

  resources :soups do
    get :rules, on: :collection
  end
  resources :clues, only: :create

  get 'my_soups', to: 'soups#owned'
end
