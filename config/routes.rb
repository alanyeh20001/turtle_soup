Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions:      'users/sessions',
    passwords:     'users/passwords'
  }

  resources :soups do
    get :rules, on: :collection
    get :online_counts, on: :collection
  end
  resources :clues, only: :create

  get 'my_soups', to: 'soups#owned'
end
